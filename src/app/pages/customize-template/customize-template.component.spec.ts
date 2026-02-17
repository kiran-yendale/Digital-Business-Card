import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeTemplateComponent } from './customize-template.component';

describe('CustomizeTemplateComponent', () => {
  let component: CustomizeTemplateComponent;
  let fixture: ComponentFixture<CustomizeTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizeTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomizeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
