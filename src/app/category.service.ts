import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private lastId: number = 1;
  private categories: Category[] = [];

  constructor(private http: HttpClient) {}

  /**
   * Return all categories
   *
   * @returns {Question[]}
   */
  all() {
    return this.http.get('http://localhost:3000/categories');
  }

  /**
   * Return all filtered categories
   *
   * @returns {Question[]}
   */
  filter(query: String) {
    return this.http.get('http://localhost:3000/categories?title_like='+query);
  }

  find(categoryId: string) {
    return this.http.get('http://localhost:3000/categories?id='+categoryId);
  }
}
