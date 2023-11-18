import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit{
  
  tripList: any = []

  constructor(private tripService : TripService){}

 ngOnInit() {
  //   this.tripService.getTripsForBuyer().subscribe(data =>{
  //     this.tripList = data
  // })
  }

  showlist(){
    console.log(this.tripList);
    
  }



}
