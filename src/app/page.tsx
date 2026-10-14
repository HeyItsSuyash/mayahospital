"use client";

import React, { useState, useEffect } from "react";
import MayaHeroSection from "@/components/MayaHeroSection";
import FathimaTopLinks from "@/components/FathimaTopLinks";
import MayaAboutSection from "@/components/MayaAboutSection";
import MayaDepartmentsGrid from "@/components/MayaDepartmentsGrid";
import MayaFacilitiesGrid from "@/components/MayaFacilitiesGrid";
import FathimaDoctors from "@/components/FathimaDoctors";
import FathimaServiceSection from "@/components/FathimaServiceSection";
import FathimaTestimonialsSection from "@/components/FathimaTestimonialsSection";
import FathimaFooter from "@/components/FathimaFooter";
import AppointmentModal from "@/components/AppointmentModal";
import SupportModals from "@/components/SupportModals";
import SchemaMarkup from "@/components/SchemaMarkup";
import SuchiChatbot from "@/components/SuchiChatbot";
import MayaPageLoader from "@/components/MayaPageLoader";
import EnquiryModal from "@/components/EnquiryModal";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function Home() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [questionModalOpen, setQuestionModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);

  // Scroll-on-Reveal Animation IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleOpenAppointment = (docOrDeptName?: string) => {
    if (docOrDeptName) {
      setSelectedDoctor(docOrDeptName);
    } else {
      setSelectedDoctor("");
    }
    setAppointmentModalOpen(true);
  };

  return (
    <>
      {/* Theme Consistent Purple Page Loader */}
      <MayaPageLoader />

      {/* Schema.org Structured Data */}
      <SchemaMarkup />

      <main>
        {/* Full Cinematic Hero Section with Sticky Integrated Navbar and Whitescale Logo */}
        <MayaHeroSection 
          onOpenAppointmentModal={() => handleOpenAppointment()} 
          onOpenEnquiryModal={() => setEnquiryModalOpen(true)}
        />

        {/* Top 5 Service Links */}
        <div className="reveal-on-scroll">
          <FathimaTopLinks
            onOpenAppointmentModal={() => handleOpenAppointment()}
            onOpenQuestionModal={() => setQuestionModalOpen(true)}
            onOpenReportModal={() => setReportModalOpen(true)}
          />
        </div>

        {/* About Maya Hospital */}
        <div className="reveal-on-scroll">
          <MayaAboutSection onOpenAppointmentModal={() => handleOpenAppointment()} />
        </div>

        {/* Specialized Clinical Departments */}
        <div className="reveal-on-scroll">
          <MayaDepartmentsGrid onOpenAppointmentModal={handleOpenAppointment} />
        </div>

        {/* Dedicated Doctors Carousel */}
        <div className="reveal-on-scroll">
          <FathimaDoctors onOpenAppointmentModal={handleOpenAppointment} />
        </div>

        {/* 24x7 Services & Facilities Grid */}
        <div className="reveal-on-scroll">
          <MayaFacilitiesGrid onOpenAppointmentModal={() => handleOpenAppointment()} />
        </div>

        {/* Entrust your health in safe hands */}
        <div className="reveal-on-scroll">
          <FathimaServiceSection />
        </div>

        {/* Patient Testimonials */}
        <div className="reveal-on-scroll">
          <FathimaTestimonialsSection />
        </div>

        {/* Hospital Location Section (Google Map & Justdial Link) */}
        <section id="location" className="reveal-on-scroll" style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
          <div className="container">
            <div className="row text-center pb-50" style={{ textAlign: "center", marginBottom: "40px" }}>
              <span className="subtitle">HOSPITAL LOCATION</span>
              <h2 className="heading">Visit Maya Hospital Meerpur</h2>
              <p style={{ maxWidth: "700px", margin: "0 auto", color: "#666", fontSize: "15px" }}>
                Conveniently located on Aira Road Near Children&apos;s Academy School, Meerpur, Lakhimpur Kheri with 24x7 emergency entry and ambulance pickup.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", alignItems: "center" }}>
              <div style={{
                backgroundColor: "#21093a",
                color: "#ffffff",
                padding: "40px",
                borderRadius: "24px",
                boxShadow: "0 15px 40px rgba(33, 9, 58, 0.25)",
                border: "1px solid rgba(124, 58, 237, 0.2)"
              }}>
                <h3 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 800, marginBottom: "20px" }}>
                  {HOSPITAL_INFO.name}
                </h3>
                <div style={{ marginBottom: "20px", display: "flex", gap: "15px", alignItems: "flex-start" }}>
                  <i className="fa-solid fa-location-dot" style={{ color: "#c084fc", fontSize: "20px", marginTop: "4px" }}></i>
                  <div>
                    <strong style={{ display: "block", color: "#ede9fe", marginBottom: "4px" }}>Address:</strong>
                    <span style={{ color: "rgba(255,255,255,0.88)", fontSize: "14px", lineHeight: "22px" }}>
                      {HOSPITAL_INFO.fullAddress}
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: "20px", display: "flex", gap: "15px", alignItems: "flex-start" }}>
                  <i className="fa-solid fa-phone" style={{ color: "#c084fc", fontSize: "20px", marginTop: "4px" }}></i>
                  <div>
                    <strong style={{ display: "block", color: "#ede9fe", marginBottom: "4px" }}>Emergency 24x7:</strong>
                    <a href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`} style={{ color: "#ffffff", textDecoration: "none", fontWeight: 700 }}>
                      {HOSPITAL_INFO.emergencyPhone}
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
                  <a
                    href={HOSPITAL_INFO.justdialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="book-btn"
                    style={{
                      margin: 0,
                      textDecoration: "none",
                      backgroundColor: "#ffffff",
                      color: "#21093a",
                      border: "none",
                      fontWeight: 700
                    }}
                  >
                    View Justdial Profile (5.0 ★)
                  </a>
                </div>
              </div>

              {/* Map Embed */}
              <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", height: "380px" }}>
                <iframe
                  title="Maya Hospital Map"
                  src={`https://maps.google.com/maps?q=${HOSPITAL_INFO.mapCoordinates.lat},${HOSPITAL_INFO.mapCoordinates.lng}&hl=en&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FathimaFooter />

      {/* Theme-Consistent Suchi Care Chatbot (replacing WhatsApp button) */}
      <SuchiChatbot onOpenAppointment={() => handleOpenAppointment()} />

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialDoctor={selectedDoctor}
      />

      {/* Dedicated Hospital Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />

      {/* Support Modals: Ask a Question & Download Lab Report */}
      <SupportModals
        isQuestionOpen={questionModalOpen}
        onCloseQuestion={() => setQuestionModalOpen(false)}
        isReportOpen={reportModalOpen}
        onCloseReport={() => setReportModalOpen(false)}
      />
    </>
  );
}
