import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  tripModel :any = {}
  tripToView : any;

  constructor(
    private tripService : TripService
  ){}

  ngOnInit(): void {
    this.tripToView = this.tripService.getTripToView();
    console.log(this.tripToView);
    this.tripService.getSingleTrip({
      // to make ObjectID regex for backend
      _id : this.tripToView
    }).subscribe(data =>{
      console.log(data);
      this.tripModel = data[0];
      
    })
    console.log(this.tripModel);
    
  }

  onSubmit(){
    console.log("submitted");
    
  }

}
