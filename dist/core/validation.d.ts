import type { ValidationOptions, ValidationResult, WizardField } from "./types";
export declare function validateField(field: WizardField, isRequired: boolean): boolean;
export declare function validateFields(wizardContent: Element, fields: WizardField[], options: ValidationOptions): ValidationResult;
