import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'cellphone'
})
export class CellphonePipe implements PipeTransform{

    transform(value: number): string {
        let numbers = value.toString()
        return `+7-(${numbers[0]}${numbers[1]}${numbers[2]})-${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}-${numbers[8]}${numbers[9]}`
    }

}