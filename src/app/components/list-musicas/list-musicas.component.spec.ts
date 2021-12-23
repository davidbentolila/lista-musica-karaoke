import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMusicasComponent } from './list-musicas.component';

describe('ListMusicasComponent', () => {
  let component: ListMusicasComponent;
  let fixture: ComponentFixture<ListMusicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMusicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
