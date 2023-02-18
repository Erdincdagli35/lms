import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Library } from '../models/library';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private baseURL = "http://localhost:8080/libraries";
  private deleteURL = "http://localhost:8080/libraries";

  private addToShelfURL = "http://localhost:8080/libraries/addShelf";
  private removeToShelfURL = "http://localhost:8080/libraries/removeShelf";
  private removeAllShevesURL = "http://localhost:8080/libraries/removeAllShelf";

  constructor(private httpClient: HttpClient) { }

  createLibrary(library: Library): Observable<Object> {
    return this.httpClient.post(this.baseURL, library);
  }

  getLibraryList(): Observable<Library[]> {
    return this.httpClient.get<Library[]>(this.baseURL);
  }

  deleteLibrary(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteURL}/${id}`);
  }

  getLibraryById(id: number): Observable<Library> {
    return this.httpClient.get<Library>(`${this.baseURL}/${id}`);
  }
  
  updateLibrary(library: Library): Observable<Object> {
    return this.httpClient.put(this.baseURL, library);
  }

  addToShelf(id : number, library : Library): Observable<Object>{
    return this.httpClient.post(`${this.addToShelfURL}/${id}`,library);
  }

  removeToShelf(id : number, shelfIds : number[]): Observable<Object>{
    return this.httpClient.delete(`${this.removeToShelfURL}/${id}/${shelfIds}`);
  }

  removeAllShelves(id : number): Observable<Object>{
    return this.httpClient.delete(`${this.removeAllShevesURL}/${id}`);
  }
}