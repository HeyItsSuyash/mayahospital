"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderHeroProps {
  onOpenAppointmentModal: () => void;
  onOpenEnquiryModal?: () => void;
}

export default function MayaHeroSection({ onOpenAppointmentModal, onOpenEnquiryModal }: HeaderHeroProps) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"departments" | "services" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<"departments" | "services" | null>(null);

  const handleEnquireClick = () => {
    if (onOpenEnquiryModal) {
      onOpenEnquiryModal();
    } else {
      onOpenAppointmentModal();
    }
  };

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
    <>
      {/* =========================================================================
          NAVBAR: Fixed persistent sticky header across the entire website
          Transparent at top -> Solid Amethyst Velvet on scroll
          ========================================================================= */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          width: "100%",
          padding: scrolled ? "14px 0" : "22px 0",
          backgroundColor: scrolled ? "rgba(22, 6, 36, 0.98)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(124, 58, 237, 0.25)" : "none",
          boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.5)" : "none",
          transition: "all 0.3s ease-in-out"
        }}
      >
        <div
          className="maya-nav-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "1680px",
            margin: "0 auto",
            padding: "0 clamp(24px, 4vw, 56px)",
            boxSizing: "border-box"
          }}
        >
          {/* Logo Left: Clean Whitescale Crest Logo */}
          <div className="maya-nav-left" style={{ display: "flex", alignItems: "center", flex: "0 0 auto" }}>
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
                src="/White Caduceus Laurel Monogram.png"
                alt="Maya Hospital Monogram Logo"
                style={{
                  height: scrolled ? "50px" : "60px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 2px 10px rgba(0,0,0,0.5))",
                  transition: "all 0.3s ease"
                }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                    fontSize: scrolled ? "20px" : "24px",
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                    color: "#ffffff",
                    lineHeight: "1.05",
                    textShadow: "0 2px 12px rgba(0,0,0,0.6)",
                    transition: "font-size 0.3s ease"
                  }}
                >
                  MAYA HOSPITAL
                </span>
              </div>
            </Link>
          </div>

          {/* Center Navigation Links (Spaced Out & Centered) */}
          <div className="maya-nav-center" style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: "1 1 auto", margin: "0 24px" }}>
            <nav
              className="stone-nav-links"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "38px"
              }}
            >
              <Link href="#about" className="maya-nav-link">ABOUT</Link>

              {/* DEPARTMENTS MEGA DROPDOWN */}
              <div
                className="maya-dropdown-wrap"
                style={{ position: "relative", display: "inline-flex", alignItems: "center" }}
                onMouseEnter={() => setOpenMenu("departments")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  className="maya-nav-link"
                  onClick={() => setOpenMenu(openMenu === "departments" ? null : "departments")}
                >
                  <span>DEPARTMENTS</span>
                  <i
                    className="fa-solid fa-chevron-down"
                    style={{
                      fontSize: "9px",
                      marginLeft: "6px",
                      display: "inline-flex",
                      alignItems: "center",
                      transform: openMenu === "departments" ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease"
                    }}
                  />
                </button>

                {openMenu === "departments" && (
                  <div
                    className="dropdown-slow-fade"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "-120px",
                      width: "560px",
                      backgroundColor: "#160526",
                      borderRadius: "0px",
                      boxShadow: "0 25px 60px rgba(0,0,0,0.85)",
                      border: "none",
                      padding: "24px 28px",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0px",
                      zIndex: 2000,
                      backdropFilter: "blur(20px)"
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
                          padding: "16px 14px",
                          borderRadius: "0px",
                          backgroundColor: "transparent",
                          textDecoration: "none",
                          borderBottom: i < 4 ? "1px solid rgba(255, 255, 255, 0.12)" : "none",
                          borderRight: i % 2 === 0 ? "1px solid rgba(255, 255, 255, 0.12)" : "none",
                          transition: "background-color 0.2s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(168, 85, 247, 0.14)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        <div style={{ color: "#ffffff", fontSize: "17px", marginTop: "2px" }}>
                          <i className={`fa-solid ${dept.icon}`}></i>
                        </div>
                        <div>
                          <div style={{ color: "#ffffff", fontSize: "13px", fontWeight: 600, marginBottom: "3px" }}>
                            {dept.name}
                          </div>
                          <div style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "11px", lineHeight: "1.35" }}>
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
                className="maya-dropdown-wrap"
                style={{ position: "relative", display: "inline-flex", alignItems: "center" }}
                onMouseEnter={() => setOpenMenu("services")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  className="maya-nav-link"
                  onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
                >
                  <span>SERVICES</span>
                  <i
                    className="fa-solid fa-chevron-down"
                    style={{
                      fontSize: "9px",
                      marginLeft: "6px",
                      display: "inline-flex",
                      alignItems: "center",
                      transform: openMenu === "services" ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease"
                    }}
                  />
                </button>

                {openMenu === "services" && (
                  <div
                    className="dropdown-slow-fade"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "-140px",
                      width: "560px",
                      backgroundColor: "#160526",
                      borderRadius: "0px",
                      boxShadow: "0 25px 60px rgba(0,0,0,0.85)",
                      border: "none",
                      padding: "24px 28px",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0px",
                      zIndex: 2000,
                      backdropFilter: "blur(20px)"
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
                          padding: "16px 14px",
                          borderRadius: "0px",
                          backgroundColor: "transparent",
                          textDecoration: "none",
                          borderBottom: i < 4 ? "1px solid rgba(255, 255, 255, 0.12)" : "none",
                          borderRight: i % 2 === 0 ? "1px solid rgba(255, 255, 255, 0.12)" : "none",
                          transition: "background-color 0.2s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(168, 85, 247, 0.14)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        <div style={{ color: "#ffffff", fontSize: "17px", marginTop: "2px" }}>
                          <i className={`fa-solid ${serv.icon}`}></i>
                        </div>
                        <div>
                          <div style={{ color: "#ffffff", fontSize: "13px", fontWeight: 600, marginBottom: "3px" }}>
                            {serv.name}
                          </div>
                          <div style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "11px", lineHeight: "1.35" }}>
                            {serv.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="#doctors" className="maya-nav-link">DOCTORS</Link>
              <Link href="#packages" className="maya-nav-link">PACKAGES</Link>
              <Link href="#location" className="maya-nav-link">LOCATION</Link>
            </nav>
          </div>

          {/* Right: CTA Button (Desktop) & Mobile Toggle */}
          <div className="maya-nav-right" style={{ display: "flex", alignItems: "center", gap: "16px", flex: "0 0 auto" }}>
            {/* Ghost CTA Button - Brought to the right of the navbar */}
            <button
              onClick={handleEnquireClick}
              className="maya-desktop-cta"
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "1.5px solid rgba(255, 255, 255, 0.7)",
                borderRadius: "9999px",
                padding: "11px 28px",
                fontSize: "12.5px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease",
                fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                boxShadow: "none"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.borderColor = "#ffffff";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.7)";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              ENQUIRE
            </button>

            {/* Mobile Hamburger Toggle Button (Visible on screens <= 1023px) */}
            <div className="maya-mobile-nav-toggle">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Mobile Menu"
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  borderRadius: "10px",
                  color: "#ffffff",
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  cursor: "pointer",
                  backdropFilter: "blur(10px)"
                }}
              >
                <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Out Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="maya-mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
            <div
              className="maya-mobile-drawer"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img
                    src="/White Caduceus Laurel Monogram.png"
                    alt="Maya Logo"
                    style={{ height: "40px", width: "auto" }}
                  />
                  <span style={{ color: "#ffffff", fontWeight: 700, fontSize: "16px", letterSpacing: "-0.01em" }}>
                    MAYA HOSPITAL
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                  }}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              {/* Drawer Links */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1, overflowY: "auto" }}>
                <Link
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-item"
                >
                  <span>ABOUT</span>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize: "11px", opacity: 0.5 }}></i>
                </Link>

                {/* Departments Mobile Accordion */}
                <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === "departments" ? null : "departments")}
                    className="mobile-nav-item"
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <span>DEPARTMENTS</span>
                    <i
                      className="fa-solid fa-chevron-down"
                      style={{
                        fontSize: "11px",
                        transform: mobileSubmenu === "departments" ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease"
                      }}
                    ></i>
                  </button>
                  {mobileSubmenu === "departments" && (
                    <div style={{ padding: "0 0 12px 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {[
                        "Gynaecology & Maternity",
                        "General Medicine & Diabetology",
                        "Orthopaedics & Joint Surgery",
                        "General & Laparoscopic Surgery",
                        "Paediatrics & Neonatology",
                        "24x7 Emergency & Critical Care"
                      ].map((name, i) => (
                        <Link
                          key={i}
                          href="#departments"
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            color: "rgba(255, 255, 255, 0.75)",
                            fontSize: "13px",
                            textDecoration: "none",
                            padding: "6px 0",
                            display: "block"
                          }}
                        >
                          • {name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Services Mobile Accordion */}
                <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === "services" ? null : "services")}
                    className="mobile-nav-item"
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <span>SERVICES</span>
                    <i
                      className="fa-solid fa-chevron-down"
                      style={{
                        fontSize: "11px",
                        transform: mobileSubmenu === "services" ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease"
                      }}
                    ></i>
                  </button>
                  {mobileSubmenu === "services" && (
                    <div style={{ padding: "0 0 12px 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {[
                        "24x7 Emergency Casualty",
                        "24x7 ICU & Critical Care",
                        "24x7 In-House Pharmacy",
                        "24x7 Ambulance Dispatch",
                        "Physiotherapy & Rehab",
                        "Cashless Mediclaim & TPA"
                      ].map((name, i) => (
                        <Link
                          key={i}
                          href="#services-facilities"
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            color: "rgba(255, 255, 255, 0.75)",
                            fontSize: "13px",
                            textDecoration: "none",
                            padding: "6px 0",
                            display: "block"
                          }}
                        >
                          • {name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="#doctors"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-item"
                >
                  <span>DOCTORS</span>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize: "11px", opacity: 0.5 }}></i>
                </Link>

                <Link
                  href="#packages"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-item"
                >
                  <span>PACKAGES</span>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize: "11px", opacity: 0.5 }}></i>
                </Link>

                <Link
                  href="#location"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-item"
                >
                  <span>LOCATION</span>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize: "11px", opacity: 0.5 }}></i>
                </Link>
              </div>

              {/* Drawer Bottom Actions */}
              <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href="tel:+919935123456"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(239, 68, 68, 0.15)",
                    border: "1px solid rgba(239, 68, 68, 0.4)",
                    color: "#fca5a5",
                    fontWeight: 700,
                    fontSize: "12px",
                    textDecoration: "none",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase"
                  }}
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>24x7: +91 99351 23456</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleEnquireClick();
                  }}
                  style={{
                    padding: "13px 18px",
                    borderRadius: "12px",
                    backgroundColor: "#7c3aed",
                    border: "none",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "12px",
                    cursor: "pointer",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    boxShadow: "0 6px 18px rgba(124, 58, 237, 0.35)"
                  }}
                >
                  Enquire & Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          HERO SECTION: Full screen cinematic backdrop with operating room visual
          ========================================================================= */}
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
          backgroundColor: "#080c14"
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

        {/* Natural Dark Photographic Vignette & Legibility Overlays (NO PURPLE TINT) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.20) 35%, rgba(0, 0, 0, 0.70) 80%, rgba(0, 0, 0, 0.90) 100%)",
            pointerEvents: "none"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.35) 50%, rgba(0, 0, 0, 0.15) 100%)",
            pointerEvents: "none"
          }}
        />

        {/* Spacer for fixed header */}
        <div style={{ height: "90px" }} />

      {/* =========================================================================
          HERO MAIN CONTENT
          Huge modern readable typography:
          Here for you,
          when it matters most.
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
          {/* Subtle accent rule */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px",
              color: "#ffffff",
              fontSize: "11px",
              letterSpacing: "3.5px",
              textTransform: "uppercase",
              fontWeight: 600
            }}
          >
          </div>

          {/* Impactful Mission & Healthcare Promise Title with Montserrat */}
          <h1
            className="luxury-hero-title"
            style={{
              fontFamily: "var(--heading-font), sans-serif",
              fontSize: "clamp(46px, 6.8vw, 92px)",
              fontWeight: 700,
              lineHeight: "1.06",
              color: "#ffffff",
              margin: "0 0 24px 0",
              letterSpacing: "-0.02em",
              textShadow: "0 4px 30px rgba(0,0,0,0.8)"
            }}
          >
            Here for you,<br />
            <span style={{ color: "#ffffff" }}>when it matters most.</span>
          </h1>

          <p
            style={{
              color: "rgba(255, 255, 255, 0.88)",
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
                backgroundColor: "#ffffff",
                color: "var(--primary-color)",
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
                transition: "all 0.25s ease",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#c084fc";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "var(--primary-color)";
              }}
            >
              <span>Consult Specialist</span>
            </button>

            {/* Ghost 24x7 Emergency Button (pure ghost: transparent background, clean border, no glass blur) */}
            <a
              href="tel:+919935123456"
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "1.5px solid rgba(255, 255, 255, 0.65)",
                borderRadius: "9999px",
                padding: "13px 30px",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.25s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ffffff";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.65)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.backgroundColor = "transparent";
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
    </>
  );
}

const stoneNavLinkStyle: React.CSSProperties = {
  color: "rgba(255, 255, 255, 0.9)",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "1.8px",
  textTransform: "uppercase",
  transition: "all 0.25s ease",
  fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif"
};


