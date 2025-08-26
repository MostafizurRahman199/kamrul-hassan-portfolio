"use client"

import SectionTitle from '@/ui/SectionTitle'
import { education } from '../../constants/education'
import TimelineItem from '@/ui/TimelineItem'


export default function About() {
  const highlights = [
    {
      icon: "🎯",
      title: "Strategic HR Leadership",
      description: "Led HR transformation initiatives across multiple organizations, driving cultural change and operational excellence."
    },
    {
      icon: "🚀",
      title: "Talent Development",
      description: "Designed comprehensive training programs, mentorship initiatives, and career development pathways for employees."
    },
    {
      icon: "🤝",
      title: "Employee Engagement",
      description: "Created innovative employee engagement strategies that improved retention and workplace satisfaction."
    },
    {
      icon: "⚡",
      title: "Process Innovation",
      description: "Automated HR processes to enhance efficiency and allow teams to focus on strategic initiatives."
    }
  ]

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Employees Managed" },
    { number: "8+", label: "Companies Served" },
    { number: "95%", label: "Retention Rate" }
  ]

  return (
    <section id='about' className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Core Values & Highlights */}
          <div className="space-y-8">
            {/* Career Highlights */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-amber-500 mb-6 text-center">Career Highlights</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group hover:scale-110 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="text-3xl font-bold text-amber-500 mb-2 group-hover:text-amber-400 transition-colors duration-300">{stat.number}</div>
                    <div className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-bold text-amber-500 mb-6">Key Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 group animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
                  </div>
                ))}
              </div>
          </div>
          
            {/* Core Values */}
            <div className="bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl p-8 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              <h3 className="text-2xl font-bold text-amber-500 mb-6">Core Values</h3>
              <div className="space-y-3">
                {[
                  "Integrity & Transparency",
                  "Employee-Centric Approach", 
                  "Continuous Learning",
                  "Innovation & Excellence"
                ].map((value, index) => (
                  <div key={index} className="flex items-center group hover:translate-x-2 transition-all duration-300 animate-fade-in-left" style={{ animationDelay: `${800 + index * 100}ms` }}>
                    <span className="text-amber-500 mr-3 group-hover:scale-125 transition-transform duration-300">✓</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - About Content & Education */}
          <div className="space-y-8">
            {/* About Content */}
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:text-amber-400 transition-colors duration-500">
                About <span className="text-amber-500 hover:text-amber-400 transition-colors duration-500">Kamrul</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6 hover:text-white transition-colors duration-500">
                I am an accomplished HR professional with over a decade of experience in human resources management, 
                specializing in talent acquisition, performance management, and organizational development.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-500">
                Currently serving as Head of Human Resources at Bikroy, I have a proven track record of driving 
                HR excellence across diverse industries including textiles, manufacturing, and technology. My passion 
                lies in creating inclusive workplace cultures that foster employee growth and organizational success.
              </p>
            </div>

            {/* Education */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <h3 className="text-2xl font-bold text-amber-500 mb-6">Education</h3>
              <div className="space-y-6">
                {/* MBA */}
                <div className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300 animate-fade-in-right" style={{ animationDelay: '900ms' }}>
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-amber-500 group-hover:text-amber-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">Master of Business Administration - MBA</h4>
                    <p className="text-amber-400 font-medium group-hover:text-amber-300 transition-colors duration-300">Human Resources Management/Personnel Administration, General</p>
                    <p className="text-amber-400 font-medium group-hover:text-amber-300 transition-colors duration-300">University of Dhaka</p>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">2016 - 2022</p>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Grade: 3.15</p>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Activities: Vice President at Dhaka University Evening MBA Management Society</p>
                  </div>
                </div>

                {/* Masters in Economics */}
                <div className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300 animate-fade-in-right" style={{ animationDelay: '1000ms' }}>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">Masters of Social Science</h4>
                    <p className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">Economics</p>
                    <p className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">National University | Bangladesh</p>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">2013 - 2014</p>
                  
                  </div>
                </div>

                {/* Bachelor in Economics */}
                <div className="flex items-start space-x-4 group hover:scale-105 transition-all duration-300 animate-fade-in-right" style={{ animationDelay: '1100ms' }}>
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-green-500 group-hover:text-green-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">Bachelor of Social Science</h4>
                    <p className="text-green-400 font-medium group-hover:text-green-300 transition-colors duration-300">Economics</p>
                    <p className="text-green-400 font-medium group-hover:text-green-300 transition-colors duration-300">National University | Bangladesh</p>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">2008 - 2012</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}