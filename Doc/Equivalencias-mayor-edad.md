Este archivo ahora describe las **clases de equivalencia** basadas en los **ejemplos de `personas.js`** que tenemos para la función `esMayorDeEdad`.

```markdown
# Clases de Equivalencia para la función `esMayorDeEdad`

La función `esMayorDeEdad` evalúa si una persona es mayor de edad o no, basada en su edad. A continuación se definen las clases de equivalencia basadas en los datos de `personas.js` que hemos utilizado para las pruebas.

## Clases de Equivalencia

1. **Clase de equivalencia válida (edad >= 18)**:
   - **Descripción**: Este caso cubre personas que tienen 18 años o más.
   - **Ejemplos**: 
     - **`personaValida`** (Edad: 25)
     - **`personaExactamente18`** (Edad: 18)
     - **`personaMayorDeEdad`** (Edad: 30)
   - **Resultado esperado**: `'SiEsMayor'`.

2. **Clase de equivalencia válida (edad < 18)**:
   - **Descripción**: Este caso cubre personas menores de 18 años.
   - **Ejemplos**:
     - **`personaMenorDeEdad`** (Edad: 17)
   - **Resultado esperado**: `'NoMayor'`.

3. **Clase de equivalencia inválida (edad negativa)**:
   - **Descripción**: Este caso cubre edades negativas, las cuales son inválidas.
   - **Ejemplos**:
     - **`personaInvalida`** (Edad: -1)
   - **Resultado esperado**: `'ERROR'`.

4. **Clase de equivalencia inválida (edad `NaN`)**:
   - **Descripción**: Este caso cubre cuando la edad es `NaN` (Not a Number), que también es inválido.
   - **Ejemplos**:
     - **`personaEdadInvalidaNaN`** (Edad: `NaN`)
   - **Resultado esperado**: `'ERROR'`.

5. **Clase de equivalencia inválida (edad no definida)**:
   - **Descripción**: Este caso cubre cuando la edad no está definida o es `undefined`.
   - **Ejemplos**:
     - **`personaEdadInvalidaUndefined`** (Edad: `undefined`)
   - **Resultado esperado**: `'ERROR'`.
