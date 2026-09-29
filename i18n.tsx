import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'en' | 'de';

const de: Record<string, string> = {
  About: 'Über mich', Thesis: 'Abschlussarbeiten', Projects: 'Projekte', Experience: 'Berufserfahrung', Contact: 'Kontakt',
  'View Projects': 'Projekte ansehen', 'Contact Me': 'Kontakt aufnehmen', 'About Me': 'Über mich',
  'Thesis Work': 'Abschlussarbeiten', 'Featured Projects': 'Ausgewählte Projekte', 'Get In Touch': 'Kontakt aufnehmen',
  'All rights reserved.': 'Alle Rechte vorbehalten.', 'YouTube Portfolio': 'YouTube-Portfolio', 'RoadGauge Project': 'RoadGauge-Projekt',
  'Master Thesis': 'Masterarbeit', 'Bachelor Thesis': 'Bachelorarbeit', 'Institution Logo': 'Logo der Institution',
  'Project visual unavailable': 'Projektbild nicht verfügbar', 'View Details': 'Details ansehen',
  'Project Not Found': 'Projekt nicht gefunden', 'Back to Home': 'Zurück zur Startseite', 'Back to Portfolio': 'Zurück zum Portfolio',
  Overview: 'Überblick', Problem: 'Problemstellung', 'My Role': 'Meine Rolle', 'Key Contributions': 'Wichtigste Beiträge',
  Approach: 'Vorgehensweise', Results: 'Ergebnisse', 'Organization and Period': 'Organisation und Zeitraum',
  Organization: 'Organisation', Period: 'Zeitraum', Technologies: 'Technologien', 'Project Evidence': 'Projektnachweise',
  'View GitHub Repository': 'GitHub-Repository ansehen', 'Watch Project Demo': 'Projektdemo ansehen',
  'Read Technical Report': 'Technischen Bericht lesen', 'View Publication': 'Publikation ansehen',
  'Ask About This Project': 'Frage zu diesem Projekt stellen',
  'Working Screens': 'Anwendungsansichten',
  'Phone Condition Assessment Interface': 'Benutzeroberfläche zur Smartphone-Zustandsbewertung',
  'Working assessment screen combining device dimensions, processed recordings, interactive 3D damage mapping, finding review, scoring and report export.': 'Funktionsfähige Bewertungsansicht mit Gerätemaßen, verarbeiteten Aufnahmen, interaktiver 3D-Schadenskarte, Befundprüfung, Bewertung und Berichtsexport.',
  'Guided Video Capture': 'Geführte Videoaufnahme',
  '3D Damage Inspection': '3D-Schadensprüfung',
  'Condition and Value Report': 'Zustands- und Wertbericht',
  'Upload a phone walkaround video with practical capture guidance before the automated analysis starts.': 'Laden Sie ein Rundumvideo des Smartphones hoch und folgen Sie den Aufnahmehinweisen, bevor die automatische Analyse startet.',
  'Review the reconstructed phone, detected damage locations, severity and model confidence across aligned views.': 'Prüfen Sie das rekonstruierte Smartphone, erkannte Schadensstellen, deren Schweregrad und die Modellkonfidenz in den ausgerichteten Ansichten.',
  'Present the cosmetic grade, estimated resale value, damage map and exportable assessment summary.': 'Zeigt die kosmetische Bewertung, den geschätzten Wiederverkaufswert, die Schadenskarte und eine exportierbare Zusammenfassung.',
  'Afaq\'s AI Assistant': 'Afaqs KI-Assistent', Offline: 'Offline', 'Copy Recruiter Share Link': 'Freigabelink kopieren',
  'Link Copied!': 'Link kopiert!', Reset: 'Zurücksetzen', 'Clear saved API Key': 'Gespeicherten API-Schlüssel löschen',
  'API Key Required': 'API-Schlüssel erforderlich', 'To enable the AI assistant, please enter your Gemini API Key.': 'Bitte geben Sie Ihren Gemini-API-Schlüssel ein, um den KI-Assistenten zu aktivieren.',
  'Paste API Key here...': 'API-Schlüssel hier einfügen…', 'Save & Enable Chat': 'Speichern und Chat aktivieren',
  'Get an API Key': 'API-Schlüssel erhalten', 'Internet connection required for AI': 'Für die KI ist eine Internetverbindung erforderlich',
  'Ask about my research...': 'Fragen Sie nach meiner Forschung…', 'Offline mode': 'Offline-Modus', Send: 'Senden',
};

const LanguageContext = createContext({ language: 'en' as Language, setLanguage: (_: Language) => {}, t: (s: string) => s });

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_language');
    if (saved === 'de' || saved === 'en') return saved;
    return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
  });
  useEffect(() => {
    localStorage.setItem('portfolio_language', language);
    document.documentElement.lang = language;
  }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: (s: string) => language === 'de' ? (de[s] ?? s) : s }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  return <div className="flex items-center rounded-lg border border-white/15 p-1 text-xs font-bold" aria-label="Sprache / Language">
    {(['de', 'en'] as Language[]).map(lang => <button key={lang} onClick={() => setLanguage(lang)} aria-pressed={language === lang}
      className={`px-2 py-1 rounded ${language === lang ? 'bg-neon-green text-black' : 'text-gray-400 hover:text-white'}`}>{lang.toUpperCase()}</button>)}
  </div>;
};
