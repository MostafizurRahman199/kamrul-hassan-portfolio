export interface Experience {
    position: string
    company: string
    duration: string
    location: string
    responsibilities: string[]
  }
  
  export const experiences: Experience[] = [
    {
      position: "Head of Human Resources",
      company: "Bikroy",
      duration: "May 2025 - Present",
      location: "Bangladesh · On-site",
      responsibilities: [
        "Leading the HR department for the organization",
        "Developing and implementing HR strategies",
        "Overseeing talent acquisition and management",
        "Designing employee engagement programs"
      ]
    },
    // Add other experiences following the same structure
  ]