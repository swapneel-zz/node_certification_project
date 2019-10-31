import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): number {
    var ageDifMs = Date.now() - new Date(value).getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
