import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.css']
})
export class SellerFormComponent {

  sellerModel : any ={}

  onSubmit(){
    console.log("submitted")
  }
}
