import React from 'react';
import ReactDOM from 'react-dom/client'; // 変更点
import App from './App';

// React 18 以降では createRoot を使う
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);

// todo path

// task path