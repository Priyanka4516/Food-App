import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {
  @Input() color:string="rgb(124, 124, 208)";
  @Input() text_color:string="white";
  @Input() lists:string[]=["Pearl Barley Risotte","Cheese Burst Pizza","Veggie Burger","Blueberry Mocktail"];
  @Input() price:number=1551;
  @Input() seating:string="Double Seatings";
}
