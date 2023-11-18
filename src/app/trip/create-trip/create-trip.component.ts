import { Component } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent {
  sellerModel : any ={}

  constructor(
    private tripService : TripService
  ){}

  onSubmit(){
    this.tripService.createTrip(this.sellerModel).subscribe(res =>{
      alert(res);
    })
    console.log("submitted")
  }

}
