import type { WizardField } from "./types";

export function selectorToClassName(selector?: string | null): string | null {
    if (typeof selector !== "string") {
        return null;
    }

    const trimmed = selector.trim();
    if (!trimmed.startsWith(".") || /[\s>+~:#[]/.test(trimmed.slice(1))) {
        return null;
    }

    return trimmed.slice(1);
}

export function addClassFromSelector(element: Element, selector?: string | null): void {
    const className = selectorToClassName(selector);
    if (className) {
        element.classList.add(className);
    }
}

export function addClassNames(element: Element, classNames: Array<string | null | undefined>): void {
    classNames.filter(Boolean).forEach((className) => {
        element.classList.add(className as string);
    });
}

export function getStepSelector(stepSelector: string, index: number): string {
    return `${stepSelector}[data-wz-step="${index}"]`;
}

export function clampStep(step: number, totalSteps: number): number {
    const safeStep = Number.isFinite(step) ? step : 0;
    if (totalSteps <= 0) {
        return 0;
    }

    return Math.min(Math.max(safeStep, 0), totalSteps - 1);
}

export function getButtonStyleClasses(selector: string): string[] {
    return selector
        .replace(/\./g, " ")
        .split(" ")
        .map((token) => token.trim())
        .filter(Boolean);
}

export function toggleActiveStep(steps: Element[], activeIndex: number): void {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === activeIndex);
    });
}

export function getFieldValue(field: WizardField): string | boolean {
    if (field instanceof HTMLInputElement && (field.type === "checkbox" || field.type === "radio")) {
        return field.checked;
    }

    return field.value;
}
