import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryDisplay'
})
export class CategoryDisplayPipe implements PipeTransform {

  transform(value: unknown, ): string {
    if(value == 0) return "Food";
    if(value == 1) return "Construction";
    if(value == 2) return "Office Materials";

    return "";
  }

}
