import Navbar from "../components/Navbar";
import { About } from "../sections/About";
import Home from "../sections/Home";
import { Options } from "../sections/Options";
import { PageContainer } from "./PageContainer";

const LandingPage = () => {
  return (
    <>
      <PageContainer>
        <Navbar />

        <Home />

        <Options />

        <About />
      </PageContainer>
    </>
  );
};

export default LandingPage;
