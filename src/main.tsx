import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import './resets.css';

import { SvelteWrapper } from './components/Tree/svelteWrapper';

// <SvelteWrapper name="A"/>

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
