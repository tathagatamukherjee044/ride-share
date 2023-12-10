import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit{
  
  tripList = []
  consumerTripList : any = []
  creatorTripList : any = []
  constructor(
    private tripService : TripService
  ){}
  
  ngOnInit(): void {
    this.tripService.getConsumerTrips().subscribe(data => {
      console.log(data);
      this.consumerTripList=data
      this.tripList = this.consumerTripList
      this.tripService.getCreatorTrips().subscribe(data =>{
        console.log(data);
        this.creatorTripList=data
        console.log(this.creatorTripList); 
      })
    })
  }

  handleChange(e: any) {
    console.log(e);
    switch (e.detail.value){
      
      case 'consumer' : 
        this.tripList=this.consumerTripList;
        break;
      case 'creator' :
        this.tripList=this.creatorTripList;
        break;
        
    }

    
  }

}
