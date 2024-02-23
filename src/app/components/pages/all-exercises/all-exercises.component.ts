import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../../services/exercise.service';

@Component({
  selector: 'app-all-exercises',
  standalone: true,
  imports: [],
  providers: [ExerciseService],
  templateUrl: './all-exercises.component.html',
  styleUrl: './all-exercises.component.scss',
})
export class AllExercisesComponent implements OnInit {
  constructor(private exerciseService: ExerciseService) {}

  data: any;

  ngOnInit(): void {
    this.getAllExercises();
  }

  getAllExercises() {
    this.exerciseService.getAllExercises().subscribe({
      next: (data: any) => {
        this.data = data;
        console.log(data);
      },
    });
  }
}
