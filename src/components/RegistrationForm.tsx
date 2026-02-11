import React, { useState } from 'react';

export function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    branch: '',
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let fieldValue: string | boolean = value;
    if (type === 'checkbox') {
      fieldValue = (e.target as HTMLInputElement).checked;
    }
    setForm((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.college || !form.year || !form.branch || !form.agree) {
      setError('Please fill all fields and agree to the terms.');
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', college: '', year: '', branch: '', agree: false });
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <section id="registration" className="py-20 px-4 bg-gradient-to-b from-[#0B0B1D] to-[#1a1a2e]">
      <div className="max-w-lg mx-auto bg-[#1a1a2e]/90 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-black text-center mb-6 text-[#FFFFFF]">Register Now</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#16213e] text-white border border-[#ff6b35]/30 focus:border-[#ff6b35] outline-none"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#16213e] text-white border border-[#ff6b35]/30 focus:border-[#ff6b35] outline-none"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#16213e] text-white border border-[#ff6b35]/30 focus:border-[#ff6b35] outline-none"
          />
          <input
            name="college"
            type="text"
            placeholder="College/University"
            value={form.college}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#16213e] text-white border border-[#ff6b35]/30 focus:border-[#ff6b35] outline-none"
          />
          <div className="flex gap-4">
            <select
              name="year"
              value={form.year}
              onChange={handleChange}
              className="w-1/2 px-4 py-3 rounded-lg bg-[#16213e] text-white border border-[#ff6b35]/30 focus:border-[#ff6b35] outline-none"
            >
              <option value="">Year</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
            <input
              name="branch"
              type="text"
              placeholder="Branch/Department"
              value={form.branch}
              onChange={handleChange}
              className="w-1/2 px-4 py-3 rounded-lg bg-[#16213e] text-white border border-[#ff6b35]/30 focus:border-[#ff6b35] outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              name="agree"
              type="checkbox"
              checked={form.agree}
              onChange={handleChange}
              className="accent-[#ff6b35] w-5 h-5"
            />
            <label htmlFor="agree" className="text-[#FFFFFF]/80 text-sm cursor-pointer">
              I agree to the <span className="text-[#ff6b35] font-semibold">terms and conditions</span> and <span className="text-[#ff6b35] font-semibold">privacy policy</span>
            </label>
          </div>
          {error && <div className="text-red-400 text-sm font-medium text-center">{error}</div>}
          {submitted && <div className="text-green-400 text-sm font-medium text-center">Registration successful!</div>}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#ff6b35] to-[#ff8555] text-white font-bold text-lg shadow-md hover:from-[#ff8555] hover:to-[#ff6b35] transition-colors"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </section>
  );
}
