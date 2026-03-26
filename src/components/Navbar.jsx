import React, { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "917995668417";
const WHATSAPP_MSG = encodeURIComponent("Hi, I need help with cooking setup");

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Solutions", href: "#solutions" },
    { label: "Coverage", href: "#city-check" },
    { label: "Request Help", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: scrolled
          ? "rgba(255,255,255,0.97)"
          : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid #f0ece8" : "1px solid transparent",
        transition: "all 0.3s ease",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #e85d04, #c94b00)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              boxShadow: "0 3px 10px rgba(232,93,4,0.28)",
            }}
          >
            🔥
          </div>
          <div>
            <div
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                fontSize: "0.9rem",
                color: "#111827",
                lineHeight: 1.1,
              }}
            >
              HomeAssist India
            </div>
            <div
              style={{
                fontSize: "0.62rem",
                color: "#e85d04",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Kitchen Emergency Support
            </div>
          </div>
        </a>

        <div
          style={{ display: "flex", alignItems: "center", gap: 28 }}
          className="desk-nav"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: "0.865rem",
                fontWeight: 500,
                color: "#4b5563",
                transition: "color 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#e85d04")}
              onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#25D366",
              color: "white",
              padding: "9px 20px",
              borderRadius: 100,
              fontSize: "0.84rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 6,
              boxShadow: "0 3px 10px rgba(37,211,102,0.3)",
              transition: "all 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow =
                "0 5px 16px rgba(37,211,102,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 3px 10px rgba(37,211,102,0.3)";
            }}
          >
            💬 WhatsApp
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mob-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: 22,
            cursor: "pointer",
            color: "#374151",
          }}
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            background: "white",
            borderTop: "1px solid #f3f0ed",
            padding: "10px 20px 20px",
            animation: "fadeInUp 0.2s ease",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "13px 0",
                borderBottom: "1px solid #faf9f8",
                fontSize: "0.95rem",
                fontWeight: 500,
                color: "#1f2937",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginTop: 14,
              background: "#25D366",
              color: "white",
              padding: "13px",
              borderRadius: 12,
              fontSize: "0.95rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desk-nav { display: none !important; }
          .mob-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
