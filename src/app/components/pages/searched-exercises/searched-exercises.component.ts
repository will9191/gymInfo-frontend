import { Component, OnInit } from '@angular/core';
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
  searchModel: any = {
    name: '',
    category: '',
  };

  constructor(private exerciseService: ExerciseService) {}

  data: any;

  ngOnInit(): void {
    this.getExercisesBySearch();
  }

  getExercisesBySearch() {
    this.exerciseService
      .getExercisesBySearch(this.searchModel.name, this.searchModel.category)
      .subscribe({
        next: (data: any) => {
          this.data = data;
          console.log(data);
          console.log(
            this.exerciseService.getExercisesBySearch(
              this.searchModel.name,
              this.searchModel.category
            )
          );
        },
      });
  }
}
