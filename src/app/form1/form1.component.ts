import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {
  myForm : FormGroup;
  constructor() {
    this.myForm = new FormGroup({
        "userEmail": new FormControl("", [Validators.required, Validators.email]),
        "userPassword": new FormControl("", Validators.required)
    });
  }

  submit(){
    console.log(this.myForm);
  }
}
