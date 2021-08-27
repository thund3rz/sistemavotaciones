# sistemavotaciones
Proyecto final de programacion web con html, nodejs, express handlebars, sequelizer, javascript etc
necesitaras crear la base de datos antes de correr el programa, en el archivo database.js puedes cambiar el nombre de la db y el user y password
necesitaras xampp y phpmyadmin para crear la db
para iniciar el proyecto ingresa el comando npm start en la terminal de visual studio code
para agregar un administrador comenta el 
{{#if EstaAutenticado}} 

    {{else}}
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal">No autorizado para ver esta seccion, debe estar logeado como administrador.</h1>
        </div>
    {{/if}}
    
    en la vista agregar-admins, corres el programas, agregas un admin y descomentas
