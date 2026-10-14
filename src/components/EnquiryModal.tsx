"use client";

import React, { useState } from "react";
import { 
  X, 
  HelpCircle, 
  Send, 
  CheckCircle2, 
  Phone, 
  User, 
  Mail, 
  Building2, 
  MessageSquare,
  Sparkles
} from "lucide-react";
import { HOSPITAL_INFO, DEPARTMENTS } from "@/data/hospitalData";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("General Hospital Inquiry");
  const [enquiryType, setEnquiryType] = useState("General Healthcare Services");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setPhone("");
    setEmail("");
    setMessage("");
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: Theme-Consistent Imperial Royal Velvet Plum */}
        <div className="bg-[#240b3b] text-white p-6 relative border-b border-purple-500/20">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <img
              src="/White Caduceus Laurel Monogram.png"
              alt="Maya Hospital Crest"
              className="w-11 h-11 object-contain"
            />
            <div>
              <div className="flex items-center gap-2 text-[#c084fc] text-xs font-bold uppercase tracking-wider mb-0.5">
                <HelpCircle className="w-4 h-4" />
                <span>Patient Helpdesk & Enquiries</span>
              </div>
              <h3 
                className="text-xl sm:text-2xl font-bold text-white"
                style={{ fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif" }}
              >
                Hospital Enquiry
              </h3>
              <p className="text-xs text-purple-200/80 mt-0.5">
                Maya Hospital & Multi-speciality Centre • Lakhimpur Kheri
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-purple-100 text-[#7c3aed] rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 
                className="text-2xl font-bold text-[#240b3b]"
                style={{ fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif" }}
              >
                Enquiry Submitted!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you <strong>{fullName}</strong>. Our front desk support team will contact you at <strong>{phone}</strong> promptly with detailed information.
              </p>

              <div className="bg-purple-50/70 p-4 rounded-2xl border border-purple-100 text-xs text-left max-w-sm mx-auto space-y-2 text-slate-700">
                <div><strong>Department:</strong> {department}</div>
                <div><strong>Enquiry Topic:</strong> {enquiryType}</div>
                <div><strong>Helpline:</strong> {HOSPITAL_INFO.bookingPhone}</div>
                <div><strong>Location:</strong> Meerpur, Lakhimpur Kheri</div>
              </div>

              <div className="pt-3">
                <button
                  onClick={handleReset}
                  className="px-7 py-2.5 rounded-full bg-[#240b3b] hover:bg-[#3b1261] text-white font-bold text-xs uppercase tracking-wider shadow transition-colors"
                >
                  Done & Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#7c3aed]" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#7c3aed]" />
                    <span>Phone / WhatsApp Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]"
                  />
                </div>
              </div>

              {/* Email (Optional) & Enquiry Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#7c3aed]" />
                    <span>Email Address (Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#7c3aed]" />
                    <span>Enquiry Category</span>
                  </label>
                  <select
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#7c3aed] bg-white"
                  >
                    <option value="General Healthcare Services">General Healthcare Services</option>
                    <option value="Doctor OPD & Schedule">Doctor OPD & Schedule</option>
                    <option value="Surgeries & Laparoscopy Packages">Surgeries & Laparoscopy Packages</option>
                    <option value="Maternity & Delivery Packages">Maternity & Delivery Packages</option>
                    <option value="ICU / Bed Availability">ICU / Bed Availability</option>
                    <option value="Insurance, Ayushman & Cashless TPA">Insurance, Ayushman & Cashless TPA</option>
                    <option value="Pathology & Lab Diagnostics">Pathology & Lab Diagnostics</option>
                  </select>
                </div>
              </div>

              {/* Concerned Department */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#7c3aed]" />
                  <span>Concerned Department (Optional)</span>
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#7c3aed] bg-white"
                >
                  <option value="General Hospital Inquiry">General Hospital Inquiry</option>
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.id} value={dept.name}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message / Details */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#7c3aed]" />
                  <span>Your Message or Specific Question *</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="How can we help? Tell us what information or service you are seeking..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]"
                />
              </div>

              {/* Help Notice */}
              <div className="bg-[#faf6fd] text-[#3b284c] border border-purple-200/60 p-3 rounded-2xl text-[11.5px] leading-relaxed flex items-center gap-2">
                <span className="text-[#7c3aed] font-bold">ℹ️ Need urgent help?</span>
                <span>Call reception directly at <strong>{HOSPITAL_INFO.bookingPhone}</strong> or 24x7 trauma at <strong>{HOSPITAL_INFO.emergencyPhone}</strong>.</span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#240b3b] hover:bg-[#3b1261] text-white font-bold text-xs shadow-md tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Hospital Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
