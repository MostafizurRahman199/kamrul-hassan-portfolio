import React from 'react'
import { 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  Shield, 
  Lightbulb,
  BookOpen,
  UserCheck,
  RotateCcw,
  Users2,
  FileText,
  Heart,
  DollarSign,
  CheckCircle,
  GraduationCap,
  UserPlus,
  Briefcase,
  Building2,
  MessageCircle,
  Star
} from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      category: "HR Core",
      skills: [
        { name: "HR Management", level: 95 },
        { name: "Talent Acquisition", level: 90 },
        { name: "Performance Appraisal", level: 88 },
        { name: "Employee Engagement", level: 85 }
      ]
    },
    {
      category: "Leadership",
      skills: [
        { name: "Strategic Planning", level: 92 },
        { name: "Team Management", level: 90 },
        { name: "Change Management", level: 85 },
        { name: "Decision Making", level: 88 }
      ]
    },
    {
      category: "Technical",
      skills: [
        { name: "Microsoft Excel", level: 95 },
        { name: "HRIS Systems", level: 80 },
        { name: "Data Analysis", level: 75 },
        { name: "Process Automation", level: 82 }
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Communication", level: 90 },
        { name: "Problem Solving", level: 88 },
        { name: "Negotiation", level: 85 },
        { name: "Conflict Resolution", level: 87 }
      ]
    }
  ]

  return (
    <section id='skills' className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Core <span className="text-amber-500">Competencies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive skill set developed through years of HR leadership and organizational development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl font-bold text-amber-500 mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-amber-400 text-xs font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-amber-500 to-amber-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Additional Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { skill: "Budgeting", icon: DollarSign },
              { skill: "Compliance", icon: CheckCircle },
              { skill: "Training & Development", icon: GraduationCap },
              { skill: "Mentorship", icon: UserPlus },
              { skill: "Job Rotation", icon: RotateCcw },
              { skill: "MT Programs", icon: Briefcase },
              { skill: "Internship Management", icon: Building2 },
              { skill: "Cross-functional Collaboration", icon: Users2 },
              { skill: "HR Policies", icon: FileText },
              { skill: "Organizational Culture", icon: Heart },
              { skill: "Employee Counselling", icon: MessageCircle },
              { skill: "Special Projects", icon: Star }
            ].map(({ skill, icon: Icon }, index) => (
              <div key={index} className="bg-gray-800 text-center py-3 px-4 rounded-lg border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:bg-gray-750 group">
                <div className="flex flex-col items-center space-y-2">
                  <Icon className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                  <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}