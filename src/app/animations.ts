import { trigger, transition, animate, state, style, group, query, animateChild } from '@angular/animations';

// export const bananaAnimations = trigger('animBanana', [
//         state('active', style({
//             backgroundColor: 'yellow',
//             opacity: 1
//         })),
//         state('inactive', style({
//             opacity: 0
//         })),
//         transition('active <=> inactive', [animate(600)])
//     ]);
    // export const bananaAnimations = trigger('animBanana', [
    //     transition(':enter', [style({
    //         opacity: 0
    //     }), animate(600)]),
    //     transition(':leave', [animate(1000),
    //     style({
    //         opacity: 0
    //     })
    // ])
    // ]);
    export const bananaAnimations = trigger('animBanana', [
        transition(':enter', [
            group([
                animate(1000, style({
                    opacity: 1
                })),
                animate(1000, style({
                    position: 'absolute',
                    right: 0
                }))
            ])
        ]),
        transition(':leave', [animate(1000),
            style({
                opacity: 0
            })
        ])
    ]);

    export const animButton = trigger('animButton', [
        transition('true <=> false', [
                animate(200, style({transform: 'scale(1.5)'})),
                animate(200, style({transform: 'scale(1)'}))
            ]
        )
    ]);

    export const routeAnimations = trigger('routeAnimations', [
        transition('Banana <=> Car', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
            })
          ]),
          query(':enter', [
            style({ left: '-100%'})
          ]),
          query(':leave', animateChild()),
          group([
            query(':leave', [
              animate('700ms ease-out', style({
                left: '80%',
                opacity: 0,
                transform: 'scale(0.3)'
                }))
            ]),
            query(':enter', [
              animate('700ms ease-out', style({
                  left: '0%',
                  opacity: 1
                }))
            ])
          ]),
          query(':enter', animateChild()),
        ])
      ]);
