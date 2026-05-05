'use client';

import { useState } from 'react';
import Button from '@/components/common/Button';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    location: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '', serviceType: '', location: '', description: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold mb-2">Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-trust-blue focus:outline-none"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Phone *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-trust-blue focus:outline-none"
          placeholder="(718) 568-6597"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-trust-blue focus:outline-none"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Service Type *</label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-trust-blue focus:outline-none"
        >
          <option value="">Select a service...</option>
          <option value="car-lockout">Car Lockout</option>
          <option value="residential-lockout">Residential Lockout</option>
          <option value="lock-replacement">Lock Replacement</option>
          <option value="lock-repair">Lock Repair</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-trust-blue focus:outline-none"
          placeholder="Your location"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-trust-blue focus:outline-none"
          placeholder="Tell us more about your situation..."
          rows={4}
        />
      </div>

      <Button type="submit" variant="primary" size="large" className="w-full">
        Get Free Quote
      </Button>

      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mt-4">
          Thank you! We'll contact you soon with a quote.
        </div>
      )}
    </form>
  );
}
