import React from "react";
import { cn } from "@/lib/utils";

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "row-reverse" | "col" | "col-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  items?: "start" | "end" | "center" | "baseline" | "stretch";
  gap?: 0 | 1 | 2 | 4 | 6 | 8 | 10 | 12;
  inline?: boolean;
}

/**
 * Flex component for creating flexible layouts
 */
const Flex: React.FC<FlexProps> = ({
  children,
  className,
  direction = "row",
  wrap = "nowrap",
  justify = "start",
  items = "start",
  gap = 0,
  inline = false,
}) => {
  const flexDirectionClasses = {
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    col: "flex-col",
    "col-reverse": "flex-col-reverse",
  };

  const flexWrapClasses = {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse",
  };

  const justifyClasses = {
    start: "justify-start",
    end: "justify-end",
    center: "justify-center",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  const alignItemsClasses = {
    start: "items-start",
    end: "items-end",
    center: "items-center",
    baseline: "items-baseline",
    stretch: "items-stretch",
  };

  const gapClasses = {
    0: "gap-0",
    1: "gap-1",
    2: "gap-2",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
    10: "gap-10",
    12: "gap-12",
  };

  return (
    <div
      className={cn(
        inline ? "inline-flex" : "flex",
        flexDirectionClasses[direction],
        flexWrapClasses[wrap],
        justifyClasses[justify],
        alignItemsClasses[items],
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Flex;
