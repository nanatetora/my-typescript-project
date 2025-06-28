import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CardSection from './CardSection';
import Page1 from './pages/Task';
import Page2 from './pages/Todo';

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<CardSection />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;


