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
            <span className="px-4 py-2 bg-[#ff6b35]/10 border border-[#ff6b35]/30 rounded-full text-[#ff6b35] text-sm font-semibold">
              What's Inside
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-[#FFFFFF] mb-6">
            What to <span className="bg-gradient-to-r from-[#ff6b35] to-[#ff8555] bg-clip-text text-transparent">Expect</span>
          </h2>
          <p className="text-xl text-[#FFFFFF]/70 max-w-2xl mx-auto font-light">
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
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              <div className="relative bg-[#1a1a2e]/80 backdrop-blur-sm border border-[#ff6b35]/20 rounded-2xl p-8 h-full hover:border-[#ff6b35]/50 transition-all">
                <div className={`inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-xl mb-4`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-[#FFFFFF] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#FFFFFF]/70 leading-relaxed">{feature.description}</p>
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
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#ff6b35]/30 rounded-xl p-6 text-center cursor-pointer"
            >
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-[#ff6b35]/20 rounded-lg text-[#ff6b35]">
                  {item.icon}
                </div>
              </div>
              <p className="text-3xl font-black text-transparent bg-gradient-to-r from-[#ff6b35] to-[#ff8555] bg-clip-text mb-1">
                {item.value}
              </p>
              <p className="text-[#FFFFFF]/60 text-sm font-medium">{item.text}</p>
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/20 via-transparent to-[#ff8555]/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-[#1a1a2e]/60 backdrop-blur-sm border border-[#ff6b35]/30 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-black text-[#FFFFFF] mb-8">Event <span className="text-[#ff6b35]">Schedule</span></h3>
            <div className="space-y-6">
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-32">
                    <span className="text-[#ff6b35] font-bold text-lg">{item.time}</span>
                  </div>
                  <div className="flex-grow bg-[#16213e]/50 border border-[#ff6b35]/20 rounded-xl p-4 group-hover:border-[#ff6b35]/50 transition-all">
                    <span className="text-[#FFFFFF] font-semibold">{item.event}</span>
                  </div>
                  <div className="flex-shrink-0 hidden md:block">
                    <span className="px-3 py-1 bg-[#ff6b35]/20 border border-[#ff6b35]/30 rounded-full text-[#ff6b35] text-xs font-medium uppercase">
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