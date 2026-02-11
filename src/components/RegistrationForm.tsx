import { motion } from 'framer-motion';
import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { SuccessDialog } from './SuccessDialog';
import { FormProgress } from './FormProgress';
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
          }`}
        />
        {touched[name] && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            {errors[name] ? (
              <XCircle className="text-red-500" size={20} />
            ) : (
              <CheckCircle2 className="text-green-500" size={20} />
            )}
          </div>
        )}
      </div>
      {touched[name] && errors[name] && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm font-medium"
        >
          {errors[name]}
        </motion.p>
      )}
    </div>
  );
  return (
    <section id="registration" className="py-20 px-4 bg-gradient-to-b from-[#0B0B1D] to-[#1a1a2e] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff6b35]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff8555]/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-full text-[#ff6b35] text-sm font-semibold">
              Join Us
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-[#FFFFFF] mb-4">
            Register <span className="bg-gradient-to-r from-[#ff6b35] to-[#ff8555] bg-clip-text text-transparent">Now</span>
          </h2>
          <p className="text-xl text-[#FFFFFF]/70 font-light">
            Secure your spot at TechFest 2024 - Limited seats available!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/20 to-[#ff8555]/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-[#1a1a2e]/80 backdrop-blur-sm border border-[#ff6b35]/30 rounded-3xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputWithValidation
                  key="fullName"
                  name="fullName"
                  label="Full Name"
                  placeholder="John Doe"
                  icon={User}
                />
                <InputWithValidation
                  key="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  icon={Mail}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputWithValidation
                  key="phone"
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="1234567890"
                  icon={Phone}
                />
                <InputWithValidation
                  key="college"
                  name="college"
                  label="College/University"
                  placeholder="VIT University"
                  icon={Building2}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="year" className="text-[#FFFFFF] font-semibold flex items-center gap-2">
                    <BookOpen size={16} className="text-[#ff6b35]" />
                    Year of Study <span className="text-[#ff6b35]">*</span>
                  </Label>
                  <Select
                    value={formData.year}
                    onValueChange={(value) => handleChange('year', value)}
                  >
                    <SelectTrigger
                      className={`bg-[#16213e]/50 border-[#ff6b35]/30 text-[#FFFFFF] h-12 rounded-xl hover:border-[#ff6b35]/50 transition-all ${
                        touched.year && errors.year ? 'border-red-500 ring-2 ring-red-500/20' : touched.year && !errors.year ? 'border-green-500 ring-2 ring-green-500/20' : ''
                      }`}
                      onBlur={() => handleBlur('year')}
                    >
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a2e] border-[#ff6b35]/30">
                      <SelectItem value="1st" className="text-[#FFFFFF] cursor-pointer hover:bg-[#ff6b35]/20">1st Year</SelectItem>
                      <SelectItem value="2nd" className="text-[#FFFFFF] cursor-pointer hover:bg-[#ff6b35]/20">2nd Year</SelectItem>
                      <SelectItem value="3rd" className="text-[#FFFFFF] cursor-pointer hover:bg-[#ff6b35]/20">3rd Year</SelectItem>
                      <SelectItem value="4th" className="text-[#FFFFFF] cursor-pointer hover:bg-[#ff6b35]/20">4th Year</SelectItem>
                    </SelectContent>
                  </Select>
                  {touched.year && errors.year && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm font-medium"
                    >
                      {errors.year}
                    </motion.p>
                  )}
                </div>
                <InputWithValidation
                  key="branch"
                  name="branch"
                  label="Branch/Department"
                  placeholder="Computer Science"
                  icon={Code2}
                />
              </div>
              <div className="flex items-start space-x-3 p-4 bg-[#16213e]/30 rounded-xl border border-[#ff6b35]/20">
                <Checkbox
                  id="terms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => handleChange('agreeTerms', !!checked)}
                  className="border-[#ff6b35]/50 data-[state=checked]:bg-[#ff6b35] cursor-pointer mt-1"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-[#FFFFFF]/80 leading-relaxed cursor-pointer"
                >
                  I agree to the <span className="text-[#ff6b35] font-semibold">terms and conditions</span> and <span className="text-[#ff6b35] font-semibold">privacy policy</span>
                  <span className="text-[#ff6b35] ml-1">*</span>
                </label>
              </div>
              {touched.agreeTerms && errors.agreeTerms && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm font-medium"
                >
                  {errors.agreeTerms}
                </motion.p>
              )}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-[#ff6b35] to-[#ff8555] hover:from-[#ff8555] hover:to-[#ff6b35] text-[#FFFFFF] text-lg font-bold cursor-pointer shadow-xl shadow-[#ff6b35]/50 rounded-xl transition-all duration-300"
                >
                  Submit Registration
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
      <SuccessDialog open={showSuccess} onClose={() => setShowSuccess(false)} />
      <FormProgress progress={calculateProgress()} />
    </section>
  );
}