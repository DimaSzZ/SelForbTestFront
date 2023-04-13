import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DateService {
  FrontToBack(date: Date | null): string | null {
    if (date != null) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    } else {
      return null;
    }
  }

  BackToClient(date: string): string | null {
    if(date != null) {
      const dateParts = date.split('T')[0].split('-');
      const year = dateParts[0];
      const month = dateParts[1];
      const day = dateParts[2];
      return `${day}-${month}-${year}`;
    }
    else {
      return null;
    }
  }

}
