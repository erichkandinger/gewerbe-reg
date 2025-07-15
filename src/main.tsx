import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
// Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'

import App from './App.tsx';

// KoliBri Public UI integrieren
import { register } from "@public-ui/components";
import { defineCustomElements } from "@public-ui/components/dist/loader";
import { DEFAULT } from "@public-ui/themes";

register(DEFAULT, defineCustomElements)
.then(() => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  })
.catch(console.warn);
