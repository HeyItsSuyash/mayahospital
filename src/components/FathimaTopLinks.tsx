"use client";

import React from "react";

interface TopLinksProps {
  onOpenAppointmentModal: () => void;
  onOpenQuestionModal: () => void;
  onOpenReportModal: () => void;
}

export default function FathimaTopLinks({
  onOpenAppointmentModal,
  onOpenQuestionModal,
  onOpenReportModal,
}: TopLinksProps) {
  return (
    <section style={{ backgroundColor: "var(--fadeblue)", borderBottom: "1px solid rgba(205, 162, 80, 0.18)" }}>
      <div className="container">
        <div className="row toplinks top-links-inner" style={{ padding: "26px 0" }}>
          <a href="#packages" style={{ borderRightColor: "rgba(205, 162, 80, 0.2)" }}>
            <img src="https://www.fathimahospital.com/wp-content/themes/fathimahosptial/images/icon1.png" alt="Health Checkup" style={{ filter: "sepia(0.3) saturate(1.2)" }} />
            <h3 style={{ color: "var(--primary-color)" }}>health <br /> Checkup</h3>
          </a>

          <a href="#packages" style={{ borderRightColor: "rgba(205, 162, 80, 0.2)" }}>
            <img src="https://www.fathimahospital.com/wp-content/themes/fathimahosptial/images/icon2.png" alt="Health Packages" style={{ filter: "sepia(0.3) saturate(1.2)" }} />
            <h3 style={{ color: "var(--primary-color)" }}>health <br /> packages</h3>
          </a>

          <a href="#ask" onClick={(e) => { e.preventDefault(); onOpenQuestionModal(); }} style={{ borderRightColor: "rgba(205, 162, 80, 0.2)" }}>
            <img src="https://www.fathimahospital.com/wp-content/themes/fathimahosptial/images/icon3.png" alt="Ask a Question" style={{ filter: "sepia(0.3) saturate(1.2)" }} />
            <h3 style={{ color: "var(--primary-color)" }}>ask a <br /> question</h3>
          </a>

          <a href="#report" onClick={(e) => { e.preventDefault(); onOpenReportModal(); }} style={{ borderRightColor: "rgba(205, 162, 80, 0.2)" }}>
            <img src="https://www.fathimahospital.com/wp-content/themes/fathimahosptial/images/icon4.png" alt="Download Lab Report" style={{ filter: "sepia(0.3) saturate(1.2)" }} />
            <h3 style={{ color: "var(--primary-color)" }}>download <br /> lab report</h3>
          </a>

          <a href="#insurance">
            <img src="https://www.fathimahospital.com/wp-content/themes/fathimahosptial/images/icon5.png" alt="Insurance Providers" style={{ filter: "sepia(0.3) saturate(1.2)" }} />
            <h3 style={{ color: "var(--primary-color)" }}>insurance <br /> providers</h3>
          </a>
        </div>
      </div>
    </section>
  );
}
