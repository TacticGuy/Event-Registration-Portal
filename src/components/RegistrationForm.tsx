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
