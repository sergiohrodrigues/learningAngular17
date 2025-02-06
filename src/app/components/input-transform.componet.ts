import { booleanAttribute, Component, Input, numberAttribute, OnInit } from "@angular/core";

@Component({
  selector: 'app-input-transform',
  standalone: true,
  template: `
  @if (showUserAge) {
    <h2>Idade: {{ userAge }}</h2>
  }
  `
})
export class InputTransformComponent implements OnInit {
  @Input({ required: true, transform: numberAttribute }) public userAge!: number;
  @Input({ required: true, transform: booleanAttribute }) public showUserAge!: boolean;

  ngOnInit(): void {
    console.log(typeof this.userAge)
  }
}
