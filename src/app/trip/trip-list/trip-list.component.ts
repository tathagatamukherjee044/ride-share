import { Component, Input } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent {

  @Input()tripList: any = []

  constructor(private tripService : TripService){}

 ngOnInit() {
//     this.tripService.getTripsForBuyer().subscribe(data =>{
//       this.tripList = data
//   })
    console.log(this.tripList);
  }

  showlist(){
    console.log(this.tripList);
    
  }
}
