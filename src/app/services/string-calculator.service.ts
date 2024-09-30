import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringCalculatorService {
  constructor() {}

  add(numbers: string): number {
    if (!numbers) {
      return 0; // Handle empty string
    }

    let delimiter = ','; // Default delimiter is a comma
    if (numbers.startsWith('//')) {
      const delimiterLine = numbers.split('\n')[0];
      delimiter = delimiterLine[2]; // Extract the custom delimiter
      numbers = numbers.split('\n')[1]; // Extract the numbers part
    }

    const formattedNumbers = numbers.replace(/\n/g, delimiter); // Handle new line as a delimiter
    const numberArray = formattedNumbers.split(delimiter); // Split by delimiter
    const negatives = numberArray.filter((num) => parseInt(num, 10) < 0); // Check for negative numbers

    if (negatives.length) {
      throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numberArray.reduce((acc, curr) => acc + parseInt(curr, 10), 0); // Sum the numbers
  }
}
