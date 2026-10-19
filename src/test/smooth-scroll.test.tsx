import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import { SmoothScroll } from "@/components/site/SmoothScroll";

// Mock lenis/react
const mockReactLenis = vi.fn(({ children }: { children?: React.ReactNode }) => (
  <div data-testid="lenis-root">{children}</div>
));
vi.mock("lenis/react", () => ({
  ReactLenis: (props: { children?: React.ReactNode }) => mockReactLenis(props),
  useLenis: () => null,
}));

describe("SmoothScroll", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders ReactLenis when reduced motion is not requested", () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { getByTestId, getByText } = render(
      <SmoothScroll>
        <span>Content</span>
      </SmoothScroll>
    );

    expect(getByTestId("lenis-root")).toBeInTheDocument();
    expect(getByText("Content")).toBeInTheDocument();
    expect(mockReactLenis).toHaveBeenCalled();
  });

  it("renders children directly without ReactLenis under prefers-reduced-motion", () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { queryByTestId, getByText } = render(
      <SmoothScroll>
        <span>Content</span>
      </SmoothScroll>
    );

    expect(queryByTestId("lenis-root")).toBeNull();
    expect(getByText("Content")).toBeInTheDocument();
    expect(mockReactLenis).not.toHaveBeenCalled();
  });

  it("removes media query listener on unmount", () => {
    const removeEventListener = vi.fn();
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener,
      dispatchEvent: vi.fn(),
    }));

    const { unmount } = render(
      <SmoothScroll>
        <span>Content</span>
      </SmoothScroll>
    );

    unmount();
    expect(removeEventListener).toHaveBeenCalledWith("change", expect.any(Function));
  });
});
