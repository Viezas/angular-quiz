import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private lastId: number = 4;
  private questions: Question[] = [];

  constructor(private http: HttpClient) {}

  /**
   * Return all questions
   *
   * @returns {Question[]}
   */
  all() {
    return this.http.get('http://localhost:3000/questions');
  }

  /**
   * Return all questions for a given category id
   *
   * @returns {Question[]}
   */
  allWhereCategory(categoryId: string) {
    return this.http.get('http://localhost:3000/questions?categoryId='+categoryId);
  }

  /**
   * Create a new question
   *
   * @param {string} title
   * @param {number} answer
   * @param {number} categoryId
   * @param {string[]} options
   * @param {string?} video
   * @param {image?} video
   */
  create(
    title: string,
    answer: number,
    options: string[],
    categoryId: number,
    video?: string,
    image?: string
  ): void {
    this.lastId += 1;
    const newQuestion = new Question(
      this.lastId,
      title,
      answer,
      categoryId,
      options,
      video,
      image
    );
    this.questions.push(newQuestion);
  }
}
