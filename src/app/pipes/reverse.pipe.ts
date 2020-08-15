import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: String, ...args: number[]): unknown {
    console.log(value, args);
    let array = value.split('').reverse();
    return array.slice(args[0], args[1]).join('');
  }

}
