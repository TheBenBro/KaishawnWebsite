import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-content',
  templateUrl: './content.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './content.component.css',
})
export class ContentComponent {
}
