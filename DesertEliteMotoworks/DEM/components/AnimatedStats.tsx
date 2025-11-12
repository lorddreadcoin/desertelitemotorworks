'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Sparkles, Star, Shield, Wrench, Users } from 'lucide-react';

interface StatProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

function AnimatedStat({ end, duration = 2, prefix = '', suffix = '', label, icon }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth counting
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure we hit exact number
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative group"
    >
      <div className="flex flex-col items-center p-8 md:p-10 bg-zinc-900/50 backdrop-blur-xl 
                      border border-zinc-800 rounded-2xl hover:border-amber-500/50 
                      transition-all duration-500 hover:scale-105 hover:shadow-2xl 
                      hover:shadow-amber-500/20">
        
        {/* Icon with animation */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 mb-6 text-amber-400 relative"
        >
          {icon}
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Number */}
        <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 
                        bg-clip-text text-transparent tabular-nums">
          {prefix}{count.toLocaleString()}{suffix}
        </div>

        {/* Label */}
        <div className="text-zinc-400 text-center font-medium text-lg group-hover:text-zinc-300 transition-colors">
          {label}
        </div>

        {/* Hover line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-amber-400 text-sm font-semibold tracking-widest mb-4"
          >
            PROVEN EXCELLENCE
          </motion.p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Excellence By The Numbers
            </span>
          </h2>
          
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Three decades of uncompromising quality, one vehicle at a time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatedStat
            end={30}
            suffix="+"
            label="Years of Mastery"
            icon={<Award className="w-full h-full" />}
          />
          <AnimatedStat
            end={500}
            suffix="+"
            label="Elite Restorations"
            icon={<Sparkles className="w-full h-full" />}
          />
          <AnimatedStat
            end={4.9}
            label="Google Rating"
            icon={<Star className="w-full h-full fill-amber-400" />}
          />
          <AnimatedStat
            end={100}
            suffix="%"
            label="Client Satisfaction"
            icon={<Shield className="w-full h-full" />}
          />
        </div>

        {/* Additional stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 max-w-5xl mx-auto"
        >
          <AnimatedStat
            end={64}
            label="Five-Star Reviews"
            icon={<Users className="w-full h-full" />}
            duration={2.5}
          />
          <AnimatedStat
            end={15000}
            suffix="+"
            label="Hours of Training"
            icon={<Wrench className="w-full h-full" />}
            duration={2.5}
          />
          <AnimatedStat
            end={1}
            label="Mission: Perfection"
            icon={<Shield className="w-full h-full" />}
            duration={1.5}
          />
        </motion.div>
      </div>
    </section>
  );
}
