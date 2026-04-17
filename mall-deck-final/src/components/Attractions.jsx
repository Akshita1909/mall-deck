import { motion } from "framer-motion";

export default function Attractions() {
  const items = ["Dubai Aquarium","VR Park","Ice Rink"];
  return (
    <section id="attractions" className="section dark">
      <h2>Attractions</h2>
      <div className="cards">
        {items.map((item,i)=>(
          <motion.div key={i} className="card" whileHover={{scale:1.1}}>
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}