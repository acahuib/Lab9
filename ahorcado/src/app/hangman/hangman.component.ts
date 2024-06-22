import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
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

  verificar(letra: string) {
    if (this.juegoTerminado) return;

    if (this.palabra.indexOf(letra) >= 0) {
      const palabraOcultaArr = this.palabraOculta.split(' ');

      for (let i = 0; i < this.palabra.length; i++) {
        if (this.palabra[i] === letra) {
          palabraOcultaArr[i] = letra;
        }
      }

      this.palabraOculta = palabraOcultaArr.join(' ');
      this.verificarGane();
    } else {
      this.letrasErroneas.push(letra);
      this.intentos++;
      this.verificarPerdido();
    }
  }

  verificarGane() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if (palabraEvaluar === this.palabra) {
      this.gano = true;
      this.juegoTerminado = true;
    }
  }

  verificarPerdido() {
    if (this.intentos >= 6) {
      this.juegoTerminado = true;
    }
  }

  resetJuego() {
    this.nuevaPalabra();
  }
}

