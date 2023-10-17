import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent {
  @Input() score: number = 0;
  @Input() questionLength: number = 0;
  @Input() email: string | null = '';
  @Output() retryEmit = new EventEmitter<object>();

  /**
   * Allow user to retry the test
   */
  retry() {
    this.retryEmit.emit();
  }
}
