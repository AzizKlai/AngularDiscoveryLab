import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, ...args: any): string {
    console.log("piping image ")
    if(!value || /^\s*$/.test(value)) // Utilisation d'une expression régulière pour tester la présence d'autres caractères que des espaces
    return "default.png"
    else
    return value

  }

}
