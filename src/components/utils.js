class Utils {
    hasClass(e, className) {
        className = className.replace(".", "");
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(e.className);
    }

    getParent(elem, selector) {
        let parent = undefined;

        while (elem.parentNode.tagName !== "BODY" && parent === undefined) {
            elem = elem.parentNode;

            if (elem.matches(selector)) {
                parent = elem;
            }
        }

        return parent;
    }

    delegate(el, evt, sel, handler) {
        el.addEventListener(evt, function (event) {
            let t = event.target;
            while (t && t !== this) {
                if (t.matches(sel)) {
                    handler.call(t, event);
                }
                t = t.parentNode;
            }
        });
    }

    removeClassList(e, className) {
        for (let element of e) {
            element.classList.remove(className);
        };
    }

    objToString(obj, delimiter = ";") {
        let str = '';
        for (const p in obj) {
            if (obj.hasOwnProperty(p)) {
                str += p + ':' + obj[p] + delimiter;
            }
        }
        return str;
    }

    isHidden(el) {
        const style = window.getComputedStyle(el);
        return (style.display === 'none')
    }

    str2bool(value) {
        const str = String(value);
        switch (str.toLowerCase()) {
            case 'false':
            case 'no':
            case 'n':
            case '':
            case 'null':
            case 'undefined':
                return false;
            default:
                return true;
        }
    }

    exists(element) {
        return (typeof (element) != 'undefined' && element != null);
    }

    throwException(message) {
        let err;
        try {
            throw new Error('wz.error');
        } catch (e) {
            err = e;
        }
        if (!err) return;

        let aux = err.stack.split("\n");
        aux.splice(0, 2); //removing the line that we force to generate the error (var err = new Error();) from the message
        aux = aux.join('\n"');
        throw message + ' \n' + aux;
    }

    closetNubmer(length, step) {
        let counts = [];

        for (let index = 0; index <= length; index++) {
            counts.push(index)
        }

        let closet = counts.reduce(function (prev, curr) {
            return (Math.abs(curr - step) < Math.abs(prev - step) ? curr : prev);
        });

        return closet;
    }

    highlight(e, highlight_class, highlight_type, highlight_time) {
        let target = highlight_class.replace(".", "");
        let classHigh = `${target}-${highlight_type}`;

        e.classList.add(classHigh)

        setTimeout(function () {
            document.querySelectorAll(`[class*="${target}"]`)
                .forEach((el) => {
                    for (let i = el.classList.length - 1; i >= 0; i--) {
                        let className = el.classList[i];
                        if (className.startsWith(`${target}`)) {
                            el.classList.remove(className);
                        }
                    }
                });
        }, highlight_time);
    }

    dispatchInput(wz_content, e) {
        let type = e.getAttribute("type");
        let check = false;

        switch (type) {
            case "email":
                check = $_.isEmail(e.value);
                break;
            case "url":
                check = $_.isValidURL(e.value);
                break;
            case "checkbox":
                let name = e.getAttribute("name");

                if (name.includes("[]")) {
                    checkbox_check = wz_content.querySelectorAll(`input[type="checkbox"][name="${e.getAttribute("name")}"]:checked`);
                    check = (checkbox_check.length > 0);
                } else {
                    check = e.checked;
                }

                break;

            case "radio":
                let radio_check = wz_content.querySelectorAll(`input[type="radio"][name="${e.getAttribute("name")}"]:checked`);
                check = (radio_check.length > 0);
                break;

            default:
                check = $_.isEmpty(e.value);
                break;
        }

        return check
    }

    checkSelect(e) {
        let check = $_.isEmpty(e.value);

        if (check) {
            let option_value = e.querySelector("option:checked").getAttribute("value");

            if (e.value !== option_value) {
                check = false;
            }
        }

        return check;
    }

    isEmpty(val) {
        val = val.trim();
        return (val != undefined && val != null && val.length > 0);
    }

    isEmptyObj(obj) {
        return (obj != undefined && obj != null && Object.keys(obj).length === 0);
    }

    isEmail(email) {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    isValidURL(str) {
        let url;

        try {
            url = new URL(str);
        } catch (_) {
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }

    cleanEvents(el, withChildren = false) {
        if ($_.exists(el)) {
            if (withChildren) {
                el.parentNode.replaceChild(el.cloneNode(true), el);
            } else {
                const newEl = el.cloneNode(false);
                while (el.hasChildNodes()) newEl.appendChild(el.firstChild);
                el.parentNode.replaceChild(newEl, el);
            }
        }
    }
}