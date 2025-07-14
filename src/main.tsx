import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
// CSS nur für Bootstrap-Layout - keine Komponenten
import 'bootstrap/dist/css/bootstrap.css';
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
