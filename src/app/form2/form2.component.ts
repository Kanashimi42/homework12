import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, 
        FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {
  myForm : FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.myForm = formBuilder.group({
        "userEmail": ["", [ Validators.required, Validators.email]],
        "userPassword": ["", [Validators.required]],
        "userCheckbox": ["", [Validators.required]],
        "hobbies": formBuilder.array([["", []]])
    });
  }

  getFormsControls() : FormArray{
    return this.myForm.controls["hobbies"] as FormArray;
  }
  addHobbies(){
    (<FormArray>this.myForm.controls["hobbies"]).push(new FormControl(""));
  }
  submit(){
    console.log(this.myForm);
  }
}
