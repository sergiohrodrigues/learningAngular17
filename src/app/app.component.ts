import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTransformComponent } from "./components/input-transform.componet";
import { of } from 'rxjs';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

export interface User {
  name: string,
  age: string,
  profession: string,
  id: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTransformComponent, InputTransformComponent],
  template: `
    <app-input-transform [userAge]="userDatasList[0].age" [showUserAge]="showUserAge"/>
  `,
  styleUrls: []
})
export class AppComponent implements OnInit {
  destroyedRef = inject(DestroyRef);
  showUserAge = "true"
  renderBlock = false;
  title = 'learningAngular17';


  userDatasList: Array<User> = [
    { age: '20', name: 'Marcos', profession: 'Software Developer', id: '123'},
    { age: '30', name: 'Marcelo', profession: 'Software Developer', id: '456'},
    { age: '40', name: 'Carlos', profession: 'Scrum Master', id: '789'},
    { age: '30', name: 'Maria', profession: 'UX Designer', id: '123'},
  ]

  userDatas$ = of(this.userDatasList);

  ngOnInit(): void {
    this.userDatas$
    .pipe(takeUntilDestroyed(this.destroyedRef))
    .subscribe({
      next: (response) => {
        console.log('User Datas in Observable', response)
      }
    })
  }
}
