import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpuppercase'
})
export class CpuppercasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}
