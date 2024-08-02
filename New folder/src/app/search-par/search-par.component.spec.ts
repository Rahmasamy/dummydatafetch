import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchParComponent } from './search-par.component';

describe('SearchParComponent', () => {
  let component: SearchParComponent;
  let fixture: ComponentFixture<SearchParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchParComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
