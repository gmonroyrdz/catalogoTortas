import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Torta }from '../../models/torta'; 

@Component({
  imports: [FormsModule,CommonModule],
  selector: 'app-lista-tortas',
  styleUrl: './lista-tortas.css',
  templateUrl: './lista-tortas.html',
})
export class ListaTortas {
  filtro = signal<string>('');
  tortas = signal<Torta[]>([
    {
      id: 1,
      nombre: 'Torta de jamón',
      ingredientes: ['Bolillo','Jamón','Queso','Aguacate'],
      precio: 65
    },
    {
      id: 2,
      nombre: 'Torta Cubana',
      ingredientes: ['Bolillo','Milanesa','Jamón','Salchicha','Huevo','Queso','Aguacate','Chile chipotle'],
      precio: 90
    },
    {
      id: 3,
      nombre: 'Torta de pierna',
      ingredientes: ['Bolillo','Pierna de cerdo','Lechuga','Jitomate','Queso','Aguacate'],
      precio: 80
    }
  ]);

  tortasFiltradas = computed(() => {
    const texto = this.filtro().toLowerCase().trim();
    if (!texto) return this.tortas();

    return this.tortas().filter(torta =>
      torta.nombre.toLowerCase().includes(texto) ||
      torta.ingredientes.some(ing => ing.toLowerCase().includes(texto))
    );
  });
}
