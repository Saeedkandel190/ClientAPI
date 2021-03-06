import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { appendFile } from 'fs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    intercept(
        req: import('@angular/common/http').HttpRequest<any>,
        next: import('@angular/common/http').HttpHandler
    ): import ('rxjs').Observable<import('@angular/common/http').HttpEvent<any>>{

        return next.handle(req).pipe(
            catchError(error=>{
                if(error.status===401)
                return throwError(error.statusText);

                if(error instanceof HttpErrorResponse)
                {
                    const appError = error.headers.get('Application-Error');
                    if(appError)
                    return throwError(appError);

                    const serverError = error.error;
                    
                    let modalStateError = '';
                    if( serverError.errors && typeof serverError.errors === 'object')
                    {
                        for(const key in serverError.errors)
                        {
                            if(serverError.errors[key])
                            {
                                modalStateError += serverError.errors[key] + '\n';
                            }
                        }

                    }
                    return throwError(modalStateError || serverError || 'Server unhandled excpetion error');
                }
            })
        )
    }
}

export const HttpInterceptorProvider={
    provide: HTTP_INTERCEPTORS,
    useClass : ErrorInterceptor,
    multi: true
};