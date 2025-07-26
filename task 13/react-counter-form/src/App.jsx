import React from 'react';
import Counter from './components/Counter';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 text-center">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">React Counter & Form</h1>
      <Counter />
      <hr className="my-10" />
      <ContactForm />
    </div>
  );
}

export default App;
