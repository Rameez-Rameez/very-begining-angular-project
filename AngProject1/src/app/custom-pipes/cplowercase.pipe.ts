import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cplowercase'
})
export class CplowercasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace('Mr.','*');
  }

}
