# Tabla de Decisiones para la función `puedeAprobarPrestamo`

La función `puedeAprobarPrestamo` determina si una persona puede recibir un préstamo basándose en su ocupación y si tiene deudas. A continuación se presenta la tabla de decisiones que describe cómo se toma la decisión, con **12 casos de evaluación**.

| Caso | Ocupación  | Tiene Deudas | Aprobación de Préstamo |
| ---- | ---------- | ------------ | ---------------------- |
| 1    | Estudiante | Sí           | No                     |
| 2    | Estudiante | No           | No                     |
| 3    | Trabajador | Sí           | Sí                     |
| 4    | Trabajador | No           | Sí                     |
| 5    | Retirado   | Sí           | No                     |
| 6    | Retirado   | No           | Sí                     |
| 7    | Estudiante | Sí           | No                     |
| 8    | Estudiante | No           | No                     |
| 9    | Trabajador | Sí           | Sí                     |
| 10   | Trabajador | No           | Sí                     |
| 11   | Retirado   | Sí           | No                     |
| 12   | Retirado   | No           | Sí                     |

## Explicación de la Tabla de Decisiones

1. **Estudiante**:

   - **No se aprueba el préstamo**, sin importar si tiene deudas o no.
   - Los casos 1 y 2 corresponden a estudiantes, con y sin deudas respectivamente, y en ambos casos no se aprueba el préstamo.

2. **Trabajador**:

   - **Siempre se aprueba el préstamo**, sin importar si tiene deudas o no.
   - Los casos 3, 4, 9, 10 corresponden a trabajadores, con o sin deudas, y en todos estos casos se aprueba el préstamo.

3. **Retirado**:
   - **Se aprueba el préstamo solo si no tiene deudas**.
   - Los casos 5 y 6 corresponden a personas retiradas, con y sin deudas, y en el caso de que no tenga deudas (caso 6), el préstamo se aprueba.
   - Los casos 11 y 12 corresponden a retirados con y sin deudas, pero si tiene deudas, el préstamo no se aprueba.

## Reglas de Decisión

- **Estudiante** → No se aprueba el préstamo (para todos los casos).
- **Trabajador** → Siempre se aprueba el préstamo.
- **Retirado sin deudas** → Se aprueba el préstamo.
- **Retirado con deudas** → No se aprueba el préstamo.
