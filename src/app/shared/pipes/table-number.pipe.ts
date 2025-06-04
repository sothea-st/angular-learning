import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageNumber'
})
export class PageNumberPipe implements PipeTransform {


  transform(pageNumber: number) {
    if( !pageNumber ) return 0;
    return pageNumber;
  }


}
