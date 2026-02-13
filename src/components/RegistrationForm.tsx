import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

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
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="registration" className="py-20 px-4 bg-gradient-to-b from-[#0B0B1D] via-[#1a1a2e] to-[#0B0B1D] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-[#ff6b35]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-[#ff6b35]/20 to-[#6366f1]/20 border border-[#ff6b35]/50 rounded-full text-transparent bg-clip-text font-bold text-sm uppercase tracking-wider mb-4"
          >
            Limited Seats Available
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black text-[#FFFFFF] mb-4">
            Get <span className="bg-gradient-to-r from-[#ff6b35] to-[#6366f1] bg-clip-text text-transparent">Registered</span>
          </h2>
          <p className="text-[#FFFFFF]/70 text-lg max-w-xl mx-auto">
            Join 500+ tech enthusiasts for an unforgettable experience. Secure your spot now!
          </p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/20 to-[#6366f1]/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-br from-[#1a1a2e]/90 via-[#16213e]/80 to-[#0F1729]/90 backdrop-blur-xl border border-[#ff6b35]/40 rounded-3xl shadow-2xl shadow-[#ff6b35]/10 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-[#FFFFFF] font-semibold mb-2 text-sm uppercase tracking-wider">Full Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#16213e] to-[#1a1a2e] text-white border border-[#ff6b35]/30 focus:border-[#ff6b35] focus:shadow-lg focus:shadow-[#ff6b35]/20 outline-none transition-all duration-300 placeholder:text-[#FFFFFF]/40"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-[#FFFFFF] font-semibold mb-2 text-sm uppercase tracking-wider">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#16213e] to-[#1a1a2e] text-white border border-[#ff6b35]/30 focus:border-[#ff6b35] focus:shadow-lg focus:shadow-[#ff6b35]/20 outline-none transition-all duration-300 placeholder:text-[#FFFFFF]/40"
                />
              </motion.div>

              {/* Phone Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-[#FFFFFF] font-semibold mb-2 text-sm uppercase tracking-wider">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#16213e] to-[#1a1a2e] text-white border border-[#ff6b35]/30 focus:border-[#ff6b35] focus:shadow-lg focus:shadow-[#ff6b35]/20 outline-none transition-all duration-300 placeholder:text-[#FFFFFF]/40"
                />
              </motion.div>

              {/* College Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-[#FFFFFF] font-semibold mb-2 text-sm uppercase tracking-wider">College/University</label>
                <input
                  name="college"
                  type="text"
                  placeholder="VIT University"
                  value={form.college}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#16213e] to-[#1a1a2e] text-white border border-[#ff6b35]/30 focus:border-[#ff6b35] focus:shadow-lg focus:shadow-[#ff6b35]/20 outline-none transition-all duration-300 placeholder:text-[#FFFFFF]/40"
                />
              </motion.div>

              {/* Year and Branch */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div>
                  <label className="block text-[#FFFFFF] font-semibold mb-2 text-sm uppercase tracking-wider">Year</label>
                  <select
                    name="year"
                    value={form.year}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#16213e] to-[#1a1a2e] text-white border border-[#ff6b35]/30 focus:border-[#ff6b35] focus:shadow-lg focus:shadow-[#ff6b35]/20 outline-none transition-all duration-300"
                  >
                    <option value="">Select Year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#FFFFFF] font-semibold mb-2 text-sm uppercase tracking-wider">Branch</label>
                  <input
                    name="branch"
                    type="text"
                    placeholder="CSE / ECE"
                    value={form.branch}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#16213e] to-[#1a1a2e] text-white border border-[#ff6b35]/30 focus:border-[#ff6b35] focus:shadow-lg focus:shadow-[#ff6b35]/20 outline-none transition-all duration-300 placeholder:text-[#FFFFFF]/40"
                  />
                </div>
              </motion.div>

              {/* Terms Checkbox */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-[#16213e]/50 rounded-xl p-4 border border-[#ff6b35]/20"
              >
                <input
                  name="agree"
                  type="checkbox"
                  checked={form.agree}
                  onChange={handleChange}
                  className="w-5 h-5 accent-[#ff6b35] mt-1 cursor-pointer flex-shrink-0"
                />
                <label htmlFor="agree" className="text-[#FFFFFF]/80 text-sm cursor-pointer leading-relaxed">
                  I agree to the <span className="text-[#ff6b35] font-bold">terms and conditions</span> and <span className="text-[#ff6b35] font-bold">privacy policy</span>
                </label>
              </motion.div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-xl p-4"
                >
                  <AlertCircle className="text-red-400" size={20} />
                  <span className="text-red-400 font-semibold text-sm">{error}</span>
                </motion.div>
              )}

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-xl p-4"
                >
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-green-400 font-semibold text-sm">Registration successful! See you at TechFest!</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(255, 107, 53, 0.8)' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff6b35] via-[#ff8555] to-[#ff6b35] text-white font-black text-lg shadow-lg shadow-[#ff6b35]/50 border border-[#ff6b35]/60 hover:border-[#ff6b35] transition-all duration-300 uppercase tracking-wider"
              >
                Secure Your Seat Now
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
