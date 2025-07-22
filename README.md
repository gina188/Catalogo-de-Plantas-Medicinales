
Aquí tienes un ejemplo completo y bien estructurado de tu archivo `README.md` para tu proyecto Angular **Catálogo de Plantas Medicinales**:

---

````markdown
# 🌿 Catálogo de Plantas Medicinales

Aplicación web desarrollada con Angular que permite visualizar, registrar y administrar información sobre plantas medicinales. Los usuarios pueden autenticarse para acceder a funcionalidades como agregar, editar o eliminar registros. La aplicación está conectada a Firebase (Firestore, Authentication y Hosting).

---

## 🚀 Tecnologías y herramientas utilizadas

- **Angular 17** – Framework principal
- **Firebase** – Firestore (BD), Authentication, Hosting, Storage
- **TypeScript** – Lenguaje principal
- **AngularFire** – Librería oficial de Angular para Firebase
- **Bootstrap / Tailwind (opcional)** – Para estilos
- **GitHub Pages o Firebase Hosting** – Para despliegue

---

## 🛠️ Requisitos para instalar y ejecutar

1. Tener instalado [Node.js](https://nodejs.org/)
2. Tener instalado Angular CLI:
   ```bash
   npm install -g @angular/cli
````

3. Clonar este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/Catalogo-de-Plantas-Medicinales.git
   cd Catalogo-de-Plantas-Medicinales
   ```

4. Instalar dependencias:

   ```bash
   npm install
   ```

5. Configurar el entorno Firebase:

   * Crear un proyecto en Firebase
   * Habilitar Authentication (Email/Password)
   * Crear una base de datos Firestore
   * Obtener la configuración de Firebase e insertarla en `environment.ts`

6. Ejecutar la app:

   ```bash
   ng serve
   ```

---

## 🧱 Arquitectura de la aplicación

La aplicación se estructura en **componentes**, **servicios**, **rutas protegidas** y **pipes personalizados**.

### 🧩 Componentes principales

* `HomeComponent`: Página de bienvenida
* `PlantasComponent`: Muestra lista de plantas
* `PlantaDetalleComponent`: Vista detallada de una planta
* `PlantasAgregarComponent`: Formulario para agregar nueva planta (solo admin)
* `PlantasEditarComponent`: Formulario para editar planta existente
* `LoginComponent` y `RegisterComponent`: Autenticación de usuarios

### 🔐 Servicios

* `AuthService`: Registro, login, logout y control de sesión
* `PlantasService`: Operaciones CRUD sobre Firestore
* `AuthGuard` y `AdminGuard`: Protección de rutas según roles

---

## 🌐 URL del despliegue en Firebase Hosting

https://gina188.github.io/Catalogo-de-Plantas-Medicinales/

---

## 🎥 Video demostrativo



### El video incluye:

* Vista general de la aplicación
* Flujo de autenticación (registro, login, logout)
* Registro, visualización, edición y eliminación de plantas
* Explicación del código fuente: componentes, servicios y guards



## 💬 Comentarios finales

Este proyecto fue desarrollado como trabajo final para el curso de **Programación Web con Angular**, y demuestra el uso completo del ecosistema Angular + Firebase para una aplicación real con autenticación y base de datos en la nube.

`
