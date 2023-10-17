import { Component } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  questions: Question[] = [];
  category: Category | null = null;
  answers: any[] = [];
  score: number = 0;
  categoryId: string | null = '';
  show_score: boolean = false;
  email: string | null = '';

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  /**
   * Initiate todoService when component is initialized
   */
  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.email = this.route.snapshot.queryParamMap.get('email');

    this.categoryService.find(this.categoryId!).subscribe((category) => {
      if (Object.keys(category).length === 0) {
        this.router.navigate(['/categories']);
      }
    });

    this.questionService
      .allWhereCategory(this.categoryId!)
      .subscribe((questions) => (this.questions = <Question[]>questions));
  }

  /**
   * Update the answers table
   *
   * @param {number} index
   * @param {object} answer
   */
  updateAnswers(index: number, answer: object) {
    this.answers.forEach((item, item_index) => {
      if (Object.keys(item).includes(index.toString())) {
        this.answers[item_index] = answer;
      }
    });
    if (!this.answers.includes(answer)) {
      this.answers.push(answer);
    }
  }

  /**
   * Handle the form submission
   */
  submit() {
    this.answers.forEach((answer) => {
      let question_index = Object.keys(answer)[0];
      let question = this.questions[+question_index];
      if (question.answer == answer[question_index]) {
        this.score++;
      }
    });
    this.show_score = true;
  }

  /**
   * Allow user to retry the test
   */
  retry() {
    this.score = 0;
    (this.answers = []), (this.show_score = false);
  }
}
