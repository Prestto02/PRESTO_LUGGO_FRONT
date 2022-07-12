import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SeparedComaColorBg',
})
export class SeparedComaColorBg implements PipeTransform {
  transform(value: any, arg: any): any {
    const valueOf = value.split(',');
    if (arg === 'colors') return valueOf[0];
    return valueOf[1];
  }
}
