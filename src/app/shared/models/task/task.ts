import { Injectable } from '@angular/core';
import { Weather } from '../weather/weather';

@Injectable({
  providedIn: 'root'
})
export class Task {

  public id: number;
  public title: string;
  public description: string;
  public localDateTime: Date;
  public completed: boolean;

  constructor(
    public weather: Weather) { }
}
