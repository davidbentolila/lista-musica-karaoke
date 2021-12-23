import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaMusicasComponent } from './atualiza-musicas.component';

describe('AtualizaMusicasComponent', () => {
  let component: AtualizaMusicasComponent;
  let fixture: ComponentFixture<AtualizaMusicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaMusicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
