import { Component } from '@angular/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',

})
export class ProjectsComponent {
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
}
