import { render, screen } from "@testing-library/react";
import React from "react";
import { Server } from "../../store/types/Server";
import { ServerCard } from "./ServerCard";

describe("ServerCard", () => {
  it("render a default card", () => {
    const mockServer: Server = {
      location: "somewhere",
      memory: "some-memory",
      price: "€234.00",
      server: "HP Apple Dell",
      storage: "some-storage",
    };

    render(<ServerCard server={mockServer} />);

    expect(screen.getByText(/somewhere/)).toBeInTheDocument();
    expect(screen.getByText(/some-memory/)).toBeInTheDocument();
    expect(screen.getByText(/€234.00/)).toBeInTheDocument();
    expect(screen.getByText(/HP Apple Dell/)).toBeInTheDocument();
    expect(screen.getByText(/some-storage/)).toBeInTheDocument();
  });
});
