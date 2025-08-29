import { Component, AfterViewInit } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { Transform } from 'node:stream';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations:[
    trigger('openClose',[
      state('closed', style({opacity: "0", transform: 'translateY(20%)'})),
      state('open', style({opacity: "1", transform: 'translateY(0)'})),
      transition('closed => open', [animate('1s ease-in')])
    ])
  ]
})
export class ProjectsComponent {
  titleState: 'open' | 'closed'='closed';

  prizeFightText = 
  `CODENAME PRIZEFIGHT is a fighting game implemented in a custom OpenGL based C++ engine designed specifically to cater to 3D fighting games. 
  It uses morph target animation to achieve a feel inspired by Tekken 3. It hybridizes aspects of 3D and 2D fighters to create a unique and accessible experience.`;

  captisCrystalliText= `CaptisCrystalli is a third person action game created in UE4. 
  This project was created with a team of around 50 students consisting of either programmers or artists. 
  This project took around 4 months to get to a playable state.`;

  procedural=`This is a tech demo showcasing procedural room generation. This project is creating using Unity and i plan on using this in my game i am creating.`
  inView = false;
  goToExternalUrl(a:string) {
    window.open(a, '_blank', 'noopener,noreferrer')
  }
  ngAfterViewInit(){
    setTimeout( () => {
      this.titleState = 'open';
      }, 100);
  }

}
