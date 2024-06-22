import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class AppComponent {
  wordToGuess: string;
  guessedLetters: string[] = [];
  attemptsLeft: number = 6;
  alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split(''); // Definimos un array con las letras del alfabeto

  constructor() {
    // Aquí puedes inicializar la palabra a adivinar, por ejemplo:
    this.wordToGuess = this.pickWord();
  }

  pickWord(): string {
    const words = ['angular', 'typescript', 'javascript', 'html', 'css'];
    return words[Math.floor(Math.random() * words.length)];
  }

  guessLetter(letter: string): void {
    if (!this.guessedLetters.includes(letter)) {
      this.guessedLetters.push(letter);
      if (!this.wordToGuess.includes(letter)) {
        this.attemptsLeft--;
      }
    }
  }

  isLetterGuessed(letter: string): boolean {
    return this.guessedLetters.includes(letter);
  }

  getDisplayedWord(): string {
    return this.wordToGuess
      .split('')
      .map(letter => (this.isLetterGuessed(letter) ? letter : '_'))
      .join(' ');
  }

  isGameWon(): boolean {
  return this.wordToGuess.split('').every(letter => this.isLetterGuessed(letter));
  }



  isGameLost(): boolean {
    return this.attemptsLeft === 0;
  }

  resetGame(): void {
    this.wordToGuess = this.pickWord();
    this.guessedLetters = [];
    this.attemptsLeft = 6;
  }
}

