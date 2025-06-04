import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string , maxLength: number = 130 ): string {
    if( !value ) return '';
    return value.length > maxLength ? value.slice(0,maxLength)+ '...' : value; 
  }

}
