"use client";

import React, { useState } from "react";
import { Highlight } from 'prism-react-renderer';




const theme = {
  plain: {
    color: '#EDEDEF',
    fontSize: 13,
    fontFamily: 'MonoLisa, Menlo, monospace',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: '#706F78',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#7E7D86',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#706F78',
      },
    },
    {
      types: ['class-name', 'function', 'tag', 'key-white'],
      style: {
        color: '#EDEDEF',
      },
    },
  ],
};

export const Code = ({
  children,
  className,
  language = 'html',
  showCopyButton = true,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyCode = async () => {
    if (!children || !navigator.clipboard) return;

    await navigator.clipboard.writeText(children);
    setIsCopied(true);
    window.setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <Highlight
      theme={theme}
      code={typeof children === 'string' ? children.trim() : ''}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`relative flex flex-col w-full overflow-y-auto whitespace-pre rounded-md border border-white/10 px-4 py-3 pr-12 text-sm backdrop-blur-md ${className ?? ''}`}
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            overflowWrap: "anywhere",
          }}
        >
     
          <div
            className="absolute right-0 top-0 h-px w-[200px]"
            style={{
              background:
                'linear-gradient(90deg, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0) 0%, rgba(232, 232, 232, 0.2) 33.02%, rgba(143, 143, 143, 0.6719) 64.41%, rgba(236, 72, 153, 0) 98.93%)',
            }}
          />
          {tokens.map((line, i) => {
            return (
              <div
                key={i}
                {...getLineProps({ line, key: i })}
                className={`whitespace-pre${language === 'bash' && tokens.length === 1 ? " before:mr-2 before:content-['$'] before:text-slate-300" : ''}`}
              >
                {line.map((token, key) => {
                  const isException =
                    token.content === 'from' && line[key + 1]?.content === ':';
                  const highlightedToken = isException
                    ? { ...token, types: [...token.types, 'key-white'] }
                    : token;

                  return (
                    <React.Fragment key={key}>
                      <span {...getTokenProps({ token: highlightedToken, key })} />
                    </React.Fragment>
                  );
                })}
              </div>
            );
          })}
          <div
            className="absolute left-0 bottom-0 h-px w-[200px]"
            style={{
              background:
                'linear-gradient(90deg, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0) 0%, rgba(232, 232, 232, 0.2) 33.02%, rgba(143, 143, 143, 0.6719) 64.41%, rgba(236, 72, 153, 0) 98.93%)',
            }}
          />
        </pre>
      )}
    </Highlight>
  );
};
