import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTopBarComponent } from './table-top-bar.component';

describe('TableTopBarComponent', () => {
  let component: TableTopBarComponent;
  let fixture: ComponentFixture<TableTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTopBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
