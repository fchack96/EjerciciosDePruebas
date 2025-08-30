// test/Edad.test.js
import { esMayorDeEdad } from '../src/Edad';
import { describe, it, expect } from 'vitest';
import { personaValida, personaInvalida } from '../base-pruebas/personas';

describe('esMayorDeEdad', () => {
  it('should return "SiEsMayor" if age is 18 or greater', () => {
    expect(esMayorDeEdad(personaValida.edad)).toBe('SiEsMayor');  // Debería devolver 'SiEsMayor'
  });

  it('should return "NoMayor" if age is less than 18', () => {
    expect(esMayorDeEdad(17)).toBe('NoMayor');  // Debería devolver 'NoMayor'
  });

  it('should return "ERROR" if age is invalid', () => {
    expect(esMayorDeEdad(personaInvalida.edad)).toBe('ERROR');  // Debería devolver 'ERROR'
  });
});
