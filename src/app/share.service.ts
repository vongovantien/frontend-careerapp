import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { Employer } from './models/employer/employer.model.';
@Injectable({
    providedIn: 'root',
})
export class ShareService {
    readonly baseUrl = 'http://localhost:8000';
    readonly PhotoUrl = 'https://backend-careerapp.herokuapp.com/media';
    constructor(private http: HttpClient) {}

    getEmployerList(): Observable<any> {
        return this.http.get<any>(this.baseUrl + '/employers/');
    }
    getEmployerById(id: any): Observable<Employer> {
        return this.http.get(this.baseUrl + `/employers/${id}`);
    }
    addEmployer(data: any): Observable<any> {
        return this.http.post(this.baseUrl + '/employers/', data);
    }
    updateEmployer(id: any, data: any): Observable<any> {
        return this.http.put(this.baseUrl + `/employers/${id}`, data);
    }
    deleteEmployer(id: any): Observable<any> {
        return this.http.delete(this.baseUrl + '/employers/');
    }
    UploadPhoto(val: any) {
        return this.http.post(this.baseUrl + '/employers/', val);
    }

    errorMgmt(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }
}
