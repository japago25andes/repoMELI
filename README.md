# repoMELI: Pruebas Automatizadas de Mercado Libre con Cypress

Este repositorio contiene un proyecto de automatización de pruebas web utilizando **Cypress.io** para verificar el flujo de búsqueda, filtrado y ordenamiento de productos en Mercado Libre.

## 🚀 Inicio Rápido

Sigue estos pasos para clonar el repositorio, instalar las dependencias y ejecutar las pruebas en tu máquina local.

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

* **Node.js**: Versión 20.x o superior (recomendado: la última versión LTS).
    * Puedes descargarlo desde [nodejs.org](https://nodejs.org/en).
    * Para verificar tu versión, abre una terminal y ejecuta:
        ```bash
        node -v
        npm -v
        ```
* **Git**: Para clonar el repositorio.
    * Puedes descargarlo desde [git-scm.com](https://git-scm.com/).
    * Para verificar tu versión, abre una terminal y ejecuta:
        ```bash
        git --version
        ```

### 📦 Instalación

1.  **Clonar el Repositorio:**
    Abre tu terminal o línea de comandos y ejecuta el siguiente comando para clonar el proyecto a tu directorio local:

    ```bash
    git clone https://github.com/japago25andes/repoMELI.git
    ```

2.  **Navegar al Directorio del Proyecto:**
    Una vez clonado, ingresa al directorio del proyecto:

    ```bash
    cd repoMELI
    ```

3.  **Instalar Dependencias:**
    Instala todas las dependencias del proyecto (Cypress y otras herramientas) usando npm:

    ```bash
    npm install
    ```
    Este comando descargará e instalará Cypress y todas las librerías necesarias definidas en `package.json`. Este proceso puede tardar unos minutos la primera vez.

### ▶️ Cómo Ejecutar las Pruebas

Existen dos formas principales de ejecutar las pruebas de Cypress: en modo interactivo (abriendo la interfaz de Cypress) o en modo "headless" (desde la línea de comandos, sin interfaz gráfica).

#### Opción 1: Ejecutar en Modo Interactivo (Recomendado para Desarrollo y Depuración)

Este modo abre la interfaz gráfica de Cypress, lo que te permite ver las pruebas ejecutarse en tiempo real, depurar y explorar los comandos.

1.  Abre una terminal en la raíz del directorio del proyecto (`repoMELI`).
2.  Ejecuta el siguiente comando:

    ```bash
    npx cypress open
    ```

3.  Se abrirá la ventana de la "Cypress App".
4.  Selecciona el tipo de pruebas **"E2E Testing"**.
5.  Cypress te preguntará por el navegador. Se recomienda usar **Chrome** para este proyecto debido al uso de `cy.origin()`, que puede ser más estable en este navegador. Selecciona Chrome y haz clic en "Start E2E Testing in Chrome".
6.  Una vez que el navegador se inicie, verás tu archivo de prueba (`mercadolibre.cy.js`) listado en el explorador de pruebas. Haz clic en él para ejecutar la prueba.
7.  La prueba comenzará a ejecutarse en el navegador. Podrás ver cada paso, los resultados de las aserciones y los logs en el panel de comandos de Cypress.

#### Opción 2: Ejecutar en Modo Headless (Para Integración Continua o Ejecuciones Rápidas)

Este modo ejecuta las pruebas en segundo plano en la línea de comandos, sin abrir una interfaz gráfica del navegador. Es ideal para entornos de integración continua (CI/CD) o cuando necesitas una ejecución rápida sin interacción visual.

1.  Abre una terminal en la raíz del directorio del proyecto (`repoMELI`).
2.  Ejecuta el siguiente comando:

    ```bash
    npx cypress run --browser chrome
    ```
    * `--browser chrome`: Especifica que las pruebas se ejecuten en Chrome. Puedes omitirlo si Chrome es tu navegador por defecto o si prefieres el navegador por defecto de Cypress.
    * Cypress generará automáticamente videos y capturas de pantalla de los fallos en la carpeta `cypress/videos` y `cypress/screenshots` respectivamente.
3.  Verás la salida de la ejecución directamente en tu terminal.

### 🧪 Flujo de la Prueba Automatizada

El script `mercadolibre.cy.js` automatiza el siguiente flujo en Mercado Libre:

1.  **Navegación Inicial**: Visita `https://www.mercadolibre.com`.
2.  **Selección de País**: Hace clic para seleccionar "México" (`#MX`).
3.  **Búsqueda de Producto**:
    * Cambia al dominio `https://www.mercadolibre.com.mx`.
    * Maneja y cierra posibles pop-ups de "Aceptar cookies" o "Más tarde" que puedan aparecer.
    * Busca el término "playstation 5" en la barra de búsqueda y presiona Enter.
4.  **Aplicación de Filtros**:
    * Cambia al dominio `https://listado.mercadolibre.com.mx`.
    * Aplica el filtro por **Condición: "Nuevo"**.
    * Aplica el filtro por **Ubicación: "Distrito Federal" (CDMX)**.
5.  **Ordenamiento de Resultados**:
    * Ordena los productos por **"Mayor precio"**.
6.  **Extracción e Impresión de Datos**:
    * Obtiene el **nombre y el precio** de los primeros **5 productos** listados después de aplicar los filtros y el ordenamiento.
    * Imprime esta información en la **consola de comandos de Cypress** y en la **consola del navegador (F12)** para cada producto.

### 📄 Estructura del Proyecto

* `cypress/`: Directorio principal de Cypress.
    * `e2e/`: Contiene los archivos de las pruebas End-to-End.
        * `mercadolibre.cy.js`: El script principal de la prueba automatizada.
    * `fixtures/`: (No usado en este proyecto, pero común para datos de prueba).
    * `support/`: Archivos de soporte y comandos personalizados.
* `cypress.config.js`: Archivo de configuración de Cypress. Aquí se definen configuraciones como `baseUrl`, `defaultCommandTimeout`, `experimentalOriginDependencies` (fundamental para `cy.origin`).
* `package.json`: Define las dependencias del proyecto y los scripts de npm.
* `package-lock.json`: Registra las versiones exactas de las dependencias.
* `.gitignore`: Archivo para especificar archivos y directorios que Git debe ignorar (como `node_modules`).

---

Si tienes alguna pregunta o encuentras algún problema, no dudes en crear una "Issue" en el repositorio de GitHub. ¡Disfruta de la automatización!
