import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
export function ContactInfo() {
  const contacts = [
    {
      icon: <Mail size={28} />,
      title: 'Email',
      value: 'techfest@firefoxclub.com',
      link: 'mailto:techfest@firefoxclub.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone size={28} />,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <MapPin size={28} />,
      title: 'Location',
      value: 'VIT University, Vellore',
      link: 'https://maps.google.com',
      color: 'from-purple-500 to-pink-500'
    },
  ];
  const socials = [
    { icon: <Facebook size={24} />, link: '#', name: 'Facebook', color: 'hover:text-blue-500' },
    { icon: <Twitter size={24} />, link: '#', name: 'Twitter', color: 'hover:text-sky-500' },
    { icon: <Instagram size={24} />, link: '#', name: 'Instagram', color: 'hover:text-pink-500' },
    { icon: <Linkedin size={24} />, link: '#', name: 'LinkedIn', color: 'hover:text-blue-600' },
  ];
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-[#1a1a2e] to-[#0B0B1D] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#ff6b35]/5 to-[#ff8555]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-full text-[#ff6b35] text-sm font-semibold">
              Get Connected
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-[#FFFFFF] mb-6">
            Get in <span className="bg-gradient-to-r from-[#ff6b35] to-[#ff8555] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-[#FFFFFF]/70 max-w-2xl mx-auto font-light">
            Have questions? We're here to help. Reach out to us anytime.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              <div className="relative bg-[#1a1a2e]/80 backdrop-blur-sm border border-[#ff6b35]/20 rounded-2xl p-8 text-center group-hover:border-[#ff6b35]/50 transition-all">
                <div className={`inline-flex p-4 bg-gradient-to-br ${contact.color} rounded-xl mb-4 text-white`}>
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">
                  {contact.title}
                </h3>
                <p className="text-[#FFFFFF]/70">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-[#FFFFFF] mb-8">Follow Us on Social Media</h3>
          <div className="flex justify-center gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-[#1a1a2e]/80 border border-[#ff6b35]/30 rounded-full p-4 text-[#ff6b35] ${social.color} transition-all cursor-pointer hover:border-[#ff6b35]/60 hover:shadow-lg`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}