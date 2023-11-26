import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() dish:string="https://tse1.mm.bing.net/th?id=OIP.MJbVoJnRsuMXD4Gq5EKknwHaEV&pid=Api&P=0&h=180";

}
