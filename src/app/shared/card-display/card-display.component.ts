import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css']
})
export class CardDisplayComponent {

  @Input() trip : any

  constructor(
    private tripService : TripService,
    private nav : NavController
  ){}

  setTripView(){
    console.log(this.trip);
    
    this.tripService.setTripToView(this.trip._id)
    this.nav.navigateRoot("/view")
  }

  requestTrip(){
    console.log(this.trip)
    this.tripService.requestTrip(this.trip).subscribe(data =>{
      console.log(data);
      this.nav.navigateRoot("/search")
    })
  }
}
