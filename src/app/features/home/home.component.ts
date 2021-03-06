import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger(
      'openFolder',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.2s ease-out', 
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('0.2s ease-in',
              style({opacity: 0 }))
          ]
        )
      ]
    ),
    trigger(
      'openFolderBackground',
      [
        transition(
          ':enter',
          [
            style({opacity: 0, offset: 2}),
            animate('0.2s ease-out', 
              style({opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({opacity: 1, offset: 2}),
            animate('0.2s ease-in',
              style({opacity: 0}))
          ]
        )
      ]
    ),
    trigger(
      'openFolderIcons',
      [
        transition(
          ':enter',
          [
            style({opacity: 0}),
            animate('0.2s ease-out', 
              style({opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({opacity: 1}),
            animate('0.2s ease-in',
              style({opacity: 0}))
          ]
        )
      ]
    )
  ]
})

export class HomeComponent implements OnInit {

  showFolderPlayground = false;
  showFolderSocials = false;
  showInfo = false;

  constructor() { }

  ngOnInit(): void {
  }

}
