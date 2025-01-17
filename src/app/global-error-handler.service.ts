import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService {
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar) {}

  errorHandle(message: string, error?: Error) {
      this._snackBar.open(message, "", {
        duration: this.durationInSeconds * 1000,
      });
      console.log(error);
  }
}
