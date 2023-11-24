import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'genderSalutation',
  standalone: true
})
export class GenderSalutationPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if (gender.toLowerCase() === 'male') {
      return 'Mr. '   + name;
    } else if (gender.toLowerCase() === 'female') {
      return 'Miss. '  + name;
    } else {
      return name;
    }
  }
}

