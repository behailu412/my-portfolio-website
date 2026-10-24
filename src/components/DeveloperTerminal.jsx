import React, { useState, useRef, useEffect } from 'react';
import { FaTerminal, FaTimes, FaMinus, FaExpand, FaPlay } from 'react-icons/fa';
import { personalInfo, contactInfo, skills, projects } from '../data/data';

const DeveloperTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Behailu Yifru Dev Shell [Version 4.0.0]' },
    { type: 'system', text: 'Status: 4th-Year Computer Science Scholar @ Debre Berhan University' },
    { type: 'system', text: "Type 'help' or click any command below to explore." }
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  const executeCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', text: `behailu@portfolio:~$ ${cmdStr}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available commands:
  • about     - Who is Behailu Yifru?
  • skills    - List top languages & frameworks (Next.js, React...)
  • projects  - Overview of featured builds
  • contact   - Email, LinkedIn & social links
  • linkedin  - Open Behailu's updated LinkedIn profile
  • clear     - Clear console screen`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `Behailu Yifru:
• Academic: 4th-Year Computer Science @ Debre Berhan University (Graduating 2027)
• Focus: Full-Stack Web Development (Next.js/React), AI Systems & Python
• Location: Debre Berhan, Ethiopia`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `Tech Stack:
• Languages: ${skills.programmingLanguages.map(s => s.name).join(', ')}
• Frameworks: ${skills.frameworksTools.map(s => s.name).join(', ')}
• Databases: ${skills.databases.map(s => s.name).join(', ')}`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `Featured Projects:
${projects.map((p, i) => `  ${i + 1}. ${p.title} [${p.technologies.slice(0, 3).join(', ')}]`).join('\n')}`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Direct Reach:
• Email: ${contactInfo.email}
• Telegram: ${contactInfo.telegram}
• GitHub: ${contactInfo.github}
• LinkedIn: ${contactInfo.linkedin}`
        });
        break;

      case 'linkedin':
        window.open(contactInfo.linkedin, '_blank');
        newHistory.push({
          type: 'output',
          text: 'Opening LinkedIn profile in a new tab...'
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        if (trimmed === '') break;
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmdStr}". Type 'help' to see valid commands.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  return (
    <>
      {/* Floating launcher trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 flex items-center space-x-2 px-3.5 py-2.5 rounded-2xl bg-slate-900/90 dark:bg-gray-800/90 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 backdrop-blur-md shadow-lg hover:shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all duration-300"
        title="Open interactive terminal"
      >
        <FaTerminal className="text-sm" />
        <span className="text-xs font-semibold tracking-wide text-white">Dev Terminal</span>
      </button>

      {/* Terminal Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-2xl bg-gray-950/95 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden font-mono flex flex-col max-h-[80vh]">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-900/90 border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="text-xs text-gray-400 ml-2 font-sans font-medium flex items-center gap-1.5">
                  <FaTerminal className="text-cyan-400 text-xs" />
                  behailu@portfolio-v4:~$
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close terminal"
              >
                <FaTimes />
              </button>
            </div>

            {/* Terminal Quick Command Chips */}
            <div className="flex flex-wrap items-center gap-2 px-4 py-2 bg-gray-900/50 border-b border-gray-800/80 text-xs">
              <span className="text-gray-400 text-[11px]">Quick Run:</span>
              {['about', 'skills', 'projects', 'contact', 'linkedin', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => executeCommand(cmd)}
                  className="px-2 py-0.5 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 hover:bg-cyan-800/40 hover:border-cyan-400 transition-colors text-[11px]"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Logs */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed max-h-[50vh]">
              {history.map((line, idx) => (
                <div key={idx} className="whitespace-pre-wrap">
                  {line.type === 'user' && (
                    <span className="text-cyan-400 font-semibold">{line.text}</span>
                  )}
                  {line.type === 'system' && (
                    <span className="text-emerald-400">{line.text}</span>
                  )}
                  {line.type === 'output' && (
                    <span className="text-slate-200">{line.text}</span>
                  )}
                  {line.type === 'error' && (
                    <span className="text-rose-400">{line.text}</span>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Input Bar */}
            <div className="flex items-center px-4 py-3 bg-gray-900/80 border-t border-gray-800">
              <span className="text-cyan-400 mr-2 text-sm">❯</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help' or command..."
                className="flex-1 bg-transparent text-gray-100 placeholder-gray-500 text-xs sm:text-sm focus:outline-none"
              />
              <button
                onClick={() => executeCommand(inputVal)}
                className="ml-2 text-cyan-400 hover:text-cyan-300 transition-colors p-1"
                aria-label="Run command"
              >
                <FaPlay className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeveloperTerminal;
