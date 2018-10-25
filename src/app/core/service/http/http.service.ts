import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError, tap, timeout, retry } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Result } from '@shared';

//设置请求头
const headers = new HttpHeaders().set(
  "Content-type", "application/json; charset=UTF-8"
);

//设置查询参数
// const params = new HttpParams().set(...);

@Injectable()
export class HttpService {

  private test: boolean = false;
  private appUrl: string = this.test ? 'api' : '';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get请求
   * @param url 
   */
  public get(url: string): Observable<any> {
    return this.http.get(this.appUrl + url)
      .pipe(
        // map((result: Result<any>)=>{
        //   debugger
        //   console.log(result);
        //   return result;
        // }),
        timeout(3000),
        retry(2),
        catchError(this.handleError(url, {}))
      );
  }

  /**
   * Post请求
   * @param url 
   * @param body 
   */
  public post(url: string, body: any): Observable<any> {
    return this.http.post(url, body, { headers })
      .pipe(
        map((result: Result<any>)=>{
          return result;
        }),
        timeout(3000),
        catchError(this.handleError(url, {}))
      );
  }

  /**
   * Delete请求
   * @param url 
   * @param body 
   */
  public delete(url: string, operation: any): Observable<any> {
    return this.http.delete(url, { headers })
      .pipe(
        map((result: Result<any>)=>{
          return result;
        }),
        timeout(3000),
        catchError(this.handleError(url, {}))
      );
  }

  /**
   * Put请求
   * @param url 
   * @param body 
   */
  public put(url: string, body: any): Observable<any> {
    return this.http.put(url, body, { headers })
      .pipe(
        map((result: Result<any>)=>{
          return result;
        }),
        timeout(3000),
        catchError(this.handleError(url, {}))
      );
  }

  /**
   * JsonP跨域,后台需要修改相关配置
   * @param url 
   * @param callback 
   */
  public jsonP(url: string, callback?: string) {
    return this.http.jsonp(url, callback ? callback : "callback");
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
