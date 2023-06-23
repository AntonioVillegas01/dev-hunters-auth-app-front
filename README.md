# DEV HUNTERS AUTH APP FRONT-END

Prueba tecnica para dev Hunters, desarrollado con Typescript y  Cuenta con los siguientes componentes:
- Modulo de autenticacion y registro de usuarios 
- Se utilizo la dependecia MUI(Material Design) para los estilos de los componentes
- Se utiliza Redux para el manejo del estado de la app

![DEVHuntersTechTest.png](public%2Fassets%2FDEVHuntersTechTest.png)


## Pre-requisitos

- Node.js v14.x.x o superior
- npm v6.x.x o superior

## Pasos para instalar el proyecto

1. Clona el repositorio a tu máquina local utilizando el comando:

```bash
git clone https://github.com/AntonioVillegas01/dev-hunters-auth-app-front.git
```

2. Navega a la carpeta del proyecto:
```bash
cd nombre_del_proyecto
```

3. Instala las dependencias del proyecto:
```bash
npm install
```

# Ejecución en modo de desarrollo
Para ejecutar la aplicación en modo de desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
```

El comando anterior debería iniciar el servidor de desarrollo en http://localhost:3000.

# Creación de un Build de Producción
Para crear una versión de producción de la aplicación, ejecuta el siguiente comando:

```bash
npm run build
```
Este comando crea una carpeta dist con el código optimizado y listo para ser desplegado en un servidor de producción.

# Despliegue
Una vez creada la versión de producción, puedes desplegarla en cualquier servidor de archivos estáticos. Para desplegar la aplicación en Vercel, puedes seguir los siguientes pasos:

Instala Vercel CLI si aún no lo has hecho:

```bash
npm i -g vercel
```

Inicia sesión en tu cuenta de Vercel (se te pedirá que introduzcas tus credenciales):
```bash
vercel login
```


Para desplegar la aplicación, ejecuta el siguiente comando en la raíz del proyecto:
```bash
vercel --prod
```

Este comando desplegará tu proyecto y te proporcionará una URL donde puedes acceder a tu aplicación en línea.

Contribución
Información sobre cómo contribuir al proyecto...

Licencia
ISC
