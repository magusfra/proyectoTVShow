import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() rutaPortada: string = ""
  @Input() nombre: string = ""
  @Input() datos: string = ""
  @Input() enlaceWikipedia: string = ""
}
