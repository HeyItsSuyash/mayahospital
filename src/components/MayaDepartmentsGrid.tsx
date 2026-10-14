"use client";

import React, { useState } from "react";

interface DepartmentsProps {
  onOpenAppointmentModal?: (deptName?: string) => void;
}

const DEPARTMENTS_DATA = [
  {
    id: "gynaecology",
    icon: "fa-solid fa-person-breastfeeding",
    title: "Gynaecology & Maternity",
    shortDesc: "Complete maternal wellness, painless normal deliveries, high-risk pregnancy unit, and laparoscopic gynecology.",
    desc: "Our department of Obstetrics & Gynaecology offers round-the-clock comprehensive care for women across all stages of life. Equipped with modular labor and birthing suites, modern fetal heart rate monitors, and neonatal support.",
    features: [
      "Normal & Painless Epidural Deliveries",
      "Advanced Caesarean Section (C-Section) Operation Theatre",
      "Infertility Evaluation & Follicular Ultrasound Monitoring",
      "Minimally Invasive Laparoscopic Hysterectomy & Ovarian Cystectomy",
      "Antenatal & Postnatal Mother Care"
    ],
    badges: ["Normal & C-Section", "Infertility Clinic", "Laparoscopy"]
  },
  {
    id: "medicine",
    icon: "fa-solid fa-stethoscope",
    title: "General Medicine & Diabetology",
    shortDesc: "Clinical management of acute and chronic lifestyle illnesses, fever syndromes, and adult intensive care.",
    desc: "Expert diagnostic evaluations and in-patient treatment protocols for diabetes, cardiovascular disorders, hypertension, seasonal dengue and viral fevers, respiratory infections, and chronic geriatric disorders.",
    features: [
      "Comprehensive Diabetic Care & Glycemic Profiling",
      "Hypertension, Cardiac & Stroke Risk Evaluation",
      "Tropical Diseases, Typhoid, Dengue & Viral Fever Inpatient Ward",
      "Chronic Asthma, COPD & Respiratory Therapy",
      "Full Body Preventive Health Checkup Reviews"
    ],
    badges: ["Diabetes Care", "Hypertension", "Fever & Infection"]
  },
  {
    id: "orthopaedics",
    icon: "fa-solid fa-bone",
    title: "Orthopaedics & Joint Surgery",
    shortDesc: "24x7 accidental bone trauma surgery, total joint replacement (TKR/THR), arthroscopy, and spine care.",
    desc: "Restorative bone and joint surgeries utilizing modern C-Arm surgical image intensifiers and sterile laminar airflow operation theatres for minimal infection risk and rapid post-op recovery.",
    features: [
      "24x7 Complex Fracture & Accidental Polytrauma Management",
      "Total Knee Replacement (TKR) & Total Hip Replacement (THR)",
      "Arthroscopic Sports Injury & Ligament Reconstruction (ACL)",
      "Sciatica, Slip Disc, Spondylitis & Spine Decompression",
      "In-House Dedicated Orthopedic Physiotherapy & Rehabilitation"
    ],
    badges: ["Joint Replacement", "Fracture Clinic", "Arthroscopy"]
  },
  {
    id: "surgery",
    icon: "fa-solid fa-hand-holding-medical",
    title: "General & Laparoscopic Surgery",
    shortDesc: "Minimally invasive keyhole surgical procedures, hernia repairs, appendix, gallbladder, and anorectal care.",
    desc: "Advanced laparoscopic towers allow our surgeons to perform painless keyhole procedures resulting in minimal blood loss, minimal scarring, and quick same-day or next-day discharge.",
    features: [
      "Laparoscopic Cholecystectomy (Gallbladder Stone Removal)",
      "Laparoscopic Hernia Repair (Inguinal, Umbilical, Incisional)",
      "Laparoscopic Appendectomy & Acute Abdomen Emergencies",
      "Laser & Stapler Proctology for Piles, Fissure & Fistula",
      "Day-Care Minor Lump & Soft Tissue Excisions"
    ],
    badges: ["Keyhole Surgery", "Hernia & Appendix", "Gallbladder"]
  },
  {
    id: "pediatrics",
    icon: "fa-solid fa-baby",
    title: "Paediatrics & Neonatology (NICU)",
    shortDesc: "Round-the-clock newborn intensive care unit, pediatric emergency, growth assessment, and vaccination.",
    desc: "Dedicated child healthcare pavilion staffed by experienced pediatricians and neonatal nurses. Equipped with modern radiant baby warmers, phototherapy, and intensive monitoring.",
    features: [
      "Level-2 Neonatal Intensive Care Unit (NICU)",
      "Neonatal Jaundice & Premature Low-Birthweight Infant Care",
      "Routine & Optional WHO-Schedule Child Vaccination",
      "Pediatric Emergency, Dehydration & High Fever Management",
      "Growth, Developmental Milestone & Nutrition Counseling"
    ],
    badges: ["NICU Care", "Vaccination", "Well-Baby Clinic"]
  },
  {
    id: "diagnostics",
    icon: "fa-solid fa-microscope",
    title: "Diagnostic & Pathology Lab",
    shortDesc: "Fully automated biochemistry and hematology testing, digital X-Ray, high-resolution ultrasound, and ECG.",
    desc: "Accurate and rapid diagnostics are the cornerstone of effective therapy. Maya Hospital houses fully computerised diagnostic analyzers ensuring fast and dependable report turnaround times 24 hours a day.",
    features: [
      "Fully Automated Blood Biochemistry, CBC & Electrolyte Analyzers",
      "High-Frequency Digital Skeletal & Chest X-Ray",
      "High-Resolution 3D/4D Abdominal & Pelvic Ultrasound (USG)",
      "Obstetric Antenatal Anomaly Scan & Color Doppler",
      "Thyroid, Hormonal, Cardiac Troponin & Urine Diagnostics"
    ],
    badges: ["Automated Lab", "Digital X-Ray", "USG Scan"]
  }
];

export default function MayaDepartmentsGrid({ onOpenAppointmentModal }: DepartmentsProps) {
  // Theme-consistent accordion state: open the first department by default
  const [activeAccordion, setActiveAccordion] = useState<string>("gynaecology");

  const toggleAccordion = (id: string) => {
    setActiveAccordion((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="departments" style={{ padding: "90px 0", backgroundColor: "#ffffff", width: "100%" }}>
      <div style={{ width: "100%", maxWidth: "1600px", margin: "0 auto", padding: "0 28px", boxSizing: "border-box" }}>
        {/* Section Title */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="subtitle">CENTRES OF EXCELLENCE</span>
          <h2 className="heading" style={{ marginBottom: "15px" }}>
            Specialised Clinical Departments
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "15px", color: "#666", lineHeight: "24px" }}>
            Explore our clinical specialities, experienced consultant faculties, and advanced inpatient medical services.
          </p>
        </div>

        {/* Theme-Consistent Smooth Accordion List (Full Width across page) */}
        <div style={{ width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          {DEPARTMENTS_DATA.map((dept) => {
            const isOpen = activeAccordion === dept.id;

            return (
              <div
                key={dept.id}
                style={{
                  backgroundColor: isOpen ? "#ffffff" : "rgba(124, 58, 237, 0.02)",
                  borderRadius: isOpen ? "36px" : "9999px",
                  border: isOpen ? "1.5px solid #7c3aed" : "1px solid rgba(124, 58, 237, 0.15)",
                  boxShadow: isOpen ? "0 14px 35px rgba(124, 58, 237, 0.1)" : "0 4px 15px rgba(0, 0, 0, 0.02)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  overflow: "hidden"
                }}
              >
                {/* Accordion Header / Clickable Bar */}
                <button
                  onClick={() => toggleAccordion(dept.id)}
                  style={{
                    width: "100%",
                    padding: "20px 30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "20px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                    {/* Circular Icon Background */}
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        backgroundColor: isOpen ? "#7c3aed" : "rgba(124, 58, 237, 0.08)",
                        color: isOpen ? "#ffffff" : "#7c3aed",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        flexShrink: 0,
                        transition: "all 0.3s ease"
                      }}
                    >
                      <i className={dept.icon}></i>
                    </div>

                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                          fontSize: "18px",
                          fontWeight: 700,
                          color: isOpen ? "#7c3aed" : "var(--primary-color)",
                          margin: "0 0 4px 0",
                          transition: "color 0.25s ease"
                        }}
                      >
                        {dept.title}
                      </h3>
                      <p style={{ margin: 0, fontSize: "13px", color: "#6b7280", lineHeight: "1.4" }}>
                        {dept.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Chevron Arrow */}
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: isOpen ? "rgba(124, 58, 237, 0.12)" : "rgba(0, 0, 0, 0.04)",
                      color: isOpen ? "#7c3aed" : "#9ca3af",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  >
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </button>

                {/* Accordion Expandable Content Body */}
                <div
                  style={{
                    maxHeight: isOpen ? "600px" : "0",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease",
                    overflow: "hidden"
                  }}
                >
                  <div
                    style={{
                      padding: "0 34px 28px 34px",
                      borderTop: "1px solid #f3e8ff",
                      marginTop: "6px"
                    }}
                  >
                    <p style={{ fontSize: "14px", lineHeight: "24px", color: "#4b5563", marginTop: "18px", marginBottom: "16px" }}>
                      {dept.desc}
                    </p>

                    {/* Department Key Clinical Capabilities */}
                    <div style={{ marginBottom: "20px" }}>
                      <h4
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                          color: "#7c3aed",
                          margin: "0 0 10px 0"
                        }}
                      >
                        Core Clinical Capabilities & Treatments
                      </h4>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                          gap: "8px 16px"
                        }}
                      >
                        {dept.features.map((feat, fi) => (
                          <div key={fi} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#374151" }}>
                            <span style={{ color: "#7c3aed", fontSize: "11px" }}>✔</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "12px",
                        paddingTop: "16px",
                        borderTop: "1px dashed #e9d5ff"
                      }}
                    >
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        {dept.badges.map((b, bi) => (
                          <span
                            key={bi}
                            style={{
                              fontSize: "11px",
                              fontWeight: 600,
                              backgroundColor: "rgba(124, 58, 237, 0.08)",
                              color: "#6d28d9",
                              padding: "4px 12px",
                              borderRadius: "20px"
                            }}
                          >
                            {b}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => onOpenAppointmentModal && onOpenAppointmentModal(dept.title)}
                        style={{
                          backgroundColor: "#7c3aed",
                          color: "#ffffff",
                          border: "none",
                          padding: "10px 22px",
                          borderRadius: "9999px",
                          fontSize: "12.5px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          transition: "all 0.25s ease",
                          boxShadow: "0 4px 14px rgba(124, 58, 237, 0.25)"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#5b21b6";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#7c3aed";
                        }}
                      >
                        <span>Consult Specialist</span>
                        <i className="fa-solid fa-arrow-right" style={{ fontSize: "11px" }}></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
