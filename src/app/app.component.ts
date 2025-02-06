import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTransformComponent } from "./components/input-transform.componet";

export interface User {
  name: string,
  age: number,
  profession: string,
  id: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTransformComponent, InputTransformComponent],
  template: `
    <app-input-transform [user]="userDatasList[0]"/>
  `,
  styleUrls: []
})
export class AppComponent {
  renderBlock = false;
  title = 'learningAngular17';

  userDatasList: Array<User> = [
    { age: 20, name: 'Marcos', profession: 'Software Developer', id: '123'},
    { age: 30, name: 'Marcelo', profession: 'Software Developer', id: '456'},
    { age: 40, name: 'Carlos', profession: 'Scrum Master', id: '789'},
    { age: 30, name: 'Maria', profession: 'UX Designer', id: '123'},
  ]
}
