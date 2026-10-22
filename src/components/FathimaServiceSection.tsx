import React from "react";

export default function FathimaServiceSection() {
  return (
    <section className="section-service" style={{ backgroundColor: "#f9fafb", paddingTop: "90px", paddingBottom: "0px", overflow: "hidden" }}>
      <div className="container">
        <div className="row-flex space-between" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end" }}>
          {/* Left Column: Heading and Lady Doctor Image (No gap at bottom, sits flush) */}
          <div className="smd50 pr-50" style={{ flex: "0 0 46%", boxSizing: "border-box", paddingRight: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h2 className="heading" style={{ fontSize: "44px", lineHeight: "52px", fontWeight: 800, marginBottom: "20px" }}>
                Entrust your health <br />
                in safe hands.
              </h2>
              <p className="highlight-text" style={{ fontSize: "18px", lineHeight: "28px", color: "#666", marginBottom: "20px" }}>
                Dignity, empathy and a patient centric philosophy for an utmost caring experience in Lakhimpur Kheri
              </p>
            </div>

            <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-start", lineHeight: 0, marginBottom: 0 }}>
              <img
                src="https://www.fathimahospital.com/wp-content/themes/fathimahosptial/images/lady-doctor.png"
                className="ladydoc"
                alt="Doctor Consultation"
                style={{
                  width: "100%",
                  maxWidth: "480px",
                  display: "block",
                  borderRadius: "0",
                  boxShadow: "none",
                  border: "none",
                  backgroundColor: "transparent",
                  marginBottom: "0",
                  verticalAlign: "bottom"
                }}
              />
            </div>
          </div>

          {/* Right Column: 4 Service Boxes (Heading color white, no hover movement) */}
          <div className="smd50" style={{ flex: "0 0 52%", boxSizing: "border-box" }}>
            <div className="row-flex flex-gap space-between" style={{ display: "flex", flexWrap: "wrap", gap: "25px", justifyContent: "space-between" }}>
              {/* Box 1 */}
              <div className="service-box curved" style={{ flex: "0 0 47%", minHeight: "260px" }}>
                <img src="https://www.fathimahospital.com/wp-content/themes/fathimahosptial/images/icons/icon6.png" alt="" />
                <h3 className="service-box-title">Service to Humanity.</h3>
                <p className="mb-0">
                  Maya Hospital And Multi-speciality Centre has begun the new era of Modern High tech hospitals to bring the latest advances in Medical care to reach the common man in Meerpur and surrounding districts.
                </p>
              </div>

              {/* Box 2 */}
              <div className="service-box curved" style={{ flex: "0 0 47%", minHeight: "260px" }}>
                <img src="https://www.fathimahospital.com/wp-content/themes/fathimahosptial/images/icons/icon7.png" alt="" />
                <h3 className="service-box-title">Passion & Commitment.</h3>
                <p className="mb-0">
                  Our institution bears testimony to a longstanding tradition of excellence in service and our medical staff are committed to providing the best possible care and comfort to patients during their stay.
                </p>
              </div>

              {/* Box 3 */}
              <div className="service-box curved" style={{ flex: "0 0 47%", minHeight: "260px" }}>
                <img src="https://www.fathimahospital.com/wp-content/themes/fathimahosptial/images/icons/icon8.png" alt="" />
                <h3 className="service-box-title">Towards Better Life.</h3>
                <p className="mb-0">
                  Our hospital provides a wide array of acute services, including general medical and surgical services, pediatric intensive care (NICU), and complex orthopedic joint replacements.
                </p>
              </div>

              {/* Box 4 */}
              <div className="service-box curved" style={{ flex: "0 0 47%", minHeight: "260px" }}>
                <img src="https://www.fathimahospital.com/wp-content/themes/fathimahosptial/images/icons/icon9.png" alt="" />
                <h3 className="service-box-title">Get in to life.</h3>
                <p className="mb-0">
                  At the forefront of hospital advances in treatment and technology, we provide rapid diagnostics for patients admitted as emergencies to direct them to clinical areas most appropriate for their condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
