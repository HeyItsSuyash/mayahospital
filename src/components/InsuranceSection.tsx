import React from "react";
import { 
  Building, 
  ShieldCheck, 
  CreditCard, 
  BadgePercent, 
  CheckCircle,
  FileSpreadsheet,
  Headphones
} from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function InsuranceSection() {
  const insurers = [
    "Ayushman Bharat (PM-JAY) Empanelled Support",
    "Star Health and Allied Insurance",
    "Care Health Insurance (Religare)",
    "HDFC ERGO General Insurance",
    "ICICI Lombard Health Insurance",
    "Bajaj Allianz General Insurance",
    "New India Assurance & National Insurance",
    "Medi Assist TPA & Vidal Health TPA",
    "Paramount TPA & Heritage Health TPA"
  ];

  return (
    <section id="insurance" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side info */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Hassle-Free Cashless Medical Care</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#092c57]">
                Insurance & Ayushman Bharat TPA Helpdesk
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                We believe financial constraints should never stand between you and quality clinical attention. Our dedicated Insurance & Billing desk assists patients with pre-authorization, TPA documentation, and cashless hospitalization for planned and emergency treatments.
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase text-slate-400">
                  Accepted Payment Methods:
                </div>
                <div className="flex flex-wrap gap-2">
                  {HOSPITAL_INFO.paymentMethods.map((pm, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium border border-slate-200"
                    >
                      {pm}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side insurance list */}
            <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <Building className="w-4 h-4 text-[#0076d7]" />
                <span>Major Health Insurance & TPA Networks Covered</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {insurers.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-100 shadow-xs">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Headphones className="w-4 h-4 text-[#0076d7]" />
                  <span>Insurance Helpdesk: <strong>{HOSPITAL_INFO.bookingPhone}</strong></span>
                </div>
                <span className="text-emerald-700 font-bold bg-emerald-100/60 px-2.5 py-1 rounded-md">
                  Pre-Auth Assistance 24x7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
