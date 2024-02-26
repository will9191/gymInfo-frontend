import { Component, Input, OnInit } from '@angular/core';
import { ExerciseService } from '../../../services/exercise.service';

@Component({
  selector: 'app-searched-exercises',
  standalone: true,
  imports: [],
  providers: [ExerciseService],
  templateUrl: './searched-exercises.component.html',
  styleUrl: './searched-exercises.component.scss',
})
export class SearchedExercisesComponent implements OnInit {
  @Input() name = '';
  @Input() category = '';

  constructor(private exerciseService: ExerciseService) {}

  data: any;

  ngOnInit(): void {
    this.getExercisesBySearch();
  }

  getExercisesBySearch() {
    this.exerciseService
      .getExercisesBySearch(this.name, this.category)
      .subscribe({
        next: (data: any) => {
          this.data = data;
          console.log(data);
          console.log(
            this.exerciseService.getExercisesBySearch(this.name, this.category)
          );
        },
      });
  }
}
