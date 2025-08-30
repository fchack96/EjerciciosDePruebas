// src/Edad.js

export const esMayorDeEdad = (edad) => {
    if (edad >= 0) {
        if (edad >= 18) {
            return 'SiEsMayor';  // Cambié de true a 'SiEsMayor'
        }
        return 'NoMayor';  // Cambié de false a 'NoMayor'
    } else {
        return 'ERROR';  // Mantengo 'ERROR' para entradas no válidas
    }
};
