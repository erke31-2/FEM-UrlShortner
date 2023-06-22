import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FormSection from "./components/FormSection";
import StatSection from "./components/StatSection";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="font-Poppins">
      <Header />
      <main>
        <HeroSection />
        <FormSection />
        <StatSection />
      </main>
      <Footer />
    </div>
  );
};
export default App;
