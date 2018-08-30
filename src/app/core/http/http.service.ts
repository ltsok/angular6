import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap  } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Hero } from "../../mock/hero.model";

@Injectable()
export class HttpService {
  private appUrl: string = 'api';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get请求
   * @param url 
   */
  public get(url:string): Observable<any> {
    return this.http.get(this.appUrl + url)
      .pipe(
        catchError(this.handleError(url,[]))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
