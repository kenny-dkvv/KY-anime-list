import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeWindowComponent } from './anime-window.component';

describe('AnimeWindowComponent', () => {
  let component: AnimeWindowComponent;
  let fixture: ComponentFixture<AnimeWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
