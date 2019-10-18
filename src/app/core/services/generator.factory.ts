import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const RandomCharacters = new InjectionToken<number>('RandomCharacters');

export function GeneratorFactory(length: number) {
  return (generator: GeneratorService): string => generator.generate(length);
}
