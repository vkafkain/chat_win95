# Win95 Chat

Application created for Sprint 5 ItAcademy Formació mentoritzada Nodejs.

## Instalación

Para que el proyecto funcione tenemos que instalar previamente: 
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [Postman](https://www.postman.com/)



Instalaremos los modulos necesarios para el funcionamiento del chat con el siguiente comando por terminal:
```
    npm install
```

¡Muy importante! Cambiar el nombre del archivo .env-template a solo .env.

## Ejecutar

Una vez hemos instalado todo tenemos que ejecutar tanto en la ruta del servidor chat-v.3.0/server, como en la ruta del cliente chat-v.3.0/client el comando: 
```
 npm run start
```

Esto nos inicializa el servidor, la base de datos y el cliente.

Una vez tenemos tanto el servidor del back como el del cliente escuchando, abrimos una pagina web con nuestro navegador favorito en la siguiente direccion:

    http://localhost:8080



## Arquitectura del proyecto

Estructura:

Client

![Demo](https://github.com/vkafkain/nodeInitialDemo/blob/chat/docs/client.png)

Server

![Demo](https://github.com/vkafkain/nodeInitialDemo/blob/chat/docs/server.png)

## Rutas

_Registrar usuario - POST_
```
http://localhost:3000/users/register
```

_Login ususario - POST_
```
http://localhost:3000/users/login
```

## Programas utilizados

* [HTML](https://developer.mozilla.org/es/docs/Web/HTML) - Lenguaje de Marcas de Hipertexto.
* [CSS](https://developer.mozilla.org/es/docs/Web/CSS) - Hojas de Estilo en Cascada.
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación utilizado.
* [Node.js](https://nodejs.org/es/docs/) - Entorno para ejecutar JavaScript del lado del servidor.
* [Express](https://www.npmjs.com/package/express) - Framework de node.js.
* [NPM](https://www.npmjs.com/) - Administrador de dependencias.
* [Mongoose](https://mongoosejs.com/) - Dependencia que nos ayuda a gestionar datos con MongoDB.
* [Socket.io](https://socket.io/) -  Esta biblioteca javascript permite la comunicación bidireccional en tiempo real.
* [JWT](https://jwt.io/) -  JSON Web Token (abreviado JWT) es un estándar abierto basado en JSON propuesto por IETF (RFC 7519) para la creación de tokens de acceso.
* [bcrypt](https://www.npmjs.com/package/bcrypt) - bcrypt es un algoritmo diseñado específicamente para hash de contraseñas. MD5 y SHA1 son algoritmos de hash de propósito general.

## Mejoras pendientes

- Google Authenticate   -> Actualmente en desarrollo 
- Añadir perfil de usuario
- Poder modificar la contraseña del usuario
- Hacer el front con REACT

## License

[MIT](https://opensource.org/licenses/MIT)