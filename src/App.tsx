import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EventDetails } from './components/EventDetails';
import { RegistrationForm } from './components/RegistrationForm';
import { ContactInfo } from './components/ContactInfo';
import { Footer } from './components/Footer';
import './globals.css';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0B1D] via-[#1a1a2e] to-[#16213e]">
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