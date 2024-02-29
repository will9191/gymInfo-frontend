import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ExerciseService } from '../../../services/exercise.service';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss',
})
export class ExerciseComponent implements OnInit {
  constructor(private exerciseService: ExerciseService) {}

  @Input() id = 0;

  exercise: any;

  ngOnInit(): void {
    this.getExerciseById();
  }

  getExerciseById() {
    this.exerciseService.getExerciseById(this.id).subscribe({
      next: (data: any) => {
        this.exercise = data;
        console.log(data);
        console.log(this.id);
      },
    });
  }
}
