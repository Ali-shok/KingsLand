import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {Helmet} from "react-helmet";
// Components
import TopNavbar from "./components/Nav/TopNavbar";
import Header from "./components/Sections/Header";
import Services from "./components/Sections/Services";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer";
import PageNotFound from "./components/Sections/pageNotFound.jsx";
import {LanguageProvider} from "./context/LanguageContext";
export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <html lang="en" />
          <title>Kings Land - Leading Shipping Solutions</title>
          <meta
            name="keywords"
            content="Customs services, Syrian goods customs, customs, maritime trade containers, maritime commercial containers, aviation services, express shipping, pilot shipping, goods clearance, divorce, goods clearance, Clearing goods from customs, trade goods, Latakia, Aleppo, Latakia port, Emirates of Syria, Aleppo, shipping from the Emirates to Syria, shipping from Syria to the Emirates, customs, customs, international trade"
          />
          <meta
            name="keywords"
            content="Sea, ocean, aviation, ships, boats, Dubai port, ports in the Emirates, sea in the Emirates, shipping in the Emirates, trade in the Emirates, Sea in Syria, ocean in Syria, aviation in Syria, ships in Syria, boats in Syria, ports in Syria, shipping in Syria, trade in Syria"
          />
          <meta
            name="keywords"
            content="خدمات الجمارك، جمارك البضائع السورية، الجمارك، حاويات التجارة البحرية، حاويات تجارية بحرية، خدمات الطيران، شحن سريع، شحن تجريبي، تخليص البضائع، الطلاق، تخليص البضائع، تخليص البضائع من الجمارك، بضائع تجارية، اللاذقية، حلب، ميناء اللاذقية، إمارات سوريا، حلب، الشحن من الإمارات إلى سوريا، الشحن من سوريا إلى الإمارات، الجمارك، التجارة الدولية"
          />
          <meta
            name="keywords"
            content="البحر، المحيط، الطيران، السفن، القوارب، ميناء دبي، موانئ الإمارات، البحر في الإمارات، الشحن في الإمارات، التجارة في الإمارات، البحر في سوريا، المحيط في سوريا، الطيران في سوريا، السفن في سوريا، القوارب في سوريا، الموانئ في سوريا، الشحن في سوريا، التجارة في سوريا"
          />
        </Helmet>

        <TopNavbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/react" element={<Navigate to="/" />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}
