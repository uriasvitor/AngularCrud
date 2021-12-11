import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

 const apiUrl = "http://localhost:3000/produtos";

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Tutorial[]>{
    return this.http.get<Tutorial[]>(apiUrl);
  }

  get(id:any):Observable<any>{
    return this.http.get(`${apiUrl}/${id}`);
  }

  create(data:any): Observable<any>{
    return this.http.post(apiUrl,data);
  }

  update(id:any,data:any): Observable<any>{
    return this.http.put(`${apiUrl}/${id}`,data);
  }

  delete(id:any):Observable<any>{
    return this.http.delete(apiUrl);
  }

  deleteAll():Observable<any>{
    return this.http.delete(`${apiUrl}/produtos`);
  }

  findByTitle(title:any):Observable<Tutorial[]>{
    return this.http.get<Tutorial[]>(`${apiUrl}?title=${title}`)
  }
}
