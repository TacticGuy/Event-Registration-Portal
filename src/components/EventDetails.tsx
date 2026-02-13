import { motion } from 'framer-motion';
import { Code, Users, Award, Coffee, Zap, Rocket, Brain, Trophy } from 'lucide-react';
export function EventDetails() {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Technical Workshops',
      description: 'Hands-on sessions on web development, cloud computing, and cutting-edge technologies',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users size={32} />,
      title: 'Networking',
      description: 'Connect with industry leaders, mentors, and passionate tech enthusiasts',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Award size={32} />,
      title: 'Competitions',
      description: 'Exciting hackathons and coding challenges with prizes worth ₹50,000+',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: <Coffee size={32} />,
      title: 'Refreshments',
      description: 'Complimentary meals, premium snacks, and beverages all day long',
      color: 'from-emerald-500 to-teal-500'
    },
  ];
  const highlights = [
    { icon: <Zap size={24} />, text: 'Lightning Talks', value: '10+' },
    { icon: <Rocket size={24} />, text: 'Project Demos', value: '20+' },
    { icon: <Brain size={24} />, text: 'Expert Speakers', value: '5' },
    { icon: <Trophy size={24} />, text: 'Prize Pool', value: '₹50K+' },
  ];
  return (
    <section id="event-details" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1D] via-[#1a1a2e]/50 to-[#0B0B1D]"></div>
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
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
            <span className="px-4 py-2 bg-gradient-to-r from-[#ff6b35]/20 to-[#6366f1]/20 border border-[#ff6b35]/50 rounded-full text-transparent bg-clip-text font-bold text-sm uppercase tracking-wider">
              What's Inside
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-[#FFFFFF] mb-6">
            What to <span className="bg-gradient-to-r from-[#ff6b35] via-[#ff8555] to-[#6366f1] bg-clip-text text-transparent">Expect</span>
          </h2>
          <p className="text-xl text-[#FFFFFF]/70 max-w-2xl mx-auto font-light leading-relaxed">
            A full day of learning, innovation, and networking in the world of technology
          </p>
        </motion.div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="group relative cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-300`}></div>
              <div className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0F1729] backdrop-blur-md border border-[#ff6b35]/30 hover:border-[#ff6b35]/60 rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#ff6b35]/20">
                <div className={`inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-xl mb-4 shadow-lg`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-black text-[#FFFFFF] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#FFFFFF]/70 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Event Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, y: -5 }}
              className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0F1729] border border-[#ff6b35]/40 hover:border-[#6366f1]/60 rounded-xl p-6 text-center cursor-pointer transition-all duration-300 group"
            >
              <div className="flex justify-center mb-3">
                <div className="p-2.5 bg-gradient-to-r from-[#ff6b35] to-[#ff8555] rounded-lg text-white shadow-lg shadow-[#ff6b35]/40 group-hover:shadow-[#ff6b35]/60 transition-shadow">
                  {item.icon}
                </div>
              </div>
              <p className="text-3xl font-black text-transparent bg-gradient-to-r from-[#ff6b35] to-[#ff8555] bg-clip-text mb-1">
                {item.value}
              </p>
              <p className="text-[#FFFFFF]/70 text-sm font-semibold">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* Event Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/20 via-[#6366f1]/10 to-[#ff8555]/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-br from-[#1a1a2e]/80 via-[#16213e]/80 to-[#0F1729]/80 backdrop-blur-xl border border-[#ff6b35]/40 rounded-3xl p-8 md:p-12 shadow-2xl shadow-[#ff6b35]/10">
            <h3 className="text-3xl md:text-4xl font-black text-[#FFFFFF] mb-8">Event <span className="bg-gradient-to-r from-[#ff6b35] to-[#6366f1] bg-clip-text text-transparent">Schedule</span></h3>
            <div className="space-y-4">
              {[
                { time: '9:00 AM', event: 'Registration & ID Scanning', type: 'arrival' },
                { time: '10:00 AM', event: 'Opening Ceremony & Keynote', type: 'keynote' },
                { time: '11:00 AM', event: 'Technical Workshop Session 1', type: 'workshop' },
                { time: '1:00 PM', event: 'Lunch Break & Networking', type: 'break' },
                { time: '2:00 PM', event: 'Hackathon Begins', type: 'competition' },
                { time: '5:00 PM', event: 'Project Presentations & Awards Ceremony', type: 'awards' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 15, scale: 1.02 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-28">
                    <span className="text-transparent bg-gradient-to-r from-[#ff6b35] to-[#ff8555] bg-clip-text font-black text-lg">{item.time}</span>
                  </div>
                  <div className="flex-grow bg-gradient-to-r from-[#16213e]/50 to-[#16213e]/30 border border-[#ff6b35]/30 hover:border-[#ff6b35]/60 rounded-xl p-4 group-hover:shadow-lg group-hover:shadow-[#ff6b35]/20 transition-all duration-300">
                    <span className="text-[#FFFFFF] font-bold">{item.event}</span>
                  </div>
                  <div className="flex-shrink-0 hidden md:block">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#ff6b35]/30 to-[#ff8555]/30 border border-[#ff6b35]/50 rounded-full text-[#ff6b35] text-xs font-bold uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}