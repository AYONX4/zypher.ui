"use client"

import { useState, useRef, useEffect } from "react"
import { Calendar, Sparkles, Code2, ExternalLink, Share2, Github, X, Twitter, Instagram } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Skill {
  name: string
  level: number
}

interface Card02Props {
  name?: string
  role?: string
  image?: string
  status?: string
  skills?: Skill[]
  portfolio?: string
}

const defaultProfile = {
  name: "Ayon k",
  role: "Agency Owner",
  image: "/A.png",
  status: "Open to Work",
  skills: [
    { name: "Frontend", level: 5 },
    { name: "Backend", level: 5 },
    { name: "DevOps", level: 4 },
    { name: "AI", level: 4 },
  ],
  portfolio: "github.com/AYONFFH4X",
} satisfies Required<Card02Props>

export default function Card02({
  name = defaultProfile.name,
  role = defaultProfile.role,
  image = defaultProfile.image,
  status = defaultProfile.status,
  skills = defaultProfile.skills,
  portfolio = defaultProfile.portfolio,
}: Card02Props = defaultProfile) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const skillsRef = useRef<HTMLDivElement>(null)

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Get color based on skill level
  const getSkillLevelColor = (level: number) => {
    switch (level) {
      case 5:
        return "bg-emerald-500 dark:bg-emerald-400"
      case 4:
        return "bg-amber-500 dark:bg-amber-400"
      case 3:
        return "bg-blue-500 dark:bg-blue-400"
      case 2:
        return "bg-orange-500 dark:bg-orange-400"
      case 1:
        return "bg-red-500 dark:bg-red-400"
      default:
        return "bg-zinc-500 dark:bg-zinc-400"
    }
  }

  // Get skill level text
  const getSkillLevelText = (level: number) => {
    switch (level) {
      case 5:
        return "Expert"
      case 4:
        return "Advanced"
      case 3:
        return "Intermediate"
      case 2:
        return "Basic"
      case 1:
        return "Beginner"
      default:
        return ""
    }
  }

  // Determine if we're on mobile
  const isMobile = windowWidth < 640

  return (
    <div className="w-full max-w-xs mx-auto perspective">
      <div
        className={cn(
          "relative overflow-hidden",
          "bg-white/50 dark:bg-zinc-900/50",
          "backdrop-blur-xl",
          "border border-zinc-200/50 dark:border-zinc-800/50",
          "rounded-2xl",
          "transition-all duration-500",
          "hover:shadow-xl hover:shadow-zinc-200/20 dark:hover:shadow-zinc-900/20",
          "hover:border-zinc-300/50 dark:hover:border-zinc-700/50",
          "transform hover:translate-y-[-8px]",
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false)
          setActiveSkill(null)
        }}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-zinc-100/30 dark:via-zinc-800/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Sparkle effect in corner */}
        <div
          className={cn(
            "absolute top-3 right-3 transition-all duration-500",
            isHovering ? "opacity-100 rotate-12 scale-110" : "opacity-0 rotate-0 scale-90",
          )}
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
        </div>

        <div className="p-5">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div
                className={cn(
                  "w-16 h-16 rounded-xl overflow-hidden",
                  "ring-2 ring-zinc-100 dark:ring-zinc-800",
                  "transition-all duration-500",
                  "group-hover:ring-4 group-hover:ring-zinc-200 dark:group-hover:ring-zinc-700",
                  "transform group-hover:scale-105",
                )}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={name}
                  width={64}
                  height={64}
                  className={cn("object-cover transition-transform duration-700", "group-hover:scale-110")}
                />
              </div>
              {/* Pulse effect */}
              <div
                className={cn(
                  "absolute inset-0 rounded-xl",
                  "bg-zinc-200/0 dark:bg-zinc-700/0",
                  "group-hover:bg-zinc-200/0 dark:group-hover:bg-zinc-700/0",
                  "group-hover:animate-pulse-subtle",
                )}
              />
            </div>

            <div className="flex-1">
              <h3
                className={cn(
                  "text-base font-semibold text-zinc-900 dark:text-zinc-100",
                  "transition-all duration-300",
                  "hover:tracking-wide",
                )}
              >
                {name}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-0.5">{role}</p>
              <div
                className={cn(
                  "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg",
                  "bg-emerald-50 dark:bg-emerald-900/20",
                  "text-emerald-600 dark:text-emerald-400",
                  "text-xs font-medium",
                  "transition-all duration-300",
                  "hover:bg-emerald-100 dark:hover:bg-emerald-900/30",
                  "hover:shadow-sm",
                )}
              >
                <Calendar className={cn("w-3 h-3", "transition-transform duration-500", "group-hover:rotate-12")} />
                {status}
              </div>
            </div>
          </div>
        </div>

        {/* Skills section - expands on hover */}
        <div
          ref={skillsRef}
          className={cn(
            "px-5 pb-5 transition-all duration-800 ease-in-out",
            "max-h-0 overflow-hidden opacity-0",
            (isHovering || isMobile) && "max-h-[500px] opacity-100",
          )}
          style={{
            transitionDelay: isHovering ? "100ms" : "0ms",
          }}
        >
          <div className="space-y-2.5">
            {skills?.map((skill, index) => (
              <div
                key={skill.name}
                className={cn(
                  "flex items-center gap-3",
                  "p-2 rounded-xl",
                  "bg-zinc-50 dark:bg-zinc-800/50",
                  "hover:bg-zinc-100 dark:hover:bg-zinc-800",
                  "transition-all duration-300",
                  "transform hover:translate-x-1",
                  activeSkill === skill.name ? "shadow-md" : "",
                )}
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
                style={{
                  transitionDelay: isHovering ? `${index * 50}ms` : "0ms",
                  transform: isHovering ? `translateY(0) scale(1)` : `translateY(20px) scale(0.95)`,
                  opacity: isHovering ? 1 : 0,
                }}
              >
                <Code2
                  className={cn(
                    "w-4 h-4 text-zinc-900 dark:text-zinc-100",
                    "transition-transform duration-300",
                    activeSkill === skill.name ? "rotate-12 scale-110" : "",
                  )}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span
                      className={cn(
                        "text-zinc-700 dark:text-zinc-300 font-medium",
                        "transition-all duration-300",
                        activeSkill === skill.name ? "text-zinc-900 dark:text-zinc-100" : "",
                      )}
                    >
                      {skill.name}
                    </span>

                    {/* Skill level text that appears on hover */}
                    <span
                      className={cn(
                        "text-xs opacity-0 transition-all duration-300",
                        activeSkill === skill.name ? "opacity-100" : "",
                        skill.level === 5
                          ? "text-emerald-600 dark:text-emerald-400"
                          : skill.level === 4
                            ? "text-amber-600 dark:text-amber-400"
                            : skill.level === 3
                              ? "text-blue-600 dark:text-blue-400"
                              : skill.level === 2
                                ? "text-orange-600 dark:text-orange-400"
                                : "text-red-600 dark:text-red-400",
                      )}
                    >
                      {getSkillLevelText(skill.level)}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-1 rounded-full flex-1",
                          "transition-all duration-500 ease-in-out",
                          i < skill.level
                            ? activeSkill === skill.name
                              ? getSkillLevelColor(skill.level) + " h-1.5"
                              : "bg-zinc-900 dark:bg-zinc-100"
                            : activeSkill === skill.name
                              ? "bg-zinc-300 dark:bg-zinc-600"
                              : "bg-zinc-200 dark:bg-zinc-700",
                        )}
                        style={{
                          transitionDelay: `${i * 50}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 pb-5 flex gap-2 items-center">
          <div className="relative w-full flex gap-2">
            <Button
              variant="default"
              size="sm"
              className={cn(
                "w-full",
                "bg-zinc-900 dark:bg-zinc-100",
                "hover:bg-zinc-700 dark:hover:bg-zinc-300",
                "text-white dark:text-zinc-900",
                "shadow-xs",
                "transition-all duration-300",
                "hover:shadow-md hover:scale-[1.02]",
                "active:scale-[0.98]",
                "relative overflow-hidden group",
              )}
              onMouseEnter={() => setIsPortfolioHovered(true)}
              onMouseLeave={() => setIsPortfolioHovered(false)}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-zinc-700/20 dark:via-zinc-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

              {/* Icon transitions between ExternalLink and Github */}
              <div className="relative w-4 h-4 mr-2">
                <ExternalLink
                  className={cn(
                    "w-4 h-4 absolute transition-all duration-300",
                    isPortfolioHovered ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0",
                  )}
                />
                <Github
                  className={cn(
                    "w-4 h-4 absolute transition-all duration-300",
                    isPortfolioHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                  )}
                />
              </div>
            </Button>
            <Button
              variant="default"
              size="sm"
              className={cn(
                "w-full",
                "bg-zinc-900 dark:bg-zinc-100",
                "hover:bg-zinc-700 dark:hover:bg-zinc-300",
                "text-white dark:text-zinc-900",
                "shadow-xs",
                "transition-all duration-300",
                "hover:shadow-md hover:scale-[1.02]",
                "active:scale-[0.98]",
                "relative overflow-hidden group",
              )}
              onMouseEnter={() => setIsPortfolioHovered(true)}
              onMouseLeave={() => setIsPortfolioHovered(false)}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-zinc-700/20 dark:via-zinc-300/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

              {/* Icon transitions between ExternalLink and Github */}
              <div className="relative w-4 h-4 mr-2">
                <ExternalLink
                  className={cn(
                    "w-4 h-4 absolute transition-all duration-300",
                    isPortfolioHovered ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0",
                  )}
                />
                <Twitter
                  className={cn(
                    "w-4 h-4 absolute transition-all duration-300",
                    isPortfolioHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                  )}
                />
              </div>
            </Button>
          </div>

          <Button
            variant="ghost"
            className={cn(
              "flex items-center gap-1.5",
              "hover:bg-zinc-100 dark:hover:bg-zinc-800",
              "rounded-lg p-1.5",
              "transition-all duration-300",
              "hover:rotate-1 hover:scale-105",
              "active:scale-95",
            )}
          >
            <Share2 className="w-4 h-4 text-zinc-900 dark:text-zinc-100 transition-transform duration-300 hover:rotate-12" />
            <span className="text-sm text-zinc-900 dark:text-zinc-100 hidden sm:inline">Share</span>
          </Button>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
        
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        
        @media (max-width: 640px) {
          .perspective {
            width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
