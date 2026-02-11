import { motion } from 'framer-motion';
import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { SuccessDialog } from './SuccessDialog';
import { CheckCircle2, XCircle, User, Mail, Phone, Building2, BookOpen, Code2 } from 'lucide-react';
export function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    branch: '',
    agreeTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const validateField = (name: string, value: string | boolean) => {
    switch (name) {
      case 'fullName':
        return typeof value === 'string' && value.trim().length < 3
          ? 'Name must be at least 3 characters'
          : '';
      case 'email':
        return typeof value === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? 'Invalid email address'
          : '';
      case 'phone':
        return typeof value === 'string' && !/^\d{10}$/.test(value.replace(/\D/g, ''))
          ? 'Phone must be 10 digits'
          : '';
      case 'college':
        return typeof value === 'string' && value.trim().length < 3
          ? 'College name is required'
          : '';
      case 'year':
        return !value ? 'Please select your year' : '';
      case 'branch':
        return typeof value === 'string' && value.trim().length < 2
          ? 'Branch is required'
          : '';
      case 'agreeTerms':
        return !value ? 'You must agree to the terms' : '';
      default:
        return '';
    }
  };
  const handleChange = (name: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };
  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, formData[name as keyof typeof formData]) }));
  };
  const calculateProgress = () => {
    const fields = ['fullName', 'email', 'phone', 'college', 'year', 'branch', 'agreeTerms'];
    const filled = fields.filter((field) => {
      const value = formData[field as keyof typeof formData];
      return typeof value === 'boolean' ? value : value.trim().length > 0;
    }).length;
    return Math.round((filled / fields.length) * 100);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );
    if (Object.keys(newErrors).length === 0) {
      setShowSuccess(true);
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          college: '',
          year: '',
          branch: '',
          agreeTerms: false,
        });
        setTouched({});
        setErrors({});
      }, 2000);
    }
  };
  const InputWithValidation = ({
    name,
    label,
    type = 'text',
    placeholder,
    icon: Icon,
  }: {
    name: string;
    label: string;
    type?: string;
    placeholder: string;
    icon: any;
  }) => (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-[#FFFFFF] font-semibold flex items-center gap-2">
        <Icon size={16} className="text-[#ff6b35]" />
        {label} <span className="text-[#ff6b35]">*</span>
      </Label>
      <div className="relative group">
        <Input
          id={name}
          type={type}
          placeholder={placeholder}
          value={formData[name as keyof typeof formData] as string}
          onChange={(e) => handleChange(name, e.target.value)}
          onBlur={() => handleBlur(name)}
          className={`bg-[#16213e]/50 border-[#ff6b35]/30 text-[#FFFFFF] placeholder:text-[#FFFFFF]/40 pl-4 pr-12 h-12 rounded-xl transition-all group-hover:border-[#ff6b35]/50 ${
            touched[name] && errors[name] ? 'border-red-500 ring-2 ring-red-500/20' : touched[name] && !errors[name] ? 'border-green-500 ring-2 ring-green-500/20' : ''
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
              const { name, value, type, checked } = e.target;
              setForm((prev) => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value,
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