"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderHeroProps {
  onOpenAppointmentModal: () => void;
}

export default function MayaHeroSection({ onOpenAppointmentModal }: HeaderHeroProps) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"departments" | "services" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="maya-hero-wrap"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "720px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        backgroundColor: "#1c0630"
      }}
    >
      {/* Background Image: Focused Surgical Team in a Modern Operating Room */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/Focused Surgical Team in a Modern Operating Room.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 38%",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Atmospheric Overlays matching Royal Velvet Plum & Gold mood */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(22, 6, 36, 0.78) 0%, rgba(22, 6, 36, 0.45) 40%, rgba(22, 6, 36, 0.82) 85%, rgba(16, 4, 28, 0.96) 100%)",
          pointerEvents: "none"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 45%, rgba(0, 0, 0, 0.1) 0%, rgba(16, 4, 28, 0.78) 100%)",
          pointerEvents: "none"
        }}
      />

      {/* =========================================================================
          NAVBAR: Sticky, Imperial Royal Velvet Plum & Gold
          ========================================================================= */}
      <header
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 1000,
          width: "100%",
          padding: scrolled ? "14px 0" : "22px 0",
          backgroundColor: scrolled ? "rgba(28, 9, 44, 0.96)" : "rgba(22, 6, 36, 0.75)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(212, 175, 55, 0.28)",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.5)" : "none",
          transition: "all 0.3s ease-in-out"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 48px",
            boxSizing: "border-box"
          }}
        >
          {/* Logo Left: Clean Whitescale Crest Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              textDecoration: "none"
            }}
          >
            <img
              src="/Maya Hospital White Logo.png"
              alt="Maya Hospital Crest"
              style={{
                height: scrolled ? "44px" : "52px",
                width: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.5))",
                transition: "all 0.3s ease"
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "var(--heading-font), sans-serif",
                  fontSize: "14px",
                  fontWeight: 800,
                  letterSpacing: "1px",
                  color: "#ffffff",
                  lineHeight: "1.1"
                }}
              >
                MAYA HOSPITAL
              </span>
              <span
                style={{
                  fontFamily: "var(--body-font), sans-serif",
                  fontSize: "9.5px",
                  fontWeight: 600,
                  letterSpacing: "3px",
                  color: "var(--secondary-color)",
                  textTransform: "uppercase",
                  marginTop: "3px"
                }}
              >
                LAKHIMPUR KHERI
              </span>
            </div>
          </Link>

          {/* Right Navigation & Mega Dropdowns */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <nav
              className="stone-nav-links"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "28px"
              }}
            >
              <Link href="#about" style={stoneNavLinkStyle}>ABOUT</Link>

              {/* DEPARTMENTS MEGA DROPDOWN */}
              <div
                style={{ position: "relative" }}
                onMouseEnter={() => setOpenMenu("departments")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  style={{
                    ...stoneNavLinkStyle,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "10px 0"
                  }}
                  onClick={() => setOpenMenu(openMenu === "departments" ? null : "departments")}
                >
                  <span>DEPARTMENTS</span>
                  <span style={{ fontSize: "10px", transform: openMenu === "departments" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>▼</span>
                </button>

                {openMenu === "departments" && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "-120px",
                      width: "560px",
                      backgroundColor: "#1d0730",
                      borderRadius: "20px",
                      boxShadow: "0 25px 60px rgba(0,0,0,0.75)",
                      border: "1px solid rgba(212, 175, 55, 0.35)",
                      padding: "24px",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "14px",
                      zIndex: 2000,
                      backdropFilter: "blur(16px)"
                    }}
                  >
                    {[
                      { name: "Obstetrics & Gynaecology", desc: "Maternity, normal & C-section deliveries", icon: "fa-person-breastfeeding", href: "#departments" },
                      { name: "General & Laparoscopic Surgery", desc: "Minimally invasive keyhole procedures", icon: "fa-hand-holding-medical", href: "#departments" },
                      { name: "Orthopaedics & Joint Care", desc: "Fractures, trauma, total joint surgery", icon: "fa-bone", href: "#departments" },
                      { name: "General Medicine & Diabetology", desc: "Fever, hypertension, metabolic care", icon: "fa-stethoscope", href: "#departments" },
                      { name: "Paediatrics & Neonatology", desc: "Well-baby clinic, vaccination & NICU", icon: "fa-baby", href: "#departments" },
                      { name: "Pathology & Diagnostic Lab", desc: "Automated blood, urine, biochemistry", icon: "fa-microscope", href: "#departments" }
                    ].map((dept, i) => (
                      <Link
                        key={i}
                        href={dept.href}
                        onClick={() => setOpenMenu(null)}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          padding: "12px",
                          borderRadius: "14px",
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          textDecoration: "none",
                          transition: "all 0.2s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.2)";
                          e.currentTarget.style.transform = "translateX(4px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        <div style={{ color: "var(--secondary-color)", fontSize: "18px", marginTop: "2px" }}>
                          <i className={`fa-solid ${dept.icon}`}></i>
                        </div>
                        <div>
                          <div style={{ color: "#ffffff", fontSize: "13px", fontWeight: 700, marginBottom: "2px" }}>
                            {dept.name}
                          </div>
                          <div style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "11px", lineHeight: "1.3" }}>
                            {dept.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* SERVICES MEGA DROPDOWN */}
              <div
                style={{ position: "relative" }}
                onMouseEnter={() => setOpenMenu("services")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  style={{
                    ...stoneNavLinkStyle,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "10px 0"
                  }}
                  onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
                >
                  <span>SERVICES</span>
                  <span style={{ fontSize: "10px", transform: openMenu === "services" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>▼</span>
                </button>

                {openMenu === "services" && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "-140px",
                      width: "560px",
                      backgroundColor: "#1d0730",
                      borderRadius: "20px",
                      boxShadow: "0 25px 60px rgba(0,0,0,0.75)",
                      border: "1px solid rgba(212, 175, 55, 0.35)",
                      padding: "24px",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "14px",
                      zIndex: 2000,
                      backdropFilter: "blur(16px)"
                    }}
                  >
                    {[
                      { name: "24x7 Emergency Casualty", desc: "Trauma stabilization & triage beds", icon: "fa-truck-medical", href: "#services-facilities" },
                      { name: "24x7 Intensive Care Unit (ICU)", desc: "Ventilators, monitors & intensivists", icon: "fa-bed-pulse", href: "#services-facilities" },
                      { name: "24x7 In-House Pharmacy", desc: "All genuine life-saving medicines", icon: "fa-prescription", href: "#services-facilities" },
                      { name: "24x7 Ambulance Dispatch", desc: "Oxygen fitted emergency vehicle", icon: "fa-ambulance", href: "#services-facilities" },
                      { name: "Physiotherapy & Rehab", desc: "Post-surgery & paralysis recovery", icon: "fa-person-walking-with-cane", href: "#services-facilities" },
                      { name: "Cashless Mediclaim & TPA", desc: "Hassle-free insurance pre-authorization", icon: "fa-file-shield", href: "#insurance" }
                    ].map((serv, i) => (
                      <Link
                        key={i}
                        href={serv.href}
                        onClick={() => setOpenMenu(null)}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          padding: "12px",
                          borderRadius: "14px",
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          textDecoration: "none",
                          transition: "all 0.2s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.2)";
                          e.currentTarget.style.transform = "translateX(4px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        <div style={{ color: "var(--secondary-color)", fontSize: "18px", marginTop: "2px" }}>
                          <i className={`fa-solid ${serv.icon}`}></i>
                        </div>
                        <div>
                          <div style={{ color: "#ffffff", fontSize: "13px", fontWeight: 700, marginBottom: "2px" }}>
                            {serv.name}
                          </div>
                          <div style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "11px", lineHeight: "1.3" }}>
                            {serv.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="#doctors" style={stoneNavLinkStyle}>DOCTORS</Link>
              <Link href="#packages" style={stoneNavLinkStyle}>PACKAGES</Link>
              <Link href="#location" style={stoneNavLinkStyle}>LOCATION</Link>
            </nav>

            {/* Rounded Pill CTA Button (NOT square) */}
            <button
              onClick={onOpenAppointmentModal}
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.45)",
                borderRadius: "9999px",
                padding: "10px 28px",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "var(--body-font), sans-serif"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--secondary-color)";
                e.currentTarget.style.backgroundColor = "var(--secondary-color)";
                e.currentTarget.style.color = "#170c06";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.45)";
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              ENQUIRE
            </button>
          </div>
        </div>
      </header>

      {/* Spacer for sticky header */}
      <div style={{ height: "40px" }} />

      {/* =========================================================================
          HERO MAIN CONTENT
          Huge modern readable typography:
          MAYA
          HOSPITAL
          ========================================================================= */}
      <div
        style={{
          position: "relative",
          zIndex: 20,
          width: "100%",
          maxWidth: "1600px",
          margin: "auto 0",
          padding: "0 48px 40px 48px",
          boxSizing: "border-box"
        }}
      >
        <div style={{ maxWidth: "860px" }}>
          {/* Subtle gold accent rule */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px",
              color: "var(--secondary-color)",
              fontSize: "11px",
              letterSpacing: "3.5px",
              textTransform: "uppercase",
              fontWeight: 600
            }}
          >
            <span style={{ width: "24px", height: "1px", backgroundColor: "var(--secondary-color)" }}></span>
            <span>MULTI-SPECIALITY & CRITICAL CARE</span>
          </div>

          {/* Massive Stacked Title with Plus Jakarta Sans */}
          <h1
            className="luxury-hero-title"
            style={{
              fontFamily: "var(--heading-font), sans-serif",
              fontSize: "clamp(64px, 9vw, 126px)",
              fontWeight: 800,
              lineHeight: "0.90",
              color: "#ffffff",
              margin: "0 0 24px 0",
              letterSpacing: "-0.035em",
              textTransform: "uppercase",
              textShadow: "0 4px 30px rgba(0,0,0,0.8)"
            }}
          >
            MAYA<br />
            HOSPITAL
          </h1>

          <p
            style={{
              color: "rgba(255, 255, 255, 0.85)",
              fontSize: "16px",
              lineHeight: "28px",
              maxWidth: "540px",
              fontWeight: 400,
              marginBottom: "32px",
              fontFamily: "var(--body-font), sans-serif",
              textShadow: "0 2px 12px rgba(0,0,0,0.6)"
            }}
          >
            Premier healthcare facility in Meerpur, Lakhimpur Kheri with advanced 24x7 emergency trauma, laparoscopic surgeries, and compassionate maternity care.
          </p>

          {/* Rounded Pill CTA Action Buttons */}
          <div style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap" }}>
            <button
              onClick={onOpenAppointmentModal}
              style={{
                backgroundColor: "var(--secondary-color)",
                color: "#170c06",
                border: "none",
                borderRadius: "9999px",
                padding: "14px 34px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 8px 25px rgba(212, 175, 55, 0.35)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "var(--primary-color)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--secondary-color)";
                e.currentTarget.style.color = "#170c06";
              }}
            >
              <span>Consult Specialist</span>
              <i className="fa-solid fa-arrow-right" style={{ fontSize: "11px" }}></i>
            </button>

            <a
              href="tel:+919935123456"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                borderRadius: "9999px",
                padding: "13px 30px",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                textDecoration: "none",
                backdropFilter: "blur(8px)",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#21093a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              <i className="fa-solid fa-phone"></i>
              <span>24x7 Emergency</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero bottom spacer to ensure balance */}
      <div style={{ height: "40px" }} />
    </section>
  );
}

const stoneNavLinkStyle: React.CSSProperties = {
  color: "rgba(255, 255, 255, 0.8)",
  textDecoration: "none",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "2.5px",
  textTransform: "uppercase",
  transition: "all 0.25s ease",
  fontFamily: "var(--body-font), sans-serif"
};


