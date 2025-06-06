# Login con Roles en React + Vite

## Descripción

Este proyecto es una aplicación simple de login hecha con React y Vite que permite iniciar sesión con dos tipos de usuarios: **administrador** y **usuario normal**. Según el rol asignado, el usuario será redirigido a su respectivo dashboard.

El sistema simula la autenticación con usuarios hardcodeados, almacenando la sesión en el `localStorage`. Además, cuenta con rutas protegidas para restringir el acceso a los dashboards según el rol del usuario.

---

## Características

- Login con validación de usuario y contraseña.
- Dos roles: `admin` y `user`.
- Rutas protegidas con redirección automática.
- Dashboard independiente para administrador y usuario.
- Cierre de sesión que elimina la sesión guardada.
- Proyecto creado con React y Vite.
- Uso de React Router para manejo de rutas.

---

## Usuarios de prueba

| Usuario | Contraseña | Rol       |
|---------|------------|-----------|
| admin   | admin123   | Administrador |
| user    | user123    | Usuario normal |

---

