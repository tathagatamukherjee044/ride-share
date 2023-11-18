import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-item',
  templateUrl: './buyer-item.component.html',
  styleUrls: ['./buyer-item.component.css']
})
export class BuyerItemComponent implements OnInit{

  @Input() trip : any

  ngOnInit(){

  }

}
