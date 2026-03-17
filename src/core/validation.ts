import { getFieldValue } from "./dom";
import type { ValidationOptions, ValidationResult, WizardField } from "./types";

function parseBoolean(value: string): boolean | null {
    if (value === "true") {
        return true;
    }

    if (value === "false") {
        return false;
    }

    return null;
}

function isCheckableField(field: WizardField): field is HTMLInputElement {
    return field instanceof HTMLInputElement && (field.type === "checkbox" || field.type === "radio");
}

function isConditionalRequirementMet(field: WizardField, expectedValue: string): boolean {
    if (isCheckableField(field)) {
        const booleanValue = parseBoolean(expectedValue);
        if (booleanValue !== null) {
            return field.checked === booleanValue;
        }

        return field.checked && field.value === expectedValue;
    }

    return getFieldValue(field) === expectedValue;
}

export function validateField(field: WizardField, isRequired: boolean): boolean {
    if (!isRequired && !field.required) {
        return true;
    }

    if (isCheckableField(field)) {
        return field.checked;
    }

    if (typeof field.value === "string" && field.value.trim() === "") {
        return false;
    }

    return typeof field.checkValidity === "function" ? field.checkValidity() : true;
}

export function validateFields(
    wizardContent: Element,
    fields: WizardField[],
    options: ValidationOptions
): ValidationResult {
    let hasError = false;
    const invalidTargets: WizardField[] = [];

    fields.forEach((field) => {
        let isRequired = field.required || field.classList.contains("required");
        const isOnActiveRequired = field.classList.contains("on-active-required");
        const requireIf = field.getAttribute("data-require-if");

        if (requireIf) {
            const [dependencyId, expectedValue = ""] = requireIf.split(":");
            const dependencyField = wizardContent.querySelector<WizardField>(`#${dependencyId}`);

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
