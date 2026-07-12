"use client";

import React, { useState } from "react";
import { Highlight } from "prism-react-renderer";

const theme = {
  plain: {
    color: "#d4d4d8",
    fontSize: 14,
    fontFamily: "MonoLisa, Menlo, Monaco, Consolas, monospace",
  },
  styles: [
    { types: ["comment"], style: { color: "#71717a", fontStyle: "italic" } },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: { color: "#c4b5fd" },
    },
    { types: ["punctuation", "operator"], style: { color: "#a1a1aa" } },
    { types: ["string", "char", "attr-value"], style: { color: "#86efac" } },
    { types: ["number", "boolean", "constant"], style: { color: "#f9a8d4" } },
    {
      types: ["class-name", "function", "tag", "key-white"],
      style: { color: "#f4f4f5" },
    },
  ],
};

export const Code = ({
  children,
  className = "",
  language = "html",
  showCopyButton = true,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const code = typeof children === "string" ? children.trim() : "";

  const copyCode = async () => {
    if (!code || !navigator.clipboard) return;

    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 2000);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <Highlight theme={theme} code={code} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <div className={`group relative h-full w-full ${className}`}>
          {showCopyButton && (
            <button
              type="button"
              onClick={copyCode}
              disabled={!code}
              aria-label={isCopied ? "Kod został skopiowany" : "Kopiuj kod"}
              className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-zinc-950/80 px-2 py-1 text-xs font-medium text-zinc-400 opacity-0 transition hover:bg-white/10 hover:text-white focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 disabled:cursor-not-allowed disabled:opacity-40 group-hover:opacity-100"
            >
              {isCopied ? (
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                  <path d="m3 8.5 3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="5.25" y="5.25" width="7.25" height="7.25" rx="1" />
                  <path d="M10.75 5.25v-1A1.25 1.25 0 0 0 9.5 3h-5A1.25 1.25 0 0 0 3.25 4.25v5A1.25 1.25 0 0 0 4.5 10.5h.75" />
                </svg>
              )}
              {isCopied ? "Skopiowano" : "Kopiuj"}
            </button>
          )}

          <pre className="h-full overflow-auto whitespace-pre-wrap break-words rounded-md border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm leading-6 backdrop-blur-md">
            {tokens.map((line, index) => (
              <div
                key={index}
                {...getLineProps({ line, key: index })}
                className={`min-h-6 ${language === "bash" && tokens.length === 1 ? "before:mr-2 before:text-zinc-500 before:content-['$']" : ""}`}
              >
                {line.map((token, key) => {
                  const isException =
                    token.content === "from" && line[key + 1]?.content === ":";
                  const highlightedToken = isException
                    ? { ...token, types: [...token.types, "key-white"] }
                    : token;

                  return <span key={key} {...getTokenProps({ token: highlightedToken, key })} />;
                })}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};
