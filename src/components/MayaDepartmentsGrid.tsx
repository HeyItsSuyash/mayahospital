import React from "react";
import Link from "next/link";

interface DepartmentsProps {
  onOpenAppointmentModal?: (deptName?: string) => void;
}

const DEPARTMENTS_DATA = [
  {
    id: "gynaecology",
    icon: "fa-solid fa-person-breastfeeding",
    title: "Gynaecology & Maternity",
    desc: "Experienced Obstetricians and Gynaecologists providing comprehensive prenatal care, high-risk pregnancy management, painless deliveries, and laparoscopic surgeries.",
    badges: ["Normal & C-Section", "Infertility Clinic", "Laparoscopy"]
  },
  {
    id: "medicine",
    icon: "fa-solid fa-stethoscope",
    title: "General Medicine",
    desc: "Expert diagnostic workup and inpatient management for diabetes, cardiovascular disorders, hypertension, tropical infectious diseases, and respiratory illnesses.",
    badges: ["Diabetes Care", "Hypertension", "Fever & Infection"]
  },
  {
    id: "orthopaedics",
    icon: "fa-solid fa-bone",
    title: "Orthopaedics & Joint Surgery",
    desc: "Advanced trauma surgeries, complex fracture fixations, total knee and hip replacements, arthroscopy, and spine care using modern C-Arm OT technology.",
    badges: ["Joint Replacement", "Fracture Clinic", "Arthroscopy"]
  },
  {
    id: "surgery",
    icon: "fa-solid fa-hand-holding-medical",
    title: "General & Laparoscopic Surgery",
    desc: "Minimally invasive keyhole laparoscopic procedures for gallbladder stones, appendix, all varieties of hernias, hydrocele, and emergency abdominal surgeries.",
    badges: ["Keyhole Surgery", "Hernia & Appendix", "Gallbladder"]
  },
  {
    id: "pediatrics",
    icon: "fa-solid fa-baby",
    title: "Paediatrics & Neonatology",
    desc: "Dedicated care for infants, children, and adolescents, backed by neonatal intensive care (NICU), phototherapy, baby warmers, and child vaccination programs.",
    badges: ["NICU Care", "Vaccination", "Well-Baby Clinic"]
  },
  {
    id: "diagnostics",
    icon: "fa-solid fa-microscope",
    title: "Diagnostic & Pathology Lab",
    desc: "Fully computerized in-house pathology lab, digital X-Ray, ultrasound (USG), ECG, and 24-hour routine and emergency diagnostic testing.",
    badges: ["Automated Lab", "Digital X-Ray", "USG Scan"]
  }
];

export default function MayaDepartmentsGrid({ onOpenAppointmentModal }: DepartmentsProps) {
  return (
    <section id="departments" style={{ padding: "90px 0", backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="subtitle">CENTRES OF EXCELLENCE</span>
          <h2 className="heading" style={{ marginBottom: "15px" }}>
            Specialised Clinical Departments
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "15px", color: "#666", lineHeight: "24px" }}>
            Maya Hospital provides specialized treatment across various medical disciplines with dedicated specialists, advanced operation theatres, and compassionate nursing care.
          </p>
        </div>

        {/* 6 Grid Department Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "30px"
        }}>
          {DEPARTMENTS_DATA.map((dept) => (
            <div
              key={dept.id}
              style={{
                backgroundColor: "#fefcf8",
                borderRadius: "24px",
                padding: "36px 30px",
                border: "1px solid rgba(205, 162, 80, 0.2)",
                boxShadow: "0 12px 35px rgba(36, 20, 10, 0.07)",
                transition: "all 0.35s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                  {/* Clean Icon without brown box */}
                  <div style={{
                    color: "var(--secondary-color)",
                    fontSize: "32px"
                  }}>
                    <i className={dept.icon}></i>
                  </div>
                  <span style={{ fontSize: "11px", color: "var(--secondary-color)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px" }}>
                    Speciality
                  </span>
                </div>

                <h3 style={{
                  fontSize: "21px",
                  fontWeight: 700,
                  color: "var(--primary-color)",
                  marginBottom: "12px",
                  lineHeight: "28px"
                }}>
                  {dept.title}
                </h3>

                <p style={{
                  fontSize: "14px",
                  lineHeight: "23px",
                  color: "#555",
                  marginBottom: "20px"
                }}>
                  {dept.desc}
                </p>

                {/* Service Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "25px" }}>
                  {dept.badges.map((b, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "11.5px",
                        fontWeight: 600,
                        backgroundColor: "#fef3c7",
                        color: "#92400e",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        border: "1px solid rgba(234, 179, 8, 0.25)"
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button
                  onClick={() => onOpenAppointmentModal && onOpenAppointmentModal(dept.title)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--secondary-color)",
                    fontWeight: 700,
                    fontSize: "13.5px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: 0
                  }}
                >
                  <span>Consult Specialist</span>
                </button>

                <span style={{ fontSize: "12px", color: "#999" }}>OPD Available</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
