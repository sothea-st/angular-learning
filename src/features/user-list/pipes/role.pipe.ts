import { PipeTransform , Pipe} from "@angular/core";
@Pipe({
    name: 'roleFormat',
    standalone: true
  })
export class RolePipe implements PipeTransform {
    transform(value: string):string {
        switch(value) {
            case 'admin': return 'Administrator';
            case 'user': return 'Regular user';
            case 'editor': return 'Content editor';
            default: return 'Unknown';
        }
    }
}