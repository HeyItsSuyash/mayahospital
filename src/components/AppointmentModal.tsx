"use client";

import React, { useState } from "react";
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  Stethoscope,
  Heart
} from "lucide-react";
import { HOSPITAL_INFO, DEPARTMENTS, DOCTORS } from "@/data/hospitalData";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctor?: string;
  initialDepartment?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  initialDoctor = "",
  initialDepartment = "",
}: AppointmentModalProps) {
  const [patientName, setPatientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDept, setSelectedDept] = useState(initialDepartment || DEPARTMENTS[0].name);
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctor || "");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Morning (10:00 AM - 01:00 PM)");
  const [symptoms, setSymptoms] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#240b3b] text-white p-6 relative border-b border-[#d4af37]/30">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <img
              src="/White Caduceus Laurel Monogram.png"
              alt="Maya Hospital Monogram"
              className="w-12 h-12 object-contain"
            />
            <div>
              <div className="flex items-center gap-2 text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4" />
                <span>Online OPD Registration</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Book a Doctor Appointment
              </h3>
              <p className="text-xs text-amber-200/80 mt-1">
                Maya Hospital And Multi-speciality Centre • Meerpur, Lakhimpur Kheri
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#092c57]">
                Appointment Request Confirmed!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you <strong>{patientName}</strong>. Our OPD front desk will contact you at <strong>{phoneNumber}</strong> within 15 minutes to confirm your token and time slot.
              </p>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-left max-w-sm mx-auto space-y-1.5">
                <div><strong>Hospital:</strong> {HOSPITAL_INFO.name}</div>
                <div><strong>Location:</strong> Aira Road Near Children&apos;s Academy School, Meerpur</div>
                <div><strong>Selected Unit:</strong> {selectedDept}</div>
                {selectedDoctor && <div><strong>Consultant:</strong> {selectedDoctor}</div>}
                <div><strong>Preferred Timing:</strong> {date || "Earliest Available"} - {timeSlot}</div>
                <div><strong>Urgent Support:</strong> {HOSPITAL_INFO.bookingPhone}</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-[#0076d7] text-white font-bold text-sm shadow hover:bg-[#005fad] transition-colors"
                >
                  Done & Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#0076d7]" />
                    <span>Patient Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Verma"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0076d7]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#0076d7]" />
                    <span>Contact Number (WhatsApp/Call) *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0076d7]"
                  />
                </div>
              </div>

              {/* Department & Doctor */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#0076d7]" />
                    <span>Department / Speciality</span>
                  </label>
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0076d7] bg-white"
                  >
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.id} value={dept.name}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <Stethoscope className="w-3.5 h-3.5 text-[#0076d7]" />
                    <span>Preferred Doctor (Optional)</span>
                  </label>
                  <select
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0076d7] bg-white"
                  >
                    <option value="">Any Available Specialist</option>
                    {DOCTORS.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} ({doc.department.split(" ")[0]})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#cda250]" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-full border border-stone-200 text-sm focus:outline-none focus:border-[#cda250] bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#cda250]" />
                    <span>Preferred Slot</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-full border border-stone-200 text-sm focus:outline-none focus:border-[#cda250] bg-white"
                  >
                    <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                    <option value="Afternoon (01:00 PM - 04:00 PM)">Afternoon (01:00 PM - 04:00 PM)</option>
                    <option value="Evening (05:00 PM - 08:00 PM)">Evening (05:00 PM - 08:00 PM)</option>
                    <option value="Emergency / Immediate">Immediate Triage (Emergency)</option>
                  </select>
                </div>
              </div>

              {/* Symptoms / Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-[#cda250]" />
                  <span>Brief Symptoms or Medical History</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Fever for 3 days, joint pain, prenatal routine visit, ultrasound inquiry..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl border border-stone-200 text-sm focus:outline-none focus:border-[#cda250]"
                />
              </div>

              {/* Notice */}
              <div className="bg-[#fbf7f2] text-[#24140a] border border-[#cda250]/30 p-3.5 rounded-2xl text-[11.5px] leading-relaxed">
                ℹ️ For emergency injuries, chest pain, or acute labor pain, please head straight to our Emergency Unit on Aira Road Meerpur or call <strong>{HOSPITAL_INFO.emergencyPhone}</strong>.
              </div>

              {/* Submit Button with pill roundness */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b38634] hover:from-[#b38634] hover:to-[#966d24] text-[#170526] font-bold text-sm shadow-lg shadow-[#d4af37]/25 tracking-wider uppercase transition-all"
                >
                  Confirm Appointment Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
