"use client";
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
export const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919352757834?text=Hi%20BusyGrowth%2C%20I'm%20interested%20in%20your%20services!"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full text-[#25D366] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 md:bottom-4 md:right-8"
  >
    <IoLogoWhatsapp className="h-13 w-13" />
  </motion.a>
);