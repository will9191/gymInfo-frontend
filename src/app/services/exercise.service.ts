import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndpoint } from '../constants/constants';
import { Observable } from 'rxjs';
import { ExerciseResponse } from '../interfaces/exercise';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  constructor(private http: HttpClient) {}

  getAllExercises(): Observable<ExerciseResponse> {
    return this.http.get<ExerciseResponse>(
      `${apiEndpoint.ExerciseEndpoint.getAllExercises}`
    );
  }

  getExercisesBySearch(
    name: string,
    category?: string
  ): Observable<ExerciseResponse> {
    console.log();
    return this.http.get<ExerciseResponse>(
      `${apiEndpoint.ExerciseEndpoint.getExercisesBySearch}?name=${name}&category=${category}`
    );
  }

  getExerciseById(id: number): Observable<ExerciseResponse> {
    console.log();
    return this.http.get<ExerciseResponse>(
      `${apiEndpoint.ExerciseEndpoint.getExerciseById}/${id}`
    );
  }
}
