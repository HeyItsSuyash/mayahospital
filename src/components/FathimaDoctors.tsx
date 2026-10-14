"use client";

import React, { useState } from "react";

interface DoctorsProps {
  onOpenAppointmentModal: (docName?: string) => void;
}

// 16 Doctors & Clinical Specialists spanning Maya Hospital's departments
const DOCTOR_LIST = [
  {
    name: "Dr. Maya Verma",
    degrees: "MBBS, MS (Obs & Gynae), FMAS",
    speciality: "Obstetrics & Gynaecology",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/anitha.png"
  },
  {
    name: "Dr. R. K. Sharma",
    degrees: "MD, DM (Cardio), FACC",
    speciality: "Cardiology & Critical Care",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/6-2.png"
  },
  {
    name: "Dr. S. K. Singh",
    degrees: "MBBS, MS Ortho, FIJR",
    speciality: "Orthopaedics & Joint Surgery",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/5-1.png"
  },
  {
    name: "Dr. Alok Srivastava",
    degrees: "MBBS, MD (Paediatrics)",
    speciality: "Paediatrics & Neonatology",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/wasim.png"
  },
  {
    name: "Dr. A. P. Mishra",
    degrees: "MBBS, MS (General Surgery), FIAGES",
    speciality: "Laparoscopic & General Surgery",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/Haleem.png"
  },
  {
    name: "Dr. Ujual Narayanan",
    degrees: "MBBS, MD (General Medicine)",
    speciality: "General Medicine & Diabetology",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/ujjal-narayanan.png"
  },
  {
    name: "Dr. Shalima P. S.",
    degrees: "MBBS, MS (ENT), DNB",
    speciality: "ENT, Head & Neck Surgery",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/shamila.png"
  },
  {
    name: "Dr. Santhosh P. Varghese",
    degrees: "MS, MCh (Uro)",
    speciality: "Urology & Andrology",
    image: "https://www.fathimahospital.com/wp-content/uploads/2024/12/Santhosh-P-Varghese.png"
  },
  {
    name: "Dr. Priya Pandey",
    degrees: "MBBS, DMRD (Radiology)",
    speciality: "Radiology & Ultrasonography",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Arvind Kashyap",
    degrees: "MBBS, MD (Anaesthesiology)",
    speciality: "Critical Care & ICU",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Neha Saxena",
    degrees: "MBBS, DCH, DNB",
    speciality: "Neonatal Intensive Care (NICU)",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Manoj Tripathi",
    degrees: "BPT, MPT (Neuro-Ortho)",
    speciality: "Physiotherapy & Rehabilitation",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Vikram Sethi",
    degrees: "MBBS, MS (Ophthalmology)",
    speciality: "Ophthalmology & Eye Surgery",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Sunita Agarwal",
    degrees: "MD (Pathology), DCP",
    speciality: "Clinical Pathology & Hematology",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Rajeshwar Dayal",
    degrees: "MBBS, DNB (Respiratory Med)",
    speciality: "Pulmonology & Chest Medicine",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Ananya Sen",
    degrees: "MBBS, MD (Dermatology)",
    speciality: "Dermatology & Skin Care",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=600"
  }
];

// Aesthetic lighter-shade filler hexagon component to fill empty spaces around doctors
const FillerHexagon: React.FC<{
  icon?: string;
  label?: string;
  extraClass?: string;
  onClick?: () => void;
}> = ({ icon = "fa-heart-pulse", label = "Maya Healthcare", extraClass = "", onClick }) => {
  return (
    <div
      className={`hex-card hex-filler-card ${extraClass}`}
      onClick={onClick}
      title={label}
    >
      <div className="hex-content hex-filler-content">
        <div className="hex-filler-inner">
          <i className={`fa-solid ${icon} hex-filler-icon`}></i>
          <span className="hex-filler-label">{label}</span>
        </div>
      </div>
    </div>
  );
};

export default function FathimaDoctors({ onOpenAppointmentModal }: DoctorsProps) {
  // Mobile active doctor card state (for tap-to-inspect credentials)
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);

  // 16 Doctors arranged in 3 organic honeycomb rows with subtle natural disorder
  // Row 1: 5 Doctors (framed with lighter shade hexagons on left and right)
  // Row 2: 6 Doctors (offset to interlock, framed with lighter shade hexagons)
  // Row 3: 5 Doctors (framed with lighter shade hexagons on left and right)
  const row1 = DOCTOR_LIST.slice(0, 5);
  const row2 = DOCTOR_LIST.slice(5, 11);
  const row3 = DOCTOR_LIST.slice(11, 16);

  // Subtle organic disorder offsets (slight vertical shifts for natural honeycomb texture)
  const subtleDisorderOffsets = ["0px", "6px", "-4px", "8px", "-2px", "5px"];

  const handleCardClick = (docName: string) => {
    // If mobile card is already active, open appointment modal; otherwise activate it
    if (activeMobileCard === docName) {
      onOpenAppointmentModal(docName);
    } else {
      setActiveMobileCard(docName);
    }
  };

  return (
    <section
      id="doctors"
      style={{
        paddingTop: "90px",
        paddingBottom: "110px",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
        width: "100%"
      }}
    >
      <div style={{ width: "100%", maxWidth: "1800px", margin: "0 auto", padding: "0 16px", boxSizing: "border-box" }}>
        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "45px" }}>
          <span className="subtitle">MEET OUR TEAM</span>
          <h2 className="heading" style={{ marginBottom: "15px" }}>
            Our Dedicated Doctors
          </h2>
          <p
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              fontSize: "15px",
              color: "#6b5e7a",
              lineHeight: "24px"
            }}
          >
            Hover or tap on any specialist to view their clinical expertise, qualifications, and consultation scope.
          </p>

          {/* Mobile swipe hint visible only on touch/mobile */}
          <div className="mobile-swipe-hint">
            <i className="fa-solid fa-arrows-left-right" style={{ marginRight: "6px" }}></i>
            Swipe horizontally to explore all 16 specialists
          </div>
        </div>

        {/* Honeycomb Interlocking Canvas across full page width */}
        <div className="honeycomb-scroll-wrapper">
          <div className="honeycomb-container">
            {/* =============================================================
                Row 1: Flanked by lighter shade hexagons on left and right
                ============================================================= */}
            <div className="honeycomb-row">
              {/* Extra filler on wide screens */}
              <FillerHexagon
                icon="fa-hospital"
                label="Maya Hospital"
                extraClass="hex-filler-ultrawide"
                onClick={() => onOpenAppointmentModal()}
              />
              {/* Left Filler Hexagon (Lighter Shade) */}
              <FillerHexagon
                icon="fa-notes-medical"
                label="Clinical Care"
                onClick={() => onOpenAppointmentModal()}
              />

              {row1.map((doc, idx) => {
                const isActive = activeMobileCard === doc.name;
                return (
                  <div
                    key={doc.name}
                    className={`hex-card ${isActive ? "is-active-mobile" : ""}`}
                    style={{
                      transform: `translateY(${subtleDisorderOffsets[idx % subtleDisorderOffsets.length]})`
                    }}
                    onClick={() => handleCardClick(doc.name)}
                  >
                    <div className="hex-content">
                      {/* Default State: Doctor Image against solid theme-consistent purple */}
                      <div className="hex-image-holder">
                        <img src={doc.image} alt={doc.name} className="hex-img" />
                      </div>

                      {/* Hover State: Turns pure WHITE with PRECISELY centered Name, Education & Speciality */}
                      <div className="hex-hover-panel">
                        <div className="hex-text-inner">
                          <h4 className="hex-doc-name">{doc.name}</h4>
                          <p className="hex-doc-edu">{doc.degrees}</p>
                          <p className="hex-doc-spec">{doc.speciality}</p>
                          <span className="hex-book-badge">Book Appointment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Right Filler Hexagon (Lighter Shade) */}
              <FillerHexagon
                icon="fa-stethoscope"
                label="Expert Doctors"
                onClick={() => onOpenAppointmentModal()}
              />
              {/* Extra filler on wide screens */}
              <FillerHexagon
                icon="fa-heart-pulse"
                label="24x7 Emergency"
                extraClass="hex-filler-ultrawide"
                onClick={() => onOpenAppointmentModal()}
              />
            </div>

            {/* =============================================================
                Row 2: 6 Hexagons (Staggered to interlock naturally)
                Flanked by lighter shade hexagons on both ends
                ============================================================= */}
            <div className="honeycomb-row offset-row">
              {/* Extra filler on wide screens */}
              <FillerHexagon
                icon="fa-shield-halved"
                label="Quality Care"
                extraClass="hex-filler-ultrawide"
                onClick={() => onOpenAppointmentModal()}
              />
              {/* Left Filler Hexagon (Lighter Shade) */}
              <FillerHexagon
                icon="fa-user-doctor"
                label="Specialist OPD"
                onClick={() => onOpenAppointmentModal()}
              />

              {row2.map((doc, idx) => {
                const isActive = activeMobileCard === doc.name;
                return (
                  <div
                    key={doc.name}
                    className={`hex-card ${isActive ? "is-active-mobile" : ""}`}
                    style={{
                      transform: `translateY(${subtleDisorderOffsets[(idx + 2) % subtleDisorderOffsets.length]})`
                    }}
                    onClick={() => handleCardClick(doc.name)}
                  >
                    <div className="hex-content">
                      <div className="hex-image-holder">
                        <img src={doc.image} alt={doc.name} className="hex-img" />
                      </div>

                      <div className="hex-hover-panel">
                        <div className="hex-text-inner">
                          <h4 className="hex-doc-name">{doc.name}</h4>
                          <p className="hex-doc-edu">{doc.degrees}</p>
                          <p className="hex-doc-spec">{doc.speciality}</p>
                          <span className="hex-book-badge">Book Appointment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Right Filler Hexagon (Lighter Shade) */}
              <FillerHexagon
                icon="fa-syringe"
                label="Safe Surgery"
                onClick={() => onOpenAppointmentModal()}
              />
              {/* Extra filler on wide screens */}
              <FillerHexagon
                icon="fa-bed-pulse"
                label="Modern ICU"
                extraClass="hex-filler-ultrawide"
                onClick={() => onOpenAppointmentModal()}
              />
            </div>

            {/* =============================================================
                Row 3: Flanked by lighter shade hexagons on left and right
                ============================================================= */}
            <div className="honeycomb-row">
              {/* Extra filler on wide screens */}
              <FillerHexagon
                icon="fa-mortar-pestle"
                label="24x7 Pharmacy"
                extraClass="hex-filler-ultrawide"
                onClick={() => onOpenAppointmentModal()}
              />
              {/* Left Filler Hexagon (Lighter Shade) */}
              <FillerHexagon
                icon="fa-truck-medical"
                label="Ambulance Care"
                onClick={() => onOpenAppointmentModal()}
              />

              {row3.map((doc, idx) => {
                const isActive = activeMobileCard === doc.name;
                return (
                  <div
                    key={doc.name}
                    className={`hex-card ${isActive ? "is-active-mobile" : ""}`}
                    style={{
                      transform: `translateY(${subtleDisorderOffsets[(idx + 4) % subtleDisorderOffsets.length]})`
                    }}
                    onClick={() => handleCardClick(doc.name)}
                  >
                    <div className="hex-content">
                      <div className="hex-image-holder">
                        <img src={doc.image} alt={doc.name} className="hex-img" />
                      </div>

                      <div className="hex-hover-panel">
                        <div className="hex-text-inner">
                          <h4 className="hex-doc-name">{doc.name}</h4>
                          <p className="hex-doc-edu">{doc.degrees}</p>
                          <p className="hex-doc-spec">{doc.speciality}</p>
                          <span className="hex-book-badge">Book Appointment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Right Filler Hexagon (Lighter Shade) */}
              <FillerHexagon
                icon="fa-award"
                label="NABH Standards"
                onClick={() => onOpenAppointmentModal()}
              />
              {/* Extra filler on wide screens */}
              <FillerHexagon
                icon="fa-hand-holding-medical"
                label="Compassionate"
                extraClass="hex-filler-ultrawide"
                onClick={() => onOpenAppointmentModal()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
