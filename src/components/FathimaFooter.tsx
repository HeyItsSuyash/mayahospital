import React from "react";
import Link from "next/link";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function FathimaFooter() {
  return (
    <footer style={{
      backgroundColor: "#160524",
      backgroundImage: "linear-gradient(180deg, #200835 0%, #120320 100%)",
      color: "#ffffff",
      paddingTop: "70px",
      borderTop: "2px solid rgba(212, 175, 55, 0.35)"
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "40px",
          paddingBottom: "60px"
        }}>
          {/* Column 1: Hospital Brand & Contact */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "22px" }}>
              <img
                src="/Maya Hospital White Logo.png"
                alt="Maya Hospital Crest Logo"
                style={{ height: "56px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.6))" }}
              />
              <div>
                <h4 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 800, margin: 0, letterSpacing: "1px", lineHeight: "1.2" }}>
                  MAYA <span style={{ color: "var(--secondary-color)" }}>HOSPITAL</span>
                </h4>
                <span style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 600 }}>
                  Multi-speciality Centre
                </span>
              </div>
            </div>

            <p style={{ color: "rgba(255, 255, 255, 0.82)", fontSize: "13.5px", lineHeight: "22px", marginBottom: "24px" }}>
              Leading healthcare institution delivering 24x7 emergency critical care, maternity, and advanced surgeries in Lakhimpur Kheri.
            </p>

            {/* Address */}
            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "16px" }}>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "rgba(205, 162, 80, 0.2)",
                color: "var(--secondary-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <i className="fa-solid fa-location-dot" style={{ fontSize: "15px" }}></i>
              </div>
              <div style={{ fontSize: "13.5px", lineHeight: "20px", color: "#ffffff" }}>
                <strong style={{ color: "var(--secondary-color)", display: "block", fontSize: "11.5px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>Hospital Address</strong>
                <span>Near Children&apos;s Academy School, Aira Road, Meerpur, Lakhimpur Kheri-262701, UP.</span>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "16px" }}>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "rgba(205, 162, 80, 0.2)",
                color: "var(--secondary-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <i className="fa-solid fa-phone" style={{ fontSize: "14px" }}></i>
              </div>
              <div style={{ fontSize: "13.5px", lineHeight: "20px", color: "#ffffff" }}>
                <strong style={{ color: "var(--secondary-color)", display: "block", fontSize: "11.5px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "2px" }}>Emergency & OPD Numbers</strong>
                <a href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`} style={{ color: "#ffffff", fontWeight: 700, textDecoration: "none" }}>
                  {HOSPITAL_INFO.emergencyPhone}
                </a>
                <span style={{ margin: "0 6px", opacity: 0.5 }}>•</span>
                <a href={`tel:${HOSPITAL_INFO.bookingPhone.replace(/\s+/g, '')}`} style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>
                  {HOSPITAL_INFO.bookingPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 style={{
              color: "#ffffff",
              fontSize: "17px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              borderBottom: "2px solid var(--secondary-color)",
              paddingBottom: "10px",
              marginBottom: "20px"
            }}>
              Explore Hospital
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { name: "About Maya Hospital", href: "#about" },
                { name: "Centres of Excellence", href: "#departments" },
                { name: "Our Dedicated Doctors", href: "#doctors" },
                { name: "24x7 Emergency & Facilities", href: "#services-facilities" },
                { name: "Health Checkup Packages", href: "#packages" },
                { name: "Insurance & Cashless TPA", href: "#insurance" },
                { name: "Hospital Location & Direction", href: "#location" }
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    style={{
                      color: "rgba(255, 255, 255, 0.88)",
                      fontSize: "14px",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "all 0.25s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--secondary-color)";
                      e.currentTarget.style.paddingLeft = "5px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.88)";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    <span style={{ color: "var(--secondary-color)", fontSize: "10px" }}>▸</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Medical Specialities */}
          <div>
            <h3 style={{
              color: "#ffffff",
              fontSize: "17px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              borderBottom: "2px solid var(--secondary-color)",
              paddingBottom: "10px",
              marginBottom: "20px"
            }}>
              Specialities
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Obstetrics & Gynaecology",
                "General Medicine & Diabetes",
                "Orthopaedics & Joint Surgery",
                "General & Laparoscopic Surgery",
                "Paediatrics & Neonatology (NICU)",
                "24x7 Emergency & Trauma Care",
                "Pathology & Digital Diagnostic Lab"
              ].map((spec, idx) => (
                <li key={idx}>
                  <a
                    href="#departments"
                    style={{
                      color: "rgba(255, 255, 255, 0.88)",
                      fontSize: "14px",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "all 0.25s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--secondary-color)";
                      e.currentTarget.style.paddingLeft = "5px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.88)";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    <span style={{ color: "var(--secondary-color)", fontSize: "10px" }}>▸</span>
                    <span>{spec}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Timetable / Hospital Hours */}
          <div>
            <h3 style={{
              color: "#ffffff",
              fontSize: "17px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              borderBottom: "2px solid var(--secondary-color)",
              paddingBottom: "10px",
              marginBottom: "20px"
            }}>
              Operational Hours
            </h3>
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderRadius: "16px",
              padding: "16px 20px",
              border: "1px solid rgba(205, 162, 80, 0.25)"
            }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "13.5px" }}>
                <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "rgba(255,255,255,0.9)" }}>Trauma / Casualty:</span>
                  <span style={{ color: "#4ade80", fontWeight: 700, backgroundColor: "rgba(74, 222, 128, 0.15)", padding: "2px 8px", borderRadius: "10px", fontSize: "11px" }}>24x7 Open</span>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "rgba(255,255,255,0.9)" }}>Hospital Pharmacy:</span>
                  <span style={{ color: "#4ade80", fontWeight: 700, backgroundColor: "rgba(74, 222, 128, 0.15)", padding: "2px 8px", borderRadius: "10px", fontSize: "11px" }}>24x7 Open</span>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "rgba(255,255,255,0.9)" }}>Ambulance Fleet:</span>
                  <span style={{ color: "#4ade80", fontWeight: 700, backgroundColor: "rgba(74, 222, 128, 0.15)", padding: "2px 8px", borderRadius: "10px", fontSize: "11px" }}>Always on Call</span>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px dashed rgba(255,255,255,0.15)", paddingTop: "8px" }}>
                  <span style={{ color: "rgba(255,255,255,0.9)" }}>OPD Consultations:</span>
                  <strong style={{ color: "var(--secondary-color)" }}>10 AM – 8 PM</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "rgba(255,255,255,0.9)" }}>Patient Attendants:</span>
                  <span style={{ color: "#ffffff" }}>10 AM – 2 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div style={{
        backgroundColor: "#110804",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "20px 0"
      }}>
        <div className="container" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px"
        }}>
          <p style={{ margin: 0, fontSize: "13px", color: "rgba(255, 255, 255, 0.75)" }}>
            © 2026 Maya Hospital And Multi-speciality Centre • Meerpur, Lakhimpur Kheri, UP.
          </p>

          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <a
              href={HOSPITAL_INFO.justdialUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--secondary-color)",
                fontSize: "12px",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <span>Justdial Verified 5.0 ★</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
