import type { HighlighterCore } from "shiki/core";

let highlighterPromise: Promise<HighlighterCore> | null = null;

/** Module-level cache: avoids re-highlighting the same code+lang on revisits */
const htmlCache = new Map<string, string>();

const LANG_MAP: Record<string, string> = {
  ts: "tsx",
  typescript: "tsx",
  js: "tsx",
  javascript: "tsx",
  jsx: "tsx",
  tsx: "tsx",
  css: "css",
  sh: "bash",
  shell: "bash",
  terminal: "bash",
  zsh: "bash",
  bash: "bash",
  txt: "txt",
  text: "txt",
};

async function getHighlighter(): Promise<HighlighterCore> {
  if (!highlighterPromise) {
    highlighterPromise = (async () => {
      const [
        { createHighlighterCore },
        { createJavaScriptRegexEngine },
        githubLight,
        githubDark,
        tsx,
        css,
        bash,
      ] = await Promise.all([
        import("shiki/core"),
        import("shiki/engine/javascript"),
        import("shiki/themes/github-light.mjs"),
        import("shiki/themes/github-dark.mjs"),
        import("shiki/langs/tsx.mjs"),
        import("shiki/langs/css.mjs"),
        import("shiki/langs/bash.mjs"),
      ]);

      return createHighlighterCore({
        themes: [githubLight.default, githubDark.default],
        langs: [tsx.default, css.default, bash.default],
        engine: createJavaScriptRegexEngine(),
      });
    })();
  }
  return highlighterPromise;
}

export async function highlight(code: string, lang = "tsx"): Promise<string> {
  const normalizedLang = LANG_MAP[lang.toLowerCase()] ?? "txt";
  const cacheKey = `${normalizedLang}:${code}`;
  const cached = htmlCache.get(cacheKey);
  if (cached) return cached;

  const highlighter = await getHighlighter();
  const html = highlighter.codeToHtml(code, {
    lang: normalizedLang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    defaultColor: false,
  });

  // Strip shiki's inline background-color so container's surface color shows
  const result = html.replace(/background-color:\s*[^;"]+;?/gi, "");
  htmlCache.set(cacheKey, result);
  return result;
}
