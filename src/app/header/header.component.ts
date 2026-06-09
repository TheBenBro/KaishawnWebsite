import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeaderComponent {

}
