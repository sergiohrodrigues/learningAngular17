import { Component, Input } from "@angular/core";
import { User } from "../app.component";

function setUserNameTransform(user: User): User {
  return {
    ...user,
    name: user.name.toUpperCase()
  }
}

@Component({
  selector: 'app-input-transform',
  standalone: true,
  template: `
    <h2>User: {{ user.name }}</h2>
    <h2>Idade: {{ user.age }}</h2>
    <h2>Profissão: {{ user.profession }}</h2>
  `
})
export class InputTransformComponent {
  @Input({ required: true, transform: setUserNameTransform }) public user!: User;
}
