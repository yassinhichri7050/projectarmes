import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { ProduitComponent } from './produit/produit.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:'accueil',component:AccueilComponent
    },
    {
        path:'account',component:AccountComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'produit',component:ProduitComponent
    },
    {
        path:'payment',component:PaymentComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    { path: '', redirectTo: '/produit', pathMatch: 'full' }
];
