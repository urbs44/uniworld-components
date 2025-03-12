import React from "react";
import { cn } from "@/lib/utils";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 0 | 1 | 2 | 4 | 6 | 8 | 10 | 12;
  colsMd?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  colsLg?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  colsXl?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  alignItems?: "start" | "center" | "end" | "stretch";
  justifyItems?: "start" | "center" | "end" | "stretch";
}

/**
 * Grid component for creating responsive grid layouts
 */
const Grid: React.FC<GridProps> = ({
  children,
  className,
  cols = 1,
  gap = 4,
  colsMd,
  colsLg,
  colsXl,
  alignItems,
  justifyItems,
}) => {
  const gridColsClasses = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    12: "grid-cols-12",
  };

  const gridColsMdClasses = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
    12: "md:grid-cols-12",
  };

  const gridColsLgClasses = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
    12: "lg:grid-cols-12",
  };

  const gridColsXlClasses = {
    1: "xl:grid-cols-1",
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
    5: "xl:grid-cols-5",
    6: "xl:grid-cols-6",
    12: "xl:grid-cols-12",
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

  const alignItemsClasses = alignItems ? `items-${alignItems}` : "";
  const justifyItemsClasses = justifyItems ? `justify-items-${justifyItems}` : "";

  return (
    <div
      className={cn(
        "grid",
        gridColsClasses[cols],
        colsMd && gridColsMdClasses[colsMd],
        colsLg && gridColsLgClasses[colsLg],
        colsXl && gridColsXlClasses[colsXl],
        gapClasses[gap],
        alignItemsClasses,
        justifyItemsClasses,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
