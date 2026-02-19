'use client';
import { motion } from 'framer-motion';

// This line automatically creates a list from 1 to 46 for you
const totalTrashItems = 46;
const misBasuritas = Array.from({ length: totalTrashItems }, (_, i) => `trash-${i + 1}.png`);

export default function PeceraBasurera() {
  return (
    <main style={{ backgroundColor: 'white', width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      {misBasuritas.map((filename, i) => (
        <motion.img
          key={i}
          src={`/images/trash/${filename}`}
          style={{ 
            position: 'absolute', 
            width: `${Math.random() * 100 + 100}px`, // Randomizes the size of each piece
            cursor: 'grab',
            zIndex: Math.floor(Math.random() * 10) // Randomly stacks them for depth
          }}
          // Random starting positions so they don't all clump in one corner
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 800,
          }}
          animate={{
            x: [null, Math.random() * 800, Math.random() * 200],
            y: [null, Math.random() * 600, Math.random() * 100],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 20, // Slower, driftier movement
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear"
          }}
          drag
        />
      ))}
      <h1 style={{ position: 'fixed', bottom: '20px', right: '20px', fontFamily: 'monospace', color: '#eee', pointerEvents: 'none' }}>
       TU PECERA BASURERA
      </h1>
    </main>
  );
}
