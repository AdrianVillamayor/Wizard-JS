

[![Build](https://github.com/AdrianVillamayor/Wizard-JS/actions/workflows/main.yml/badge.svg)](https://github.com/AdrianVillamayor/Wizard-JS/actions/workflows/main.yml)
[![npm version](https://img.shields.io/npm/v/@adrii_/wizard-js?style=flat-square)](https://www.npmjs.com/package/@adrii_/wizard-js)
[![jsDelivr hits (GitHub)](https://data.jsdelivr.com/v1/package/gh/AdrianVillamayor/Wizard-JS/badge)](https://www.jsdelivr.com/package/gh/AdrianVillamayor/Wizard-JS)
![GitHub repo size](https://img.shields.io/github/repo-size/AdrianVillamayor/Wizard-JS?style=flat-square)

# Wizard-JS

Un componente de interfaz de usuario (UI) ligero para flujos multi-paso accesibles en JavaScript puro.

## Características

- Compatible con accesibilidad (cumple con ARIA).
- Pasos y navegación de asistente totalmente personalizables.
- Funciona tanto con módulos ES como con CommonJS.
- Validación y control de formularios integrados.
- Comprobaciones asíncronas de pasos con `before_step_change`.
- Campos obligatorios condicionales usando el atributo `data-require-if`.
- Campos obligatorios dinámicos con la clase `on-active-required`.
- Resaltado de validación personalizable.

## Contenido

- [Inicio Rápido](#quick-start) - ejemplo de CDN para copiar y pegar.
- [Instalación](#installation) - enlaces para npm, pnpm, bun y CDN.
- [Uso](#usage) - importación de módulos, estructura HTML y controles del asistente.
- [Validación de Formularios](#form-validation) - campos obligatorios, grupos de radio y reglas condicionales.
- [Configuración del Asistente](#config-wizard) - opciones, comprobaciones asíncronas e i18n.
- [Gestión de Eventos](#events-management) - eventos de ciclo de vida, navegación, validación y envío.
- [Carpeta de Pruebas](#test-folder) - pruebas de humo para el consumo del paquete.
- [Lanzamientos CDN](#cdn-releases) - cómo publicar etiquetas que funcionen en jsDelivr.

## Inicio Rápido

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AdrianVillamayor/Wizard-JS@2.1.1/dist/main.min.css">

<form class="wizard" method="POST">
    <aside class="wizard-content">
        <div class="wizard-step" data-wz-title="Account">
            <input type="email" name="email" class="required" placeholder="Email">
        </div>

        <div class="wizard-step" data-wz-title="Plan">
            <label><input type="radio" name="plan" value="free" required> Free</label>
            <label><input type="radio" name="plan" value="pro" required> Pro</label>
        </div>
    </aside>
</form>

<script src="https://cdn.jsdelivr.net/gh/AdrianVillamayor/Wizard-JS@2.1.1/dist/index.js"></script>
<script>
    const wizard = new Wizard({
        wz_class: ".wizard"
    });

    wizard.init();
</script>
```

## Instalación

Puedes instalar el paquete desde [npm](https://www.npmjs.com/package/@adrii_/wizard-js):

```bash
npm install @adrii_/wizard-js
```

```bash
pnpm add @adrii_/wizard-js
```

```bash
bun install @adrii_/wizard-js
```

Para uso con <a href="https://www.jsdelivr.com/package/gh/AdrianVillamayor/Wizard-JS" target="_blank">CDN</a>:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AdrianVillamayor/Wizard-JS@latest/dist/main.min.css">

<script src="https://cdn.jsdelivr.net/gh/AdrianVillamayor/Wizard-JS@latest/dist/index.js"></script>
```

Para uso en producción, es mejor fijar una versión específica en lugar de `@latest`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AdrianVillamayor/Wizard-JS@2.1.1/dist/main.min.css">

<script src="https://cdn.jsdelivr.net/gh/AdrianVillamayor/Wizard-JS@2.1.1/dist/index.js"></script>
```

El CDN de GitHub utiliza los archivos de la etiqueta de lanzamiento, por lo que cada etiqueta publicada debe incluir la carpeta `dist/` generada.

## Uso

### CommonJS

```javascript
const Wizard = require('@adrii_/wizard-js');
const myWizard = new Wizard({
  /* your configuration here */
});

myWizard.init();
```

### Módulos ES

```javascript
import Wizard from '@adrii_/wizard-js';
const myWizard = new Wizard({
  /* your configuration here */
});

myWizard.init();
```

### Ejemplo HTML para el Asistente

Para asistentes de solo contenido:

```html
<div class="wizard">
    <aside class="wizard-content container">
        <div class="wizard-step">
            <!-- Step content -->
        </div>
        <!-- More steps -->
    </aside>
</div>
```

Para asistentes con propósito de formulario, gestiona los campos obligatorios y los valida:

```html
<form class="wizard" method="POST">
    <aside class="wizard-content container">
        <div class="wizard-step">
            <input type="text" name="name" class="required" placeholder="Enter a short campaign name">
        </div>
        <!-- More steps -->
    </aside>
</form>
```

### Iniciar el Asistente

Para **iniciar** el asistente:

```javascript
let args = {
    "wz_class": ".wizard",
    "wz_nav_style": "dots",
    "wz_button_style": ".btn .btn-sm .mx-3",
    "wz_ori": "vertical",
    "buttons": true,
    "navigation": 'buttons',
    "finish": "Save!"
};

const wizard = new Wizard(args);

wizard.init();
```

### Reiniciar el Asistente

Para **reiniciar** el asistente:

```javascript
wizard.reset();
```

### Actualizar el Asistente

Para **actualizar** el asistente, eliminando o agregando pasos:

```javascript
wizard.update();
```

### Bloquear y Desbloquear el Asistente

Para **bloquear** el asistente en un paso específico:

```javascript
wizard.lock();
```

Para **desbloquear** el asistente:

```javascript
wizard.unlock();
```

## Validación de Formularios

Wizard-JS incluye validación de formularios integrada para campos obligatorios.

### Campos Obligatorios

Para marcar una entrada como obligatoria, agrega el atributo `required` o la clase `required`:

```html
<input type="text" name="email" required>
<!-- or -->
<input type="text" name="email" class="required">
```

### Grupos de Radio Obligatorios

Los botones de radio se validan por su `name` compartido. Una opción marcada es suficiente para continuar:

```html
<label>
    <input type="radio" name="plan" value="free" required>
    Free
</label>

<label>
    <input type="radio" name="plan" value="pro" required>
    Pro
</label>
```

También puedes usar la clase `required` en lugar del atributo nativo:

```html
<input type="radio" name="answer" value="yes" class="required">
<input type="radio" name="answer" value="no" class="required">
```

### Campos Obligatorios Condicionales

Puedes hacer que los campos sean obligatorios de forma condicional basándote en el valor de otro campo usando el atributo `data-require-if`.

El formato es `data-require-if="fieldID:requiredValue"`.

```html
<input type="checkbox" id="subscribe" name="subscribe">

<input type="email" name="email" data-require-if="subscribe:true" placeholder="Enter your email">
```

En este ejemplo, el campo de correo electrónico se vuelve obligatorio si la casilla de verificación con id `subscribe` está marcada (`true`).

### Campos Obligatorios Dinámicos

Usa la clase `on-active-required` para marcar campos que se vuelven obligatorios solo cuando el paso está activo.

```html
<input type="text" name="username" class="on-active-required" placeholder="Enter your username">
```

### Resaltado de Validación Personalizado

Puedes personalizar el comportamiento del resaltado de validación:

- `highlight`: Establece en `true` para habilitar el resaltado de campos inválidos.
- `highlight_time`: Duración (en milisegundos) para mostrar el resaltado. El valor predeterminado es `1000`.
- `highlight_type`: Un objeto para definir las clases para diferentes tipos de resaltado.

Ejemplo:

```javascript
let args = {
    /* Other configurations */
    "highlight": true,
    "highlight_time": 1500,
    "highlight_type": { error: "error", warning: "warning", success: "success", info: "info" }
};
```

## Atributos HTML

### Atributo de Título `[data-wz-title]`

Establece el título del paso para la navegación. Si se deja en blanco, el sistema agregará automáticamente `Paso + número de paso` como título.

```html
<div class="wizard-step" data-wz-title="Configuration">
    <!-- Step content -->
</div>
```

### Atributo Require If `[data-require-if]`

Define campos obligatorios condicionales basados en el valor de otro campo.

```html
<input type="email" name="email" data-require-if="subscribe:true" placeholder="Enter your email">
```

## Configuración del Asistente

Opciones que te permiten modificar el comportamiento y las acciones:

| Parámetro             | Tipo    | Predeterminado                                                                 | Definición / Valor                                                                 |
| --------------------- | ------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| `wz_class`            | String  | `.wizard`                                                                      | Contenedor principal objetivo del asistente                                        |
| `wz_ori`              | String  | `.horizontal`                                                                  | Orientación del asistente (`.horizontal`, `.vertical`)                             |
| `wz_nav`              | String  | `.wizard-nav`                                                                  | Clase del contenedor de navegación                                                 |
| `wz_nav_style`        | String  | `dots`                                                                         | Estilo de los pasos de navegación (`dots`, `tabs`, `progress`)                     |
| `wz_content`          | String  | `.wizard-content`                                                              | Clase del contenedor del cuerpo                                                    |
| `wz_buttons`          | String  | `.wizard-buttons`                                                              | Clase del contenedor de botones de acción                                          |
| `wz_button`           | String  | `.wizard-btn`                                                                  | Clase de los botones de acción Anterior, Siguiente y Finalizar                     |
| `wz_button_style`     | String  | `.btn`                                                                         | Estilo básico del botón                                                            |
| `wz_step`             | String  | `.wizard-step`                                                                 | Clase para los pasos de navegación y cuerpo                                        |
| `wz_form`             | String  | `.wizard-form`                                                                 | Clase del formulario que contiene el asistente                                     |
| `wz_next`             | String  | `.next`                                                                        | Clase del botón de acción Siguiente                                                |
| `wz_prev`             | String  | `.prev`                                                                        | Clase del botón de acción Anterior                                                 |
| `wz_finish`           | String  | `.finish`                                                                      | Clase del botón de acción Finalizar                                                |
| `wz_highlight`        | String  | `.highlight-error`                                                             | Clase para ressaltados cuando ocurren errores de validación                        |
| `current_step`        | Number  | `0`                                                                            | Paso activo del asistente                                                          |
| `steps`               | Number  | `0`                                                                            | Número de pasos del asistente                                                      |
| `highlight_time`      | Number  | `1000`                                                                         | Tiempo de visualización del resaltado de validación (en milisegundos)              |
| `navigation`          | String  | `all`                                                                          | Modo de navegación (`buttons`, `nav`, `all`)                                       |
| `buttons`             | Boolean | `true`                                                                         | Mostrar u ocultar los botones de acción                                            |
| `nav`                 | Boolean | `true`                                                                         | Mostrar u ocultar la navegación del encabezado                                     |
| `highlight`           | Boolean | `true`                                                                         | Habilitar o deshabilitar el resaltado de campos ante errores de validación         |
| `next`                | String  | `Next`                                                                         | Texto para el botón Siguiente                                                      |
| `prev`                | String  | `Prev`                                                                         | Texto para el botón Anterior                                                       |
| `finish`              | String  | `Submit`                                                                       | Texto para el botón Finalizar                                                      |
| `before_step_change`  | Function| `null`                                                                         | Hook ejecutado antes de avanzar. Puede devolver `false` o una promesa rechazada para bloquear el cambio de paso |
| `bubbles`             | Boolean | `true`                                                                         | Habilitar o deshabilitar la propagación de eventos para eventos personalizados     |
| `highlight_type`      | Object  | `{ error: "error", warning: "warning", success: "success", info: "info" }`     | Clases para diferentes efectos de resaltado de validación                          |
| `i18n`                | Object  | Varios                                                                         | Mensajes de internacionalización para errores, títulos y advertencias              |

### Hook Asíncrono de Pasos

Usa `before_step_change` cuando necesites realizar trabajo asíncrono antes de permitir que el asistente avance al siguiente paso.

```javascript
const wizard = new Wizard({
    wz_class: ".wizard",
    before_step_change: async ({ currentStepElement, isAsyncStep }) => {
        if (!isAsyncStep) {
            return true;
        }

        const stepId = currentStepElement?.getAttribute("data-id");

        if (stepId === "campaign") {
            const response = await fetch("/api/check-campaign", {
                method: "POST"
            });

            return response.ok;
        }

        if (stepId === "notification") {
            const title = currentStepElement
                ?.querySelector('input[name="title"]')
                ?.value;

            return title === "LoR";
        }

        return true;
    }
});
```

Para marcar un paso como solo asíncrono, agrega `data-wz-async="true"` o `data-async-step="true"` al `.wizard-step` actual.

Si tienes más de un paso asíncrono, es preferible identificar cada paso con un atributo estable como `data-id` en lugar de depender solo del índice numérico.

```html
<div class="wizard-step" data-id="campaign" data-wz-async="true"></div>
<div class="wizard-step" data-id="notification" data-wz-async="true"></div>
```

El contexto del hook expone:

- `currentStep`
- `nextStep`
- `currentStepElement`
- `nextStepElement`
- `trigger`
- `isAsyncStep`
- `wizard`

Mientras el hook está pendiente, la raíz del asistente obtiene `data-wz-pending="true"` y los clics de avance adicionales se ignoran.

### Opciones de i18n

El objeto `i18n` te permite definir mensajes de error personalizados para diferentes acciones del asistente:

- `empty_wz`: "No item has been found with which to generate the Wizard."
- `empty_nav`: "Nav does not exist or is empty."
- `empty_content`: "Content does not exist or is empty."
- `empty_html`: "Undefined or null content cannot be added."
- `empty_update`: "Nothing to update."
- `no_nav`: "Both the nav and the buttons are disabled, there is no navigation system."
- `form_validation`: "One or more of the form fields are invalid."
- `diff_steps`: "Discordance between the steps of nav and content."
- `random`: "There has been a problem, check the configuration and use of the wizard."
- `already_defined`: "This item is already defined."
- `title`: "Step" (se usa para títulos de pasos predeterminados si no se especifican en el HTML).

## Gestión de Eventos

Wizard-JS proporciona varios eventos para ayudarte a gestionar y responder a las interacciones del usuario.

### Evento de Asistente Listo

Para identificar cuándo el asistente está completamente generado y cargado.

```javascript
document.addEventListener("wz.ready", function (e) {
    console.log(`Target:`, e.detail.target); // .wizard
    console.log(`DOM Element:`, e.detail.elem); // DOM element
});
```

### Evento de Actualización del Asistente

Se activa cuando el asistente se actualiza.
```javascript
let wz_class = ".wizard";
let $wz_doc = document.querySelector(wz_class)
```

```javascript
$wz_doc.addEventListener("wz.update", function (e) {
    console.log(`Target:`, e.detail.target);
    console.log(`DOM Element:`, e.detail.elem);
});
```

### Eventos de Bloqueo y Desbloqueo

Cuando el asistente está bloqueado:

```javascript
$wz_doc.addEventListener("wz.lock", function (e) {
    alert("Wizard is locked");
});
```

Cuando el asistente se desbloquea:

```javascript
$wz_doc.addEventListener("wz.unlock", function (e) {
    alert("Wizard is unlocked");
});
```

### Eventos de Navegación

Movimiento al paso anterior:

```javascript
$wz_doc.addEventListener("wz.btn.prev", function (e) {
    alert("Previous Step");
});
```

Movimiento al siguiente paso:

```javascript
$wz_doc.addEventListener("wz.btn.next", function (e) {
    alert("Next Step");
});
```

Navegación hacia adelante con la barra de navegación:

```javascript
$wz_doc.addEventListener("wz.nav.forward", function (e) {
    alert("Forward Navigation");
});
```

Navegación hacia atrás con la barra de navegación:

```javascript
$wz_doc.addEventListener("wz.nav.backward", function (e) {
    alert("Backward Navigation");
});
```

### Evento de Error de Validación

Se activa cuando hay un error al validar los datos del paso de formulario activo.

```javascript
$wz_doc.addEventListener("wz.error", function (e) {
    console.log(`ID:`, e.detail.id); // form_validation
    console.log(`Message:`, e.detail.msg); // Form validation message
    console.log(`Target:`, e.detail.target); // Array of invalid elements
});
```

### Eventos de Paso Pendiente

Se activan cuando `before_step_change` comienza, termina o lanza un error.

```javascript
$wz_doc.addEventListener("wz.pending", function (e) {
    console.log("Pending step change", e.detail.currentStep, e.detail.nextStep);
});

$wz_doc.addEventListener("wz.pending.done", function (e) {
    console.log("Step change allowed:", e.detail.allowed);
});

$wz_doc.addEventListener("wz.pending.error", function (e) {
    console.error("Async step failed", e.detail.error);
});
```

### Eventos de Envío de Formulario y Finalización del Asistente

Si es un formulario, al final se activará el siguiente evento:

```javascript
$wz_doc.addEventListener("wz.form.submit", function (e) {
    alert("Form Submitted");
});
```

Si no es un formulario, al final se activará el siguiente evento:

```javascript
$wz_doc.addEventListener("wz.end", function (e) {
    alert("Wizard is finished");
});
```

### Evento de Reinicio

Cuando el asistente se reinicia:

```javascript
$wz_doc.addEventListener("wz.reset", function (e) {
    alert("Wizard has restarted");
});
```

## Carpeta de Pruebas

El repositorio incluye una carpeta [`test/`](./test) con ejemplos de humo que muestran cómo consumir el paquete en diferentes entornos:

- [`test/ts`](./test/ts): consumidor TypeScript usando el tarball empaquetado.
- [`test/js`](./test/js): consumidor JavaScript ESM usando el tarball empaquetado.
- [`test/cjs`](./test/cjs): consumidor CommonJS usando el tarball empaquetado.
- [`test/cdn`](./test/cdn): ejemplo para navegador usando el CDN de jsDelivr.
- [`test/base.css`](./test/base.css): base visual mínima utilizada solo por los ejemplos de humo para navegador.

El nombre `test/` es intencional aquí: estas no son pruebas unitarias, sino pruebas de humo para el consumo del paquete.

Para ejecutar las verificaciones de humo automatizadas:

```bash
pnpm run smoke
```

Para ejecutarlas una por una:

```bash
pnpm run smoke:ts
pnpm run smoke:js
pnpm run smoke:cjs
```

Para preparar los ejemplos de navegador:

```bash
pnpm run browser:prepare
```

Para abrir cada ejemplo de navegador con Vite:

```bash
pnpm run browser:ts
pnpm run browser:js
pnpm run browser:cjs
pnpm run browser:cdn
```

Ejemplos de navegador disponibles en `test/`:

- [`test/ts/index.html`](./test/ts/index.html): TypeScript + CSS del paquete.
- [`test/js/index.html`](./test/js/index.html): JavaScript ESM + CSS del paquete.
- [`test/cjs/index.html`](./test/cjs/index.html): prueba global/UMD para navegador usando el bundle UMD empaquetado instalado en el fixture.
- [`test/cdn/index.html`](./test/cdn/index.html): prueba CDN/navegador usando jsDelivr.

Nota sobre `cjs` en el navegador:

- [`test/cjs/index.js`](./test/cjs/index.js) valida CommonJS en Node.
- [`test/cjs/index.html`](./test/cjs/index.html) valida el bundle global/UMD para navegador.

El ejemplo de CDN también puede abrirse directamente en un navegador si solo deseas probar la versión publicada en jsDelivr.

## Demo

Pruébalo en CodePen:

[![Codepen](https://user-images.githubusercontent.com/29653964/116972608-8f6bca80-acbb-11eb-98c1-8a3b19705de1.png)](https://codepen.io/adrianvillamayor/pen/VwWPVME)

La demostración local del repositorio también incluye un ejemplo asíncrono con múltiples pasos asíncronos:

- `campaign`: solo avanza cuando `dropdown === "other"`
- `notification`: solo avanza cuando `title === "LoR"`

Puedes ejecutarlo con:

```bash
pnpm run dev
```

## Lanzamientos CDN

Este proyecto utiliza el paquete de GitHub en jsDelivr:

```text
https://www.jsdelivr.com/package/gh/AdrianVillamayor/Wizard-JS
```

Antes de crear una nueva etiqueta de lanzamiento, ejecuta `pnpm run build` y confirma los archivos generados en `dist/`. Sin `dist/`, las URLs de CDN como `/dist/index.js` y `/dist/main.min.css` no funcionarán para esa etiqueta.

## Contribución

Las solicitudes de extracción (pull requests) son bienvenidas. Para cambios importantes, abre primero un issue para discutir lo que te gustaría cambiar.

Asegúrate de actualizar las pruebas según corresponda.

## Licencia

[MIT](https://github.com/AdrianVillamayor/Wizard-JS/blob/main/LICENSE)
