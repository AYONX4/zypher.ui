import { cn } from "@/lib/utils";
import { Accessibility, Layers, Moon, Move, Paintbrush, Rocket, Terminal, Zap } from "lucide-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Composable by Default",
      description:
        "Zypher's components are fully composable with utility-first Tailwind classes and headless design patterns — letting developers easily extend and override styles and behavior",
      icon: <Layers />,
    },
    {
      title: "Motion-First Interactions",
      description:
        "Zypher's components are built with motion-first interactions in mind, using Framer Motion to create smooth and engaging animations.",
      icon: <Move />,
    },
    {
      title: "Dark Mode Done Right",
      description:
        "Zypher provides elegant dark mode variants across all components, with accessible contrasts and one-line toggling support using Tailwind’s dark mode class.",
      icon: <Moon />,
    },
    {
      title: "Theming Without the Headache",
      description: "Built-in support for easy theming using CSS variables + Tailwind config, with a ThemeProvider wrapper to globally control brand colors, border radius, and fonts.",
      icon: <Paintbrush />,
    },
    {
      title: "Accessible Out of the Box",
      description: "Every Zypher component is designed with accessibility in mind — keyboard navigation, screen reader labels, and ARIA compliance included.",
      icon: <Accessibility />,
    },
    {
      title: "Production-Ready Animations",
      description:
        "Leverage Framer Motion-powered transitions that don’t just look cool — they respect user preferences like reduced motion..",
      icon: <Zap />,
    },
    {
      title: " CLI spport",
      description:
        "If you're building at scale, use Zypher’s optional CLI to scaffold components, layouts, or full pages with pre-configured animation and style hooks.",
      icon: <Terminal />,
    },
    {
      title: "Built on ShadCN. Supercharged by Zypher",
      description: "Zypher extends the power of ShadCN UI with design-consistent wrappers, extra variants, animations, and layout utilities — making it ideal for production SaaS, dashboards, and startups.",
      icon: <Rocket />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
