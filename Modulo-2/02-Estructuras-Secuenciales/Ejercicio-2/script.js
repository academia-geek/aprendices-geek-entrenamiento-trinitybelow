//Entrada
let cantidad_mujeres = 18;
let cantidad_hombres = 15;
let porcentaje_hombres = 0;
let porcentaje_mujeres = 0;
let total_estudiantes = 0;

//Proceso
total_estudiantes = cantidad_mujeres + cantidad_hombres;
porcentaje_mujeres = cantidad_mujeres / total_estudiantes * 100;
porcentaje_hombres = porcentaje_hombres / total_estudiantes * 100;

//Salida
console.log("El porcentaje de mujeres es: " +  Math.round(porcentaje_mujeres));
console.log("El porcentaje de hombres es: " +  Math.round(porcentaje_hombres));
