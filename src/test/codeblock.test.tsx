import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CodeBlock } from "@/components/mdx/CodeBlock";

describe("<CodeBlock />", () => {
  it("renders code content and filename header", () => {
    render(<CodeBlock code="const a = 1;" language="typescript" filename="test.ts" />);

    expect(screen.getByText("test.ts")).toBeInTheDocument();
    expect(screen.getByText("const a = 1;")).toBeInTheDocument();
  });

  it("copies code to clipboard and updates accessible announcement", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText,
      },
    });

    render(<CodeBlock code="npm install @accessly-ui/react" filename="terminal" />);

    const copyBtn = screen.getByRole("button", { name: /copy code to clipboard/i });
    expect(copyBtn).toBeInTheDocument();

    fireEvent.click(copyBtn);

    expect(writeText).toHaveBeenCalledWith("npm install @accessly-ui/react");

    await waitFor(() => {
      expect(screen.getByText("Copied!")).toBeInTheDocument();
      expect(screen.getByText("Code copied to clipboard")).toBeInTheDocument();
    });
  });
});
