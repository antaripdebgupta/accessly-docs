"use client";

import {
  Carousel,
  CarouselViewport,
  CarouselTrack,
  CarouselSlide,
  CarouselPrevButton,
  CarouselNextButton,
  CarouselDots,
  CarouselPlayPauseButton,
} from "@accessly-ui/react";

const COLORS = [
  "bg-[var(--accent-subtle)]",
  "bg-emerald-500/10 dark:bg-emerald-500/20",
  "bg-amber-500/10 dark:bg-amber-500/20",
  "bg-red-500/10 dark:bg-red-500/20",
  "bg-[var(--surface-raised)]",
];

function DemoSlide({
  i,
  orientation = "horizontal",
}: {
  i: number;
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-xl border border-[var(--border)] text-lg font-medium text-[var(--text)] ${COLORS[i % COLORS.length]}`}
      style={{ height: orientation === "horizontal" ? 240 : undefined }}
    >
      Slide {i + 1}
    </div>
  );
}

export function CarouselDefaultDemo() {
  return (
    <div className="w-full max-w-xl">
      <Carousel aria-label="Featured content" className="mx-auto max-w-xl">
        <CarouselViewport>
          <CarouselTrack>
            {Array.from({ length: 5 }, (_, i) => (
              <CarouselSlide key={i}>
                <DemoSlide i={i} />
              </CarouselSlide>
            ))}
          </CarouselTrack>
        </CarouselViewport>
        <div className="mt-4 flex items-center justify-between">
          <CarouselPrevButton />
          <CarouselDots slideCount={5} />
          <CarouselNextButton />
        </div>
      </Carousel>
    </div>
  );
}

export const carouselDefaultCode = `import {
  Carousel,
  CarouselViewport,
  CarouselTrack,
  CarouselSlide,
  CarouselPrevButton,
  CarouselNextButton,
  CarouselDots,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <Carousel aria-label="Featured content" className="mx-auto max-w-xl">
      <CarouselViewport>
        <CarouselTrack>
          {Array.from({ length: 5 }, (_, i) => (
            <CarouselSlide key={i}>
              <div className="flex h-60 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-lg font-medium">
                Slide {i + 1}
              </div>
            </CarouselSlide>
          ))}
        </CarouselTrack>
      </CarouselViewport>
      <div className="mt-4 flex items-center justify-between">
        <CarouselPrevButton />
        <CarouselDots slideCount={5} />
        <CarouselNextButton />
      </div>
    </Carousel>
  );
}`;

export function CarouselSizesDemo() {
  return (
    <div className="w-full max-w-2xl space-y-8">
      {(["sm", "md", "lg", "full"] as const).map((size) => (
        <div key={size}>
          <p className="mb-2 text-sm font-medium text-[var(--text-muted)]">
            size=&quot;{size}&quot;
          </p>
          <Carousel
            aria-label={`${size} sized carousel`}
            size={size}
            className="max-w-2xl"
          >
            <CarouselViewport>
              <CarouselTrack>
                {Array.from({ length: 5 }, (_, i) => (
                  <CarouselSlide key={i}>
                    <DemoSlide i={i} />
                  </CarouselSlide>
                ))}
              </CarouselTrack>
            </CarouselViewport>
            <div className="mt-4 flex items-center justify-between">
              <CarouselPrevButton />
              <CarouselDots slideCount={5} />
              <CarouselNextButton />
            </div>
          </Carousel>
        </div>
      ))}
    </div>
  );
}

export const carouselSizesCode = `import {
  Carousel,
  CarouselViewport,
  CarouselTrack,
  CarouselSlide,
  CarouselPrevButton,
  CarouselNextButton,
  CarouselDots,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="space-y-8">
      {(["sm", "md", "lg", "full"] as const).map((size) => (
        <div key={size}>
          <p className="mb-2 text-sm font-medium">size="{size}"</p>
          <Carousel aria-label={\`\${size} sized carousel\`} size={size} className="max-w-2xl">
            <CarouselViewport>
              <CarouselTrack>
                {Array.from({ length: 5 }, (_, i) => (
                  <CarouselSlide key={i}>
                    <div className="flex h-60 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-lg font-medium">
                      Slide {i + 1}
                    </div>
                  </CarouselSlide>
                ))}
              </CarouselTrack>
            </CarouselViewport>
            <div className="mt-4 flex items-center justify-between">
              <CarouselPrevButton />
              <CarouselDots slideCount={5} />
              <CarouselNextButton />
            </div>
          </Carousel>
        </div>
      ))}
    </div>
  );
}`;

export function CarouselSpacingDemo() {
  return (
    <div className="w-full max-w-2xl space-y-8">
      {(["none", "sm", "md", "lg"] as const).map((spacing) => (
        <div key={spacing}>
          <p className="mb-2 text-sm font-medium text-[var(--text-muted)]">
            spacing=&quot;{spacing}&quot;
          </p>
          <Carousel
            aria-label={`${spacing} spacing carousel`}
            size="md"
            spacing={spacing}
            slidesPerView={2}
            className="max-w-2xl"
          >
            <CarouselViewport>
              <CarouselTrack>
                {Array.from({ length: 5 }, (_, i) => (
                  <CarouselSlide key={i}>
                    <DemoSlide i={i} />
                  </CarouselSlide>
                ))}
              </CarouselTrack>
            </CarouselViewport>
            <div className="mt-4 flex items-center justify-between">
              <CarouselPrevButton />
              <CarouselDots slideCount={5} />
              <CarouselNextButton />
            </div>
          </Carousel>
        </div>
      ))}
    </div>
  );
}

export const carouselSpacingCode = `import {
  Carousel,
  CarouselViewport,
  CarouselTrack,
  CarouselSlide,
  CarouselPrevButton,
  CarouselNextButton,
  CarouselDots,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="space-y-8">
      {(["none", "sm", "md", "lg"] as const).map((spacing) => (
        <div key={spacing}>
          <p className="mb-2 text-sm font-medium">spacing="{spacing}"</p>
          <Carousel
            aria-label={\`\${spacing} spacing carousel\`}
            size="md"
            spacing={spacing}
            slidesPerView={2}
            className="max-w-2xl"
          >
            <CarouselViewport>
              <CarouselTrack>
                {Array.from({ length: 5 }, (_, i) => (
                  <CarouselSlide key={i}>
                    <div className="flex h-60 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-lg font-medium">
                      Slide {i + 1}
                    </div>
                  </CarouselSlide>
                ))}
              </CarouselTrack>
            </CarouselViewport>
            <div className="mt-4 flex items-center justify-between">
              <CarouselPrevButton />
              <CarouselDots slideCount={5} />
              <CarouselNextButton />
            </div>
          </Carousel>
        </div>
      ))}
    </div>
  );
}`;

export function CarouselMultipleSlidesDemo() {
  return (
    <div className="w-full max-w-3xl">
      <Carousel
        aria-label="Product grid carousel"
        slidesPerView={3}
        spacing="md"
        className="mx-auto max-w-3xl"
      >
        <CarouselViewport>
          <CarouselTrack>
            {Array.from({ length: 9 }, (_, i) => (
              <CarouselSlide key={i}>
                <DemoSlide i={i} />
              </CarouselSlide>
            ))}
          </CarouselTrack>
        </CarouselViewport>
        <div className="mt-4 flex items-center justify-between">
          <CarouselPrevButton />
          <CarouselDots slideCount={9} />
          <CarouselNextButton />
        </div>
      </Carousel>
    </div>
  );
}

export const carouselMultipleSlidesCode = `import {
  Carousel,
  CarouselViewport,
  CarouselTrack,
  CarouselSlide,
  CarouselPrevButton,
  CarouselNextButton,
  CarouselDots,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <Carousel
      aria-label="Product grid carousel"
      slidesPerView={3}
      spacing="md"
      className="mx-auto max-w-3xl"
    >
      <CarouselViewport>
        <CarouselTrack>
          {Array.from({ length: 9 }, (_, i) => (
            <CarouselSlide key={i}>
              <div className="flex h-60 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-lg font-medium">
                Slide {i + 1}
              </div>
            </CarouselSlide>
          ))}
        </CarouselTrack>
      </CarouselViewport>
      <div className="mt-4 flex items-center justify-between">
        <CarouselPrevButton />
        <CarouselDots slideCount={9} />
        <CarouselNextButton />
      </div>
    </Carousel>
  );
}`;

export function CarouselVerticalOrientationDemo() {
  return (
    <div className="flex w-full justify-center">
      <Carousel
        aria-label="Vertical carousel"
        orientation="vertical"
        className="max-w-xs"
      >
        <CarouselViewport className="h-72">
          <CarouselTrack className="h-full">
            {Array.from({ length: 6 }, (_, i) => (
              <CarouselSlide key={i} style={{ height: "288px" }}>
                <DemoSlide i={i} orientation="vertical" />
              </CarouselSlide>
            ))}
          </CarouselTrack>
        </CarouselViewport>
        <div className="mt-3 flex justify-center gap-3">
          <CarouselPrevButton />
          <CarouselNextButton />
        </div>
      </Carousel>
    </div>
  );
}

export const carouselVerticalOrientationCode = `import {
  Carousel,
  CarouselViewport,
  CarouselTrack,
  CarouselSlide,
  CarouselPrevButton,
  CarouselNextButton,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <div className="flex justify-center">
      <Carousel aria-label="Vertical carousel" orientation="vertical" className="max-w-xs">
        <CarouselViewport className="h-72">
          <CarouselTrack className="h-full">
            {Array.from({ length: 6 }, (_, i) => (
              <CarouselSlide key={i} style={{ height: "288px" }}>
                <div className="flex h-full items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-lg font-medium">
                  Slide {i + 1}
                </div>
              </CarouselSlide>
            ))}
          </CarouselTrack>
        </CarouselViewport>
        <div className="mt-3 flex justify-center gap-3">
          <CarouselPrevButton />
          <CarouselNextButton />
        </div>
      </Carousel>
    </div>
  );
}`;

export function CarouselRTLDemo() {
  return (
    <div className="w-full max-w-xl">
      <Carousel aria-label="دائري تجريبي" dir="rtl" className="mx-auto max-w-xl">
        <CarouselViewport>
          <CarouselTrack>
            {Array.from({ length: 5 }, (_, i) => (
              <CarouselSlide key={i}>
                <DemoSlide i={i} />
              </CarouselSlide>
            ))}
          </CarouselTrack>
        </CarouselViewport>
        <div className="mt-4 flex items-center justify-between">
          <CarouselPrevButton />
          <CarouselDots slideCount={5} />
          <CarouselNextButton />
        </div>
      </Carousel>
    </div>
  );
}

export const carouselRTLCode = `import {
  Carousel,
  CarouselViewport,
  CarouselTrack,
  CarouselSlide,
  CarouselPrevButton,
  CarouselNextButton,
  CarouselDots,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <Carousel aria-label="دائري تجريبي" dir="rtl" className="mx-auto max-w-xl">
      <CarouselViewport>
        <CarouselTrack>
          {Array.from({ length: 5 }, (_, i) => (
            <CarouselSlide key={i}>
              <div className="flex h-60 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-lg font-medium">
                Slide {i + 1}
              </div>
            </CarouselSlide>
          ))}
        </CarouselTrack>
      </CarouselViewport>
      <div className="mt-4 flex items-center justify-between">
        <CarouselPrevButton />
        <CarouselDots slideCount={5} />
        <CarouselNextButton />
      </div>
    </Carousel>
  );
}`;

export function CarouselWithAutoplayDemo() {
  return (
    <div className="w-full max-w-xl">
      <Carousel
        aria-label="Autoplaying carousel"
        autoplayInterval={3000}
        className="mx-auto max-w-xl"
      >
        <CarouselViewport>
          <CarouselTrack>
            {Array.from({ length: 5 }, (_, i) => (
              <CarouselSlide key={i}>
                <DemoSlide i={i} />
              </CarouselSlide>
            ))}
          </CarouselTrack>
        </CarouselViewport>
        <div className="mt-4 flex items-center justify-between">
          <CarouselPrevButton />
          <div className="flex items-center gap-3">
            <CarouselPlayPauseButton />
            <CarouselDots slideCount={5} />
          </div>
          <CarouselNextButton />
        </div>
      </Carousel>
    </div>
  );
}

export const carouselWithAutoplayCode = `import {
  Carousel,
  CarouselViewport,
  CarouselTrack,
  CarouselSlide,
  CarouselPrevButton,
  CarouselNextButton,
  CarouselDots,
  CarouselPlayPauseButton,
} from "@accessly-ui/react";

export default function Example() {
  return (
    <Carousel
      aria-label="Autoplaying carousel"
      autoplayInterval={3000}
      className="mx-auto max-w-xl"
    >
      <CarouselViewport>
        <CarouselTrack>
          {Array.from({ length: 5 }, (_, i) => (
            <CarouselSlide key={i}>
              <div className="flex h-60 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-raised)] text-lg font-medium">
                Slide {i + 1}
              </div>
            </CarouselSlide>
          ))}
        </CarouselTrack>
      </CarouselViewport>
      <div className="mt-4 flex items-center justify-between">
        <CarouselPrevButton />
        <div className="flex items-center gap-3">
          <CarouselPlayPauseButton />
          <CarouselDots slideCount={5} />
        </div>
        <CarouselNextButton />
      </div>
    </Carousel>
  );
}`;

export const carouselStories = [
  { title: "Default", Demo: CarouselDefaultDemo, code: carouselDefaultCode },
  { title: "Sizes", Demo: CarouselSizesDemo, code: carouselSizesCode },
  { title: "Spacing", Demo: CarouselSpacingDemo, code: carouselSpacingCode },
  {
    title: "Multiple Slides Per View",
    Demo: CarouselMultipleSlidesDemo,
    code: carouselMultipleSlidesCode,
  },
  {
    title: "Vertical Orientation",
    Demo: CarouselVerticalOrientationDemo,
    code: carouselVerticalOrientationCode,
  },
  { title: "RTL", Demo: CarouselRTLDemo, code: carouselRTLCode },
  {
    title: "With Autoplay",
    Demo: CarouselWithAutoplayDemo,
    code: carouselWithAutoplayCode,
  },
];

export function CarouselDemo() {
  return <CarouselDefaultDemo />;
}

export const carouselDemoCode = carouselDefaultCode;
