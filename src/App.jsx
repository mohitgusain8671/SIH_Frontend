import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Results from './components/results';
// import Footer from './components/Footer';
import Navbar from './components/HomePage/navbar';

import HomePage from './components/pages/Home';
import VisionPage from './components/pages/Vision';
import AboutUsPage from './components/pages/AboutUs';
import ContactUsPage from './components/pages/ContactUs';
import BecomeAMemberPage from './components/pages/BecomeMember';
import Services from './components/pages/Services';
import Footer from './components/pages/Footer';

import { Service1Form } from './components/Forms/service1Form';
import {Service2Form} from './components/Forms/service2Form'
import {Service3Form } from './components/Forms/service3Form';
import Service2 from './components/serviceDetails/service2';
import Service1 from './components/serviceDetails/service1';
import Service3 from './components/serviceDetails/service3';

function App() {
  const [results, setResults] = useState(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Header />
        <main className="flex-grow">
          {/* Define routes for different pages */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/vision" element={<VisionPage />} /> 
            <Route path="/becomeMember" element={<BecomeAMemberPage />} /> 

            <Route path="/services" element={<Services />} /> 
            <Route path='/service/service1' element={<Service1/>}/>
            <Route path='/service/service2' element={<Service2/>}/>
            <Route path='/service/service3' element={<Service3/>}/>
            {/* <Route path="/service/:serviceId" element={<ServiceDetail />} /> */}

            <Route path="/service1Form" element={<Service1Form setResults={setResults} />} />
            <Route path="/service2Form" element={<Service2Form setResults={setResults} />} />
            <Route path="/service3Form" element={<Service3Form setResults={setResults} />} />
            
            <Route path="/results" element={<Results results={results} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
