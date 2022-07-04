import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorChangerComponent } from './features/beginner/color-changer/color-changer.component';
import { CalculatorComponent } from './features/beginner/calculator/calculator.component';
import { DigitalClockComponent } from './features/beginner/digital-clock/digital-clock.component';
import { WordCounterComponent } from './features/beginner/word-counter/word-counter.component';
import { RandomQuotesComponent } from './features/beginner/random-quotes/random-quotes.component';
import { WeatherPageComponent } from './features/beginner/weather-page/weather-page.component';
import { HomeComponent } from './features/home/home.component';
import { InfoComponent } from './features/info/info.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangerComponent,
    CalculatorComponent,
    DigitalClockComponent,
    WordCounterComponent,
    RandomQuotesComponent,
    WeatherPageComponent,
    HomeComponent,
    InfoComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
