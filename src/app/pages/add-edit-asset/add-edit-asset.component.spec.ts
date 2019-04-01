import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAssetComponent } from './add-edit-asset.component';

describe('AddEditAssetComponent', () => {
  let component: AddEditAssetComponent;
  let fixture: ComponentFixture<AddEditAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
