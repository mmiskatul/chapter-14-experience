import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        tone === "light" && "text-light-text",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow mb-4", tone === "light" ? "text-caramel-soft" : "text-accent")}>
          {eyebrow}
        </p>
      ) : null}
      <Tag className="display-lg">{title}</Tag>
      {subtitle ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-light-text/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
