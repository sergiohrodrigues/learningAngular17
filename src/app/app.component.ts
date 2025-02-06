import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; grid-area: 1rem;">
      @for (user of userDatasList; track $index) {
        @switch(user.age){
          @case (20) {
            <span style="color: blue;">{{ user.name }} is {{ user.profession }} and is 20 years old</span>
          }
          @case (30) {
            <span style="color: red;">{{ user.name }} is {{ user.profession }} and is 20 years old</span>
          }
          @case (40) {
            <span style="color: brown;">{{ user.name }} is {{ user.profession }} and is 20 years old</span>
          }
          @default {
            <span>{{ user.name }} is {{ user.profession }} and your age is {{ user.age }}</span>
          }
        }
      } @empty {
        <span style="color: red;">Don't have datas to show</span>
      }
    </div>
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'learningAngular17';

  userDatasList: Array<{
    name: string,
    age: number,
    profession: string,
    id: string
  }> = [
    { age: 20, name: 'Marcos', profession: 'Software Developer', id: '123'},
    { age: 30, name: 'Marcelo', profession: 'Software Developer', id: '456'},
    { age: 40, name: 'Carlos', profession: 'Scrum Master', id: '789'},
    { age: 30, name: 'Maria', profession: 'UX Designer', id: '123'},
  ]
}
