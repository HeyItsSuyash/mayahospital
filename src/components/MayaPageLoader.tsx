"use client";

import React, { useEffect, useState } from "react";

export default function MayaPageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Elegant quick initial load sequence
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(removeTimer);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "#1c0630",
        backgroundImage: "radial-gradient(circle at 50% 50%, #2e0c4f 0%, #160326 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? "hidden" : "visible",
        transition: "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.5s ease",
        pointerEvents: fadeOut ? "none" : "all"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "22px"
        }}
      >
        {/* Pulsing White Caduceus Laurel Monogram Logo */}
        <div
          style={{
            position: "relative",
            width: "90px",
            height: "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "loaderPulse 1.8s infinite ease-in-out"
          }}
        >
          <img
            src="/White Caduceus Laurel Monogram.png"
            alt="Maya Hospital Crest"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: "drop-shadow(0 4px 20px rgba(168, 85, 247, 0.35))"
            }}
          />
        </div>

        {/* Brand Text */}
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--heading-font), 'Montserrat', sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "3px",
              color: "#ffffff",
              margin: 0,
              textTransform: "uppercase"
            }}
          >
            MAYA HOSPITAL
          </h2>
          <span
            style={{
              display: "block",
              fontFamily: "var(--heading-font), 'Montserrat', sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "4px",
              color: "var(--secondary-color)",
              textTransform: "uppercase",
              marginTop: "6px"
            }}
          >
            Lakhimpur Kheri
          </span>
        </div>

        {/* Sleek Minimal Loading Line */}
        <div
          style={{
            width: "140px",
            height: "2px",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            borderRadius: "2px",
            overflow: "hidden",
            position: "relative",
            marginTop: "6px"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "45%",
              backgroundColor: "var(--secondary-color)",
              borderRadius: "2px",
              animation: "loaderProgress 1.2s infinite ease-in-out"
            }}
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes loaderPulse {
          0%, 100% {
            transform: scale(0.96);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.04);
            opacity: 1;
          }
        }
        @keyframes loaderProgress {
          0% {
            left: -45%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
}
