import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; // MatButtonModule pour les boutons Material
import { CommonModule } from '@angular/common'; 
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-produit',
  imports: [MatButtonModule,CommonModule,RouterModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.scss'
})
export class ProduitComponent {
  produits = [
    {
      nom: 'mp-40',
      description: 'Carabine de précision pour un tir à longue distance.',
      prix: 1900.00,
      imageUrl: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-scar-l.png'
    },
    {
      nom: 'Groza',
      description: 'Carabine de précision pour un tir à longue distance.',
      prix: 1900.00,
      imageUrl: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-groza.png'
    },
    {
      nom: 'ACE32',
      description: 'Carabine de précision pour un tir à longue distance.',
      prix: 1900.00,
      imageUrl: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-ace32.png'
    },
    {
      nom: 'Mutantt Mk47',
      description: 'Carabine de précision pour un tir à longue distance.',
      prix: 1900.00,
      imageUrl: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-mk47_mutant.png'
    },
    {
      nom: 'AKM',
      description: 'Carabine de précision pour un tir à longue distance.',
      prix: 1900.00,
      imageUrl: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-akm.png'
    },
    {
      nom: 'Famas',
      description: 'Carabine de précision pour un tir à longue distance.',
      prix: 1900.00,
      imageUrl: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-famas_g2.png'
    },
    {
      nom: 'M416',
      description: 'Carabine de précision pour un tir à longue distance.',
      prix: 1900.00,
      imageUrl: 'https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-m416.png'
    },
    {
      nom: 'Carabine',
      description: 'Carabine de précision pour un tir à longue distance.',
      prix: 1200.00,
      imageUrl: 'https://th.bing.com/th/id/R.11885ad5742b7a939354916c9d6cba4d?rik=CjPuM6oHWV%2bk%2fQ&riu=http%3a%2f%2fmedia.server.theshootingwarehouse.com%2fhires%2f7157.png&ehk=uaeBM9hu9LnImvnfBSpoEVGVCbTu7xmVij05g97%2bhmQ%3d&risl=1&pid=ImgRaw&r=0'
    },
    {
      nom: 'Pistolet 9mm',
      description: 'Un pistolet semi-automatique idéal pour les situations d\'auto-défense.',
      prix: 499.99,
      imageUrl: 'https://europarm.fr/files/bibliotheque/photos-produits/AB124-3.jpg?v=2020-04-08%2013:53:56'
    },
    {
      nom: 'Fusil à pompe',
      description: 'Un fusil à pompe puissant pour la sécurité à longue portée.',
      prix: 899.99,
      imageUrl: 'https://www.armurerie-gilles.com/images/articles/7742/large/7742_4.jpg'
    },

    {
      nom: 'AK-47',
      description: 'Carabine de précision pour un tir à longue distance.',
      prix: 1900.00,
      imageUrl: 'https://images4.alphacoders.com/633/thumb-1920-633440.jpg'
    },
    {
      nom: 'mp-40',
      description: 'Carabine de précision pour un tir à longue distance.',
      prix: 1900.00,
      imageUrl: 'https://th.bing.com/th/id/OIP.SIo3zYUOUbiKNXzPTKNuQwHaDM?rs=1&pid=ImgDetMain'
    },
    {
      nom: 'DABEBA',
      description: 'Drive tanks such as the Panzer, Crusader, and Sherman in these free online ',
      prix: 5400000.00,
      imageUrl: 'https://th.bing.com/th/id/OIP.kbJ-1Xc2ckTn7NLQ_9tRgQHaEK?rs=1&pid=ImgDetMain'
    },
    
    {
      nom: 'F16',
      description: 'Carabine de précision pour un tir à longue distance.',
      prix: 100000.00,
      imageUrl: 'https://th.bing.com/th/id/R.5f85408bdba0d55f45fede84e16a7218?rik=X7U4dF8AjDthEA&pid=ImgRaw&r=0'
    },
    
    {
      nom: 'M4',
      description: 'Carabine de précision pour un tir à longue distance.',
      prix: 2500.00,
      imageUrl: 'https://preview.free3d.com/img/2014/08/2206025859653961505/f1akuvt2.jpg'
    },

    
  ];
  formatPrice(price: number): string {
    return price.toLocaleString('fr-FR', { style: 'currency', currency: 'TND' });
  }

}


