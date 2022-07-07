import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
API_CATEGORY = environment.API_LOCAL + 'category';
  constructor(private http: HttpClient) { }
  findAllCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(this.API_CATEGORY + '/list');
  }
createCategory(category: Category): Observable<any>{
    return this.http.post<any>(this.API_CATEGORY + '/create', category);
}
}
