import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  tratamentos = [
    {tratamento: 'Limpeza', icone: '/assets/tratamentos/limpeza.png'},
    {tratamento: 'Extração de siso', icone: '/assets/tratamentos/dente-de-siso.png'},
    {tratamento: 'Implante-unitario', icone: '/assets/tratamentos/implante-unitario.png'},
    {tratamento: 'Clareamento', icone: '/assets/tratamentos/clareamento-dental.png'},
    {tratamento: 'Protocolo', icone: '/assets/tratamentos/protocolo.png'},
    {tratamento: 'Botox', icone: '/assets/tratamentos/botox-preenchimento.png'},
    {tratamento: 'Clinica', icone: '/assets/tratamentos/clinica.png'},
    {tratamento: 'Pediatria', icone: '/assets/tratamentos/pediatria.png'},
    {tratamento: 'Odontologia', icone: '/assets/tratamentos/odontologia.png'},
  ];

  ngOnInit() {
    Aos.init({
      duration: 450, 
      easing: 'ease-in-out',
    });
  }

  redirectToWhatsApp(tratamento: any) {
    const phoneNumber = '5519996950437'; // NUMERO PARA REDIRECIONAR MENSAGEM
    const message = `Olá! Gostaria de saber mais sobre o tratamento de ${tratamento.tratamento}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
