import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonFab,
  IonFabButton,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { calendar } from 'ionicons/icons';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
  imports: [
    RouterLink,
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
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonFab,
    IonFabButton,
  ],
})
export class ServiciosPage {
  servicios = [
    { id: 1, nombre: 'Corte de cabello', precio: 'RD$ 300', detalle: 'Duración aproximada: 30 minutos.' },
    { id: 2, nombre: 'Manicure', precio: 'RD$ 450', detalle: 'Duración aproximada: 45 minutos.' },
    { id: 3, nombre: 'Barba y afeitado', precio: 'RD$ 250', detalle: 'Duración aproximada: 25 minutos.' },
  ];

  horarios = [
    { dia: 'Lunes a viernes', hora: '9:00 AM - 6:00 PM' },
    { dia: 'Sábado', hora: '9:00 AM - 2:00 PM' },
  ];

  constructor() {
    addIcons({ calendar });
  }
}