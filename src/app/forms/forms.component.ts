import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

class User{
  constructor(
      public email: string,
      public password: string){}
}

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  user = new User("", "");

  onSubmit(email: NgModel, password: NgModel){
      console.log(email);
      console.log(password);
  }
}
