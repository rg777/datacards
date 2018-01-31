import {Component,Input} from '@angular/core';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})
export class CardComponent {

  @Input() card_data: any;
  @Input() tile: any;
  
  constructor(){
  }



}
