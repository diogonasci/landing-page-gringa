// src/components/TrackedSection.tsx
import { useGTM } from "@/hooks/useGTM";
import React, { useEffect, useRef } from "react";

interface TrackedSectionProps {
  sectionName: string;
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export const TrackedSection: React.FC<TrackedSectionProps> = ({
  sectionName,
  children,
  className,
  threshold = 0.3,
}) => {
  const { trackSectionView } = useGTM();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView(sectionName);
          }
        });
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [sectionName, threshold, trackSectionView]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};
