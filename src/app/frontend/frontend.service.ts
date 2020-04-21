import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FrontendService {

  serverUrl = environment.baseUrl;
  errorData: {};
  constructor(private http: HttpClient) { }

  getPage(data) {
    return this.http.get<PageUs>(this.serverUrl+'api/page/'+data).pipe(
      catchError(this.handleError)
    );
  }

  getService() {
    return this.http.get<HomePage>(this.serverUrl+'api/services').pipe(
      catchError(this.handleError)
    );
  }

  getWorks() {
    return this.http.get<HomePage>(this.serverUrl+'api/works').pipe(
      catchError(this.handleError)
    );
  }

  getHome() {
    return this.http.get<HomePage>(this.serverUrl+'api/homes').pipe(
      catchError(this.handleError)
    );
  }

  loginService(inpuData) {
    return this.http.post<any>(this.serverUrl+'api/login',inpuData).pipe(
      catchError(this.handleError)
    );
  }

  get_blog_comments() {
    return this.http.get<any>(this.serverUrl+'api/blog_comments').pipe(
      catchError(this.handleError)
    );
  }

  insert_blog_comments(inpuData) {
    return this.http.post<any>(this.serverUrl+'api/blog_comments',inpuData).pipe(
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

interface PageUs {
  id: string;
  title: string;
  description: string;
}


interface HomePage {
  id: string;
  title: string;
  image: string;
  description: string;
}
