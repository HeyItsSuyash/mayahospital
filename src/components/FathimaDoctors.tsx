"use client";

import React, { useState } from "react";

interface DoctorsProps {
  onOpenAppointmentModal: (docName?: string) => void;
}

const DOCTOR_LIST = [
  {
    name: "Dr. Maya Verma",
    degrees: "MBBS, MS (Obs & Gynae), FMAS",
    designation: "Chief Consultant Gynecologist & Laparoscopic Surgeon",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/anitha.png"
  },
  {
    name: "Dr. R. K. Sharma",
    degrees: "MD, DM (Cardio), FACC, FSCAI",
    designation: "Chief Consultant Interventional Cardiologist & Critical Care",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/6-2.png"
  },
  {
    name: "Dr. S. K. Singh",
    degrees: "MBBS, MS Ortho, FIJR (Australia & India)",
    designation: "Senior Consultant Orthopedic & Joint Replacement Surgeon",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/5-1.png"
  },
  {
    name: "Dr. Alok Srivastava",
    degrees: "MBBS, MD (Paediatrics), Fellow Neonatology",
    designation: "Senior Consultant Pediatrician & Neonatologist (NICU)",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/wasim.png"
  },
  {
    name: "Dr. A. P. Mishra",
    degrees: "MBBS, MS (General Surgery), FIAGES",
    designation: "Senior Consultant Laparoscopic & General Surgeon",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/Haleem.png"
  },
  {
    name: "Dr. Ujual Narayanan",
    degrees: "MBBS, MD (General Medicine)",
    designation: "Senior Consultant Physician & Diabetologist",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/ujjal-narayanan.png"
  },
  {
    name: "Dr. Shalima P. S.",
    degrees: "MBBS, MS (ENT), DNB (ENT)",
    designation: "Consultant ENT, Head & Neck Surgeon",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/shamila.png"
  },
  {
    name: "Dr. Santhosh P. Varghese",
    degrees: "MS, MCh (Uro)",
    designation: "Senior Consultant Urologist & Andrologist",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/Santhosh-P-Varghese.png"
  }
];

export default function FathimaDoctors({ onOpenAppointmentModal }: DoctorsProps) {
  const [startIndex, setStartIndex] = useState(0);

  const prevDoctors = () => {
    setStartIndex((prev) => (prev - 1 + DOCTOR_LIST.length) % DOCTOR_LIST.length);
  };

  const nextDoctors = () => {
    setStartIndex((prev) => (prev + 1) % DOCTOR_LIST.length);
  };

  // Show 4 doctors in a row on desktop
  const visibleDoctors = [
    DOCTOR_LIST[startIndex % DOCTOR_LIST.length],
    DOCTOR_LIST[(startIndex + 1) % DOCTOR_LIST.length],
    DOCTOR_LIST[(startIndex + 2) % DOCTOR_LIST.length],
    DOCTOR_LIST[(startIndex + 3) % DOCTOR_LIST.length],
  ];

  return (
    <section id="doctors" className="pb-100" style={{ paddingTop: "80px", paddingBottom: "100px", backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Section Heading matching Fathima */}
        <div className="row text-center pb-50" style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="subtitle">MEET OUR TEAM</span>
          <h2 className="heading">Our Dedicated Doctors</h2>
        </div>

        {/* Doctor Carousel Row */}
        <div style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "30px" }}>
            {visibleDoctors.map((doc, idx) => (
              <div key={idx} className="item">
                <div
                  className="doctor-card-wrap"
                  style={{
                    backgroundColor: "#fefcf7",
                    borderRadius: "24px",
                    padding: "24px 20px",
                    boxShadow: "0 10px 30px rgba(36, 20, 10, 0.07)",
                    border: "1px solid rgba(205, 162, 80, 0.2)",
                    transition: "all 0.35s ease",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 18px 40px rgba(205, 162, 80, 0.22)";
                    e.currentTarget.style.borderColor = "var(--secondary-color)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(36, 20, 10, 0.07)";
                    e.currentTarget.style.borderColor = "rgba(205, 162, 80, 0.2)";
                  }}
                >
                  <a 
                    href="#book" 
                    onClick={(e) => { e.preventDefault(); onOpenAppointmentModal(doc.name); }}
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    {/* Yellow Circle Avatar Container replacing old heart background */}
                    <div style={{
                      position: "relative",
                      width: "180px",
                      height: "180px",
                      margin: "0 auto 20px auto",
                      borderRadius: "50%",
                      background: "radial-gradient(circle, #fde047 0%, #facc15 50%, #eab308 100%)",
                      boxShadow: "0 10px 25px rgba(234, 179, 8, 0.28)",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      overflow: "hidden",
                      transition: "all 0.4s ease"
                    }}>
                      <img
                        src={doc.image}
                        alt={doc.name}
                        style={{
                          height: "92%",
                          width: "auto",
                          objectFit: "contain",
                          transition: "transform 0.4s ease"
                        }}
                      />
                    </div>

                    <div className="doc-cont" style={{
                      paddingLeft: "15px",
                      borderLeft: "3px solid var(--secondary-color)",
                      transition: "border-color 0.3s ease"
                    }}>
                      <h3 style={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "var(--primary-color)",
                        marginBottom: "6px",
                        lineHeight: "1.3"
                      }}>
                        {doc.name}
                      </h3>
                      <p style={{
                        fontSize: "12.5px",
                        fontWeight: 600,
                        color: "var(--secondary-color)",
                        marginBottom: "4px"
                      }}>
                        {doc.degrees}
                      </p>
                      <p style={{
                        fontSize: "13px",
                        color: "#555",
                        lineHeight: "1.4",
                        margin: 0
                      }}>
                        {doc.designation}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Arrows */}
          <button
            onClick={prevDoctors}
            style={{
              position: "absolute",
              left: "-25px",
              top: "40%",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "var(--primary-color)",
              color: "#fff",
              border: "1px solid rgba(205, 162, 80, 0.3)",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--secondary-color)";
              e.currentTarget.style.color = "#170c06";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--primary-color)";
              e.currentTarget.style.color = "#fff";
            }}
            aria-label="Previous Doctors"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button
            onClick={nextDoctors}
            style={{
              position: "absolute",
              right: "-25px",
              top: "40%",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "var(--primary-color)",
              color: "#fff",
              border: "1px solid rgba(205, 162, 80, 0.3)",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--secondary-color)";
              e.currentTarget.style.color = "#170c06";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--primary-color)";
              e.currentTarget.style.color = "#fff";
            }}
            aria-label="Next Doctors"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
