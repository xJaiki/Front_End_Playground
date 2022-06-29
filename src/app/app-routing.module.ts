import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './features/beginner/calculator/calculator.component';
import { ColorChangerComponent } from './features/beginner/color-changer/color-changer.component';
import { DigitalClockComponent } from './features/beginner/digital-clock/digital-clock.component';
import { RandomQuotesComponent } from './features/beginner/random-quotes/random-quotes.component';
import { WeatherPageComponent } from './features/beginner/weather-page/weather-page.component';
import { WordCounterComponent } from './features/beginner/word-counter/word-counter.component';
import { HomeComponent } from './features/home/home.component';
import { InfoComponent } from './features/info/info.component';

const routes: Routes = [{
  path: "",
  pathMatch: "full",
  redirectTo: "home",
},{
  path: "home",
  component: HomeComponent,
},{
  path: "info",
  component: InfoComponent,
},{
  path: "calculator",
  component: CalculatorComponent
},{
  path: "colorChanger",
  component: ColorChangerComponent
},{
  path: "digitalClock",
  component: DigitalClockComponent
},{
  path: "randomQuotes",
  component: RandomQuotesComponent
},{
  path: "weather",
  component: WeatherPageComponent
},{
  path: "wordCounter",
  component: WordCounterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
