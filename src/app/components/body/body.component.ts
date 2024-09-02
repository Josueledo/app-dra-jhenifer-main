import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  tratamentos = [
    {tratamento: 'Limpeza', icone: '/assets/tratamentos/limpar.png'},
    {tratamento: 'Extração de siso', icone: '/assets/tratamentos/limpar.png'},
    {tratamento: 'Implante-unitario', icone: '/assets/tratamentos/limpar.png'},
    {tratamento: 'Clareamento', icone: '/assets/tratamentos/limpar.png'},
    {tratamento: 'Protocolo', icone: '/assets/tratamentos/limpar.png'},
    {tratamento: 'Botox', icone: '/assets/tratamentos/limpar.png'},
    {tratamento: 'Clinica', icone: '/assets/tratamentos/limpar.png'},
    {tratamento: 'Pediatria', icone: '/assets/tratamentos/limpar.png'},
    {tratamento: 'Odontologia', icone: '/assets/tratamentos/limpar.png'},
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
