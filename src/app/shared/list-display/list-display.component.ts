import { Component, Input } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent {

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
