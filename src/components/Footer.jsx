import React from "react";

const WHATSAPP_NUMBER = "917995668417";
const WHATSAPP_MSG = encodeURIComponent("Hi, I need help with cooking setup");

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0f172a",
        padding: "56px 20px 28px",
        color: "#9ca3af",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 36,
            marginBottom: 44,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  background: "linear-gradient(135deg, #e85d04, #c94b00)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 17,
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
                    color: "white",
                    lineHeight: 1.1,
                  }}
                >
                  HomeAssist India
                </div>
                <div
                  style={{
                    fontSize: "0.6rem",
                    color: "#e85d04",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Kitchen Emergency Support
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.83rem",
                lineHeight: 1.72,
                maxWidth: 210,
                color: "#6b7280",
              }}
            >
              A small coordination service helping Indian families find backup
              cooking solutions when they need it most.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              style={{
                color: "#e2e8f0",
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: "0.87rem",
                marginBottom: 14,
              }}
            >
              Quick Links
            </h4>
            {[
              { label: "How It Works", href: "#how-it-works" },
              { label: "Available Solutions", href: "#solutions" },
              { label: "Check Coverage", href: "#city-check" },
              { label: "Request Help", href: "#contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  display: "block",
                  fontSize: "0.84rem",
                  color: "#6b7280",
                  marginBottom: 9,
                  transition: "color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#e85d04")}
                onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                color: "#e2e8f0",
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: "0.87rem",
                marginBottom: 14,
              }}
            >
              Reach Us
            </h4>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "#25D366",
                color: "white",
                padding: "9px 18px",
                borderRadius: 9,
                fontSize: "0.83rem",
                fontWeight: 600,
                marginBottom: 12,
                transition: "all 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#1ead57")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#25D366")
              }
            >
              💬 WhatsApp Us
            </a>
            <p
              style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "#6b7280" }}
            >
              WhatsApp is our fastest support channel. We respond when we can.
            </p>
            <p style={{ fontSize: "0.79rem", marginTop: 8, color: "#4b5563" }}>
              ⏰ Active: 8 AM – 9 PM IST
            </p>
          </div>

          {/* Coverage */}
          <div>
            <h4
              style={{
                color: "#e2e8f0",
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: "0.87rem",
                marginBottom: 14,
              }}
            >
              Coverage
            </h4>
            <p
              style={{
                fontSize: "0.82rem",
                lineHeight: 1.78,
                color: "#6b7280",
              }}
            >
              Hyderabad · Bengaluru · Mumbai · Delhi · Chennai · Pune · and more
              — with more cities being added.
            </p>
            <a
              href="#city-check"
              style={{
                display: "inline-block",
                marginTop: 10,
                fontSize: "0.8rem",
                color: "#e85d04",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Check your area →
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: 13,
            padding: "18px 22px",
            border: "1px solid rgba(255,255,255,0.06)",
            marginBottom: 28,
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: "#4b5563",
              lineHeight: 1.7,
              textAlign: "center",
            }}
          >
            <strong style={{ color: "#6b7280" }}>Disclaimer:</strong> We are a
            coordination service, not a direct seller. We connect you with
            available local solutions. We do not manufacture, stock, or directly
            sell any products. Availability depends on your location. We are not
            responsible for third-party supplier quality or delivery times.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "#374151" }}>
            © {year} HomeAssist India. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 18 }}>
            {["Privacy Policy", "Terms of Use"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  fontSize: "0.78rem",
                  color: "#374151",
                  transition: "color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#e85d04")}
                onMouseLeave={(e) => (e.target.style.color = "#374151")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
