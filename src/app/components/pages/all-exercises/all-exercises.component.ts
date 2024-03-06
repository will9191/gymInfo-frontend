import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../../services/exercise.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgArrayPipesModule } from 'ngx-pipes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-exercises',
  standalone: true,
  imports: [CommonModule, FormsModule, NgArrayPipesModule, RouterModule],
  providers: [ExerciseService],
  templateUrl: './all-exercises.component.html',
  styleUrl: './all-exercises.component.scss',
})
export class AllExercisesComponent implements OnInit {
  constructor(private exerciseService: ExerciseService) {}

  categoryTerm: string = '';

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
