// fade.animation.ts

import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation =

    trigger('fadeAnimation', [

        transition( '* => *', [

            query(':enter', // Queries entering DOM element
                [
                    style({ opacity: 0 }) 
                ], 
                { optional: true }
            ),

            query(':leave', // Queries leaving DOM element
                [
                    style({ opacity: 1 }),
                    animate('0.2s', style({ opacity: 0 }))
                ], 
                { optional: true }
            ),

            query(':enter', // Queries entering DOM element
                [
                    style({ opacity: 0 }),
                    animate('0.2s', style({ opacity: 1 }))
                ], 
                { optional: true }
            )

        ])

    ]);