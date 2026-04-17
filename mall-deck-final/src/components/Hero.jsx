import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <video autoPlay loop muted className="bg-video">
        <source src="https://cdn.coverr.co/videos/coverr-dubai-skyline-1572/1080p.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <motion.div className="hero-content" initial={{opacity:0,y:80}} animate={{opacity:1,y:0}} transition={{duration:1}}>
        <h1>Dubai Mall</h1>
        <p>Where Retail Meets Global Experience</p>
        <button className="cta">Explore Opportunities</button>
      </motion.div>
    </section>
  );
}