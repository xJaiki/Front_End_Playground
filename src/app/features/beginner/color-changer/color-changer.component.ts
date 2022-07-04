import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppData } from '../../../AppData';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css']
})
export class ColorChangerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = new AppData('#b2dfff', '#3da9fc');

  setColor1(newColor: any) {
    document.documentElement.style.setProperty('--color1', newColor)
  }
  setColor2(newColor: any) {
    document.documentElement.style.setProperty('--color2', newColor)
  }



/*
  @ViewChild("background") background!: ElementRef;
  changeColor(){
    console.log(color)
  }
*/
}
