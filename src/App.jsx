import "./App.css";
import jobsData from "../src/assets/jobs.json";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Jobs data={jobsData} />
      <Footer />
    </>
  );
}

export default App;
