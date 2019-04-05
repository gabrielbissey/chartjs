import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dumb-chart-form',
  templateUrl: './dumb-chart-form.component.html',
  styles: [
    '.formControl { margin-top: 10px; }'
  ]
})
export class DumbChartFormComponent {

  @Input() chartForm: FormGroup;

  @Output() toggleMultipleDataPlots = new EventEmitter();
  @Output() chartFormSubmitted = new EventEmitter<FormGroup>();

}
