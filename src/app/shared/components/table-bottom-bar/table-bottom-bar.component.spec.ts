import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBottomBarComponent } from './table-bottom-bar.component';

describe('TableBottomBarComponent', () => {
  let component: TableBottomBarComponent;
  let fixture: ComponentFixture<TableBottomBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBottomBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
