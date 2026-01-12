import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

// @ts-expect-error
global.IS_REACT_ACT_ENVIRONMENT = true;

// Resize observer does not exist in JSDom, so we mock it.
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;

// There are some issues with getComputedStyle in JSDom, so we tweak it for testing purposes.
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);

// Radix UI components (like Select) use pointer events which are not fully supported in JSDom
if (typeof window !== "undefined") {
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.HTMLElement.prototype.hasPointerCapture = () => false;
  window.HTMLElement.prototype.releasePointerCapture = () => {};
}
