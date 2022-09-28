import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  roleMessage: string;
  handlerMessage: string;

  titulo: string;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

    async presentAlertInput() {
      const alert = await this.alertController.create({
        header: 'Input',
        subHeader: 'Important message',
        message: 'This is an alert!',
        inputs: [
          {
            name: 'nome',
            type: 'text',
            placeholder: 'Nome do Cliente',
          },
          {
            name: 'Telefone',
            type: 'text',
            placeholder: 'Telefone do Cliente',
          },
          {
            type: 'textarea',
            placeholder: 'Mensagem',
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            },
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: (data) => {
              console.log('Confirm OK');
              this.titulo = data.nome;
            },
          },
        ],
      });

    await alert.present();

    //const { role } = await alert.onDidDismiss();
    //this.roleMessage = `Dismissed with role: ${role}`;
  }
}
