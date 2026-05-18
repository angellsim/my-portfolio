"use client";

type MainShellProps = {
  children: React.ReactNode;
};

import { SixEyesBackground } from "@/components/effects/six-eyes-background";

export function MainShell({ children }: MainShellProps) {
  return (
    <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-10 md:px-10">
      <SixEyesBackground />
      <div aria-hidden="true" className="caustics-layer" />
      
      <main className="relative z-10 flex-1">{children}</main>
    </div>
  );
}

