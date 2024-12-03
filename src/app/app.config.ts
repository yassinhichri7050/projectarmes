import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyABc9CDG4d6q2U78Ue7qpHUt_c_MNser4I",
  authDomain: "kechta-armes.firebaseapp.com",
  projectId: "kechta-armes",
  storageBucket: "kechta-armes.appspot.com",
  messagingSenderId: "1075980772368",
  appId: "1:1075980772368:web:2b4359144d7cccbd9c1695",
};

// Configuration de l'application
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)), // Correct ici
  ],
};
