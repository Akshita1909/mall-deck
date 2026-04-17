import { motion } from "framer-motion";

export default function Retail() {
  const brands = ["Gucci","Nike","Zara","Apple"];
  return (
    <section className="section">
      <h2>Retail Powerhouse</h2>
      <div className="cards">
        {brands.map((b,i)=>(
          <motion.div key={i} className="card" whileHover={{scale:1.1}}>
            {b}
          </motion.div>
        ))}
      </div>
    </section>
  );
}