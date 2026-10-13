import React from "react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": HOSPITAL_INFO.name,
    "alternateName": "Maya Hospital & Multispeciality Center",
    "url": "https://www.mayahospitalmeerpur.com/",
    "telephone": HOSPITAL_INFO.emergencyPhone,
    "image": "https://content.jdmagicbox.com/v2/comp/lakhimpur-kheri/b2/9999p5872.5872.250105025614.e5b2/catalogue/maya-hospital-and-multi-speciality-centre-meerpur-lakhimpur-kheri-hospitals-7mkuhr5g9l.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "556, Maya HOSPITAL & Multispeciality Center, Near Children's Academy School, Aira Road Near Children's Academy Meerpur",
      "addressLocality": "Meerpur",
      "addressRegion": "Lakhimpur Kheri",
      "postalCode": "262701",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": HOSPITAL_INFO.mapCoordinates.lat,
      "longitude": HOSPITAL_INFO.mapCoordinates.lng
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "51",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "paymentAccepted": HOSPITAL_INFO.paymentMethods.join(", "),
    "hasMap": `https://maps.google.com/maps?q=${HOSPITAL_INFO.mapCoordinates.lat},${HOSPITAL_INFO.mapCoordinates.lng}`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
