import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form3',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form3.component.html',
  styleUrl: './form3.component.css'
})
export class Form3Component {
  myForm : FormGroup;

  constructor(){
    this.myForm = new FormGroup({
      "userEmail": new FormControl("", [Validators.required, Validators.email]),
      "userPassword": new FormControl("", Validators.required)
    });
  }

  submit(){
      console.log(this.myForm);
  }
  clear() {
    this.myForm.get('userEmail')?.setValue('');
    this.myForm.get('userPassword')?.setValue('');

    // Сброс состояние касания (touched) и проверки (dirty) для полей формы.
    this.myForm.get('userEmail')?.markAsUntouched();
    this.myForm.get('userEmail')?.markAsPristine();
    
    this.myForm.get('userPassword')?.markAsUntouched();
    this.myForm.get('userPassword')?.markAsPristine();
  }
}
