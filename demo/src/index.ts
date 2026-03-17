import Wizard, {
    type WizardPendingDetail,
    type WizardPendingDoneDetail,
    type WizardPendingErrorDetail,
    type WizardErrorDetail,
    type WizardReadyDetail,
    type WizardUpdateDetail
} from "@adrii_/wizard-js";

const wzClass = ".wizard";
const asyncStatus = document.getElementById("async_status");
const stepPayload = document.getElementById("step_payload");

const wizardRoot = document.querySelector<HTMLElement>(wzClass);
const resetButton = document.getElementById("btn_reset");
const lockButton = document.getElementById("btn_lock");
const unlockButton = document.getElementById("btn_unlock");
const appendButton = document.getElementById("btn_append");
const formWizard = document.getElementById("formWizard");

if (
    !wizardRoot
    || !resetButton
    || !lockButton
    || !unlockButton
    || !appendButton
    || !asyncStatus
    || !stepPayload
    || !(formWizard instanceof HTMLFormElement)
) {
    throw new Error("Demo markup is incomplete.");
}

document.addEventListener("wz.ready", (event) => {
    const readyEvent = event as CustomEvent<WizardReadyDetail>;

    console.log("My body is ready");
    console.log("↓ Target ↓");
    console.log(readyEvent.detail.target);
    console.log("↓ Elem ↓");
    console.log(readyEvent.detail.elem);
});

const wizard = new Wizard({
    wz_class: ".wizard",
    wz_nav_style: "dots",
    wz_button_style: ".btn .btn-sm .mx-3",
    wz_ori: "vertical",
    buttons: true,
    navigation: "all",
    finish: "Save iie!",
    bubbles: true,
    before_step_change: async ({ currentStep, currentStepElement, isAsyncStep }) => {
        if (!isAsyncStep) {
            return true;
        }

        const fields = serializeStepFields(currentStepElement);
        const stepId = currentStepElement?.getAttribute("data-id") ?? `step-${currentStep + 1}`;

        stepPayload.className = "bg-light border rounded p-3 small";
        stepPayload.textContent = JSON.stringify({
            stepId,
            fields
        }, null, 2);

        asyncStatus.className = "alert alert-info py-2 px-3";
        asyncStatus.textContent = `Running async validation for "${stepId}" with ${Object.keys(fields).length} collected field(s)...`;

        await new Promise((resolve) => {
            setTimeout(resolve, 1200);
        });

        const validation = validateAsyncStep(stepId, fields);

        if (!validation.allowed) {
            asyncStatus.className = "alert alert-warning py-2 px-3";
            asyncStatus.textContent = validation.message;
            return false;
        }

        asyncStatus.className = "alert alert-success py-2 px-3";
        asyncStatus.textContent = validation.message;
        return true;
    }
});

wizard.init();

resetButton.onclick = () => {
    wizard.reset();
};

lockButton.onclick = () => {
    wizard.lock();
};

unlockButton.onclick = () => {
    wizard.unlock();
};

wizardRoot.addEventListener("wz.btn.prev", () => {
    console.log("Prev Step");
});

wizardRoot.addEventListener("wz.btn.next", () => {
    console.log("Next Step");
});

wizardRoot.addEventListener("wz.nav.forward", () => {
    console.log("Forward Nav");
});

wizardRoot.addEventListener("wz.nav.backward", () => {
    console.log("Backward Nav");
});

wizardRoot.addEventListener("wz.form.submit", () => {
    alert("Form Submit");
});

wizardRoot.addEventListener("wz.end", () => {
    alert("Wizard End");
});

wizardRoot.addEventListener("wz.error", (event) => {
    const errorEvent = event as CustomEvent<WizardErrorDetail>;

    console.log("↓ ID ↓");
    console.log(errorEvent.detail.id);
    console.log("↓ Message ↓");
    console.log(errorEvent.detail.msg);
});

wizardRoot.addEventListener("wz.pending", (event) => {
    const pendingEvent = event as CustomEvent<WizardPendingDetail>;

    asyncStatus.className = "alert alert-info py-2 px-3";
    asyncStatus.textContent = `Pending transition from step ${pendingEvent.detail.currentStep + 1} to ${pendingEvent.detail.nextStep + 1}...`;
});

wizardRoot.addEventListener("wz.pending.done", (event) => {
    const pendingDoneEvent = event as CustomEvent<WizardPendingDoneDetail>;

    asyncStatus.className = pendingDoneEvent.detail.allowed
        ? "alert alert-success py-2 px-3"
        : "alert alert-warning py-2 px-3";
    asyncStatus.textContent = pendingDoneEvent.detail.allowed
        ? `Async validation completed. Step ${pendingDoneEvent.detail.nextStep + 1} unlocked.`
        : "Async validation blocked the transition.";
});

wizardRoot.addEventListener("wz.pending.error", (event) => {
    const pendingErrorEvent = event as CustomEvent<WizardPendingErrorDetail>;

    asyncStatus.className = "alert alert-danger py-2 px-3";
    asyncStatus.textContent = `Async step failed before moving to step ${pendingErrorEvent.detail.nextStep + 1}.`;
    console.error(pendingErrorEvent.detail.error);
});

wizardRoot.addEventListener("wz.lock", () => {
    alert("Wizard locked");
});

wizardRoot.addEventListener("wz.unlock", () => {
    alert("Wizard unlocked");
});

wizardRoot.addEventListener("wz.reset", () => {
    formWizard.reset();
    asyncStatus.className = "alert alert-info py-2 px-3 d-none";
    asyncStatus.textContent = "";
    stepPayload.className = "bg-light border rounded p-3 small d-none";
    stepPayload.textContent = "";
    alert("Wizard has restarted");
});

wizardRoot.addEventListener("wz.update", (event) => {
    const updateEvent = event as CustomEvent<WizardUpdateDetail>;

    alert("The Wizard has been updated !");
    console.log("↓ Target ↓");
    console.log(updateEvent.detail.target);
    console.log("↓ DOM Elem ↓");
    console.log(updateEvent.detail.elem);
});

appendButton.onclick = () => {
    setStep(wizard);
};

function setStep(activeWizard: Wizard): void {
    const html = "<div class=\"card card-body m-4 wizard-step\" data-id=\"patata\" data-wz-title=\"Adrii\"> <label class=\"question\"> Embedded step </label> <input type=\"text\" maxlength=\"100\" name=\"patata\" class=\"form-control required\" placeholder=\"Embedded step\"> </div>";

    const root = document.querySelector<HTMLElement>(activeWizard.wz_class);
    if (!root) {
        return;
    }

    const content = root.querySelector<HTMLElement>(activeWizard.wz_content);
    if (!content) {
        return;
    }

    const target = content.querySelector<HTMLElement>(`${activeWizard.wz_step}[data-wz-step="2"]`);
    if (!target) {
        return;
    }

    target.insertAdjacentHTML("beforebegin", html);
    activeWizard.update();
}

function serializeStepFields(stepElement: HTMLElement | null): Record<string, string | string[]> {
    const fields: Record<string, string | string[]> = {};

    if (!stepElement) {
        return fields;
    }

    const elements = stepElement.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
        "input, textarea, select"
    );

    elements.forEach((field) => {
        if (!field.name) {
            return;
        }

        if (field instanceof HTMLInputElement && field.type === "file") {
            fields[field.name] = Array.from(field.files ?? []).map((file) => file.name);
            return;
        }

        if (field instanceof HTMLInputElement && (field.type === "checkbox" || field.type === "radio")) {
            if (!field.checked) {
                return;
            }

            const previousValue = fields[field.name];
            if (Array.isArray(previousValue)) {
                previousValue.push(field.value);
                return;
            }

            if (typeof previousValue === "string") {
                fields[field.name] = [previousValue, field.value];
                return;
            }

            fields[field.name] = field.value;
            return;
        }

        fields[field.name] = field.value;
    });

    return fields;
}

function validateAsyncStep(
    stepId: string,
    fields: Record<string, string | string[]>
): { allowed: boolean; message: string } {
    if (stepId === "campaign") {
        return fields.dropdown === "other"
            ? {
                allowed: true,
                message: "Async validation completed. Campaign step unlocked."
            }
            : {
                allowed: false,
                message: "Async validation blocked the transition. Campaign name must be set to \"Other\"."
            };
    }

    if (stepId === "notification") {
        return fields.title === "LoR"
            ? {
                allowed: true,
                message: "Async validation completed. Notification step unlocked."
            }
            : {
                allowed: false,
                message: "Async validation blocked the transition. The Title field must be exactly \"LoR\"."
            };
    }

    return {
        allowed: true,
        message: `Async validation completed. ${stepId} unlocked.`
    };
}
