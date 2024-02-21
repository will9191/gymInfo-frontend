import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../services/exercise.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [],
  providers: [ExerciseService],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss',
})
export class ExerciseComponent implements OnInit {
  constructor(private exerciseService: ExerciseService) {}

  data: any;

  ngOnInit(): void {
    this.getAllExercises();
    console.log('a');
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
