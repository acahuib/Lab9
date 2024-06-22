import { Component } from '@angular/core';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.css'
})
export class HangmanComponent implements OnInit {
	palabras: string[] = ['angular', 'typescript', 'javascript', 'programacion', 'desarrollo'];
  	palabra: string = '';
  	palabraOculta: string = '';
  	intentos: number = 0;
  	letrasErroneas: string[] = [];
  	juegoTerminado: boolean = false;
  	gano: boolean = false;
constructor() {
    this.nuevaPalabra();
  }

ngOnInit(): void {
  }

nuevaPalabra() {
    this.palabra = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.palabraOculta = '_ '.repeat(this.palabra.length).trim();
    this.intentos = 0;
    this.letrasErroneas = [];
    this.juegoTerminado = false;
    this.gano = false;
  }


}
