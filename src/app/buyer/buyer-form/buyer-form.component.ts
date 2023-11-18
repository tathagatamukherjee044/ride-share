import { Component } from '@angular/core';

@Component({
  selector: 'app-buyer-form',
  templateUrl: './buyer-form.component.html',
  styleUrls: ['./buyer-form.component.css']
})
export class BuyerFormComponent {

  sellerModel : any ={}

  onSubmit(){
    console.log("submitted")
  }
}
