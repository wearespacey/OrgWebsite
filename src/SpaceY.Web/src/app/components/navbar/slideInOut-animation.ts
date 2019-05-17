import { trigger, state, transition, style, animate } from '@angular/animations';
export const SlideInOutAnimation = trigger('slideInOut',
[
  state('void', style({
      opacity: 0,
      transform: 'translateY(-100%)'
    })
  ),
  transition('void => *', [
    style({transform: 'translateY(-100%)'}),
    animate('1000ms ease-in', style({transform: 'translateY(0%)'}))
  ]),
  transition('* => void', [
    style({transform: 'translate(0%)'}),
    animate('500ms ease-in', style({transform: 'translateY(-100%)'}))
  ])
]);
