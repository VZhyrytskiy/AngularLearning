import { Pipe, PipeTransform } from '@angular/core';
import { SortService } from '../../core/services/sort.service';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  constructor(private sortService: SortService) {}

  transform(arr: object[], sortBy: string, descending: boolean = true): any {
    if (!sortBy) {
      return arr;
    }

    if (descending) {
      return arr.sort((a, b) => this.sortService.sortDesc(this.getSortingValue(a, sortBy), this.getSortingValue(b, sortBy)));
    } else {
      return arr.sort((a, b) => this.sortService.sortAsc(this.getSortingValue(a, sortBy), this.getSortingValue(b, sortBy)));
    }
  }

  private getSortingValue(item: any, sortBy: string) {
    let value = item;

    if (sortBy.includes('.')) {
      const props = sortBy.split('.');
      for (const prop of props) {
        value = value[prop];
      }
    } else {
      value = item[sortBy];
    }

    return value;
  }
}
