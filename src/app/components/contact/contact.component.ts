import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  redirectToWhatsApp() {
    const phoneNumber = '5519996950437'; // NUMERO PARA REDIRECIONAR MENSAGEM
    const message = `Olá! Gostaria de agendar uma avaliação!!`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}