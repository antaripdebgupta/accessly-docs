import fs from "node:fs";
import path from "node:path";

const utilsDist = path.resolve("node_modules/@accessly-ui/utils/dist");

if (fs.existsSync(utilsDist)) {
  const dirFile = path.join(utilsDist, "use-direction.js");
  if (fs.existsSync(dirFile)) {
    let content = fs.readFileSync(dirFile, "utf8");
    if (!content.includes('typeof document !== "undefined"')) {
      content = content.replace(
        `const [dir, setDir] = useState(() => (document.documentElement.dir === "rtl" ? "rtl" : "ltr"));`,
        `const [dir, setDir] = useState(() => (typeof document !== "undefined" && document.documentElement?.dir === "rtl" ? "rtl" : "ltr"));`
      );
      fs.writeFileSync(dirFile, content);
      console.log("Patched use-direction.js for SSR support.");
    }
  }

  const motionFile = path.join(utilsDist, "use-reduced-motion.js");
  if (fs.existsSync(motionFile)) {
    let content = fs.readFileSync(motionFile, "utf8");
    if (!content.includes('typeof window !== "undefined"')) {
      content = content.replace(
        `const [reduced, setReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);`,
        `const [reduced, setReduced] = useState(() => (typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false));`
      );
      fs.writeFileSync(motionFile, content);
      console.log("Patched use-reduced-motion.js for SSR support.");
    }
  }
}

const primitivesDist = path.resolve("node_modules/@accessly-ui/primitives/dist");
if (fs.existsSync(primitivesDist)) {
  const indexFile = path.join(primitivesDist, "index.js");
  if (fs.existsSync(indexFile)) {
    let content = fs.readFileSync(indexFile, "utf8");
    if (!content.includes("/index.js")) {
      content = content.replace(/from '\.\/([^']+)'/g, "from './$1/index.js'");
      fs.writeFileSync(indexFile, content);
      console.log("Patched primitives index.js for ESM resolution.");
    }
  }
}

