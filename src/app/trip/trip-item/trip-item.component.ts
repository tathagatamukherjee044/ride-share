import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.css']
})
export class TripItemComponent {
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
