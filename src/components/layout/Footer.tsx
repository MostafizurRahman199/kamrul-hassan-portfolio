// export default function Footer() {
//     return (
//       <footer className="bg-gray-900 border-t border-gray-800 py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-6 md:mb-0">
//               <h3 className="text-2xl font-bold text-amber-500 mb-2">Kamrul Hassan</h3>
//               <p className="text-gray-400">Head of HR at Bikroy</p>
//             </div>
            
//             <div className="flex space-x-6">
//               {/* Social links would go here */}
//             </div>
//           </div>
          
//           <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
//             <p>© {new Date().getFullYear()} Kamrul Hassan. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     )
//   }




import { FaLinkedin, FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-2">Kamrul Hassan</h3>
            <p className="text-gray-400">Head of HR at Bikroy</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-amber-400 transition">About</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-amber-400 transition">Experience</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-3">Connect</h4>
            <div className="flex justify-center md:justify-start gap-4">
              {[
                { Icon: FaLinkedin, link: "https://linkedin.com" },
                { Icon: FaFacebook, link: "https://facebook.com" },
                { Icon: FaXTwitter, link: "https://x.com" },
                { Icon: FaYoutube, link: "https://youtube.com" },
              ].map(({ Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full 
                             backdrop-blur-sm bg-gray-800/50 border border-gray-700 
                             text-amber-400 hover:text-amber-500 hover:border-amber-500 
                             transition-all shadow-md hover:shadow-amber-500/30"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Kamrul Hassan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
