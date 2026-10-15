import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaTortas } from './components/lista-tortas/lista-tortas';

@Component({
  imports: [RouterOutlet, ListaTortas],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('catalogoTortas');
}
