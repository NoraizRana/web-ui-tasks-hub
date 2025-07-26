import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert(`Submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full mb-3 p-2 border rounded" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" className="w-full mb-3 p-2 border rounded" required />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="w-full mb-3 p-2 border rounded" required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default ContactForm;
