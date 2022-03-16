import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/shared/models/user';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: Array<IUser>, args: String): Array<IUser> {
    if (!value) return [];
    if (!args) return value;
    const searchInput = args.toLowerCase();
    return value.filter(ele => {
      return ele.name.toLowerCase().includes(searchInput)
        || ele.username.toLowerCase().includes(searchInput)
        || ele.email.toLowerCase().includes(searchInput)
        || ele.phone.toLowerCase().includes(searchInput);
    });
  }

}
