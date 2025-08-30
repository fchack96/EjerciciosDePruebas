# EjerciciosDePruebas # Proyecto de Pruebas de Préstamos
-Repo de practica de tecnicas de pruebas de ASEGURAMIENTO DE LA CALIDAD DEL SOFTWARE

-Este proyecto consiste en la creación de un sistema que determina si una persona puede recibir un préstamo, basado en su ocupación y si tiene deudas. El proyecto también incluye una función que verifica si una persona es mayor de edad, basada en su edad.

## Funciones del Proyecto

1. **`esMayorDeEdad`**: Esta función verifica si una persona es mayor de 18 años. Si la edad es 18 o mayor, retorna `'SiEsMayor'`; si la edad es menor a 18, retorna `'NoMayor'`; si la edad es inválida (por ejemplo, negativa o NaN), retorna `'ERROR'`.

2. **`puedeAprobarPrestamo`**: Esta función determina si una persona puede obtener un préstamo en base a su ocupación y si tiene deudas. Los criterios son:
   - **Estudiante**: No se aprueba el préstamo, sin importar si tiene deudas.
   - **Empleado**: Siempre se aprueba el préstamo, sin importar si tiene deudas.
   - **Retirado**: Se aprueba si no tiene deudas, de lo contrario no se aprueba.

## Estructura del Proyecto
PruebasJestClase/
│
├── base-pruebas/
│ ├── personas.js // Contiene los datos de prueba (ejemplos de edad)
│ └── SolicitudPrestamos.js // Contiene los escenarios de los préstamos
│
├── src/
│ ├── Edad.js // Contiene la lógica de la función esMayorDeEdad
│ ├── prestamo.js // Contiene la lógica de la función puedeAprobarPrestamo
│
├── test/
│ ├── Edad.test.js // Contiene las pruebas para esMayorDeEdad
│ └── prestamo.test.js // Contiene las pruebas para puedeAprobarPrestamo
│
└── package.json // Configuración del proyecto y dependencias

## Configuración del Proyecto

1. Clona el repositorio:

   git clone https://github.com/fchack96/EjerciciosDePruebas.git

2. Instala las dependencias:
   npm install
   
3. Ejecucion de Pruebas
   npm run test

4. Ejecuta las pruebas con cobertura:
   npm run test:cov

   
