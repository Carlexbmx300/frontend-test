import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: string, key:string): any[] {
    if (!items || !filter) {
      return items;
    }

    return items.filter((item) => item[key].toLowerCase().includes(filter.toLowerCase()));
  }
}
