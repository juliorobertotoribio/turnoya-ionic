import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonRefresher,
  IonRefresherContent,
  IonFab,
  IonFabButton,
  IonActionSheet,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trash, add } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonList,
    IonItem,
    IonLabel,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonRefresher,
    IonRefresherContent,
    IonFab,
    IonFabButton,
    IonActionSheet,
  ],
})
export class HomePage {
  contador = 4;

  citas = [
    { id: 1, servicio: 'Corte de cabello', fecha: 'Lunes 25 nov, 10:00 AM' },
    { id: 2, servicio: 'Manicure', fecha: 'Martes 26 nov, 2:30 PM' },
    { id: 3, servicio: 'Barba y afeitado', fecha: 'Jueves 28 nov, 9:00 AM' },
  ];

  menuAbierto = false;
  botonesMenu: any[] = [];

  private temporizador: any = null;
  private inicioX = 0;
  private inicioY = 0;

  constructor() {
    addIcons({ trash, add });
  }

  eliminar(id: number) {
    this.citas = this.citas.filter((c) => c.id !== id);
  }

  agregar() {
    this.citas = [
      ...this.citas,
      { id: this.contador, servicio: 'Nueva cita', fecha: 'Por confirmar' },
    ];
    this.contador++;
  }

  refrescar(event: any) {
    setTimeout(() => {
      this.citas = [...this.citas];
      event.target.complete();
    }, 1000);
  }

  iniciarPresion(e: PointerEvent, cita: { id: number }) {
    this.cancelarPresion();
    this.inicioX = e.clientX;
    this.inicioY = e.clientY;
    this.temporizador = setTimeout(() => {
      this.temporizador = null;
      this.abrirMenu(cita.id);
    }, 600);
  }

  moverPresion(e: PointerEvent) {
    if (
      this.temporizador &&
      Math.hypot(e.clientX - this.inicioX, e.clientY - this.inicioY) > 10
    ) {
      this.cancelarPresion();
    }
  }

  cancelarPresion() {
    if (this.temporizador) {
      clearTimeout(this.temporizador);
      this.temporizador = null;
    }
  }

  abrirMenu(id: number) {
    this.botonesMenu = [
      {
        text: 'Confirmar asistencia',
        handler: () => this.confirmar(id),
      },
      {
        text: 'Cancelar cita',
        role: 'destructive',
        handler: () => this.eliminar(id),
      },
      {
        text: 'Cerrar',
        role: 'cancel',
      },
    ];
    this.menuAbierto = true;
  }

  confirmar(id: number) {
    this.citas = this.citas.map((c) =>
      c.id === id && !c.fecha.includes('Confirmada')
        ? { ...c, fecha: c.fecha + ' · Confirmada' }
        : c
    );
  }
}