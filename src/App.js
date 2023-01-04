import './App.css';
import AddressDetail from './components/AddressDetail';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import NavBar from './components/Navbar';

function App() {
  return (
    <div>
      <NavBar />
      <ContactForm />
      <AddressDetail />
      <Footer />
    </div>
  );
}

export default App;
