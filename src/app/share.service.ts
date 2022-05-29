import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { Employer } from './models/employer/employer.model.';
@Injectable({
    providedIn: 'root',
})
export class ShareService {
    readonly baseUrl = 'https://backend-careerapp.herokuapp.com';
    readonly PhotoUrl = 'https://backend-careerapp.herokuapp.com/media';
    constructor(private http: HttpClient) {}

    getEmployerList(): Observable<Employer[]> {
        return this.http.get<Employer[]>(this.baseUrl + '/employers/');
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
}
