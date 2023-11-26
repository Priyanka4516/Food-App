import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() logo:string="https://flogginimages.s3.ap-south-1.amazonaws.com/brands/brands_37_1653391775.9605415.png";


}
