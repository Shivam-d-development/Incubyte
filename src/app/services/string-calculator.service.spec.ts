import { TestBed } from '@angular/core/testing';
import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  // Test 1: Handle empty string
  it('should return 0 for an empty string', () => {
    expect(service.add('')).toBe(0);
  });

  // Test 2: Handle single number
  it('should return the number itself when there is one number', () => {
    expect(service.add('1')).toBe(1);
  });

  // Test 3: Handle two numbers
  it('should return the sum of two numbers', () => {
    expect(service.add('1,5')).toBe(6);
  });

  // Test 4: Handle unknown amount of numbers
  it('should handle an unknown amount of numbers', () => {
    expect(service.add('1,2,3,4')).toBe(10);
  });

  // Test 5: Handle new line between numbers
  it('should handle new lines between numbers', () => {
    expect(service.add('1\n2,3')).toBe(6);
  });

  // Test 6: Support custom delimiters
  it('should support custom delimiters', () => {
    expect(service.add('//;\n1;2')).toBe(3);
  });

  // Test 7: Throw error for negative numbers
  it('should throw an error for negative numbers', () => {
    expect(() => service.add('1,-2')).toThrowError(
      'negative numbers not allowed: -2'
    );
  });

  // Test 8: Throw error for multiple negative numbers
  it('should throw an error for multiple negative numbers', () => {
    expect(() => service.add('1,-2,-3')).toThrowError(
      'negative numbers not allowed: -2, -3'
    );
  });
});
