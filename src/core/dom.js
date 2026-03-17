export function selectorToClassName(selector) {
    if (typeof selector !== "string") {
        return null;
    }

    const trimmed = selector.trim();
    if (!trimmed.startsWith(".") || /[\s>+~:#[]/.test(trimmed.slice(1))) {
        return null;
    }

    return trimmed.slice(1);
}

export function addClassFromSelector(element, selector) {
    const className = selectorToClassName(selector);
    if (className) {
        element.classList.add(className);
    }
}

export function addClassNames(element, classNames) {
    classNames.filter(Boolean).forEach((className) => {
        element.classList.add(className);
    });
}

export function getStepSelector(stepSelector, index) {
    return `${stepSelector}[data-wz-step="${index}"]`;
}

export function clampStep(step, totalSteps) {
    const safeStep = Number.isFinite(step) ? step : 0;
    if (totalSteps <= 0) {
        return 0;
    }

    return Math.min(Math.max(safeStep, 0), totalSteps - 1);
}

export function getButtonStyleClasses(selector) {
    return selector
        .replace(/\./g, " ")
        .split(" ")
        .map((token) => token.trim())
        .filter(Boolean);
}

export function toggleActiveStep(steps, activeIndex) {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === activeIndex);
    });
}

export function getFieldValue(field) {
    if (field.type === "checkbox" || field.type === "radio") {
        return field.checked;
    }

    return field.value;
}
