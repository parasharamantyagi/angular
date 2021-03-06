import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  serverUrl = environment.baseUrl;
  errorData: {};
  constructor(private http: HttpClient) { }

  getWorks() {
    return this.http.get<any>(this.serverUrl+'api/all_works').pipe(
      catchError(this.handleError)
    );
  }

  getService() {
    return this.http.get<HomePage>(this.serverUrl+'api/services').pipe(
      catchError(this.handleError)
    );
  }

  update_image(input) {
    return this.http.post<any>(this.serverUrl+'api/addwork',input).pipe(
      catchError(this.handleError)
    );
  }

  update_work_status(input) {
    return this.http.post<any>(this.serverUrl+'api/update_work_status',input).pipe(
      catchError(this.handleError)
    );
  }

  delete_work_status(input) {
    return this.http.post<any>(this.serverUrl+'api/delete_work_status',input).pipe(
      catchError(this.handleError)
    );
  }

  get_work_from_id(input) {
    return this.http.get<any>(this.serverUrl+'api/get_work_from_id/'+input).pipe(
      catchError(this.handleError)
    );
  }

  getHome() {
    return this.http.get<HomePage>(this.serverUrl+'api/homes').pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong,

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}

interface HomePage {
  id: string;
  title: string;
  image: string;
  description: string;
}
