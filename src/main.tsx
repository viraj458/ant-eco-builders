import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f5f5f5'
  }}>
    <ColorSchemeScript />
    <MantineProvider>
      <Router>
        <App />
      </Router>
    </MantineProvider>
  </div>
);
