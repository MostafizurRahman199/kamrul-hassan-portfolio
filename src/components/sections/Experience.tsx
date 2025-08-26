// import { experiences } from "../../constants/experience"
// import type { Experience } from "../../constants/experience"

// import SectionTitle from "../../ui/SectionTitle"

// interface CardProps {
//   item: Experience
//   type: "experience" | "project" | string
// }

// function Card({ item }: CardProps) {
//   return (
//     <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/10">
//       {/* Accent bar */}
//       <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500"></div>

//       {/* Content */}
//       <div className="p-6 flex flex-col h-full">
//         {/* Position */}
//         <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-pink-400 transition-colors">
//           {item.position}
//         </h3>

//         {/* Company & Duration */}
//         <div className="text-sm text-gray-300 mb-3">
//           {item.company} • <span className="italic">{item.duration}</span>
//         </div>

//         {/* Location */}
//         <div className="text-xs text-gray-400 mb-4">
//           📍 {item.location}
//         </div>

//         {/* Responsibilities */}
//         <ul className="list-disc list-inside space-y-1 text-gray-400 flex-1">
//           {item.responsibilities.map((res, idx) => (
//             <li key={idx}>{res}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default function Experience() {
//   const experiences = [
//     {
//       position: "Head of Human Resources",
//       company: "Bikroy",
//       duration: "May 2025 - Present",
//       location: "Bangladesh · On-site",
//       highlights: ["Leading HR department", "Strategic HR planning", "Talent management", "Employee engagement"],
//       type: "current"
//     },
//     {
//       position: "Senior Manager Human Resources",
//       company: "Bikroy (A concern of saltside)",
//       duration: "Feb 2024 - May 2025",
//       location: "Dhaka, Bangladesh · On-site",
//       highlights: ["HR operations management", "Process automation", "Training programs", "Performance systems"],
//       type: "recent"
//     },
//     {
//       position: "Human Resources Manager",
//       company: "TEAM Group",
//       duration: "Mar 2023 - Feb 2024",
//       location: "Dhaka, Bangladesh · On-site",
//       highlights: ["Talent acquisition", "Culture transformation", "HR automation", "Employee development"],
//       type: "key"
//     },
//     {
//       position: "Deputy Manager Human Resources",
//       company: "TEAM Group",
//       duration: "Mar 2022 - May 2023",
//       location: "Dhaka, Bangladesh · On-site",
//       highlights: ["HR operations", "Talent branding", "Budget management", "Special projects"],
//       type: "standard"
//     },
//     {
//       position: "Assistant Manager Human Resources",
//       company: "REDX Delivery",
//       duration: "Apr 2021 - Apr 2022",
//       location: "Tejgaon, Dhaka · On-site",
//       highlights: ["Employee lifecycle", "Recruitment", "Payroll operations", "HR reporting"],
//       type: "standard"
//     },
//     {
//       position: "HR Professional",
//       company: "A&I Group",
//       duration: "Jun 2019 - Apr 2021",
//       location: "Banani",
//       highlights: ["HR operations", "Payroll management", "Strategic initiatives", "Systems implementation"],
//       type: "standard"
//     },
//     {
//       position: "Senior Executive Human Resources",
//       company: "Bengal Group of Industries",
//       duration: "Feb 2017 - Jun 2019",
//       location: "Dhaka, Bangladesh",
//       highlights: ["Recruitment", "Orientation programs", "Performance appraisal", "Employee verification"],
//       type: "standard"
//     },
//     {
//       position: "Human Resources Executive",
//       company: "Farhan Textile Limited",
//       duration: "Feb 2014 - Feb 2016",
//       location: "Dhaka, Bangladesh · On-site",
//       highlights: ["Recruitment interviews", "Employee records", "HR documentation", "Staff appointments"],
//       type: "standard"
//     }
//   ]

//   const getTypeStyles = (type: string) => {
//     switch (type) {
//       case 'current':
//         return 'border-amber-500 bg-gradient-to-r from-amber-500/10 to-transparent'
//       case 'recent':
//         return 'border-amber-400 bg-gradient-to-r from-amber-400/10 to-transparent'
//       case 'key':
//         return 'border-blue-500 bg-gradient-to-r from-blue-500/10 to-transparent'
//       default:
//         return 'border-gray-700 bg-gray-800/50'
//     }
//   }

//   const getTypeBadge = (type: string) => {
//     switch (type) {
//       case 'current':
//         return { text: 'Current', color: 'bg-amber-500 text-black' }
//       case 'recent':
//         return { text: 'Recent', color: 'bg-amber-400 text-black' }
//       case 'key':
//         return { text: 'Key Role', color: 'bg-blue-500 text-white' }
//       default:
//         return { text: 'Experience', color: 'bg-gray-600 text-white' }
//     }
//   }

//   return (
//     <section id="experience" className="py-20 bg-black">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Professional <span className="text-amber-500">Journey</span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             A progressive career path showcasing growth from entry-level HR roles to senior leadership positions
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           <div className="relative">
//             {/* Timeline line */}
//             <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-gray-600 to-gray-800"></div>
            
//             <div className="space-y-8">
//               {experiences.map((exp, index) => (
//                 <div key={index} className="relative flex items-start">
//                   {/* Timeline dot */}
//                   <div className="absolute left-6 w-4 h-4 bg-amber-500 rounded-full border-4 border-black transform -translate-x-2 mt-2 z-10"></div>
                  
//                   {/* Content */}
//                   <div className={`ml-16 flex-1 p-6 rounded-2xl border-2 ${getTypeStyles(exp.type)} transition-all duration-300 hover:scale-105`}>
//                     <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
//                       <div className="flex-1">
//                         <div className="flex items-center gap-3 mb-2">
//                           <h3 className="text-xl font-bold text-white">{exp.position}</h3>
//                           <span className={`px-3 py-1 rounded-full text-xs font-bold ${getTypeBadge(exp.type).color}`}>
//                             {getTypeBadge(exp.type).text}
//                           </span>
//                         </div>
//                         <h4 className="text-lg text-amber-400 font-semibold mb-1">{exp.company}</h4>
//                         <p className="text-gray-400 text-sm">{exp.location}</p>
//                       </div>
//                       <div className="text-right">
//                         <span className="text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-full">
//                           {exp.duration}
//                         </span>
//                       </div>
//                     </div>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                       {exp.highlights.map((highlight, i) => (
//                         <div key={i} className="flex items-center">
//                           <span className="text-amber-500 mr-2">•</span>
//                           <span className="text-gray-300 text-sm">{highlight}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Career Summary */}
//         <div className="mt-16 text-center">
//           <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 max-w-4xl mx-auto">
//             <h3 className="text-2xl font-bold text-amber-500 mb-6">Career Highlights</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-amber-500 mb-2">10+</div>
//                 <div className="text-gray-300">Years Experience</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-amber-500 mb-2">8+</div>
//                 <div className="text-gray-300">Companies</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-amber-500 mb-2">5+</div>
//                 <div className="text-gray-300">Leadership Roles</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




export default function Experience() {
   const experiences = [
    {
      position: "Head of Human Resources",
      company: "Bikroy",
      duration: "May 2025 - Present",
      location: "Bangladesh · On-site",
      highlights: ["Leading HR department", "Strategic HR planning", "Talent management", "Employee engagement"],
      type: "current"
    },
    {
      position: "Senior Manager Human Resources",
      company: "Bikroy (A concern of saltside)",
      duration: "Feb 2024 - May 2025",
      location: "Dhaka, Bangladesh · On-site",
      highlights: ["HR operations management", "Process automation", "Training programs", "Performance systems"],
      type: "recent"
    },
    {
      position: "Human Resources Manager",
      company: "TEAM Group",
      duration: "Mar 2023 - Feb 2024",
      location: "Dhaka, Bangladesh · On-site",
      highlights: ["Talent acquisition", "Culture transformation", "HR automation", "Employee development"],
      type: "key"
    },
    {
      position: "Deputy Manager Human Resources",
      company: "TEAM Group",
      duration: "Mar 2022 - May 2023",
      location: "Dhaka, Bangladesh · On-site",
      highlights: ["HR operations", "Talent branding", "Budget management", "Special projects"],
      type: "standard"
    },
    {
      position: "Assistant Manager Human Resources",
      company: "REDX Delivery",
      duration: "Apr 2021 - Apr 2022",
      location: "Tejgaon, Dhaka · On-site",
      highlights: ["Employee lifecycle", "Recruitment", "Payroll operations", "HR reporting"],
      type: "standard"
    },
    {
      position: "HR Professional",
      company: "A&I Group",
      duration: "Jun 2019 - Apr 2021",
      location: "Banani",
      highlights: ["HR operations", "Payroll management", "Strategic initiatives", "Systems implementation"],
      type: "standard"
    },
    {
      position: "Senior Executive Human Resources",
      company: "Bengal Group of Industries",
      duration: "Feb 2017 - Jun 2019",
      location: "Dhaka, Bangladesh",
      highlights: ["Recruitment", "Orientation programs", "Performance appraisal", "Employee verification"],
      type: "standard"
    },
    {
      position: "Human Resources Executive",
      company: "Farhan Textile Limited",
      duration: "Feb 2014 - Feb 2016",
      location: "Dhaka, Bangladesh · On-site",
      highlights: ["Recruitment interviews", "Employee records", "HR documentation", "Staff appointments"],
      type: "standard"
    }
  ]

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'current':
        return 'border-amber-500 bg-gradient-to-r from-amber-500/20 to-transparent shadow-lg'
      case 'recent':
        return 'border-amber-400 bg-gradient-to-r from-amber-400/20 to-transparent shadow-lg'
      case 'key':
        return 'border-blue-500 bg-gradient-to-r from-blue-500/20 to-transparent shadow-lg'
      default:
        return 'border-gray-700 bg-gray-800/70 shadow-md'
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'current':
        return { text: 'Current', color: 'bg-amber-500 text-black' }
      case 'recent':
        return { text: 'Recent', color: 'bg-amber-400 text-black' }
      case 'key':
        return { text: 'Key Role', color: 'bg-blue-500 text-white' }
      default:
        return { text: 'Experience', color: 'bg-gray-600 text-white' }
    }
  }

  return (
    <section id="experience" className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            Professional <span className="text-amber-500">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A progressive career path showcasing growth from entry-level HR roles to senior leadership positions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-gray-600 to-gray-800"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-amber-500 rounded-full border-4 border-black transform -translate-x-2 mt-2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 flex-1 p-8 rounded-2xl border-2 ${getTypeStyles(exp.type)} transition-all duration-300 hover:scale-105`}>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="text-2xl font-semibold text-white">{exp.position}</h3>
                          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getTypeBadge(exp.type).color}`}>
                            {getTypeBadge(exp.type).text}
                          </span>
                        </div>
                        <h4 className="text-xl text-amber-400 font-semibold mb-2">{exp.company}</h4>
                        <p className="text-gray-400 text-sm">{exp.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg text-gray-300 bg-gray-800 px-4 py-2 rounded-full">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exp.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-amber-500 text-lg">•</span>
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900 rounded-2xl p-10 border border-gray-800 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-3xl font-bold text-amber-500 mb-8">Career Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-500 mb-4">10+</div>
                <div className="text-gray-300">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-500 mb-4">8+</div>
                <div className="text-gray-300">Companies Worked</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-500 mb-4">5+</div>
                <div className="text-gray-300">Leadership Roles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
