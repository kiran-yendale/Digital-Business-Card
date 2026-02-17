import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-preview',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.css']
})
export class CardPreviewComponent {

  @Input() template: string = 'modern';

  @Input() user:any = {

    name: 'Kiran Yendale',
    role: 'Software Engineer',
    phone: '+91 9999999999',
    email: 'kiran@email.com'
  };
}
