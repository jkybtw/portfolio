import {
  transition,
  trigger,
  query,
  style,
  animate,
  group
} from '@angular/animations';
export const fadeInAnimation =
  trigger('routeAnimations', [
    transition('* => *', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' })),
      group([
        query(':enter', [
          style({ opacity: 0, right: '3%' }),
          animate('1s 0.5s ease-out', style({ opacity: 1, right: '0' }))
        ]),
        query(':leave', [
          style({ opacity: 1, left: '0' }),
          animate('0.5s ease-out', style({ opacity: 0, left: '3%' }))
        ]),
      ])
    ])
  ]
);
