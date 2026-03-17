import type { WizardField } from "./types";
export declare function selectorToClassName(selector?: string | null): string | null;
export declare function addClassFromSelector(element: Element, selector?: string | null): void;
export declare function addClassNames(element: Element, classNames: Array<string | null | undefined>): void;
export declare function getStepSelector(stepSelector: string, index: number): string;
export declare function clampStep(step: number, totalSteps: number): number;
export declare function getButtonStyleClasses(selector: string): string[];
export declare function toggleActiveStep(steps: Element[], activeIndex: number): void;
export declare function getFieldValue(field: WizardField): string | boolean;
