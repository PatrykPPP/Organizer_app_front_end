import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Weather {

  public tempInC: number;
  public weatherIcon: string;

  constructor(
  ) { }
}
