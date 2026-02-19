'use client';
import { motion } from 'framer-motion';

// We'll update these names once you upload your PNGs
const misBasuritas = ['25_006.png', 'basura1.png', 'basura2.png'];

export default function PeceraBasurera() {
  return (
    <main style={{ backgroundColor: 'white', width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      {misBasuritas.map((item, i) => (
        <motion.img
          key={i}
          src={`/images/trash/${item}`}
          style={{ position: 'absolute', width: '200px', cursor: 'grab' }}
          animate={{
            x: [Math.random() * 300, Math.random() * 600, Math.random() * 100],
            y: [Math.random() * 300, Math.random() * 100, Math.random() * 600],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear"
          }}
          drag
        />
      ))}
      <h1 style={{ position: 'fixed', bottom: '20px', right: '20px', fontFamily: 'monospace', color: '#ccc' }}>
       PECERA BASURERA
      </h1>
    </main>
  );
}
