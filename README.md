# Appian Test

Este documento describe los tests realizados en el proyecto de automatización usando Selenium WebDriver y Cucumber para Appian.

## 📝 Tabla de Contenidos

- [Introducción](#introducción)
- [Configuración](#configuración)
- [Pruebas de Funcionalidad](#pruebas-de-funcionalidad)
  - [Login en la Aplicación](#login-en-la-aplicación)
  - [Data Input en Formulario](#data-input-en-formulario)
  - [Verificación de la Creación Exitosa](#verificación-de-la-creación-exitosa)
- [Pruebas de Reportes](#pruebas-de-reportes)
- [Conclusión](#conclusión)

## 🧐 Introducción

Este proyecto tiene como objetivo desarrollar un script de automatización usando Selenium WebDriver y Cucumber for Appian para probar un flujo de gestión de usuarios en una aplicación Appian. Seria automatizar los inputs del tab que dice DATA INPUT.

## 🔧 Configuración

Es necesario para correr la prueba tener instalado nodejs, esta prueba utiliza javascript como lenguaje de programación.

Una vez instalado Nodejs entrar a la carpeta del projecto y ejecuatar el siguente comando:

```
npm install
```

Luego para ejecutar la automatización debe ejecutar el siguente comando:

```
npm test
```

Cuando termine los test, se creara un archivo llamado <strong>cucumber-report.html</strong> en el cual se podra visualizar todos los datos de la ejecución,

## 🏁 Pruebas de Funcionalidad

### Login en la Aplicación

- **Descripción:** Verifica que el usuario puede iniciar sesión en la aplicación Appian.
- **Archivo:** [features/login.feature](features/login.feature)
- **Pasos:**
  1. Abrir la página de inicio de sesión.
  2. Ingresar las credenciales de usuario.
  3. Verificar que el usuario ha iniciado sesión correctamente.

### Data Input en Formulario

- **Descripción:** Verifica que el usuario puede ingresar datos en el formulario de entrada de datos.
- **Archivo:** [features/dataInput.feature](features/dataInput.feature)
- **Pasos:**
  1. Navegar al formulario de entrada de datos.
  2. Ingresar los datos requeridos en el formulario.
  3. Verificar que los datos se han ingresado correctamente.

### Verificación de la Creación Exitosa

- **Descripción:** Verifica que los datos ingresados en el formulario se han creado exitosamente.
- **Archivo:** [features/dataInput.feature](features/dataInput.feature)
- **Pasos:**
  1. Ingresar datos en el formulario.
  2. Enviar el formulario.
  3. Verificar que los datos se han creado exitosamente en la base de datos.

## 📊 Pruebas de Reportes

- **Descripción:** Verifica que los reportes se generan correctamente después de ejecutar las pruebas.
- **Archivo:** [report.js](report.js)
- **Pasos:**
  1. Ejecutar las pruebas.
  2. Generar el reporte en formato HTML.
  3. Verificar que el reporte contiene la información correcta y se muestra correctamente.

## 🎉 Conclusión

Las pruebas realizadas aseguran que la aplicación Appian funciona correctamente en términos de login, navegación, entrada de datos y generación de reportes. Se han seguido buenas prácticas de automatización y se ha documentado adecuadamente cada prueba.
