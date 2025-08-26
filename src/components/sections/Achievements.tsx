"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Achievement {
  image: string;
  title: string;
  description: string;
}

interface Hobby {
  title: string;
  emoji: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
  {
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    title: "HR Strategy Transformation",
    description:
      "Transformed HR at Bikroy into a strategic business partner, aligning people strategy with business goals.",
  },
  {
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1000&q=80",
    title: "Data-Driven Talent Acquisition",
    description:
      "Implemented data-driven recruitment processes improving hiring efficiency by 40%.",
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    title: "Leadership Development",
    description:
      "Led training and development programs impacting over 500+ employees across the organization.",
  },
];


  const hobbies: Hobby[] = [
    { title: "Reading", emoji: "📚" },
    { title: "Traveling", emoji: "✈️" },
    { title: "Photography", emoji: "📸" },
    { title: "Public Speaking", emoji: "🎤" },
    { title: "Cycling", emoji: "🚴‍♂️" },
    { title: "Music", emoji: "🎶" },
  ];

  return (
    <section id="achievement" className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Achievements
          </span>{" "}
          & Interests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Achievements Carousel */}
          <div>
            <h3 className="text-2xl font-semibold text-amber-400 mb-6">
              Key Achievements
            </h3>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              className="rounded-xl overflow-hidden"
            >
              {achievements.map((ach, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative">
                    <img
                      src={ach.image}
                      alt={ach.title}
                      className="w-full h-90 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                      <h4 className="text-xl font-bold text-amber-400 mb-2">
                        {ach.title}
                      </h4>
                      <p className="text-gray-300">{ach.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Hobbies & Interests */}
          <div>
            <h3 className="text-2xl font-semibold text-amber-400 mb-6">
              Hobbies & Interests
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {hobbies.map((hobby, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-5 bg-gray-800/40 rounded-xl border border-gray-700 hover:border-amber-500/50 transition-all"
                >
                  <span className="text-3xl mb-2">{hobby.emoji}</span>
                  <p className="text-gray-300">{hobby.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
