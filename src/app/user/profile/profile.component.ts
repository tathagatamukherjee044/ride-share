import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user : any = {}
  constructor(
    private storageService : StorageService
  ) {}

  ngOnInit(){
    this.user = this.storageService.getStorage('user')    
  }
}
