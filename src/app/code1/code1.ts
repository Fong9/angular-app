import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-code1',
  imports: [FormsModule],
  templateUrl: './code1.html',
  styleUrl: './code1.css',
})
export class Code1 {
  val= 0
  val1= 0
  result= 0

  calculate() {
    return this.result = Number(this.val) + Number(this.val1);
  }
}
 