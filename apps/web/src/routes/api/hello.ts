import { createClient } from "@repo/api/client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/hello")({
  server: {
    handlers: {
      GET: () => {
        const client = createClient("http://localhost:3001"); // TODO: use a env var

        return client.hello.$get();
      },
    },
  },
});
