import { motion } from "framer-motion";
import profile from "../assets/profile.jpg"; 

export default function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Hi,<br />
          I'm <span>Mohan</span><br />
          React.js Developer
        </h1>

        <p>
          I build modern, responsive and user-friendly web applications
          using React and clean UI principles.
        </p>
        <a href="#contact" className="hero-btn">Contact Me</a>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="profile-card">
          <img src={profile} alt="profile" />
        </div>
      </motion.div>
    </section>
  );
}
