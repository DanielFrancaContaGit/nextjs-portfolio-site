import Navbar from "./components/navbar";
import Baner from "./components/baner";
import SobreSecssion from "./components/sobresecssion";
import Estatistica from "./components/estatistica";
import Recursos from "./components/recursos";
import CourseList from "./components/courselist";
import Desenvolvedor from "./components/desenvolvedor";
import CTA from "./components/ctasecssion";
import Contato from "./components/contato";
import Galeria from "./components/galeria";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Baner />
      <SobreSecssion />
      <Estatistica />
      <Recursos />
      <Desenvolvedor />
      <CTA />
      <Contato />
      <CourseList />
      <Galeria />
      <Footer />
    </div>
  );
}
