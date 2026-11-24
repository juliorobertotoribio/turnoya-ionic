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
  ],
})
export class HomePage {
  contador = 4;

  citas = [
    { id: 1, servicio: 'Corte de cabello', fecha: 'Lunes 25 nov, 10:00 AM' },
    { id: 2, servicio: 'Manicure', fecha: 'Martes 26 nov, 2:30 PM' },
    { id: 3, servicio: 'Barba y afeitado', fecha: 'Jueves 28 nov, 9:00 AM' },
  ];

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
}