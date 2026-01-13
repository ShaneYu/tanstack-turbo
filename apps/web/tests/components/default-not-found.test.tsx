import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
  Outlet,
  createMemoryHistory,
  AnyRoute,
} from "@tanstack/react-router";

import { DefaultNotFound } from "~/components/default-not-found";

const renderWithRouter = (routeTree: AnyRoute, initialEntries: string[] = ["/"]) => {
  const history = createMemoryHistory({ initialEntries });
  const router = createRouter({ routeTree, history });

  return render(<RouterProvider router={router} />);
};

const renderAsDefaultRoute = () => {
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  });

  const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <DefaultNotFound />,
  });

  const routeTree = rootRoute.addChildren([homeRoute]);

  return {
    ...renderWithRouter(routeTree),
    routeTree,
  };
};

describe("DefaultNotFound", () => {
  test("should navigate to the previous page when the back button is clicked", async () => {
    const user = userEvent.setup();
    const backSpy = vi.spyOn(window.history, "back").mockImplementation(() => {});

    renderAsDefaultRoute();

    const backButton = await screen.findByRole("button", { name: /go back/i});
    await user.click(backButton);
    expect(backSpy).toHaveBeenCalledTimes(1);
  });

  test("should navigate to the home page when the home button is clicked", async () => {
    const user = userEvent.setup();

    const rootRoute = createRootRoute({
      component: () => <Outlet />,
    });

    const homeRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/",
      component: () => <h1>Home page</h1>,
    });

    const otherRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/other",
      component: () => (
        <>
          <h1>Other page</h1>
          <DefaultNotFound />
        </>
      ),
    });

    const routeTree = rootRoute.addChildren([homeRoute, otherRoute]);
    renderWithRouter(routeTree, ["/other"]);

    expect (await screen.findByRole("heading", { name: /other page/i})).toBeTruthy();

    await user.click(screen.getByRole("button", { name: /home/i}));

    expect(await screen.findByRole("heading", { name: /home page/i})).toBeTruthy();
  });

  test("should have no accessibility violations", async () => {
    const { container } = renderAsDefaultRoute();
    const results = await runner.axe(container);

    expect(results).toHaveNoViolations();
  });
});
