import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTortas } from './lista-tortas';

describe('ListaTortas', () => {
  let component: ListaTortas;
  let fixture: ComponentFixture<ListaTortas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTortas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTortas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
