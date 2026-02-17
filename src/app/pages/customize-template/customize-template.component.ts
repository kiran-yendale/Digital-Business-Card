import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardPreviewComponent } from '../../shared/card-preview/card-preview.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-customize-template',
  standalone: true,
  imports: [CommonModule,CardPreviewComponent,FormsModule],
  templateUrl: './customize-template.component.html',
styleUrls: ['./customize-template.component.css']

})
export class CustomizeTemplateComponent {

templateType:string='modern';

constructor(private route:ActivatedRoute){
  this.templateType = this.route.snapshot.paramMap.get('type')!;
}
userData = {
  name:'Kiran Yendale',
  role:'Software Engineer',
  phone:'+91 9999999999',
  email:'kiran@email.com',
   image:''
};

onImageSelect(event:any){
  const file = event.target.files[0];

  if(file){
    this.userData.image = URL.createObjectURL(file);
  }
}

}
