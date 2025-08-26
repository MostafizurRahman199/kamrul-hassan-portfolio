interface Education {
    degree: string
    institution: string
    duration: string
    details?: string[]
  }
  
  interface TimelineItemProps {
    education: Education
  }
  
  export default function TimelineItem({ education }: { education: Education }) {
    return (
      <div className="relative pl-8">
        <span className="absolute left-0 top-2 w-4 h-4 rounded-full bg-amber-500 border-2 border-gray-800"></span>
        <h4 className="text-lg font-semibold text-white">{education.degree}</h4>
        <p className="text-sm text-gray-400">{education.institution}</p>
        <p className="text-xs italic text-gray-500 mb-2">{education.duration}</p>
        {education.details && (
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
            {education.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    )
  }
  
  