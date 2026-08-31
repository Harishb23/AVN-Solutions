import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Monitor, Volume2, Cpu, Wrench, Building2, PhoneCall, Sparkles, FolderGit2 } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './CommandPalette.css';

interface CommandItem {
  id: string;
  category: 'Page' | 'Solution' | 'Tool' | 'Action';
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string, sectionId?: string) => void;
  onStartProject: () => void;
  onToggleTheme?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onStartProject,
  onToggleTheme
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      soundFx.playModalOpen();
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          soundFx.playModalOpen();
          // Open triggered by parent if wired
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const allCommands: CommandItem[] = [
    // Pages
    {
      id: 'page-home',
      category: 'Page',
      title: 'Home // Flagship Experience',
      subtitle: 'Main showcase, soundwave visualizer & engineering disciplines',
      icon: <Sparkles size={16} className="text-cyan" />,
      action: () => onNavigate('home')
    },
    {
      id: 'page-solutions',
      category: 'Page',
      title: 'Engineering Disciplines & Solutions',
      subtitle: 'Audio systems, video walls, automation, enterprise collaboration',
      icon: <Cpu size={16} className="text-cyan" />,
      action: () => onNavigate('solutions')
    },
    {
      id: 'page-tools',
      category: 'Tool',
      title: 'Interactive AV Engineering Tools & Calculators',
      subtitle: 'AV Room Configurator, RT60 Acoustic Simulator, MicroLED Calculator, ROI Model',
      icon: <Wrench size={16} className="text-cyan" />,
      action: () => onNavigate('tools')
    },
    {
      id: 'page-industries',
      category: 'Page',
      title: 'Industries & Sectors',
      subtitle: 'Enterprise, higher education, healthcare, hospitality, government',
      icon: <Building2 size={16} className="text-cyan" />,
      action: () => onNavigate('industries')
    },
    {
      id: 'page-projects',
      category: 'Page',
      title: 'Projects & Case Studies Gallery',
      subtitle: 'Chennai boardrooms, auditorium acoustics & Tier-1 installations',
      icon: <FolderGit2 size={16} className="text-cyan" />,
      action: () => onNavigate('projects')
    },

    // Solutions Direct Jump
    {
      id: 'sol-audio',
      category: 'Solution',
      title: 'Commercial Audio & Acoustic Engineering',
      subtitle: 'Beamforming ceiling microphones, Dante DSP networks, RT60 treatment',
      icon: <Volume2 size={16} className="text-cyan" />,
      action: () => onNavigate('solutions', 'audio-engineering')
    },
    {
      id: 'sol-video',
      category: 'Solution',
      title: 'Direct-View MicroLED & 4K Video Walls',
      subtitle: 'Fine pitch 0.9mm LED, bezel-less video walls & SDVoE AV-over-IP',
      icon: <Monitor size={16} className="text-cyan" />,
      action: () => onNavigate('solutions', 'video-display')
    },

    // Interactive Tools Direct
    {
      id: 'tool-configurator',
      category: 'Tool',
      title: 'Room Configurator & BOM Estimator',
      subtitle: 'Specify boardrooms, auditoriums, displays, and generate technical BOM',
      icon: <Wrench size={16} className="text-cyan" />,
      action: () => onNavigate('tools', 'configurator')
    },
    {
      id: 'tool-rt60',
      category: 'Tool',
      title: 'RT60 Acoustic & Speech Intelligibility Simulator',
      subtitle: 'Interactive frequency decay & speech transmission index test',
      icon: <Volume2 size={16} className="text-cyan" />,
      action: () => onNavigate('tools', 'acoustic-sim')
    },
    {
      id: 'tool-pixel-pitch',
      category: 'Tool',
      title: 'MicroLED Pixel Pitch & Viewing Distance Calculator',
      subtitle: 'Calculate optimal distance for 0.9mm, 1.2mm, 1.5mm displays',
      icon: <Monitor size={16} className="text-cyan" />,
      action: () => onNavigate('tools', 'pixel-pitch')
    },

    // Quick Actions
    {
      id: 'act-start-project',
      category: 'Action',
      title: 'Start a Project / Request Technical Proposal',
      subtitle: 'Schedule an on-site Chennai survey or architectural consultation',
      icon: <Sparkles size={16} className="text-cyan" />,
      action: () => onStartProject()
    },
    {
      id: 'act-call',
      category: 'Action',
      title: 'Call Chennai Technical Direct Line: 044 2450 1688',
      subtitle: 'Speak directly with our AV integration engineers in Sholinganallur',
      icon: <PhoneCall size={16} className="text-emerald" />,
      action: () => { window.open('tel:04424501688', '_self'); }
    }
  ];

  if (onToggleTheme) {
    allCommands.push({
      id: 'act-theme',
      category: 'Action',
      title: 'Cycle Theme Mode (Hybrid → Dark → Light)',
      subtitle: 'Switch between Obsidian Dark, Cyan Hybrid, and Executive Light modes',
      icon: <Sparkles size={16} className="text-cyan" />,
      action: () => onToggleTheme()
    });
  }

  const filteredCommands = allCommands.filter(cmd =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (cmd: CommandItem) => {
    soundFx.playClick();
    onClose();
    cmd.action();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredCommands.length));
      soundFx.playClick(600);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
      soundFx.playClick(600);
    } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredCommands[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cmd-palette-backdrop" onClick={onClose}>
      <div className="cmd-palette-modal glass-panel" onClick={e => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="cmd-search-header">
          <Search size={18} className="cmd-search-icon text-cyan" />
          <input
            ref={inputRef}
            type="text"
            className="cmd-search-input"
            placeholder="Search solutions, tools, case studies, or type a command..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
          />
          <button className="cmd-close-btn" onClick={onClose} aria-label="Close command palette">
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div className="cmd-results-list">
          {filteredCommands.length === 0 ? (
            <div className="cmd-no-results">
              <span>No matching commands or solutions found for "{query}"</span>
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => (
              <div
                key={cmd.id}
                className={`cmd-item ${idx === selectedIndex ? 'selected' : ''}`}
                onClick={() => handleSelect(cmd)}
                onMouseEnter={() => setSelectedIndex(idx)}
                data-cursor="explore"
              >
                <div className="cmd-item-icon-box">{cmd.icon}</div>
                <div className="cmd-item-info">
                  <div className="cmd-item-top">
                    <span className="cmd-item-title">{cmd.title}</span>
                    <span className="cmd-item-category">{cmd.category}</span>
                  </div>
                  <span className="cmd-item-subtitle">{cmd.subtitle}</span>
                </div>
                <ArrowRight size={14} className="cmd-item-arrow" />
              </div>
            ))
          )}
        </div>

        {/* Footer Navigation Hints */}
        <div className="cmd-palette-footer">
          <div className="cmd-footer-hints">
            <span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
            <span><kbd>↵</kbd> Select</span>
            <span><kbd>ESC</kbd> Close</span>
          </div>
          <span className="cmd-brand-tag">AVN SOLUTIONS // CHENNAI</span>
        </div>
      </div>
    </div>
  );
};
