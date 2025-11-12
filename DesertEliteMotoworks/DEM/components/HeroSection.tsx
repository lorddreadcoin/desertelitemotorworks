'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Phone, Calendar, ArrowRight, ChevronDown, BadgeCheck, Shield, Award, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        
        {/* Logo Watermark - Behind Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <img 
            src="/images/logo.png" 
            alt="Desert Elite Motorworks" 
            className="w-[800px] h-auto object-contain"
          />
        </motion.div>
        
        {/* Animated grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          {/* Animated Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-3 px-6 py-3 mb-8
                       bg-black/40 backdrop-blur-xl border border-amber-500/30 rounded-full
                       shadow-2xl shadow-amber-500/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
            >
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </motion.div>
            <span className="animate-shimmer font-bold tracking-wider text-sm md:text-base"
                  style={{ textShadow: '0 0 20px rgba(251,191,36,0.6)' }}>
              4.9 STARS · 64 REVIEWS · CA BAR LICENSED ARD00306932
            </span>
          </motion.div>

          {/* Main Headline with Staggered Animation */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-4">
                <span className="block animate-shimmer"
                      style={{ 
                        textShadow: '0 0 30px rgba(251,191,36,0.8), 0 0 60px rgba(251,191,36,0.4), 0 4px 8px rgba(0,0,0,0.9)',
                        filter: 'drop-shadow(0 0 20px rgba(251,191,36,0.5))'
                      }}>
                  AUTOMOTIVE
                </span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-4">
                <span className="block bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent"
                      style={{ 
                        textShadow: '0 2px 10px rgba(255,255,255,0.2), 0 4px 20px rgba(0,0,0,0.8)',
                        filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.9))'
                      }}>
                  EXCELLENCE
                </span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
                <span className="block animate-shimmer"
                      style={{ 
                        textShadow: '0 0 30px rgba(251,191,36,0.9), 0 0 60px rgba(251,191,36,0.5), 0 4px 8px rgba(0,0,0,0.9)',
                        filter: 'drop-shadow(0 0 25px rgba(251,191,36,0.6))'
                      }}>
                  REDEFINED
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto font-light leading-relaxed"
          >
            <span className="text-zinc-300" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
              Where million-dollar restorations meet white-glove service.
            </span>
            <br />
            <span className="animate-shimmer font-semibold"
                  style={{ textShadow: '0 0 20px rgba(251,191,36,0.7), 0 0 40px rgba(251,191,36,0.3)' }}>
              The Coachella Valley's only CA BAR licensed luxury facility.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 
                         text-black text-lg md:text-xl font-bold rounded-full overflow-hidden
                         shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/70 transition-all"
            >
              <div className="relative z-10 flex items-center space-x-3">
                <Calendar className="w-6 h-6" />
                <span>Schedule Private Consultation</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+17608998244"
              whileHover={{ scale: 1.05, borderColor: 'rgba(245, 158, 11, 1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-white/30 backdrop-blur-xl
                         text-white text-lg md:text-xl font-bold rounded-full
                         hover:bg-white/10 transition-all shadow-xl"
            >
              <span className="flex items-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>(760) 899-8244</span>
              </span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-zinc-400"
          >
            <motion.div 
              className="flex items-center space-x-2 group cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <BadgeCheck className="w-5 h-5 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
              <span className="group-hover:text-amber-400 transition-colors" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>CA BAR Licensed</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 group cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <Shield className="w-5 h-5 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
              <span className="group-hover:text-amber-400 transition-colors" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Lifetime Warranty</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 group cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <Award className="w-5 h-5 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
              <span className="group-hover:text-amber-400 transition-colors" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>ASE Certified</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 group cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <Sparkles className="w-5 h-5 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
              <span className="group-hover:text-amber-400 transition-colors" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>White Glove Service</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-amber-400 cursor-pointer"
          onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs tracking-widest mb-2 font-semibold">DISCOVER MORE</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
