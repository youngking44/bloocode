import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkeletonThemeProviderProps {
  children: React.ReactNode;
}

const SkeletonThemeProvider = ({ children }: SkeletonThemeProviderProps) => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      {children}
    </SkeletonTheme>
  );
};

export default SkeletonThemeProvider;
