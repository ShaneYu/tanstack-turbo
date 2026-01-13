/// <reference types="vite/client" />
import type { AxeMatchers, type axe } from "vitest-axe";

declare module "vitest" {
  export interface Assertion extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}

declare global {
  var runner: {
    name: 'vi';
    useFakeTimers: () => void;
    useRealTimers: () => void;
    advanceTimersByTime: (time: number) => Promise<void>;
    fn: () => ReturnType<typeof vi.fn>;
    axe: (container: HTMLElement) => Promise<Awaited<ReturnType<typeof axe>>>;
  };
}

export {};
