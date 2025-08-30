// base-pruebas/personas.js

// Ejemplo de persona válida para pruebas
export const personaValida = {
  edad: 25,
  ocupacion: 'empleado',
  tieneDeudas: false,
};

// Ejemplo de persona con edad inválida (menor que 0)
export const personaInvalida = {
  edad: -1,
  ocupacion: 'desempleado',
  tieneDeudas: true,
};

// Ejemplo de persona con edad menor de 18
export const personaMenorDeEdad = {
  edad: 17,
  ocupacion: 'estudiante',
  tieneDeudas: false,
};

// Ejemplo de persona exactamente de 18 años
export const personaExactamente18 = {
  edad: 18,
  ocupacion: 'estudiante',
  tieneDeudas: true,
};

// Ejemplo de persona mayor de 18
export const personaMayorDeEdad = {
  edad: 30,
  ocupacion: 'trabajador',
  tieneDeudas: false,
};

// Ejemplo de persona con edad no válida (NaN)
export const personaEdadInvalidaNaN = {
  edad: NaN,
  ocupacion: 'trabajador',
  tieneDeudas: false,
};

// Ejemplo de persona con edad no definida
export const personaEdadInvalidaUndefined = {
  edad: undefined,
  ocupacion: 'trabajador',
  tieneDeudas: false,
};
