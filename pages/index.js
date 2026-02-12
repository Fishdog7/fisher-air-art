import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Neon Drift",
    price: 150,
    stripeLink: "https://buy.stripe.com/test_link_1",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Urban Static",
    price: 180,
    stripeLink: "https://buy.stripe.com/test_link_2",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Midnight Motion",
    price: 200,
    stripeLink: "https://buy.stripe.com/test_link_3",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCheckout = (product) => {
    window.location.href = product.stripeLink;
  };

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", padding: "40px" }}>
      <h1 style={{ textAlign: "center", fontSize: "48px", letterSpacing: "4px" }}>
        FISHER AIR ART
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", marginTop: "60px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ background: "#111", padding: "20px", borderRadius: "20px" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "15px", cursor: "pointer" }}
              onClick={() => setSelectedImage(product.image)}
            />
            <h2 style={{ marginTop: "20px" }}>{product.name}</h2>
            <p>${product.price}</p>
            <button
              onClick={() => handleCheckout(product)}
              style={{
                background: "white",
                color: "black",
                padding: "10px 20px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer"
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              style={{ maxHeight: "80%", borderRadius: "20px" }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
