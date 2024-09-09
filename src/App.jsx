import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import Footer from './components/Footer';

function App() {
  const [results, setResults] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {!results ? <Form setResults={setResults} /> : <Results results={results} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

