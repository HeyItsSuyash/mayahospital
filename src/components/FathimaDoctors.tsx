"use client";

import React from "react";

interface DoctorsProps {
  onOpenAppointmentModal: (docName?: string) => void;
}

// 12 Real Doctors & Clinical Specialists spanning Maya Hospital's departments
// 16 Doctors & Clinical Specialists for rich, organic honeycomb mosaic spanning page
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
    image: "https://images.unsplash.com/photo-1594824813583-094183d2999e?auto=format&fit=crop&q=80&w=600"
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

export default function FathimaDoctors({ onOpenAppointmentModal }: DoctorsProps) {
  // 16 Doctors arranged in 3 organic honeycomb rows with subtle natural disorder
  // Row 1: 5 Doctors
  // Row 2: 6 Doctors (offset to interlock)
  // Row 3: 5 Doctors
  const row1 = DOCTOR_LIST.slice(0, 5);
  const row2 = DOCTOR_LIST.slice(5, 11);
  const row3 = DOCTOR_LIST.slice(11, 16);

  // Subtle organic disorder offsets (slight vertical shifts for natural honeycomb texture)
  const subtleDisorderOffsets = [
    "0px", "6px", "-4px", "8px", "-2px", "5px"
  ];

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
      <div style={{ width: "100%", maxWidth: "1680px", margin: "0 auto", padding: "0 16px", boxSizing: "border-box" }}>
        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "55px" }}>
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
            Hover over any specialist to view their clinical expertise, qualifications, and consultation scope.
          </p>
        </div>

        {/* Honeycomb Interlocking Canvas across full page width */}
        <div className="honeycomb-container">
          {/* Row 1: 5 Hexagons */}
          <div className="honeycomb-row">
            {row1.map((doc, idx) => (
              <div
                key={doc.name}
                className="hex-card"
                style={{
                  transform: `translateY(${subtleDisorderOffsets[idx % subtleDisorderOffsets.length]})`
                }}
                onClick={() => onOpenAppointmentModal(doc.name)}
              >
                <div className="hex-content">
                  {/* Default State: Doctor Image against solid theme-consistent purple */}
                  <div className="hex-image-holder">
                    <img src={doc.image} alt={doc.name} className="hex-img" />
                  </div>

                  {/* Hover State: Turns pure WHITE with precisely centered Name, Education & Speciality */}
                  <div className="hex-hover-panel">
                    <div className="hex-text-inner">
                      <h4 className="hex-doc-name">{doc.name}</h4>
                      <p className="hex-doc-edu">{doc.degrees}</p>
                      <p className="hex-doc-spec">{doc.speciality}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 6 Hexagons (Staggered to interlock naturally) */}
          <div className="honeycomb-row offset-row">
            {row2.map((doc, idx) => (
              <div
                key={doc.name}
                className="hex-card"
                style={{
                  transform: `translateY(${subtleDisorderOffsets[(idx + 2) % subtleDisorderOffsets.length]})`
                }}
                onClick={() => onOpenAppointmentModal(doc.name)}
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: 5 Hexagons */}
          <div className="honeycomb-row">
            {row3.map((doc, idx) => (
              <div
                key={doc.name}
                className="hex-card"
                style={{
                  transform: `translateY(${subtleDisorderOffsets[(idx + 4) % subtleDisorderOffsets.length]})`
                }}
                onClick={() => onOpenAppointmentModal(doc.name)}
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .honeycomb-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          width: 100%;
          padding: 30px 0;
          overflow-x: auto;
          overflow-y: visible;
        }

        .honeycomb-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-top: -46px; /* True honeycomb vertical interlocking */
          position: relative;
        }

        .honeycomb-row:first-child {
          margin-top: 0;
        }

        .honeycomb-row.offset-row {
          /* Perfect half-width offset for mathematical honeycomb nesting */
          margin-left: 0;
        }

        /* Hexagonal Card Geometry: Interlocking, subtle border-radius, NO borders, theme purple */
        .hex-card {
          width: 220px;
          height: 250px;
          position: relative;
          clip-path: polygon(
            50% 1.5%,
            98.5% 25%,
            98.5% 75%,
            50% 98.5%,
            1.5% 75%,
            1.5% 25%
          );
          border-radius: 18px;
          border: none !important;
          background-color: #240b3b; /* Theme-consistent imperial purple without glow */
          cursor: pointer;
          transition: background-color 0.3s ease, z-index 0.1s ease;
          flex-shrink: 0;
          z-index: 1;
        }

        /* When hovered, elevate z-index so hover panel is always fully in front */
        .hex-card:hover {
          z-index: 40 !important;
        }

        .hex-content {
          position: absolute;
          inset: 0;
          border-radius: 18px;
          border: none !important;
          overflow: hidden;
          display: flex;
          align-items: center;
          justifyContent: center;
        }

        /* Default Image Container */
        .hex-image-holder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justifyContent: center;
          background-color: #240b3b;
          transition: opacity 0.25s ease;
        }

        .hex-img {
          height: 92%;
          width: auto;
          max-width: 95%;
          object-fit: contain;
          display: block;
        }

        /* Hover Panel: Turns pure WHITE with just Name, Education & Speciality, perfectly vertically and horizontally centered */
        .hex-hover-panel {
          position: absolute;
          inset: 0;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justifyContent: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.25s ease, visibility 0.25s ease;
          border-radius: 18px;
          border: none !important;
          z-index: 10;
        }

        .hex-card:hover .hex-hover-panel {
          opacity: 1;
          visibility: visible;
        }

        .hex-text-inner {
          width: 100%;
          max-width: 170px;
          padding: 10px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
        }

        .hex-doc-name {
          font-family: var(--heading-font), 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #240b3b;
          margin: 0 0 6px 0;
          line-height: 1.25;
          text-align: center;
          width: 100%;
        }

        .hex-doc-edu {
          font-family: var(--body-font), sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          color: #7c3aed;
          margin: 0 0 8px 0;
          line-height: 1.35;
          text-align: center;
          width: 100%;
        }

        .hex-doc-spec {
          font-family: var(--body-font), sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #4b5563;
          margin: 0;
          line-height: 1.4;
          text-align: center;
          width: 100%;
        }

        @media (max-width: 1280px) {
          .hex-card {
            width: 180px;
            height: 205px;
          }
          .honeycomb-row {
            margin-top: -38px;
            gap: 12px;
          }
          .hex-doc-name {
            font-size: 14px;
          }
          .hex-doc-edu {
            font-size: 11px;
          }
          .hex-doc-spec {
            font-size: 11.5px;
          }
        }

        @media (max-width: 768px) {
          .honeycomb-container {
            flex-direction: column;
            align-items: center;
          }
          .honeycomb-row {
            flex-wrap: wrap;
            margin-top: 0;
            gap: 14px;
          }
          .hex-card {
            width: 160px;
            height: 182px;
          }
        }
      `}</style>
    </section>
  );
}
