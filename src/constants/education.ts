export interface Education {
    degree: string
    institution: string
    duration: string // NOT 'year'
    details?: string[]
  }
  
  export const education: Education[] = [
    {
      degree: "BSc in Computer Science",
      institution: "ABC University",
      duration: "2018 - 2022",
      details: ["Graduated with honors", "GPA: 3.9"]
    },
    // ...
  ]
  