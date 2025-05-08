import React from 'react';

interface CodeEditorProps {
  isMobile: boolean;
  isFileHovered: boolean;
  onFileHover: (hovered: boolean) => void;
  onToggleFileHovered: () => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  isMobile,
  isFileHovered,
  onFileHover,
  onToggleFileHovered
}) => {
  return (
    <div 
      className="w-full h-full rounded-xl bg-gray-800 relative flex items-center justify-center p-8"
      onMouseEnter={() => !isMobile && onFileHover(true)}
      onMouseLeave={() => !isMobile && onFileHover(false)}
      onClick={onToggleFileHovered}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800"></div>
      </div>
      
      {/* Code editor content */}
      <div className="z-10 w-full h-full relative">
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-xs text-white/50">
            {isMobile && (
              <span>
                {isFileHovered ? "your-amazing-website.js" : "netfluence.js"}
                {isMobile && (
                  <span className="ml-2 text-xs text-accent">
                    [tap to {isFileHovered ? "close" : "view"}]
                  </span>
                )}
              </span>
            )}
          </div>
        </div>
        
        {/* Code editor with separate containers for mobile display */}
        <div className="code-body relative overflow-hidden min-h-[320px] md:min-h-[320px] min-h-[220px]">
          {/* Desktop versions */}
          {!isMobile && (
            <>
              <pre className="text-white/80 group-hover:opacity-0 transition-opacity duration-300 absolute inset-0 p-4">
                {'// ... existing desktop code ...'}
              </pre>
              <pre className="text-white/80 group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute inset-0 p-4">
                {'// ... existing desktop hover code ...'}
              </pre>
            </>
          )}
          
          {/* Mobile version */}
          {isMobile && (
            <div className="absolute inset-0 p-4 bg-gray-900/60">
              <div className="font-mono text-xs sm:text-sm text-left relative">
                {/* File name indicator */}
                <div className="absolute -top-2 right-0 text-xs">
                  <button 
                    onClick={() => onToggleFileHovered()}
                    className="px-2 py-1 text-[10px] rounded bg-gray-800 text-gray-400"
                  >
                    {isFileHovered ? "your-amazing-website.js" : "netfluence.js"} 
                    <span className="ml-1 text-accent">[tap to switch]</span>
                  </button>
                </div>
                
                {/* First file content - Hardware accelerated */}
                <div 
                  className={`space-y-2 ${isFileHovered ? 'hidden' : 'block'}`}
                  style={{ transform: 'translateZ(0)' }}
                >
                  <div className="text-gray-400">
                    <span className="text-purple-500">import</span> <span className="text-cyan-300">'magic'</span>;
                  </div>
                  <div className="text-gray-400">
                    <span className="text-purple-500">const</span> <span className="text-white">createWebsite</span> = <span className="text-purple-300">() =></span> <span className="text-white">{`{`}</span>
                  </div>
                  <div className="pl-4 text-gray-400">
                    <span className="text-purple-500">const</span> <span className="text-white">yourWebsite</span> = <span className="text-purple-300">(</span><span className="text-cyan-300">ideas</span><span className="text-purple-300">) =></span> <span className="text-white">{`{`}</span>
                  </div>
                  <div className="pl-8 text-gray-400">
                    <span className="text-red-400">features:</span> <span className="text-white">{`{`}</span>
                  </div>
                  <div className="pl-12 text-gray-400">
                    <span className="text-red-400">design:</span> <span className="text-cyan-300">'amazing'</span>,
                  </div>
                  <div className="pl-12 text-gray-400">
                    <span className="text-red-400">speed:</span> <span className="text-cyan-300">'fast'</span>
                  </div>
                  <div className="pl-8 text-gray-400">
                    <span className="text-white">{`}`}</span>,
                  </div>
                  <div className="pl-8 text-gray-400">
                    <span className="text-purple-500">return</span> <span className="text-white">netfluence</span>.<span className="text-white">create</span><span className="text-white">(ideas);</span>
                  </div>
                  <div className="pl-4 text-gray-400">
                    <span className="text-white">{`}`}</span>;
                  </div>
                  <div className="text-gray-400">
                    <span className="text-purple-500">return</span> <span className="text-white">netfluence</span>.<span className="text-white">create</span><span className="text-white">(yourWebsite);</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-white">{`}`}</span>;
                  </div>
                </div>
                
                {/* Second file content - Hardware accelerated */}
                <div 
                  className={`space-y-2 ${isFileHovered ? 'block' : 'hidden'}`}
                  style={{ transform: 'translateZ(0)' }}
                >
                  <div className="text-gray-400">
                    <span className="text-purple-500">import</span> <span className="text-cyan-300">'magic'</span>;
                  </div>
                  <div className="text-gray-400">
                    <span className="text-purple-500">const</span> <span className="text-white">createWebsite</span> = <span className="text-purple-300">() =></span> <span className="text-white">{`{`}</span>
                  </div>
                  <div className="pl-4 text-gray-400">
                    <span className="text-purple-500">const</span> <span className="text-white">yourWebsite</span> = <span className="text-purple-300">(</span><span className="text-cyan-300">ideas</span><span className="text-purple-300">) =></span> <span className="text-white">{`{`}</span>
                  </div>
                  <div className="pl-8 text-gray-400">
                    <span className="text-red-400">features:</span> <span className="text-white">{`{`}</span>
                  </div>
                  <div className="pl-12 text-gray-400">
                    <span className="text-red-400">design:</span> <span className="text-cyan-300">'amazing'</span>,
                  </div>
                  <div className="pl-12 text-gray-400">
                    <span className="text-red-400">speed:</span> <span className="text-cyan-300">'fast'</span>
                  </div>
                  <div className="pl-8 text-gray-400">
                    <span className="text-white">{`}`}</span>,
                  </div>
                  <div className="pl-8 text-gray-400">
                    <span className="text-purple-500">return</span> <span className="text-white">netfluence</span>.<span className="text-white">create</span><span className="text-white">(ideas);</span>
                  </div>
                  <div className="pl-4 text-gray-400">
                    <span className="text-white">{`}`}</span>;
                  </div>
                  <div className="text-gray-400">
                    <span className="text-purple-500">return</span> <span className="text-white">netfluence</span>.<span className="text-white">create</span><span className="text-white">(yourWebsite);</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-white">{`}`}</span>;
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor; 