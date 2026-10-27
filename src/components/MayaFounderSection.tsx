import React from "react";

export default function MayaFounderSection() {
  return (
    <section 
      id="founder" 
      style={{ 
        position: "relative",
        padding: "60px 0 80px 0", 
        backgroundColor: "#160526",
        color: "#f7f3ec",
        overflow: "hidden"
      }}
    >
      <div 
        style={{ 
          maxWidth: "1280px", 
          margin: "0 auto", 
          padding: "0 24px" 
        }}
      >
        {/* Outer Quote Block Card with zero padding between image and quote text */}
        <div 
          style={{
            position: "relative",
            borderRadius: "24px",
            backgroundColor: "#10031d",
            border: "1px solid rgba(124, 58, 237, 0.35)",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "stretch",
            padding: 0
          }}
          className="founder-card-box"
        >
          {/* Founder Image: Full height of the quotes container, zero padding */}
          <div 
            style={{
              position: "relative",
              flex: "0 0 350px",
              minHeight: "380px",
              backgroundColor: "#10031d",
              padding: 0,
              margin: 0,
              overflow: "hidden",
              display: "flex",
              alignItems: "stretch"
            }}
            className="founder-img-wrap"
          >
            <img
              src="/mayahospital.jpeg"
              alt="Dr. Brijendra Verma - Founder"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
                padding: 0,
                margin: 0
              }}
            />
          </div>

          {/* Seamless Quote Content Column directly attached without gap */}
          <div 
            style={{
              flex: "1 1 500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "48px 52px",
              borderLeft: "1px solid rgba(124, 58, 237, 0.25)",
              boxSizing: "border-box"
            }}
            className="founder-text-wrap"
          >
            <div>
              <blockquote 
                style={{
                  fontFamily: "var(--heading-font), 'Plus Jakarta Sans', Georgia, serif",
                  fontSize: "21px",
                  lineHeight: "1.65",
                  color: "#f7f3ec",
                  fontWeight: 300,
                  fontStyle: "italic",
                  margin: 0,
                  padding: 0,
                  letterSpacing: "-0.01em"
                }}
              >
                &ldquo;When we laid the foundation of Maya Hospital right here in Lakhimpur Kheri, our vision was anchored in a single, non-negotiable principle: advanced surgical expertise and emergency critical care should never be a distant privilege reserved only for metro cities. We engineered this institution from the ground up with direct patient-first care, 24x7 critical response, and 100% dignity for every family in our region.&rdquo;
              </blockquote>
            </div>

            {/* Founder Signoff Below Quote */}
            <div 
              style={{
                marginTop: "36px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(124, 58, 237, 0.35)",
                display: "flex",
                flexDirection: "column",
                gap: "4px"
              }}
            >
              <h4 
                style={{
                  fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                  fontSize: "21px",
                  fontWeight: 600,
                  color: "#f7f3ec",
                  letterSpacing: "0.02em",
                  margin: 0
                }}
              >
                Dr. Brijendra Verma
              </h4>
              <p 
                style={{
                  fontSize: "14px",
                  color: "#d4af37",
                  fontFamily: "var(--body-font), 'Inter', sans-serif",
                  letterSpacing: "0.02em",
                  fontWeight: 500,
                  margin: 0
                }}
              >
                Founder, Maya Hospital &amp; Multi-speciality Centre
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 820px) {
          .founder-img-wrap {
            flex: 0 0 100% !important;
            min-height: 340px !important;
            max-height: 420px !important;
          }
          .founder-text-wrap {
            padding: 30px 24px !important;
            border-left: none !important;
            border-top: 1px solid rgba(124, 58, 237, 0.25) !important;
          }
          blockquote {
            font-size: 18px !important;
            line-height: 1.6 !important;
          }
        }
      `}</style>
    </section>
  );
}
