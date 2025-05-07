"use client"

import { ThemeToggle } from "@/lib/theme-toggle"
import Link from "next/link"
import { Link as ViewTransitionsLink } from "next-view-transitions"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { PartyPopper } from "lucide-react"
import { useEffect, useState } from "react"

export function Header() {
  // Track animation phases: 0 = initial, 1 = line visible, 2 = fully expanded
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    // Phase 1: Show the line
    const lineTimer = setTimeout(() =>  {
      setAnimationPhase(1)
    }, 300)

    // Phase 2: Expand the navbar after line has been visible for 1 second
    const expandTimer = setTimeout(() => {
      setAnimationPhase(2)
    }, 1300) // 300ms initial delay + 1000ms line visibility

    return () => {
      clearTimeout(lineTimer)
      clearTimeout(expandTimer)
    }
  }, [])

  return (
    <>
      {/* Mobile Pro Banner completely separate from sticky header */}
      <div className="sm:hidden w-full p-2.5 bg-white dark:bg-black/5">
        <Link href="#" target="_blank" className="flex items-center justify-center gap-2">
          <span className="flex items-center gap-2">
            <PartyPopper className="w-3.5 h-3.5" />
            <span className="text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text font-semibold">
              Explore new components
            </span>
          </span>

          <div className="group relative inline-flex items-center gap-2 px-3 py-1 text-sm rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-colors">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 opacity-40 group-hover:opacity-80 blur-sm transition-opacity duration-500" />
            <div className="relative z-10 flex items-center gap-2">
              <span className="text-white dark:text-zinc-900">Zypher.UI</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90" />
            </div>
          </div>
        </Link>
      </div>

      <div className="sticky top-0 left-0 right-0 z-50">
        <div className="bg-white dark:bg-black/5 w-full">
          {/* Rest of the header content */}
          <div className="flex items-center justify-center w-full flex-col relative">
            {/* Initial animated vertical line */}
            {animationPhase >= 1 && (
              <div
                className={`
                  absolute z-20 w-1 bg-gradient-to-b from-orange-500 via-amber-500 to-orange-600 
                  rounded-full transition-all duration-500 ease-in-out
                  ${animationPhase === 1 ? "animate-pulse-vertical" : ""}
                `}
                style={{
                  height: animationPhase === 1 ? "40px" : "100%",
                  opacity: animationPhase === 1 ? 1 : 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: animationPhase === 1 ? "calc(50% - 20px)" : "0",
                }}
              />
            )}

            <div
              className={`
                flex items-center justify-between
                bg-linear-to-b from-white/90 via-gray-50/90 to-white/90
                dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
                shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]
                backdrop-blur-md
                border-x border-b 
                border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]
                w-full sm:min-w-[800px] sm:max-w-[1200px]
                rounded-b-[28px]
                px-4 py-2.5
                relative
                transition-all duration-700 ease-in-out
                ${animationPhase === 2 ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                origin-center
              `}
            >
              <div
                className={`
                relative z-10 flex items-center justify-between w-full gap-2
                transition-all duration-700 ease-in-out
                ${animationPhase === 2 ? "opacity-100" : "opacity-0"}
              `}
              >
                {/* Logo Section with Navigation Links */}
                <div
                  className={`
                  flex items-center gap-6
                  transition-transform duration-700 ease-in-out
                  ${animationPhase === 2 ? "translate-x-0" : "-translate-x-20"}
                `}
                >
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src="/z.png"
                      alt="Logo"
                      width={24}
                      height={24}
                      className="w-8 h-8s dark:text-green-400 text-white"
                    />

                    <span className="hidden sm:block font-semibold">Zypher.UI</span>
                  </Link>
                  <span className="text-zinc-300 dark:text-zinc-700">|</span>
                  {/* Desktop Navigation Links */}
                  <div className="hidden sm:flex items-center gap-4">
                    <ViewTransitionsLink
                      href="/docs/components/background-paths"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                    >
                      Components
                    </ViewTransitionsLink>
                    <Link
                      href="/pricing"
                      target="_blank"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
                    >
                      Pricing
                    </Link>
                    <ViewTransitionsLink
                      href="/docs"
                      className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                    >
                      Installation
                    </ViewTransitionsLink>
                  </div>
                </div>

                {/* Right side items */}
                <div
                  className={`
                  hidden sm:flex items-center gap-3
                  transition-transform duration-700 ease-in-out
                  ${animationPhase === 2 ? "translate-x-0" : "translate-x-20"}
                `}
                >
                  <span className="text-zinc-300 dark:text-zinc-700">|</span>
                  <ThemeToggle />
                </div>

                {/* Mobile Navigation remains unchanged */}
                <div
                  className={`
                  flex sm:hidden items-center gap-4
                  transition-transform duration-700 ease-in-out
                  ${animationPhase === 2 ? "translate-x-0" : "translate-x-20"}
                `}
                >
                  <ViewTransitionsLink
                    href="/docs/components/action-search-bar"
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    Components
                  </ViewTransitionsLink>
                  <ViewTransitionsLink
                    href="/pricing"
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    Pricing
                  </ViewTransitionsLink>
                  <ViewTransitionsLink
                    href="/docs"
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    Installation
                  </ViewTransitionsLink>
                      <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation keyframes */}
      <style jsx global>{`
        @keyframes pulse-vertical {
          0%, 100% {
            height: 40px;
            top: calc(50% - 20px);
          }
          50% {
            height: 60px;
            top: calc(50% - 30px);
          }
        }
        
        .animate-pulse-vertical {
          animation: pulse-vertical 1.5s infinite;
        }
      `}</style>
    </>
  )
}
