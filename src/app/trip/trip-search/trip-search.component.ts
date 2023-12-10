import { Component } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.css']
})
export class TripSearchComponent {

  sellerModel : any ={}
  tripList = []
  array = [1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,12,13,14,1,53,4,567,78,1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,12,13,14,1,53,4,567,78,1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,12,13,14,1,53,4,567,78,1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,12,13,14,1,53,4,567,78,1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,12,13,14,1,53,4,567,78,1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,12,13,14,1,53,4,567,78,1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,12,13,14,1,53,4,567,78]
  constructor(
    private tripService : TripService
  ){}

  onSubmit(){
    this.tripService.getTripsForBuyer(this.sellerModel).subscribe(data =>{
      console.log(data);
      
      data.data.forEach((element : any) => {
        element['userActions'] = 'request'
      });
      this.tripList=data.data;
      console.log(this.tripList);
      
    })
    console.log("submitted")
  }
}
