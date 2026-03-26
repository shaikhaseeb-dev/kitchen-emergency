import React, { useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "917995668417";
const WHATSAPP_MSG = encodeURIComponent("Hi, I need help with cooking setup");

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.querySelectorAll(".hero-animate").forEach((item, i) => {
      item.style.animationDelay = `${i * 0.15}s`;
      item.style.animation = "fadeInUp 0.8s ease both";
    });
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(160deg, #fff8f3 0%, #ffffff 55%, #fef9f6 100%)",
        display: "flex",
        alignItems: "center",
        padding: "100px 20px 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,93,4,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,93,4,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 52,
            alignItems: "center",
          }}
        >
          <div>
            <div
              className="hero-animate"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#fff",
                border: "1px solid #f0ece8",
                borderRadius: 100,
                padding: "6px 16px 6px 10px",
                marginBottom: 28,
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  display: "inline-block",
                  animation: "pulse-dot 2s infinite",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "#6b7280",
                }}
              >
                We're available to help right now
              </span>
            </div>

            <h1
              className="hero-animate"
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "clamp(1.9rem, 5.5vw, 3.2rem)",
                fontWeight: 800,
                lineHeight: 1.18,
                color: "#111827",
                marginBottom: 18,
              }}
            >
              🚨 No Gas?{" "}
              <span style={{ color: "#e85d04" }}>We Help You Cook Today.</span>
            </h1>

            <p
              className="hero-animate"
              style={{
                fontSize: "clamp(0.97rem, 2.5vw, 1.1rem)",
                color: "#6b7280",
                lineHeight: 1.8,
                marginBottom: 12,
                maxWidth: 490,
              }}
            >
              We understand how stressful it is when cooking suddenly stops —
              especially with family at home.
            </p>
            <p
              className="hero-animate"
              style={{
                fontSize: "0.93rem",
                color: "#9ca3af",
                lineHeight: 1.75,
                marginBottom: 36,
                maxWidth: 490,
              }}
            >
              We're a small coordination team. We look for available cooking
              solutions near you and help arrange them.{" "}
              <em>No promises we can't keep — just genuine effort to help.</em>
            </p>

            <div
              className="hero-animate"
              style={{ display: "flex", flexWrap: "wrap", gap: 14 }}
            >
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "linear-gradient(135deg, #e85d04, #c94b00)",
                  color: "white",
                  padding: "15px 30px",
                  borderRadius: 14,
                  fontSize: "1rem",
                  fontWeight: 700,
                  boxShadow: "0 6px 20px rgba(232,93,4,0.3)",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 28px rgba(232,93,4,0.38)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(232,93,4,0.3)";
                }}
              >
                🆘 Request Help
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#fff",
                  color: "#1f2937",
                  padding: "15px 26px",
                  borderRadius: 14,
                  fontSize: "1rem",
                  fontWeight: 600,
                  border: "2px solid #e5e7eb",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#25D366";
                  e.currentTarget.style.color = "#16a34a";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.color = "#1f2937";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>💬</span> Chat on WhatsApp
              </a>
            </div>

            <div
              className="hero-animate"
              style={{
                marginTop: 26,
                display: "flex",
                alignItems: "center",
                gap: 22,
                flexWrap: "wrap",
              }}
            >
              {[
                "🤝 We arrange, not sell",
                "📍 Local solutions",
                "🔒 No hidden charges",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "0.8rem",
                    color: "#bcc3cc",
                    fontWeight: 500,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                background: "white",
                borderRadius: 24,
                padding: "32px 28px",
                boxShadow:
                  "0 16px 50px rgba(0,0,0,0.09), 0 3px 12px rgba(232,93,4,0.07)",
                maxWidth: 340,
                width: "100%",
                animation: "float 5s ease-in-out infinite",
                border: "1px solid #f5ede8",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: 22 }}>
                <div style={{ fontSize: "3.2rem", marginBottom: 8 }}>🍳</div>
                <h3
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#111827",
                    marginBottom: 3,
                  }}
                >
                  HomeAssist India
                </h3>
                <p style={{ fontSize: "0.78rem", color: "#9ca3af" }}>
                  Kitchen Emergency Support
                </p>
              </div>

              <div
                style={{
                  background: "#f0fdf4",
                  borderRadius: 10,
                  padding: "10px 14px",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "inline-block",
                    flexShrink: 0,
                    animation: "pulse-dot 2s infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "#166534",
                  }}
                >
                  We're here to help today
                </span>
              </div>

              {[
                { icon: "🔍", text: "We check options in your area" },
                { icon: "📞", text: "We get back to you as soon as we can" },
                { icon: "🚚", text: "We arrange what's available locally" },
              ].map((item) => (
                <div
                  key={item.text}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    padding: "10px 0",
                    borderBottom: "1px solid #f9fafb",
                  }}
                >
                  <span style={{ fontSize: "1rem", marginTop: 1 }}>
                    {item.icon}
                  </span>
                  <span
                    style={{
                      fontSize: "0.84rem",
                      color: "#4b5563",
                      lineHeight: 1.55,
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}

              <div
                style={{
                  marginTop: 16,
                  textAlign: "center",
                  fontSize: "0.74rem",
                  color: "#d1d5db",
                }}
              >
                Availability varies by location · Free to request
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
