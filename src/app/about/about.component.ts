import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AboutComponent {

}
