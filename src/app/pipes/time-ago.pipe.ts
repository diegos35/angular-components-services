import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns' //https://date-fns.org/v2.28.0/docs/formatDistance#

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(date: Date): string {
    return formatDistance(new Date(), date );
  }

}
