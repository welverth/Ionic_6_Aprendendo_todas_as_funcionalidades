import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {
  handlerMessage: string;
  roleMessage: string;

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Você clicou no Toast.',
      duration: 1500
    });

    await toast.present();
  }

  async presentToastOption() {
    const toast = await this.toastController.create({
      message: 'Selecione',
      duration: 3000,
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          role: 'favorite',
          handler: () => { console.log('Clicado em Favorito'); }
        },
        {
          text: 'More Info',
          role: 'info',
          handler: () => { console.log('Clicado em Informações'); }
        },
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: () => { console.log('Clicado em Cancelar'); }
        }
      ]
    });

    await toast.present();

    const { role } = await toast.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

}
