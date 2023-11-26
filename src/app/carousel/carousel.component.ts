import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() source:string[]=["https://im.whatshot.in/img/2020/Jul/6-1595372033.jpg","https://www.hotelierindia.com/public/styles/landscape/public/images/2020/01/01/Copy-of-Copy-of-Copy-of-FNP-CHROMED-7923.jpg?itok=toJHmnkx","https://assets.gqindia.com/photos/5d4445023519ce0008e651c0/16:9/w_2580,c_limit/virat%20kohli%20delhi%20restaurant%20one8%20commune.jpg"];

  present:number=0;
  PreviousImage(){
    this.present=this.present-1;
    if(this.present<0){
      this.present=this.source.length-1;
    }
  };

  NextImage(){
    this.present=this.present+1;
    if(this.present>this.source.length-1){
      this.present=0;
    }

  };




}
