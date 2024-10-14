class Utils {
    hasClass(element, className) {
        return element.classList.contains(className.replace('.', ''));
    }

    getParent(element, selector) {
        while (element && element.tagName !== 'BODY') {
            if (element.matches(selector)) {
                return element;
            }
            element = element.parentElement;
        }
        return null;
    }

    delegate(element, eventType, selector, handler) {
        element.addEventListener(eventType, function (event) {
            let target = event.target;
            while (target && target !== this) {
                if (target.matches(selector)) {
                    handler.call(target, event);
                    return;
                }
                target = target.parentElement;
            }
        });
    }

    removeClassList(elements, className) {
        elements.forEach(el => el.classList.remove(className));
    }

    objToString(obj, delimiter = ';') {
        return Object.entries(obj)
            .map(([key, value]) => `${key}:${value}`)
            .join(delimiter);
    }

    isHidden(element) {
        return window.getComputedStyle(element).display === 'none';
    }

    str2bool(value) {
        return !['false', 'no', 'n', '', 'null', 'undefined'].includes(String(value).toLowerCase());
    }

    exists(element) {
        return element !== undefined && element !== null;
    }

    throwException(message) {
        throw new Error(`wz.error: ${message}`);
    }

    closestNumber(length, step) {
        return Math.max(0, Math.min(length, step));
    }

    highlight(element, highlightClass, highlightType, highlightTime) {
        const className = `${highlightClass.replace('.', '')}-${highlightType}`;
        element.classList.add(className);

        setTimeout(() => {
            element.classList.forEach(cls => {
                if (cls.startsWith(highlightClass.replace('.', ''))) {
                    element.classList.remove(cls);
                }
            });
        }, highlightTime);
    }

    dispatchInput(wz_content, element) {
        const type = element.getAttribute('type');
        let isValid = false;

        switch (type) {
            case 'email':
                isValid = this.isEmail(element.value);
                break;
            case 'url':
                isValid = this.isValidURL(element.value);
                break;
            case 'checkbox':
                if (element.name.endsWith('[]')) {
                    const checkboxes = wz_content.querySelectorAll(`input[name="${element.name}"]:checked`);
                    isValid = checkboxes.length > 0;
                } else {
                    isValid = element.checked;
                }
                break;
            case 'radio':
                const radios = wz_content.querySelectorAll(`input[name="${element.name}"]:checked`);
                isValid = radios.length > 0;
                break;
            default:
                isValid = this.isNotEmpty(element.value);
                break;
        }

        return isValid;
    }

    checkSelect(element) {
        return this.isNotEmpty(element.value);
    }

    isNotEmpty(value) {
        return value !== undefined && value !== null && value.trim().length > 0;
    }

    isEmptyObj(obj) {
        return Object.keys(obj).length === 0;
    }

    isEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    isValidURL(str) {
        try {
            const url = new URL(str);
            return ['http:', 'https:'].includes(url.protocol);
        } catch {
            return false;
        }
    }

    cleanEvents(element, withChildren = false) {
        if (this.exists(element)) {
            const newEl = element.cloneNode(!withChildren);
            if (withChildren) {
                element.parentNode.replaceChild(newEl, element);
            } else {
                while (element.firstChild) newEl.appendChild(element.firstChild);
                element.parentNode.replaceChild(newEl, element);
            }
        }
    }
}

export default new Utils();
