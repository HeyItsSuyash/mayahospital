import React from "react";
import Image from "next/image";

export default function MayaFounderSection() {
  return (
    <section 
      id="vision" 
      className="reveal-on-scroll" 
      style={{ 
        padding: "70px 0 85px 0", 
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
        {/* Subtle section label */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span 
            className="subtitle" 
            style={{ 
              color: "#7c3aed", 
              letterSpacing: "2.5px", 
              fontSize: "12px", 
              fontWeight: 700, 
              textTransform: "uppercase" 
            }}
          >
            FOUNDER&apos;S VISION & COMMITMENT
          </span>
          <h2 
            className="heading" 
            style={{ 
              color: "#240b3b", 
              fontSize: "32px", 
              fontWeight: 700, 
              marginTop: "6px" 
            }}
          >
            Rooted in Lakhimpur Kheri, Dedicated to Every Life
          </h2>
        </div>

        {/* Outer Quote Block Card matching reference design pattern with imperial purple theme */}
        <div 
          style={{
            position: "relative",
            borderRadius: "26px",
            backgroundColor: "#170526",
            border: "1px solid rgba(124, 58, 237, 0.35)",
            boxShadow: "0 25px 60px rgba(23, 5, 38, 0.32)",
            overflow: "hidden",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "stretch"
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div 
            style={{
              position: "absolute",
              top: "-40%",
              right: "-20%",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
              pointerEvents: "none"
            }}
          />

          {/* Left Column: Founder Image with clean subtle gradient base */}
          <div 
            style={{
              flex: "0 0 340px",
              minHeight: "380px",
              position: "relative",
              backgroundColor: "#200835",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              overflow: "hidden"
            }}
            className="founder-image-col"
          >
            {/* Background spotlight for portrait */}
            <div 
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse at 50% 60%, rgba(124, 58, 237, 0.3) 0%, rgba(16, 3, 28, 0.95) 85%)",
                zIndex: 1
              }}
            />

            <img
              src="/mayahospital.jpeg"
              alt="Dr. Brijendra Verma - Founder, Maya Hospital"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "440px",
                objectFit: "cover",
                objectPosition: "top center",
                position: "relative",
                zIndex: 2,
                display: "block"
              }}
            />
          </div>

          {/* Right Column: Seamless Quote Content Column directly attached */}
          <div 
            style={{
              flex: "1 1 500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "44px 48px",
              position: "relative",
              zIndex: 2,
              borderLeft: "1px solid rgba(124, 58, 237, 0.25)"
            }}
            className="founder-quote-col"
          >
            {/* Top decorative quotation mark icon */}
            <div>
              <div 
                style={{ 
                  color: "#9333ea", 
                  opacity: 0.85, 
                  fontSize: "36px", 
                  lineHeight: 1, 
                  marginBottom: "16px" 
                }}
              >
                <i className="fa-solid fa-quote-left"></i>
              </div>

              <blockquote 
                style={{
                  fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                  fontSize: "20px",
                  lineHeight: "1.7",
                  color: "#f8f5fd",
                  fontWeight: 300,
                  fontStyle: "italic",
                  margin: 0,
                  padding: 0
                }}
              >
                &ldquo;When we laid the foundation of Maya Hospital right here in Lakhimpur Kheri, our vision was anchored in a single, non-negotiable principle: advanced surgical expertise and emergency critical care should never be a distant privilege reserved only for metro cities. We built this institution from the ground up so that every family in our region receives immediate medical intervention, transparent clinical ethics, and 100% dignity under one trusted roof.&rdquo;
              </blockquote>
            </div>

            {/* Founder Signoff Below Quote with Divider */}
            <div 
              style={{
                marginTop: "32px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(124, 58, 237, 0.35)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px"
              }}
            >
              <div>
                <h4 
                  style={{
                    fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                    fontSize: "21px",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "0.2px",
                    margin: 0,
                    marginBottom: "4px"
                  }}
                >
                  Dr. Brijendra Verma
                </h4>
                <p 
                  style={{
                    fontSize: "13.5px",
                    color: "#eab308",
                    fontFamily: "var(--body-font), 'Inter', sans-serif",
                    letterSpacing: "0.4px",
                    fontWeight: 500,
                    margin: 0
                  }}
                >
                  Founder & Managing Director, Maya Hospital & Multi-speciality Centre
                </p>
              </div>

              {/* Verified Hospital Stamp Badge */}
              <div 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "rgba(124, 58, 237, 0.18)",
                  border: "1px solid rgba(124, 58, 237, 0.4)",
                  padding: "8px 16px",
                  borderRadius: "9999px"
                }}
              >
                <i className="fa-solid fa-certificate" style={{ color: "#c084fc", fontSize: "14px" }}></i>
                <span style={{ fontSize: "12px", color: "#e9d5ff", fontWeight: 600, letterSpacing: "0.3px" }}>
                  Serving Lakhimpur Kheri
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .founder-image-col {
            flex: 0 0 100% !important;
            min-height: 320px !important;
          }
          .founder-quote-col {
            padding: 28px 24px !important;
            border-left: none !important;
            border-top: 1px solid rgba(124, 58, 237, 0.25) !important;
          }
        }
      `}</style>
    </section>
  );
}
