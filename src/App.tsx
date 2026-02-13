import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EventDetails } from './components/EventDetails';
import { RegistrationForm } from './components/RegistrationForm';
import { ContactInfo } from './components/ContactInfo';
import { Footer } from './components/Footer';
import { InteractiveBackground } from './components/InteractiveBackground';
import './globals.css';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0B1D] via-[#1a1a2e] to-[#0F1729] relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#ff6b35]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-[#6366f1]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-[#ff8555]/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Interactive Background */}
      <InteractiveBackground />
      
      <Header />
      <Hero />
      <EventDetails />
      <RegistrationForm />
      <ContactInfo />
      <Footer />
    </div>
  );
}
export default App;