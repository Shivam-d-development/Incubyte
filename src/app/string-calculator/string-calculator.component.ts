import { Component } from '@angular/core';
import { StringCalculatorService } from '../services/string-calculator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-string-calculator',
  standalone: true,
  templateUrl: './string-calculator.component.html',
  styleUrls: ['./string-calculator.component.css'],
  imports: [FormsModule, CommonModule], 
})
export class StringCalculatorComponent {
  inputNumbers: string = ''; 
  result: number | null = null; 
  errorMessage: string = ''; 

  constructor(private stringCalculatorService: StringCalculatorService) {}

  onSubmit() {
    try {
      this.errorMessage = '';
      this.result = this.stringCalculatorService.add(this.inputNumbers); 
    } catch (error: any) {
      this.result = null;
      this.errorMessage = error.message;
    }
  }
}
