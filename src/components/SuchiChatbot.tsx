"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MessageSquare, X, Send, Sparkles, Phone, Calendar, Clock, Stethoscope, ChevronRight } from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

interface Message {
  id: string;
  sender: "suchi" | "user";
  text: string;
  time: string;
  quickReplies?: string[];
}

interface SuchiChatbotProps {
  onOpenAppointment: () => void;
}

export default function SuchiChatbot({ onOpenAppointment }: SuchiChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "suchi",
      text: "Namaste! 🙏 I'm Nurse Suchi, your virtual healthcare assistant at Maya Hospital, Lakhimpur Kheri. How can I care for you today?",
      time: "Just now",
      quickReplies: [
        "Book Doctor OPD",
        "24x7 Emergency Help",
        "Hospital Location & Timings",
        "Maternity & Delivery Care",
        "Speak to Reception"
      ]
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const userText = textToSend || input;
    if (!userText.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let replyText = "";
      let replies: string[] | undefined;

      const lower = userText.toLowerCase();

      if (lower.includes("book") || lower.includes("appointment") || lower.includes("opd") || lower.includes("doctor")) {
        replyText = "I'd be glad to arrange that for you! Our expert consultants (Gynecology, General Surgery, Pediatrics, Orthopedics, Cardiology) are available Monday to Sunday from 10:00 AM. Would you like me to open the online OPD booking form?";
        replies = ["Open Booking Form", "Call Hospital directly"];
      } else if (lower.includes("emergency") || lower.includes("ambulance") || lower.includes("icu") || lower.includes("urgent")) {
        replyText = `🚨 Our Trauma Care & Emergency Casualty is OPEN 24 HOURS, 7 DAYS A WEEK on Aira Road Meerpur. For immediate dispatch or ambulance, call our 24x7 line: ${HOSPITAL_INFO.emergencyPhone}`;
        replies = ["Call Emergency Now", "Get Location"];
      } else if (lower.includes("location") || lower.includes("address") || lower.includes("where") || lower.includes("timing")) {
        replyText = `📍 Maya Hospital is centrally located at ${HOSPITAL_INFO.shortAddress}. OPD runs 10:00 AM – 08:00 PM, and Emergency / ICU / Pharmacy are open 24x7.`;
        replies = ["Book Doctor OPD", "Call Reception"];
      } else if (lower.includes("maternity") || lower.includes("delivery") || lower.includes("baby") || lower.includes("pregnancy")) {
        replyText = "👶 We have comprehensive maternity suites, high-risk pregnancy management, painless normal delivery facilities, and 24x7 NICU support. Dr. and our nursing team provide round-the-clock maternal attention.";
        replies = ["Book Maternity Consult", "Call Reception"];
      } else if (lower.includes("open booking") || lower.includes("form")) {
        onOpenAppointment();
        replyText = "Opening the Appointment Request modal for you right now! Please fill in your preferred specialist and time slot.";
      } else if (lower.includes("reception") || lower.includes("call")) {
        replyText = `📞 You can speak directly with our reception desk at ${HOSPITAL_INFO.bookingPhone} or emergency team at ${HOSPITAL_INFO.emergencyPhone}.`;
      } else {
        replyText = `Thank you for sharing. Maya Hospital offers 24x7 Emergency, Specialist OPDs, Diagnostics, Cashless Mediclaim, and Surgery. Would you like to book an appointment or speak with our hospital staff?`;
        replies = ["Book Doctor OPD", "24x7 Emergency Help", "Speak to Reception"];
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "suchi",
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          quickReplies: replies
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Avatar Trigger Button */}
      {!isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer"
          }}
          onClick={() => setIsOpen(true)}
        >
          {/* Friendly Light Indigo Speech Bubble */}
          <div
            style={{
              backgroundColor: "#e0e7ff",
              color: "#312e81",
              padding: "10px 18px",
              borderRadius: "24px",
              boxShadow: "0 10px 25px rgba(49, 46, 129, 0.22)",
              border: "1px solid #c7d2fe",
              fontSize: "13px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              letterSpacing: "0.2px"
            }}
          >
            <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22c55e" }}></span>
            <span>hi, how can i help you?</span>
          </div>

          {/* Animated Avatar Circle */}
          <div
            style={{
              position: "relative",
              width: "66px",
              height: "66px",
              borderRadius: "50%",
              padding: "3px",
              background: "linear-gradient(135deg, #7c3aed 0%, #3b1261 100%)",
              boxShadow: "0 12px 35px rgba(59, 18, 97, 0.4)",
              transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src="/suchi_avatar.png"
              alt="Nurse Suchi - Maya Hospital Assistant"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                backgroundColor: "#fff"
              }}
            />
            {/* Online Pulse Dot */}
            <span
              style={{
                position: "absolute",
                bottom: "2px",
                right: "2px",
                width: "14px",
                height: "14px",
                backgroundColor: "#22c55e",
                border: "2.5px solid #ffffff",
                borderRadius: "50%"
              }}
            />
          </div>
        </div>
      )}

      {/* Expanded Suchi Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "380px",
            maxWidth: "calc(100vw - 32px)",
            height: "560px",
            maxHeight: "calc(100vh - 48px)",
            backgroundColor: "#ffffff",
            borderRadius: "28px",
            boxShadow: "0 25px 60px rgba(33, 9, 58, 0.45)",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 10000,
            animation: "suchiFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          {/* Chat Window Header */}
          <div
            style={{
              backgroundColor: "#2e0c4f",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
              background: "linear-gradient(135deg, #2e0c4f 0%, #4c1d95 100%)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  position: "relative",
                  width: "46px",
                  height: "46px",
                  borderRadius: "50%",
                  padding: "2px",
                  background: "linear-gradient(135deg, #ffffff 0%, #ede9fe 100%)"
                }}
              >
                <img
                  src="/suchi_avatar.png"
                  alt="Nurse Suchi"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover"
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: "1px",
                    right: "1px",
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#22c55e",
                    border: "2px solid #24140a",
                    borderRadius: "50%"
                  }}
                />
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <h4 style={{ margin: 0, color: "#ffffff", fontSize: "15px", fontWeight: 700, letterSpacing: "0.5px" }}>
                    Nurse Suchi
                  </h4>
                  <span
                    style={{
                      backgroundColor: "rgba(205, 162, 80, 0.25)",
                      color: "#cda250",
                      fontSize: "9.5px",
                      fontWeight: 700,
                      padding: "2px 7px",
                      borderRadius: "12px",
                      letterSpacing: "0.5px"
                    }}
                  >
                    CARE BOT
                  </span>
                </div>
                <p style={{ margin: "2px 0 0", color: "rgba(255, 255, 255, 0.7)", fontSize: "11px" }}>
                  Maya Hospital Virtual Nurse • Online
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                border: "none",
                color: "#ffffff",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Quick Notice Banner */}
          <div
            style={{
              backgroundColor: "#fbf7f2",
              padding: "8px 16px",
              borderBottom: "1px solid #ebd9c0",
              fontSize: "11px",
              color: "#784a22",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <Sparkles size={13} style={{ color: "#cda250", flexShrink: 0 }} />
            <span>24x7 Lakhimpur Kheri Multi-Speciality Assistance</span>
          </div>

          {/* Chat Messages Body */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              backgroundColor: "#faf7f4",
              display: "flex",
              flexDirection: "column",
              gap: "14px"
            }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: m.sender === "user" ? "flex-end" : "flex-start"
                }}
              >
                <div
                  style={{
                    maxWidth: "85%",
                    padding: "12px 16px",
                    borderRadius: m.sender === "user" ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                    backgroundColor: m.sender === "user" ? "#3b1261" : "#ffffff",
                    color: m.sender === "user" ? "#ffffff" : "#261633",
                    boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
                    border: m.sender === "user" ? "none" : "1px solid #e9d5ff",
                    fontSize: "13px",
                    lineHeight: "1.5"
                  }}
                >
                  {m.text}
                </div>
                <span style={{ fontSize: "10px", color: "#9ca3af", marginTop: "4px", padding: "0 4px" }}>
                  {m.time}
                </span>

                {/* Quick reply chips if available */}
                {m.quickReplies && m.quickReplies.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginTop: "10px",
                      maxWidth: "92%"
                    }}
                  >
                    {m.quickReplies.map((qr, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (qr === "Book Doctor OPD" || qr === "Open Booking Form") {
                            onOpenAppointment();
                          } else if (qr === "24x7 Emergency Help" || qr === "Call Emergency Now") {
                            window.location.href = `tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`;
                          } else {
                            handleSend(qr);
                          }
                        }}
                        style={{
                          backgroundColor: "#ffffff",
                          border: "1px solid #7c3aed",
                          color: "#3b1261",
                          padding: "6px 14px",
                          borderRadius: "18px",
                          fontSize: "11.5px",
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "all 0.2s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#7c3aed";
                          e.currentTarget.style.color = "#ffffff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#ffffff";
                          e.currentTarget.style.color = "#3b1261";
                        }}
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 12px", backgroundColor: "#fff", borderRadius: "16px", alignSelf: "flex-start", border: "1px solid #e9d5ff" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#7c3aed", animation: "bounce 1s infinite" }}></span>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#7c3aed", animation: "bounce 1s infinite 0.2s" }}></span>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#7c3aed", animation: "bounce 1s infinite 0.4s" }}></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              padding: "12px 14px",
              backgroundColor: "#ffffff",
              borderTop: "1px solid #ede9fe",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <input
              type="text"
              placeholder="Ask Nurse Suchi anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                border: "1px solid #e9d5ff",
                borderRadius: "24px",
                padding: "10px 16px",
                fontSize: "13px",
                outline: "none",
                backgroundColor: "#fbf8fe",
                color: "#261633"
              }}
            />
            <button
              type="submit"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#3b1261",
                border: "none",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#7c3aed";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#3b1261";
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
