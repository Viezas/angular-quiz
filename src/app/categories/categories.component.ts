import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categories: Category[] = [];
  query: String = '';

  constructor(private categoryService: CategoryService) {}

  /**
   * Initiate categoryService when component is initialized
   */
  ngOnInit(): void {
    this.categoryService
      .all()
      .subscribe((categories) => (this.categories = <Category[]>categories));
  }

  filter() {
    this.categoryService
      .filter(this.query)
      .subscribe((categories) => (this.categories = <Category[]>categories));
  }

  resetFilter() {
    this.categoryService
      .all()
      .subscribe((categories) => (this.categories = <Category[]>categories));
  }
}
