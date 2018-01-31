import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-flip',
  template: `
    <div class="tp-wrapper">
      <div class="tp-box" (click)="toggleFlip()" [@flipState]="flip">
        <div class="tp-box__side tp-box__front">Front
        </div>
        <div class="tp-box__side tp-box__back">Back
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .tp-wrapper {
      perspective: 800px;
    }

    .tp-box {
      position: relative;
      width: 200px;
      height: 100px;
      margin: 3rem auto;
      transform-style: preserve-3d;
      transition: transform 1s;
    }
    .tp-box__side {
      width: 100%;
      height: 100%;
      position: absolute;
      backface-visibility: hidden;
      color: #fff;
      text-align: center;
      line-height: 100px;
      font-size: 24px;
      font-weight: 700;
      cursor: pointer;
      user-select: none;
    }
    .tp-box__front {
      background: #f30d36;
    }
    .tp-box__back {
      background: #23262d;
      transform: rotateY(179.9deg);
    }

    `
  ],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class FlipComponent {

  flip: string = 'inactive';
  constructor() {}

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

}
