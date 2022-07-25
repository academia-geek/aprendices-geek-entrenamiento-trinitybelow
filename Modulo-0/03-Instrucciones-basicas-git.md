
# Introducción de GIT
Un Sistema de Control de Versiones (SCV) es una aplicación que permite gestionar los cambios que se realizan sobre los elementos de un proyecto o repositorio, guardando así versiones del mismo en todas sus fases de desarrollo.

## ¿Qué es Git?
Git es un sistema de control de versiones de código abierto ideado por Linus Torvalds (el padre del sistema operativo Linux) y actualmente es el sistema de control de versiones más extendido. A diferencia de otros SCV Git tiene una arquitectura distribuida lo que significa que en lugar de guardar todos los cambios de un proyecto en un único sitio, cada usuario contiene una copia del repositorio con el historial de cambios completo del proyecto, esto aumenta significativamente su rendimiento.

## ¿Qué es [GitHub](https://github.com/)?
GitHub es una plataforma que permite a los usuarios socializar con personas de ideas afines, puedes seguir a las personas y ver qué hacen o con quién se conectan. 


### Primeros pasos:
Lo primero que debes hacer después de que has instalado git es configurar el nombre y correo que se va a utilizar para firmar cada commit que hagas. Utiliza los comandos

 `git config --global user.name "Nombre Completo" ` <br>
 `git config --global user.email "email@example.com" `
 validar la información de configuracion 
 `git config --global -e "email@example.com" `
 
 Por ejemplo, si tu nombre fuera "Simon Cano" utilizarías el siguiente comando:
 `git config --global user.name "Simon Cano"` <br>
 Y asumiendo que el correo es "simon@gmail.com" utilizarías el siguiente comando: <br>
 `git config --global user.email "simon@gmail.com"` **Correo de la cuenta de git**


## Trabajando en un proyecto
El flujo de trabajo más simple con git es el siguiente:

   1. Inicializa el repositorio (esto va a crear una carpeta oculta .git dentro del proyecto):
        `git init` 
   2. Trabaja en el código: crea, modifica y elimina archivos.
    Por ejemplo, vamos a construir una página web en donde necesitamos un archivo index.html, un archivo index.js  y un archivo style.css
   3. Prepara los cambios que vas a incluir en el siguiente commit. Para incluir todos los cambios utiliza:
       `git add ." ` *Para agregar todos los archivos* <br>
       `git add -A ` *Para agregar todos los archivos, esta es otra de incluir los archivos* <br>
       `git add <nombreArchivo> ` *Para agregar solo un archivo* <br>
   4. Crea el commit:
       `git commit -m 'El mensaje que describe los cambios'`<br>
   5. Repite los pasos 2, 3 y 4 cada vez que realices un cambio en tu proyecto.
   6. Vincular con un repositorio
        - En [GitHub](https://github.com/) crear un repositorio con el nombre de tu proyecto.
        - El repositorio debe ir vacio para este ejemplo (Sin Readme, sin licencias, entro otros). 
   7. Agregar la URL del repositorio por medio del siguiente comando, la URL del repositorio se ubica en la parte superior de la plataforma de GitHub después de crear el repositorio (por ejemplo, **https://github.com/AcademiaGeek/Prueba.git**) :
      `git remote add origin <URL repositorio> ` 
   8. Obtener información nueva que se encuentre en el repositorio de GitHub, que haya sido subida por otro colaborador y sea necesaria tenerla de forma local, en este caso no lo vamos a ejecutar ya que no hay cambios porque acabamos de crear el repositorio. 
      `git pull origin <Raman main> ` 
   9. Entregar los cambios desde local al repositorio remoto, esto significa que cuando ejecutes este comando tus datos se van a poder visualizar desde la plataforma de GitHub. 
     `git push origin <Raman main> `
  
      
## Resumen de los comandos más importantes
- `git config --global user.name <name> ` : Define el nombre que se va a utilizar en los commits de forma global (para el usuario actual).
- `git config --global user.email <email>` : Define el correo electrónico que se va a utilizar en los commits de forma global (para el usuario actual).
- `git config --global -e` : Comando para verificar la información de la configuración
- `git init` : este comando se encarga de iniciar el repositorio (esto va a crear una carpeta oculta .git en la carpeta donde ejecutes este comando).
- `git add .` : Prepara los archivos para el commit .
- `git commit -m <descripción de los cambios>` : Crea un commit a partir de los cambios que están en el index con el mensaje que se le pase a la opción -m .
- `git status` : Muestra la lista de archivos con cambios desde el último commit y los que van a ser incluídos en el siguiente commit.
-  `git remote add origin <URL repositorio> `: Indicar la dirección del repositorio
-  `git push origin <Raman main> `: Entregar los cambios
-  `git pull origin <Raman main> `: Bajar los cambios
