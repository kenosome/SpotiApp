import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showImage'
})
export class ShowImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let noImage:string = "assets/img/noimage.png";

    if (!value) {
      return noImage;
    }

    return (value.length > 1) ? value[1].url : noImage;
  }

}
