import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'roundNum'
})
export class RoundNumPipe implements PipeTransform{

    transform(value: number): string {
        return value.toFixed(0)
    }

}