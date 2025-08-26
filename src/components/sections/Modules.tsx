"use client"





interface ModuleItem {
  title: string;
  topic: string;
  institute: string;
  description: string;
  logoUrl: string;
  link: string; // New field for redirect URL
}

interface ModuleProps {
  modules: ModuleItem[];
}

const ModuleCard = ({ title, topic, institute, description, logoUrl, link }: ModuleItem) => {
  const handleClick = () => {
    window.open(link, '_blank'); // Opens link in new tab
  };

  return (
    <div 
      className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl border border-gray-700/50 cursor-pointer"
      onClick={handleClick}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:20px_20px]"></div>
      </div>
      
      {/* Gradient accent bar */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-400 via-purple-500 to-blue-500"></div>
      
      {/* Animated highlight on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

      {/* Hover overlay with click instruction */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 z-20">
        <div className="text-white text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center justify-center mb-2">
            <span className="text-sm font-semibold mr-2">Click to read</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          <div className="inline-flex items-center text-xs bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
            <span>Redirects to resource</span>
          </div>
        </div>
      </div>

      {/* Logo */}
      {/* <div className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-amber-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl shadow-lg p-2 border border-white/10 z-10">
        {logoUrl ? (
          <img src={logoUrl} alt={`${institute} Logo`} className="w-8 h-8 object-contain" />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )}
      </div> */}

      {/* Content */}
      <div className="p-6 flex flex-col h-full relative z-10">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-400 rounded-full border border-amber-500/30">
            {topic}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-300 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center pt-4 border-t border-gray-700/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="text-xs font-medium text-gray-400">{institute}</span>
        </div>
      </div>
    </div>
  );
};

export default function Modules() {
  const modules = [
    {
      title: "People and technology is reshaping the HR landscape in Bangladesh",
      topic: "People + Technology: Shaping the Future of HR in Bangladesh",
      institute: "University of South Asia",
      description: "People and technology are reshaping the HR landscape in Bangladesh.",
      logoUrl: "", // Optional logo
      link: "https://example.com/module1" // Redirect URL
    },
    {
      title: "RACI",
      topic: "RACI Matrix Overview",
      institute: "Team Group",
      description: "Learn the RACI Matrix method to streamline team roles and responsibilities.",
      logoUrl: "", // Optional logo
      link: "https://example.com/module2" // Redirect URL
    },
    {
      title: "Office Etiquette",
      topic: "Office Etiquette Training",
      institute: "Team Group",
      description: "Etiquette and professionalism for a better workplace.",
      logoUrl: "", // Optional logo
      link: "https://example.com/module3" // Redirect URL
    },
    {
      title: "Let's Grow Together",
      topic: "Sales & Customer Service Management",
      institute: "Team Group",
      description: "Master the art of sales and excellent customer service.",
      logoUrl: "", // Optional logo
      link: "https://example.com/module4" // Redirect URL
    },
  ];

  return (
    <section id="modules" className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-amber-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-amber-500/10 to-purple-500/10 rounded-full border border-amber-500/20 mb-6">
            <span className="text-sm font-semibold text-amber-400">LEARNING PORTFOLIO</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Modules <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-400">Developed & Facelifted</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-purple-500 mx-auto my-6 rounded-full"></div>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Here are the modules I've developed or facelifted, covering key topics in HR and business management.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Explore All Modules
          </button>
        </div>
      </div>
    </section>
  );
}