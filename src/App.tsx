import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { SubView } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientMarquee } from './components/ClientMarquee';
import { FeaturedHighlights } from './components/FeaturedHighlights';
import { CompanyOverview } from './components/CompanyOverview';
import { Portfolio } from './components/Portfolio';
import { KeyframeFlipbookDemo } from './components/KeyframeFlipbookDemo';
import { TalentRegistration } from './components/TalentRegistration';
import { StudioPartnership } from './components/StudioPartnership';
import { StudioPipeline } from './components/StudioPipeline';
import { ContactInquiry } from './components/ContactInquiry';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<SubView>('home');

  useEffect(() => {
    // 1. Prevent Right Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 2. Prevent Image/Media Dragging
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // 3. Prevent DevTools & Save Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent F12
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+Shift+I / Cmd+Option+I (Inspect)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'C' || e.key === 'c' || e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+U / Cmd+Option+U (View Source)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+S / Cmd+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+P / Cmd+P (Print)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        return false;
      }
    };

    // 4. Prevent Copying code/text except inside inputs
    const handleCopy = (e: ClipboardEvent) => {
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        return; // allow copy in form fields if needed
      }
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopy);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  const handleSelectView = (view: SubView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div 
          className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans bg-dot-pattern selection:bg-blue-600 selection:text-white antialiased select-none transition-colors duration-300"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        >
          <Navbar 
            activeView={currentView}
            onSelectView={handleSelectView}
            onOpenTalentModal={() => handleSelectView('talent')}
          />
          
          <main className="pt-16">
            {currentView === 'home' && (
              <>
                <Hero onSelectView={handleSelectView} />
                <ClientMarquee />
                <FeaturedHighlights onSelectView={handleSelectView} />
              </>
            )}

            {currentView === 'works' && (
              <Portfolio />
            )}

            {currentView === 'company' && (
              <>
                <CompanyOverview />
                <StudioPipeline />
              </>
            )}

            {currentView === 'partners' && (
              <>
                <StudioPartnership />
                <ClientMarquee />
              </>
            )}

            {currentView === 'talent' && (
              <>
                <TalentRegistration />
                <KeyframeFlipbookDemo />
              </>
            )}

            {currentView === 'contact' && (
              <ContactInquiry />
            )}
          </main>

          <Footer onSelectView={handleSelectView} />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}


