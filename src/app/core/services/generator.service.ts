import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  private characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  constructor() { }

  generate(length: number): any {
    let result = '';

    for ( let i = 0; i < length; i++ ) {
        result += this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    }
    return result;
  }
}
