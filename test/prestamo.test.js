// test/prestamo.test.js
import { puedeAprobarPrestamo } from '../src/prestamo';
import { describe, it, expect } from 'vitest';
import { 
  personaEstudianteConDeudas, personaEstudianteSinDeudas, personaTrabajadorSinDeudas,
  personaTrabajadorConDeudas, personaRetiradoSinDeudas, personaRetiradoConDeudas,
  personaEstudianteMayorDe18SinDeudas, personaEstudianteMayorDe18ConDeudas,
  personaRetiradoMayor65SinDeudas, personaRetiradoMayor65ConDeudas,
  personaTrabajadorMayor30SinDeudas, personaTrabajadorMayor30ConDeudas 
} from '../base-pruebas/SolicitudPrestamos';

describe('puedeAprobarPrestamo', () => {
  it('no debe aprobar prestamo a estudiantes con deudas', () => {
    expect(puedeAprobarPrestamo(personaEstudianteConDeudas)).toBe(false);
  });

  it('no debe aprobar prestamo a estudiantes sin deudas', () => {
    expect(puedeAprobarPrestamo(personaEstudianteSinDeudas)).toBe(false);
  });

  it('debe aprobar prestamo a trabajadores sin deudas', () => {
    expect(puedeAprobarPrestamo(personaTrabajadorSinDeudas)).toBe(true);
  });

  it('debe aprobar prestamo a trabajadores con deudas', () => {
    expect(puedeAprobarPrestamo(personaTrabajadorConDeudas)).toBe(true);
  });

  it('debe aprobar prestamo a retirados sin deudas', () => {
    expect(puedeAprobarPrestamo(personaRetiradoSinDeudas)).toBe(true);
  });

  it('no debe aprobar prestamo a retirados con deudas', () => {
    expect(puedeAprobarPrestamo(personaRetiradoConDeudas)).toBe(false);
  });

  it('no debe aprobar prestamo a estudiantes mayores de 18 con deudas', () => {
    expect(puedeAprobarPrestamo(personaEstudianteMayorDe18ConDeudas)).toBe(false);
  });

  it('no debe aprobar prestamo a estudiantes mayores de 18 sin deudas', () => {
    expect(puedeAprobarPrestamo(personaEstudianteMayorDe18SinDeudas)).toBe(false);
  });

  it('debe aprobar prestamo a retirados mayores de 65 sin deudas', () => {
    expect(puedeAprobarPrestamo(personaRetiradoMayor65SinDeudas)).toBe(true);
  });

  it('no debe aprobar prestamo a retirados mayores de 65 con deudas', () => {
    expect(puedeAprobarPrestamo(personaRetiradoMayor65ConDeudas)).toBe(false);
  });

  it('debe aprobar prestamo a trabajadores mayores de 30 sin deudas', () => {
    expect(puedeAprobarPrestamo(personaTrabajadorMayor30SinDeudas)).toBe(true);
  });

  it('debe aprobar prestamo a trabajadores mayores de 30 con deudas', () => {
    expect(puedeAprobarPrestamo(personaTrabajadorMayor30ConDeudas)).toBe(true);
  });
});
