import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; grid-area: 1rem;">
<button (click)="renderBlock = true">Renderizar título</button>
      @defer (when renderBlock){
        <h3 style="color: red;">Element rendered on interaction</h3>
      } @placeholder {
        <h3>Conteudo inicial do placeholder</h3>
      }
    </div>
  `,
  styleUrls: []
})
export class AppComponent {
  renderBlock = false;
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
