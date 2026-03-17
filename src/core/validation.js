import { getFieldValue } from "@core/dom.js";

function parseBoolean(value) {
    if (value === "true") {
        return true;
    }

    if (value === "false") {
        return false;
    }

    return null;
}

function isConditionalRequirementMet(field, expectedValue) {
    if (field.type === "checkbox" || field.type === "radio") {
        const booleanValue = parseBoolean(expectedValue);
        if (booleanValue !== null) {
            return field.checked === booleanValue;
        }

        return field.checked && field.value === expectedValue;
    }

    return getFieldValue(field) === expectedValue;
}

export function validateField(field, isRequired) {
    if (!isRequired && !field.required) {
        return true;
    }

    if (field.type === "checkbox" || field.type === "radio") {
        return field.checked;
    }

    if (typeof field.value === "string" && field.value.trim() === "") {
        return false;
    }

    return typeof field.checkValidity === "function" ? field.checkValidity() : true;
}

export function validateFields(wizardContent, fields, options) {
    let hasError = false;
    const invalidTargets = [];

    fields.forEach((field) => {
        let isRequired = field.required || field.classList.contains("required");
        const isOnActiveRequired = field.classList.contains("on-active-required");
        const requireIf = field.getAttribute("data-require-if");

        if (requireIf) {
            const [dependencyId, expectedValue = ""] = requireIf.split(":");
            const dependencyField = wizardContent.querySelector(`#${dependencyId}`);

            if (dependencyField && isConditionalRequirementMet(dependencyField, expectedValue)) {
                isRequired = true;
            }
        }

        const isValid = validateField(field, isRequired || isOnActiveRequired);
        if (!isValid) {
            hasError = true;
            invalidTargets.push(field);

            if (options.highlight) {
                options.highlightElement(field, options.highlight_type.error);
            }
        }
    });

    return {
        error: hasError,
        target: invalidTargets
    };
}
