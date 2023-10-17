import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css'],
})
export class AnswersComponent {
  @Input() options = [''];
  @Input() index = 0;
  @Output() newAnswer = new EventEmitter<object>();

  /**
   * Emit update answer event to parent
   *
   * @param {number} index
   * @param {number} key
   */
  updateAnswers(index: number, key: number) {
    let answer = { [index]: key };
    this.newAnswer.emit(answer);
  }
}
