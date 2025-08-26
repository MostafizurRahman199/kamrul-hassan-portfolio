interface SectionTitleProps {
    mainText: string
    accentText?: string
    align?: "left" | "center"
  }
  
  export default function SectionTitle({
    mainText,
    accentText,
    align = "center",
  }: SectionTitleProps) {
    return (
      <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {mainText}{" "}
          {accentText && (
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {accentText}
            </span>
          )}
        </h2>
        <div
          className={`mt-3 w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 ${
            align === "center" ? "mx-auto" : ""
          }`}
        ></div>
      </div>
    )
  }
  