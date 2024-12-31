import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  id?: string;
  variant?: "default" | "alternate";
}

export function Section({
  title,
  subtitle,
  description,
  children,
  className,
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "w-full py-16",
        variant === "alternate" ? "bg-slate-50" : "bg-background",
        className
      )}
      {...props}
    >
      {(title || subtitle || description) && (
        <div className="mx-auto mb-12 max-w-screen-md text-center">
          {subtitle && (
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-sm font-bold text-transparent">
              {subtitle}
            </div>
          )}

          {title && (
            <div className="mt-1 text-3xl font-bold">{title}</div>
          )}

          {description && (
            <div className="mt-2 text-lg text-muted-foreground">
              {description}
            </div>
          )}
        </div>
      )}

      <div className="mx-auto max-w-screen-lg">{children}</div>
    </section>
  );
}
