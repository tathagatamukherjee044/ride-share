import { Component } from '@angular/core';
import { UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {

  array = [1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,12,13,14,1,53,4,567,78,1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,12,13,14,1,53,4,567,78,1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,12,13,14,1,53,4,567,78,1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,12,13,14,1,53,4,567,78,1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,12,13,14,1,53,4,567,78,1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,12,13,14,1,53,4,567,78]
  sideToggle = true
  user : any = {}
  constructor(
    private nav : NavController,
    private storageService : StorageService
  ){}

  ngOnInit(){
    this.user = this.storageService.getStorage('user')    
  }

  goTo(page: string | any[] | UrlTree){
    this.nav.navigateRoot(page)
  }
  
  handleChange(e: any) {
    console.log(e);
    switch (e.detail.value){
      
      case 'logout' : 
        this.goTo('/auth/login')
        localStorage.removeItem('token')
    }
  }

  logout(){
    this.goTo('/auth/login')
    localStorage.removeItem('token')
  }

  toogleNav(){
    this.sideToggle = !this.sideToggle
  }
}
