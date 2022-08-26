import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})

export class ScorePipe implements PipeTransform {
  /**
   * {{scoreVal|score}}
   * @param score
   * @returns +120 ou -50
   */
  transform(score: number): string {
    let display: string = '';
    if (score >= 0) {
      display = `+${Math.abs(score)}`;
    }
    else {
      display = `-${Math.abs(score)}`;
    }
    return display;
  }

}
