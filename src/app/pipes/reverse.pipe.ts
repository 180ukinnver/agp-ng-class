import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    // console.log(value, args);
    // let array = value.split('').reverse();
    // return array.slice(args[0], args[1]).join('');
    return moment(value).format("YYYY.MM.DD");
  }

}
