import { Component, Input, numberAttribute, OnInit } from "@angular/core";

@Component({
  selector: 'app-input-transform',
  standalone: true,
  template: `
    <h2>Idade: {{ userAge }}</h2>
  `
})
export class InputTransformComponent implements OnInit {
  @Input({ required: true, transform: numberAttribute }) public userAge!: number;

  ngOnInit(): void {
    console.log(typeof(this.userAge))
  }
}
