"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedCounter } from "./ux/AnimatedCounter";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative mt-24 border-t border-border-light bg-white">
      {/* Top Gradient Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Column 1: Brand + Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3 sm:col-span-2 lg:col-span-1"
          >
            <Link href="/" className="inline-block">
              <span className="bg-linear-to-r from-gold via-gold/90 to-gold-dim bg-clip-text text-2xl font-bold text-transparent">
                BusyGrowth
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-text-gray">
              Jaipur-based performance team for founders & creators. 
              We build digital experiences that print leads on autopilot.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 pt-1">
              {/* YouTube */}
              <a
                href="https://youtube.com/@busygrowth?si=8-vqgoQnR2COGrAn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-600 transition-all hover:bg-red-100 hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              
              {/* Instagram */}
              <a
                href="https://www.instagram.com/busygrowth?igsh=MWw3bmF6dmx0NDgzZg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-pink-600 transition-all hover:bg-pink-100 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              
              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Busy-Growth/61585734320392/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all hover:bg-blue-100 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            
            {/* Mobile-only contact */}
            <div className="flex gap-4 pt-2 sm:hidden">
              <a href="mailto:busygrowth@busygrowth.in" className="text-sm text-cyan-accent">
                📧 busygrowth@busygrowth.in
              </a>
              <a href="https://wa.me/919352757834" className="text-sm text-emerald-accent">
                📱 WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-6 sm:col-span-2 lg:col-span-1"
          >
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-dark">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-text-gray transition hover:text-gold">Home</Link></li>
                <li><Link href="/services" className="text-sm text-text-gray transition hover:text-gold">Services</Link></li>
                <li><Link href="/course" className="text-sm text-text-gray transition hover:text-gold">Full DM Course</Link></li>
                <li><Link href="/performance-course" className="text-sm text-text-gray transition hover:text-gold">Performance Course</Link></li>
                <li><Link href="/contact" className="text-sm text-text-gray transition hover:text-gold">Contact</Link></li>
              </ul>
            </div>
          </motion.div>

          {/* Column 3: Services (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden space-y-3 lg:block"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-dark">
              Services
            </h3>
            <ul className="space-y-2">
              <li><Link href="/services#social-media" className="text-sm text-text-gray transition hover:text-gold">Social Media</Link></li>
              <li><Link href="/services#meta-ads" className="text-sm text-text-gray transition hover:text-gold">Meta Ads</Link></li>
              <li><Link href="/services#ai-automation" className="text-sm text-text-gray transition hover:text-gold">AI & Automation</Link></li>
              <li><Link href="/services#video-editing" className="text-sm text-text-gray transition hover:text-gold">Video Editing</Link></li>
            </ul>
          </motion.div>

          {/* Column 4: Contact (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden space-y-3 lg:block"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-dark">
              Let's Connect
            </h3>
            
            <div className="space-y-3">
              <a
                href="https://wa.me/919352757834"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-emerald-accent/20 bg-linear-to-br from-emerald-accent/5 to-emerald-accent/10 p-3 transition-all hover:from-emerald-accent/10 hover:to-emerald-accent/20"
              >
                <div className="rounded-full bg-emerald-accent/20 p-2 text-emerald-accent">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.077 4.928C17.191 3.041 14.683 2 12.006 2 6.499 2 2.006 6.493 2.006 12c0 1.76.46 3.483 1.333 5l-1.333 4.86 5.013-1.313c1.452.793 3.087 1.207 4.78 1.207h.004c5.507 0 10-4.493 10-10 0-2.677-1.041-5.185-2.926-7.072z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-light">WhatsApp us</p>
                  <p className="text-sm font-medium text-text-dark group-hover:text-emerald-accent">
                    +91 93527 57834
                  </p>
                </div>
              </a>

              <a
                href="mailto:busygrowth@busygrowth.in"
                className="group flex items-center gap-3 rounded-xl border border-cyan-accent/20 bg-linear-to-br from-cyan-accent/5 to-cyan-accent/10 p-3 transition-all hover:from-cyan-accent/10 hover:to-cyan-accent/20"
              >
                <div className="rounded-full bg-cyan-accent/20 p-2 text-cyan-accent">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-light">Email us</p>
                  <p className="text-sm font-medium text-text-dark group-hover:text-cyan-accent">
                    busygrowth@busygrowth.in
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 rounded-xl border border-border-light bg-linear-to-br from-gold/5 to-amber-50/30 p-3">
                <div className="rounded-full bg-gold/20 p-2 text-gold">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-light">Based in</p>
                  <p className="text-sm font-medium text-text-dark">Jaipur, Rajasthan</p>
                  <p className="text-xs text-text-light">Working worldwide 🌍</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-8 grid grid-cols-4 gap-2 rounded-xl border border-border-light bg-linear-to-br from-slate-50 to-gray-50 p-4 md:my-12 md:gap-4 md:p-6"
        >
          <div className="text-center">
            <p className="text-xl font-bold text-gold md:text-2xl">
              <AnimatedCounter target={80} suffix="+" />
            </p>
            <p className="text-[10px] uppercase tracking-wider text-text-light md:text-xs">Campaigns</p>
          </div>
          <div className="text-center border-l border-border-light">
            <p className="text-xl font-bold text-cyan-accent md:text-2xl">
              ₹<AnimatedCounter target={1} suffix="Cr+" />
            </p>
            <p className="text-[10px] uppercase tracking-wider text-text-light md:text-xs">Ad Spend</p>
          </div>
          <div className="text-center border-l border-border-light">
            <p className="text-xl font-bold text-emerald-accent md:text-2xl">
              <AnimatedCounter target={3.2} suffix="x" decimals={1} />
            </p>
            <p className="text-[10px] uppercase tracking-wider text-text-light md:text-xs">Avg ROAS</p>
          </div>
          <div className="text-center border-l border-border-light">
            <p className="text-xl font-bold text-purple-accent md:text-2xl">24/7</p>
            <p className="text-[10px] uppercase tracking-wider text-text-light md:text-xs">Automation</p>
          </div>
        </motion.div>

       {/* Bottom Bar */}
<div className="border-t border-border-light pt-6 pb-2 text-center">
  <p className="text-xs text-text-light sm:text-sm">
    © {currentYear} BusyGrowth. All rights reserved.
  </p>
</div>
      </div>
    </footer>
  );
};