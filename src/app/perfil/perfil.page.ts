import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { callOutline, mailOutline, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonButton,
  ],
})
export class PerfilPage {
  escala = 1;
  private punteros = new Map<number, { x: number; y: number }>();
  private distanciaInicial = 1;
  private escalaInicial = 1;

  constructor() {
    addIcons({ callOutline, mailOutline, locationOutline });
  }

  private limitar(valor: number): number {
    return Math.min(4, Math.max(1, valor));
  }

  private distancia(): number {
    const puntos = Array.from(this.punteros.values());
    if (puntos.length < 2) {
      return 1;
    }
    return Math.hypot(puntos[0].x - puntos[1].x, puntos[0].y - puntos[1].y) || 1;
  }

  tocar(e: PointerEvent) {
    this.punteros.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.punteros.size === 2) {
      this.distanciaInicial = this.distancia();
      this.escalaInicial = this.escala;
    }
  }

  mover(e: PointerEvent) {
    if (!this.punteros.has(e.pointerId)) {
      return;
    }
    this.punteros.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.punteros.size === 2) {
      this.escala = this.limitar(
        (this.escalaInicial * this.distancia()) / this.distanciaInicial
      );
    }
  }

  soltar(e: PointerEvent) {
    this.punteros.delete(e.pointerId);
  }

  rueda(e: WheelEvent) {
    e.preventDefault();
    this.escala = this.limitar(this.escala + (e.deltaY < 0 ? 0.2 : -0.2));
  }

  ampliar() {
    this.escala = this.limitar(this.escala + 0.5);
  }

  reducir() {
    this.escala = this.limitar(this.escala - 0.5);
  }

  restablecer() {
    this.escala = 1;
  }
}