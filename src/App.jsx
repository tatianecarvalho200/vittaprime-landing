import Header from "./components/Header";
import Hero from "./components/Hero";
import Treatments from "./components/Treatments";
import Questionnaire from "./components/Questionnaire";
import Differentials from "./components/Differentials";
import Results from "./components/Results";
import Location from "./components/Location";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Treatments />
        <Questionnaire />
        <Differentials />
        <Results />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
