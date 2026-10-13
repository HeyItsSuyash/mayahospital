import React from "react";
import { 
  REVIEWS, 
  HOSPITAL_INFO 
} from "@/data/hospitalData";
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  ExternalLink,
  MapPin,
  Heart
} from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[#0076d7] font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Patient Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#092c57]">
              What our patients have to say
            </h2>
            <p className="text-sm text-slate-500 max-w-xl">
              Authentic experiences shared by patients and families who experienced healing and comfort at Maya Hospital And Multi-speciality Centre.
            </p>
          </div>

          {/* Aggregate Rating Pill */}
          <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-white font-black text-2xl flex items-center justify-center shadow-md">
              {HOSPITAL_INFO.rating}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <p className="text-xs font-bold text-slate-800 mt-0.5">5.0 Star Rated on Justdial</p>
              <a 
                href={HOSPITAL_INFO.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-[#0076d7] hover:underline flex items-center gap-1"
              >
                <span>Read all reviews on Justdial</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-3">
                {/* Stars and Quote */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200 group-hover:text-sky-300 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author & Source */}
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm text-[#092c57]">{rev.author}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <MapPin className="w-3 h-3" />
                  <span>{rev.location} • {rev.date}</span>
                </div>
                <div className="text-[10px] text-sky-700 font-semibold bg-sky-50 px-2 py-0.5 rounded inline-block mt-1">
                  {rev.source}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
