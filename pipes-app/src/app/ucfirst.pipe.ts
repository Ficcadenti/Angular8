import { Pipe, PipeTransform } from '@angular/core';
import { ParseLocation } from '@angular/compiler';

@Pipe({
  name: 'ucfirst'
})
export class UcfirstPipe implements PipeTransform {

  transform(value: string): any {
    let aStr = value.split(' ')
      .map((parola: string) => parola.substring(0, 1)
        .toLocaleUpperCase() + parola.substring(1).toLocaleLowerCase());
    return aStr.join(' ');
  }

}
