import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() location:string="Aerocity, New Delhi";

  @Input() logo:string="https://flogginimages.s3.ap-south-1.amazonaws.com/brands/brands_37_1653391775.9605415.png";

}
