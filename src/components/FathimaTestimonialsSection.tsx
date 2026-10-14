"use client";

import React, { useState } from "react";

export default function FathimaTestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "The treatment, care and consideration given to the patient as well as the bystanders is really nice. It was amazing to see how they took care of everything from admission to discharge in a seamless manner. Although there was waiting time in between they made sure to prioritise in patients with care. Overall had a good experience from the staff and doctors.",
      name: "Archita Singh",
      location: "Meerpur, Lakhimpur Kheri"
    },
    {
      text: "Maya Hospital provided exceptional care from the moment I walked in. The doctors were highly professional, the nursing staff was kind and attentive, and the entire team made me feel safe and well cared for. The facilities are top-notch, and the treatment I received was outstanding. I am truly grateful for their dedication to patient care.",
      name: "SB Maurya",
      location: "Lakhimpur Kheri"
    },
    {
      text: "I cannot thank Maya Hospital enough for the incredible service and support I received during my treatment. The doctors took the time to explain everything, the staff was always available to assist, and the hospital maintained the highest standards of cleanliness and comfort. Their commitment to quality healthcare made my recovery smooth and stress-free.",
      name: "Pranshu Mishra",
      location: "Kheri District"
    }
  ];

  const t = testimonials[currentTestimonial];

  return (
    <section className="pt-100 pb-100 section-testimonials" style={{ padding: "100px 0", backgroundColor: "#ffffff" }}>
      <div className="container">
        <div className="row-flex" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
          {/* Left Column: Heading and Testimonial Quote Box */}
          <div className="smd60 pr-50" style={{ flex: "0 0 58%", paddingRight: "40px", boxSizing: "border-box" }}>
            <div className="row">
              <span className="subtitle">Patient testimonials</span>
              <h2 className="heading">What our patients <br /> have to say.</h2>
            </div>

            <div className="row pt-50" style={{ marginTop: "30px" }}>
              <div className="testimonial-box">
                <div className="testimonial-single">
                  <p>{t.text}</p>
                  <div className="border-top name">{t.name}</div>
                  <p style={{ marginTop: "4px" }}>
                    <strong>{t.location}</strong>
                  </p>
                </div>
              </div>

              {/* Dots Controls */}
              <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    style={{
                      width: idx === currentTestimonial ? "24px" : "10px",
                      height: "10px",
                      borderRadius: "5px",
                      backgroundColor: idx === currentTestimonial ? "#7c3aed" : "#cbd5e1",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                    aria-label={`Testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Purple Version of the Logo */}
          <div className="smd40" style={{ flex: "0 0 38%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div
              style={{
                width: "280px",
                height: "280px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
                padding: "20px"
              }}
            >
              <img
                src="/maya-purple-logo-badge.png"
                alt="Maya Hospital Crest Logo"
                style={{
                  width: "100%",
                  maxWidth: "240px",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 15px 35px rgba(36, 11, 59, 0.2))"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
