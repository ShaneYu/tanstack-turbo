import { act, cleanup } from "@testing-library/react";
import { afterEach, expect, vi } from "vitest";
import * as matchers from "vitest-axe/matchers";
import { axe as vitestAxe } from "vitest-axe";

import "@testing-library/jest-dom/vitest";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

// @ts-expect-error
global.IS_REACT_ACT_ENVIRONMENT = true;

// There are some issues with getComputedStyle in JSDom, so we tweak it for testing purposes.
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);

// Radix UI components (like Select) use pointer events which are not fully supported in JSDom
if (typeof window !== "undefined") {
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.HTMLElement.prototype.hasPointerCapture = () => false;
  window.HTMLElement.prototype.releasePointerCapture = () => {};
}

function useFakeTimers() {
  vi.useFakeTimers({
    shouldClearNativeTimers: true,
    toFake: [
      "setTimeout",
      "clearTimeout",
      "setInterval",
      "clearInterval",
      "performance",
      "requestAnimationFrame",
      "cancelAnimationFrame"
    ],
  });
}

function useRealTimers() {
  vi.useRealTimers();
}

async function advanceTimersByTime(ms: number) {
  await vi.advanceTimersByTimeAsync(ms);
}

function fn() {
  return vi.fn();
}

async function axe(container: HTMLElement) {
  let results: Awaited<ReturnType<typeof vitestAxe>> | undefined;

  await act(async () => {
    results = await vitestAxe(container);
  });

  if (!results) {
    throw new Error("Axe returned no results.");
  }

  return results;
}

globalThis.runner = {
  name: 'vi',
  useFakeTimers,
  useRealTimers,
  advanceTimersByTime,
  fn,
  axe,
};
