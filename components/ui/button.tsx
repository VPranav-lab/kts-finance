"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const HoverBorderGradientButton = ({
  children,
  className,
  as: Tag = "button",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: any }) => {
  return (
    <Tag
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2",
        className
      )}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,var(--color-secondary)_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-8 py-1 text-sm font-medium text-primary-white backdrop-blur-3xl transition-colors">
        {children}
      </span>
    </Tag>
  );
};
