import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedExercisesComponent } from './searched-exercises.component';

describe('SearchedExercisesComponent', () => {
  let component: SearchedExercisesComponent;
  let fixture: ComponentFixture<SearchedExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchedExercisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchedExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
