import { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';

// Component to handle scroll restoration
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

export default function App() {
  const [language, setLanguage] = useState<string>('al');

  return (
    <div className="min-h-screen bg-black">
      <ScrollToTop />
      <Navigation language={language} onLanguageChange={setLanguage} />
      
      <Switch>
        <Route path="/">
          <Home language={language} />
        </Route>
        <Route path="/services">
          <Services language={language} />
        </Route>
        <Route path="/work">
          <Work language={language} />
        </Route>
        <Route path="/about">
          <About language={language} />
        </Route>
        <Route path="/contact">
          <Contact language={language} />
        </Route>
        <Route>
          <Home language={language} />
        </Route>
      </Switch>

      <Footer language={language} />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}