import { motion } from "framer-motion";

export default function Stats() {
  const stats = ["100M+ Annual Visitors","200+ Luxury Brands","Global Tourism Hub"];
  return (
    <section id="stats" className="section">
      <h2>Why This Property</h2>
      <div className="cards">
        {stats.map((item,i)=>(
          <motion.div key={i} className="card" whileHover={{scale:1.1}}>
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}