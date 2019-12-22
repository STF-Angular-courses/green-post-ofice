import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64'
})
export class Base64Pipe implements PipeTransform {

  transform(base64: string, ...args: any[]): string {
      return `data:image/jpeg;base64,${base64}`;
  }

}
