import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onewaydatabinding';
  name='enter name';
  address='enter address';
  id='enter id';


  itemImageUrl='../assets/Image20230901165727.jpg';
  itemImage1='../assets/Image20230901165821.jpg';
  isUnchanged=false;
  isunchanged1=false;
  width='300px';
  height='300px';
  value='red';
  clsName = 'c1';
  callFunction(){
    console.log("this is event binding in angular...");
    console.log("welcome");
  }

    call1(){

 console.log("this is button test");
 console.log("welcome2");

    }

    user={

     userid:'13',
     username:'debu'


    };

    hrefval='https://www.pcsglobal.in'
  }

