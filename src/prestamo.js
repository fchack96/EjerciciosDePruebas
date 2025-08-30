// src/prestamo.js

// Función para evaluar si una persona puede recibir un préstamo
export function puedeAprobarPrestamo(persona) {
    // Si la persona es estudiante, no se aprueba el préstamo
    if (persona.ocupacion === 'estudiante') {
        return false;
    }

    // Si la persona es trabajadora, el préstamo siempre se aprueba, sin importar las deudas
    if (persona.ocupacion === 'empleado') {
        return true;
    }

    // Si la persona es retirada, el préstamo se aprueba solo si no tiene deudas
    if (persona.ocupacion === 'retirado') {
        return !persona.tieneDeudas; // Si tiene deudas, no se aprueba
    }

    // En cualquier otro caso, no se aprueba
    return false;
}
