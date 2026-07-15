import { EXPERIENCE, PROFILE, PROJECTS, THESES } from './constants';

const projectText: Record<string, [string, string, string, string]> = {
  'vw-generative-video-evaluation': ['Wahrnehmungsorientierte Bewertung generativer Multi-View-Videos', 'Entwicklung eines Bewertungsrahmens für KI-generierte Mehrkamera-Fahrvideos anhand semantischer, zeitlicher und kameraübergreifender Konsistenz.', 'Generative Weltmodelle können große Mengen synthetischer Fahrvideos erzeugen. Visueller Realismus allein belegt jedoch nicht, dass diese Daten für die Wahrnehmung beim autonomen Fahren geeignet sind. In dieser Masterarbeit bei Volkswagen entstand ein wahrnehmungsorientierter Bewertungsrahmen.', 'Generierte Fahrvideos können realistisch wirken und dennoch zeitliches Flimmern, inkonsistente Objekte, fehlerhafte Kamerabeziehungen oder semantische Defekte enthalten.'],
  '7': ['Automatische Referenzmarker-Lokalisierung für Mobile Mapping', 'Entwicklung einer bild- und LiDAR-basierten Marker-Erkennung; validiert mit rund 20 Testkartierungen und einem Lokalisierungsfehler von 2,5 mm.', 'Bei Mobile-Mapping-Verfahren dienen vermessene Referenzmarker zur Ausrichtung der erfassten Daten. Bei NavVis untersuchte und implementierte ich Methoden zur Automatisierung ihrer Erkennung.', 'Die Marker mussten trotz Fischaugenverzerrung, wechselnder Beleuchtung, teilweiser Sichtbarkeit und verrauschter Punktwolken präzise erkannt werden.'],
  '1': ['Videobasierte 3D-Zustandsbewertung von Smartphones', 'Entwicklung einer schlanken Computer-Vision-Pipeline, die ein Smartphone-Video in eine 3D-Zustandsdarstellung, Schadenskarte und Preisabschätzung umwandelt.', 'Dieses persönliche Projekt untersucht, wie sich der physische Zustand eines gebrauchten Smartphones anhand eines kurzen Videos bewerten lässt.', 'Reflexionen, unvollständige Ansichten und uneinheitliche Beschreibungen erschweren Käufern die Beurteilung gebrauchter Geräte.'],
  '3': ['KI-basierte Straßenzustandsprüfung aus monokularem Video', 'Entwicklung eines Systems zur Erkennung von Fahrbahnschäden und 3D-Rekonstruktion aus RGB-Bildern für rund 5.000 km Straßendaten.', 'Bei RoadGauge AI entwickelte ich ein durchgängiges Computer-Vision-System zur Bewertung des Straßenzustands mit normalen Kameradaten.', 'Die Zustandsbewertung sollte ohne teure Spezialhardware und zeitaufwendige manuelle Prüfung skalierbar werden.'],
  '13': ['Audio-visuelle Ereigniserkennung mit Open-Vocabulary Vision', 'Entwicklung einer multimodalen Pipeline, die Audiosignale, offene Objekterkennung, Segmentierung und regelbasiertes Schlussfolgern verbindet.', 'Das System erkennt feingranulare Küchenereignisse, indem es akustische Hinweise mit visuellen Objektbelegen und zeitlichen Regeln kombiniert.', 'Einzelne Modalitäten sind oft mehrdeutig; daher mussten Audio- und Videobelege nachvollziehbar zusammengeführt werden.'],
  '2': ['Multimodale 3D-Raumrekonstruktion aus Bild und Ton', 'Entwicklung einer Pipeline aus NeRF-basierter visueller Geometrie und CRNN-basierter akustischer Inferenz; evaluiert in sieben Innenräumen.', 'Untersucht wurde, wie visuelle und akustische Informationen zur Schätzung der Raumgeometrie kombiniert werden können.', 'Bild und Ton liefern ergänzende räumliche Hinweise, deren Ergebnisse kontrolliert ausgerichtet und bewertet werden müssen.'],
  '12': ['Entfernung dynamischer Objekte bei LiDAR-Kartierung', 'Vergleich von LiDAR-MOS, Removert und DynaSLAM zur Entfernung von Fahrzeugen und anderen dynamischen Objekten.', 'Dynamische Objekte erzeugen Geisterstrukturen und inkonsistente Geometrie in Karten. Das Projekt bewertete verschiedene Verfahren zu ihrer Entfernung.', 'Statische Szenengeometrie muss erhalten bleiben, während bewegte Objekte aus wiederholten Scans gefiltert werden.'],
  '6': ['Millimetergenaue Fahrbahnrekonstruktion mit Stereovision', 'Entwicklung einer PatchMatch-Stereo-Pipeline zur Rekonstruktion und millimetergenauen Messung von Fahrbahnverformungen.', 'Mit dichter Stereozuordnung wurde Fahrbahngeometrie aus Bilddaten rekonstruiert und messbar gemacht.', 'Subtile Verformungen erfordern genaue 3D-Messungen mit praxistauglicher kamerabasierter Sensorik.'],
  '5': ['Bild-zu-LiDAR-Generierung mit Deep Learning', 'Training eines generativen Modells zur Vorhersage von Punktwolken aus monokularen RGB-Bildern.', 'Das Projekt untersuchte die modalitätsübergreifende Erzeugung synthetischer Sensordaten für Simulation und Datenerweiterung.', 'Autonome Fahrdatensätze mit mehreren Sensorarten sind teuer, was Experimente mit kamerabasierten LiDAR-ähnlichen Darstellungen motiviert.'],
  '11': ['Annotations- und Qualitätssicherungssysteme für Computer Vision', 'Entwicklung von Richtlinien und Qualitätsprozessen für zehn Annotierende sowie eigener und SAM-gestützter Werkzeuge.', 'Aufbau und Leitung von Datenannotationsprozessen für produktive Computer-Vision-Systeme.', 'Große Datensätze benötigten konsistente Segmentierungs- und Detektionslabels bei geringerem manuellem Aufwand.'],
  '10': ['GPS-skalierte 3D-Kartierung von Straßenobjekten', 'Entwicklung einer GPS-gestützten Skalierungs- und Geolokalisierungspipeline für SfM-Rekonstruktionen.', 'Eine GPS-basierte Skalenschätzung überführte visuelle SfM-Rekonstruktionen in geografisch positionierte 3D-Karten.', 'Reine SfM-Rekonstruktionen besitzen keinen absoluten Maßstab und benötigen externe Positions- und Skalierungsdaten.'],
  '4': ['Verkehrszeichenerkennung, -segmentierung und -klassifikation', 'Entwicklung von Modellen mit rund 90 % Erkennungsgenauigkeit bei zwölf Kategorien und über 550 ausgewerteten Schildern.', 'Entwicklung von Computer-Vision-Modellen zur Lokalisierung, Segmentierung und Klassifikation von Verkehrszeichen.', 'Zuverlässige Erkennung muss trotz variierender Straßenszenen und Erscheinungsbilder funktionieren.'],
  '9': ['Autonomer Obstpflückroboter', 'Entwurf und Bau eines mobilen Roboters, der Mechanik, eingebettete Steuerung und Computer Vision verbindet.', 'Entwicklung eines vollständigen mobilen Prototyps für autonome Obstpflückaufgaben.', 'Mobilität, Wahrnehmung und Aktorik mussten in einer kompakten Plattform koordiniert werden.'],
};

const roleVerbs: Record<string, string> = {
  Designed: 'Konzipierte', Developed: 'Entwickelte', Implemented: 'Implementierte', Built: 'Erstellte', Evaluated: 'Evaluierte',
  Trained: 'Trainierte', Compared: 'Verglich', Investigated: 'Untersuchte', Integrated: 'Integrierte', Managed: 'Leitete',
  Created: 'Erstellte', Coordinated: 'Koordinierte', Analysed: 'Analysierte', Prepared: 'Bereitete', Produced: 'Erstellte',
  Documented: 'Dokumentierte', Achieved: 'Erreichte', Reached: 'Erreichte', Improved: 'Verbesserte', Reduced: 'Reduzierte',
  Supported: 'Unterstützte', Demonstrated: 'Demonstrierte', Identified: 'Identifizierte', Converted: 'Wandelte', Combined: 'Kombinierte',
};
const translateBullet = (text: string) => {
  const first = text.split(' ')[0];
  return roleVerbs[first] ? `${roleVerbs[first]} ${text.slice(first.length + 1)}` : text;
};

export const DE_PROFILE = {
  ...PROFILE,
  title: 'KI-Ingenieur | Computer Vision | Robotik | 3D-Rekonstruktion',
  about: [
    'Ich bin KI-Ingenieur und Computer-Vision-Forscher mit Schwerpunkt auf Wahrnehmungssystemen und multimodaler Datenfusion. An der FAU Erlangen habe ich einen Master in Künstlicher Intelligenz mit Nebenfach Robotik erworben. Meine Arbeit verbindet visuelle, geometrische und sensorbasierte Darstellungen aus Bildern, LiDAR und Audio.',
    'In meiner Masterarbeit bei der Volkswagen AG untersuchte ich die wahrnehmungsorientierte Bewertung generativer Multi-View-Daten für autonomes Fahren, insbesondere semantische Konsistenz, zeitliche Kohärenz und Zuverlässigkeit nachgelagerter Aufgaben.',
    'Mein Hintergrund umfasst Mechatronik, Wettbewerbsrobotik und angewandte Computer Vision in realen Umgebungen, unter anderem bei Fraunhofer IIS und NavVis.'
  ]
};

export const DE_PROJECTS = PROJECTS.map(project => {
  const text = projectText[project.id];
  return text ? { ...project, title: text[0], shortDescription: text[1], overview: text[2], problem: text[3], myRole: project.myRole?.map(translateBullet), results: project.results?.map(translateBullet) } : project;
});

const experienceText = [
  ['Masterarbeit – Bewertung von Multi-View-Videos', 'Entwicklung von Bewertungsrahmen für KI-generierte Multi-View-Daten, Robustheitsmetriken und die Analyse ihrer Auswirkungen auf Modelle für autonomes Fahren.'],
  ['Werkstudent – Automatisiertes Mobile Mapping', 'Implementierung automatischer Markererkennung in Bildern und Laserscans, Bewertung der 3D-Messgenauigkeit und Dokumentation systemweiter Testszenarien.'],
  ['Wissenschaftliche Hilfskraft KI', 'Forschung zur multimodalen 3D-Raumgeometrie aus Bild- und Audiodaten sowie Training von NeRF- und CRNN-Modellen.'],
  ['Leitender Computer-Vision-Ingenieur', 'Leitung eines sechsköpfigen Teams für visuelle Fahrbahninspektion, 3D-Stereorekonstruktion und GPS-basierte Skalenschätzung sowie eines zehnköpfigen Annotationsteams.'],
  ['Computer-Vision-/ML-Ingenieur', 'Training semantischer Segmentierungsmodelle für Straßeninspektionen sowie Entwicklung von 3D-Stereo-, Tracking- und Zählverfahren.']
];
export const DE_EXPERIENCE = EXPERIENCE.map((item, i) => ({ ...item, role: experienceText[i][0], description: experienceText[i][1] }));

export const DE_THESES = THESES.map((item, i) => i === 0 ? { ...item, title: 'Bewertung der Multi-View-Videoqualität für autonomes Fahren', description: 'Entwicklung eines wahrnehmungsorientierten Bewertungsrahmens für KI-generierte Mehrkamera-Daten.', keyContributions: item.keyContributions?.map(translateBullet) } : { ...item, title: 'Entwurf und Entwicklung eines wurffähigen Carbonfaser-Roboters', description: 'Entwicklung eines Carbonfaser-Roboters, der Stürze aus zehn Metern übersteht, mit Fokus auf Robustheit, Leichtbau und eingebettete Sensorik.', keyContributions: item.keyContributions?.map(translateBullet) });
