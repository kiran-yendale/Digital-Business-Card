import { Component } from '@angular/core';
import { CardPreviewComponent } from "../../shared/card-preview/card-preview.component";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [CardPreviewComponent,FormsModule,],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.css'
})


export class TemplatesComponent {
constructor(private router:Router){}

openCustomize(templateType:string){
  this.router.navigate(['/customize', templateType])
}

}
