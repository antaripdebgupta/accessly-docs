import fs from "node:fs";
import path from "node:path";

function findFiles(dir, fileName, results = []) {
  if (!fs.existsSync(dir)) return results;
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        findFiles(fullPath, fileName, results);
      } else if (entry.name === fileName) {
        results.push(fullPath);
      }
    }
  } catch {
    // Ignore any read permission / dead symlink errors
  }
  return results;
}

const searchDirs = [
  path.resolve("node_modules/@accessly-ui"),
  path.resolve("node_modules/.pnpm"),
];

for (const searchDir of searchDirs) {
  const dirFiles = findFiles(searchDir, "use-direction.js");
  for (const dirFile of dirFiles) {
    let content = fs.readFileSync(dirFile, "utf8");
    if (!content.includes('typeof document !== "undefined"')) {
      content = content.replace(
        `const [dir, setDir] = useState(() => (document.documentElement.dir === "rtl" ? "rtl" : "ltr"));`,
        `const [dir, setDir] = useState(() => (typeof document !== "undefined" && document.documentElement?.dir === "rtl" ? "rtl" : "ltr"));`
      );
      fs.writeFileSync(dirFile, content);
      console.log(`Patched ${dirFile} for SSR support.`);
    }
  }

  const motionFiles = findFiles(searchDir, "use-reduced-motion.js");
  for (const motionFile of motionFiles) {
    let content = fs.readFileSync(motionFile, "utf8");
    if (!content.includes('typeof window !== "undefined"')) {
      content = content.replace(
        `const [reduced, setReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);`,
        `const [reduced, setReduced] = useState(() => (typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false));`
      );
      fs.writeFileSync(motionFile, content);
      console.log(`Patched ${motionFile} for SSR support.`);
    }
  }

  const primitivesIndexFiles = findFiles(searchDir, "index.js").filter((f) =>
    f.endsWith(path.join("primitives", "dist", "index.js"))
  );
  for (const indexFile of primitivesIndexFiles) {
    let content = fs.readFileSync(indexFile, "utf8");
    if (!content.includes("/index.js")) {
      content = content.replace(/from '\.\/([^']+)'/g, "from './$1/index.js'");
      fs.writeFileSync(indexFile, content);
      console.log(`Patched ${indexFile} for ESM resolution.`);
    }
  }
}
