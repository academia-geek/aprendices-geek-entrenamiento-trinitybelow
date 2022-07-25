# Ejercicio 2
Crear una aplicación en donde se puedan integrar los siguientes estilos con Pseudoclases y pseudoelementos de css

```css
#palabra { 
  &::before {
    color: #c62828;
    content: "___ ";
  }
  &::after {
    color: #2e7d32;
    content: " *";
  }
}

#texto {
  &::after {
    color: #2e7d32;
    content: ": esto no lo he escrito en el";
  }
}

#revoloteado {
  &:hover {
    color: #6a1b9a;
  }
}

```

## Entrega de la tarea

Para realizar la entrega de esta actividad debe realizar los siguientes pasos:

    1. Crear un Issues llamado Entrega-Modulo-1-03-CSS-basico-Tarea-02-Ejercicio-2
    2. Al Issues adicionar un pantallazo con el enunciado de la tarea
    3. Luego debes agregar la descripción de los pasos que ejecutaste para dar solución a la tarea y adjuntar las imágenes de evidencia.
    4. Subir el proyecto a GitHub y enviar la url del repositorio.
    5. Crear un GitHub Page y enviar la url del despliegue del ejercicio.