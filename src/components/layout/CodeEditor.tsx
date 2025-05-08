import React from "react";

const CodeEditor = () => {
  return (
    <div className="w-full h-full rounded-xl bg-gray-800 relative flex items-center justify-center p-8">
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
            <span>netfluence.js</span>
          </div>
        </div>

        {/* Code editor with simplified content */}
        <div className="code-body relative overflow-hidden min-h-[320px] md:min-h-[320px] min-h-[220px]">
          <div className="absolute inset-0 p-4 bg-gray-900/60">
            <div className="font-mono text-xs sm:text-sm text-left relative">
              <div className="space-y-2">
                <div className="text-gray-400">
                  <span className="text-purple-500">import</span>{" "}
                  <span className="text-cyan-300">'magic'</span>;
                </div>
                <div className="text-gray-400">
                  <span className="text-purple-500">const</span>{" "}
                  <span className="text-white">createWebsite</span> ={" "}
                  <span className="text-purple-300">() =&gt;</span>{" "}
                  <span className="text-white">{"{"}</span>
                </div>
                <div className="pl-4 text-gray-400">
                  <span className="text-purple-500">const</span>{" "}
                  <span className="text-white">yourWebsite</span> ={" "}
                  <span className="text-purple-300">(</span>
                  <span className="text-cyan-300">ideas</span>
                  <span className="text-purple-300">) =&gt;</span>{" "}
                  <span className="text-white">{"{"}</span>
                </div>
                <div className="pl-8 text-gray-400">
                  <span className="text-red-400">features:</span>{" "}
                  <span className="text-white">{"{"}</span>
                </div>
                <div className="pl-12 text-gray-400">
                  <span className="text-red-400">design:</span>{" "}
                  <span className="text-cyan-300">'amazing'</span>,
                </div>
                <div className="pl-12 text-gray-400">
                  <span className="text-red-400">speed:</span>{" "}
                  <span className="text-cyan-300">'fast'</span>
                </div>
                <div className="pl-8 text-gray-400">
                  <span className="text-white">{"}"}</span>,
                </div>
                <div className="pl-8 text-gray-400">
                  <span className="text-purple-500">return</span>{" "}
                  <span className="text-white">netfluence</span>.
                  <span className="text-white">create</span>
                  <span className="text-white">(ideas);</span>
                </div>
                <div className="pl-4 text-gray-400">
                  <span className="text-white">{"}"}</span>;
                </div>
                <div className="text-gray-400">
                  <span className="text-purple-500">return</span>{" "}
                  <span className="text-white">netfluence</span>.
                  <span className="text-white">create</span>
                  <span className="text-white">(yourWebsite);</span>
                </div>
                <div className="text-gray-400">
                  <span className="text-white">{"}"}</span>;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
