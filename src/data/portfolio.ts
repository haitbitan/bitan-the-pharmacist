/**
 * Central portfolio data — Bitan Hait's portfolio.
 * 1st Year B.Pharm Student at JIS University, Kolkata.
 * Based on the latest Pharmacy Council of India (PCI) B.Pharm 1st Year Syllabus (Semesters I & II).
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Bitan Hait',
  displayName: 'Bitan Hait',
  firstName: 'BITAN',
  seriesTag: 'THE PHARMACIST',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A HAIT ORIGINAL',
  role: 'B.Pharm 1st Year Student',
  tagline: ['B.Pharm 1st Year', 'JIS University', 'PCI Syllabus'],
  intro:
    'A passionate 1st-year Bachelor of Pharmacy (B.Pharm) student at JIS University, Kolkata, thoroughly studying the PCI curriculum across Human Anatomy & Physiology, Pharmaceutics, Pharmaceutical Analysis, Inorganic Chemistry, and Organic Chemistry.',
  location: 'Kolkata, West Bengal',
  email: 'bitanhait@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/bitan-hait/',
    github: 'https://github.com/bitan-hait',
  },
  resumePdf: '/assets/Sushmita_Dasari_Resume.pdf',
  portrait: {
    src: '/assets/profile.png',
    srcSet: '/assets/profile.png',
    alt: 'Portrait of Bitan Hait',
  },
  interests: ['Pharmaceutical Analysis', 'Dosage Form Design', 'Organic Synthesis', 'Clinical Pharmacy'],
};

export const education = [
  {
    school: 'JIS University',
    place: 'Kolkata',
    degree: 'Bachelor of Pharmacy (B.Pharm) — 1st Year',
    period: '2024 – 2028',
    score: '1st Year (Sem I & II)',
  },
  {
    school: 'Higher Secondary School',
    place: 'West Bengal',
    degree: 'WBCHSE — Science (Physics, Chemistry, Biology)',
    period: '2022 – 2024',
    score: 'Distinction in PCB',
  },
];

export const experience = [
  {
    company: 'Department of Pharmaceutical Sciences, JIS University',
    role: 'Student Laboratory Researcher & Trainee',
    place: 'Kolkata, WB',
    period: '2024 – Present',
    points: [
      'Performing volumetric titrations, acid-base assays, redox titrations, and limit tests for chloride, sulphate, iron, and heavy metals as per Indian Pharmacopoeia (IP).',
      'Formulating classical pharmaceutical dosage forms including syrups, elixirs, suspensions, emulsions, and ointments in the Pharmaceutics laboratory.',
      'Studying microscopic histological tissue structures, blood cell counts (hemocytometer), bleeding/clotting time, and blood pressure monitoring in Human Anatomy & Physiology.',
      'Maintaining Good Laboratory Practice (GLP) protocols, laboratory notebook documentation, and chemical reagent safety compliance.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'pharmaceutics-formulation-lab',
    title: 'Pharmaceutics Dosage Compounding',
    year: '2024–25',
    genre: 'Pharmaceutics I • Liquid & Semi-Solid Dosage Forms',
    logline: 'Laboratory preparation, evaluation, and stability documentation of liquid and semi-solid pharmaceutical preparations.',
    stack: ['Pharmaceutics I (BP103T)', 'Indian Pharmacopoeia (IP)', 'Suspensions & Emulsions', 'Compounding Science'],
    build: [
      'Compounded monophasic and biphasic liquid dosage forms including simple syrups, paediatric elixirs, suspensions with suspending agents, and stable emulsions using the dry gum method.',
      'Evaluated formulation parameters such as sedimentation volume, pH stability, redispersibility, and organoleptic properties following IP monographs.',
      'Conducted pharmaceutical calculations including posology, Young’s/Dilling’s rules, allegation method, and percentage solutions for accurate prescription dispensing.',
    ],
    features: [
      'Monophasic liquid dosage formulations (Syrups, Elixirs)',
      'Biphasic preparations (Emulsions & Suspensions)',
      'Semi-solid compounding (Ointments & Pastes)',
      'Posology & isotonicity buffer calculations',
      'Indian Pharmacopoeia monograph testing',
    ],
    metrics: [
      { value: '15+', label: 'dosage formulations compounded' },
      { value: '100%', label: 'IP compliance rate' },
      { value: '4', label: 'dosage classes mastered' },
      { value: '0.1mg', label: 'analytical balance precision' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'inorganic-analysis-limit-tests',
    title: 'Pharmaceutical Analysis & Limit Tests',
    year: '2024–25',
    genre: 'Inorganic Chemistry & Analysis • Quantitative Assays',
    logline: 'Standardisation, volumetric assay methods, and pharmacopoeial limit testing for trace impurities.',
    stack: ['Pharm Analysis I (BP102T)', 'Inorganic Chemistry (BP104T)', 'Volumetric Titrations', 'Limit Tests'],
    build: [
      'Performed quantitative assay determinations using acid-base titrations, non-aqueous titrations, precipitation titrations (Mohr & Volhard methods), and complexometric titrations.',
      'Executed pharmacopoeial limit tests for heavy metals, iron, arsenic (Gutzeit apparatus), chloride, and sulphate to identify trace chemical impurities.',
      'Prepared and standardised secondary analytical standards including 0.1N NaOH, 0.1N HCl, 0.1N KMnO4, and 0.05M Disodium EDTA with analytical rigor.',
    ],
    features: [
      'Limit tests for Chloride, Sulphate, Iron & Heavy Metals',
      'Arsenic limit test with Gutzeit apparatus',
      'Neutralisation & precipitation volumetric assays',
      'Complexometric & redox standardisations',
      'Primary & secondary standard preparation',
    ],
    metrics: [
      { value: '5', label: 'limit tests standardized' },
      { value: '±0.2%', label: 'titration repeatability' },
      { value: '12', label: 'pharmaceutical assays performed' },
      { value: 'GLP', label: 'laboratory compliance standard' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'human-anatomy-physiology-study',
    title: 'HAP Experimental Study & Histology',
    year: '2024–25',
    genre: 'Human Anatomy & Physiology I & II • Physiological Diagnostics',
    logline: 'Histological microscopic tissue examination and human cardiovascular & haematological physiological assessments.',
    stack: ['HAP I & II (BP101T / BP201T)', 'Haematology Assays', 'Histology Microscopy', 'Cardiovascular Physiology'],
    build: [
      'Conducted haematological experiments: Total RBC and WBC count using Neubauer hemocytometer, haemoglobin estimation via Sahli’s acid hematin method, and blood group typing.',
      'Recorded arterial blood pressure using sphygmomanometer across varying postural conditions and analyzed radial pulse characteristics.',
      'Systematically examined compound microscope histological slides of epithelial, muscular, nervous, connective, cardiac, digestive, and endocrine tissues.',
    ],
    features: [
      'Haemocytometer RBC/WBC enumeration',
      'Sahli’s hemoglobinometry & erythrocyte indices',
      'Bleeding time (Duke’s) & clotting time (Capillary)',
      'Blood pressure & auscultation diagnostics',
      'Histology slides examination across major organ systems',
    ],
    metrics: [
      { value: '25+', label: 'histology specimens analyzed' },
      { value: '4', label: 'vital physiological assays' },
      { value: '100%', label: 'staining & counting accuracy' },
      { value: 'Sem I&II', label: 'curriculum integration' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'jis-bpharm-scholar',
    title: 'B.Pharm 1st Year Scholar',
    org: 'JIS University, Kolkata',
    detail: 'Enrolled in 4-year professional B.Pharm program under PCI syllabus, excelling in theoretical lectures and laboratory practicals.',
    laurel: 'Academic Focus',
  },
  {
    id: 'glp-laboratory-certification',
    title: 'Good Laboratory Practices (GLP)',
    org: 'JIS University Central Labs',
    detail: 'Recognized for meticulous compliance with safety protocols, analytical weighing accuracy, and chemical hygiene in pharmacy labs.',
    laurel: 'Lab Excellence',
  },
  {
    id: 'pharmacopoeial-assay-distinction',
    title: 'Pharmacopoeial Assay Precision',
    org: 'Dept. of Pharmaceutical Chemistry',
    detail: 'Achieved high reproducibility and accuracy in volumetric standardisations and IP limit tests for inorganic impurities.',
    laurel: 'Analytical Rigor',
  },
  {
    id: 'wbchse-science-distinction',
    title: 'WBCHSE Science Distinction',
    org: 'West Bengal Council',
    detail: 'Graduated Higher Secondary with distinction in Physics, Chemistry, and Biology, qualifying directly for B.Pharm admission.',
    laurel: 'Strong Foundation',
  },
  {
    id: 'pci-curriculum-mastery',
    title: 'PCI Core Subject Mastery',
    org: 'Pharmacy Council of India Curriculum',
    detail: 'Built rigorous foundational understanding of HAP, Pharmaceutics, Pharmaceutical Analysis, Inorganic Chemistry, and Organic Chemistry.',
    laurel: 'Core Curriculum',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'JIS University', name: 'B.Pharm 1st Year (In Progress)', link: '#' },
  { issuer: 'Pharmacy Council of India', name: 'PCI Prescribed B.Pharm Curriculum', link: '#' },
  { issuer: 'JIS University Labs', name: 'Good Laboratory Practices (GLP) Training', link: '#' },
  { issuer: 'Dept. of Pharmaceutics', name: 'Dosage Form Compounding & Dispensing', link: '#' },
  { issuer: 'Dept. of Chemistry', name: 'Volumetric Titrimetry & IP Limit Testing', link: '#' },
  { issuer: 'WBCHSE', name: 'Higher Secondary Science (PCB)', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'pci-sem1-subjects',
    title: 'PCI Semester I Subjects',
    subtitle: 'Core theory & laboratory courses',
    skills: [
      { name: 'Human Anatomy & Physiology I (BP101T)', mono: 'HA', note: 'Core' },
      { name: 'Pharmaceutical Analysis I (BP102T)', mono: 'PA', note: 'Core' },
      { name: 'Pharmaceutics I (BP103T)', mono: 'PH', note: 'Core' },
      { name: 'Pharmaceutical Inorganic Chemistry (BP104T)', mono: 'IC', note: 'Core' },
      { name: 'Communication Skills (BP105T)', mono: 'CS' },
      { name: 'Remedial Biology / Mathematics', mono: 'RB' },
    ],
  },
  {
    id: 'pci-sem2-subjects',
    title: 'PCI Semester II Subjects',
    subtitle: 'Advanced 1st year disciplines',
    skills: [
      { name: 'Human Anatomy & Physiology II (BP201T)', mono: 'H2', note: 'Core' },
      { name: 'Pharmaceutical Organic Chemistry I (BP202T)', mono: 'OC', note: 'Core' },
      { name: 'Biochemistry (BP203T)', mono: 'BC', note: 'Core' },
      { name: 'Pathophysiology (BP204T)', mono: 'PP', note: 'Core' },
      { name: 'Computer Applications in Pharmacy (BP205T)', mono: 'CA' },
      { name: 'Environmental Sciences (BP206T)', mono: 'ES' },
    ],
  },
  {
    id: 'lab-skills',
    title: 'Pharmaceutical Laboratory Skills',
    subtitle: 'Hands-on wet lab techniques',
    skills: [
      { name: 'Volumetric Titrations', mono: 'VT' },
      { name: 'Limit Tests (IP)', mono: 'LT' },
      { name: 'Dosage Compounding (Syrup/Emulsion)', mono: 'DC' },
      { name: 'Hemocytometer Cell Counting', mono: 'HC' },
      { name: 'Microscopy & Tissue Histology', mono: 'MH' },
      { name: 'Analytical Balance Calibration', mono: 'AC' },
    ],
  },
  {
    id: 'chemistry-techniques',
    title: 'Chemical & Analytical Methods',
    subtitle: 'Chemistry and assay fundamentals',
    skills: [
      { name: 'Acid-Base & Redox Titrimetry', mono: 'AB' },
      { name: 'Complexometric & Precipitation Assays', mono: 'CP' },
      { name: 'IUPAC & Organic Reaction Mechanisms', mono: 'OR' },
      { name: 'Standard Solution Preparation', mono: 'SS' },
      { name: 'Gutzeit Arsenic Apparatus', mono: 'GA' },
      { name: 'Qualitative Radical Analysis', mono: 'QA' },
    ],
  },
  {
    id: 'academic-tools',
    title: 'Academic & Professional Tools',
    subtitle: 'Documentation and soft skills',
    skills: [
      { name: 'Indian Pharmacopoeia (IP)', mono: 'IP' },
      { name: 'Good Laboratory Practices (GLP)', mono: 'GL' },
      { name: 'Pharmaceutical Calculations', mono: 'PC' },
      { name: 'Lab Notebook Documentation', mono: 'LD' },
      { name: 'Scientific Presentation', mono: 'SP' },
      { name: 'Healthcare Team Collaboration', mono: 'TC' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements.
 */
export const skillEvidence: Record<string, string[]> = {
  'Human Anatomy & Physiology I (BP101T)': ['Semester I Core Subject', 'HAP Experimental Study & Histology'],
  'Pharmaceutical Analysis I (BP102T)': ['Semester I Core Subject', 'Pharmaceutical Analysis & Limit Tests'],
  'Pharmaceutics I (BP103T)': ['Semester I Core Subject', 'Pharmaceutics Dosage Compounding'],
  'Pharmaceutical Inorganic Chemistry (BP104T)': ['Semester I Core Subject', 'Limit Tests for Cl, SO4, Fe & Heavy Metals'],
  'Human Anatomy & Physiology II (BP201T)': ['Semester II Core Subject', 'Cardiovascular & Endocrine Physiology'],
  'Pharmaceutical Organic Chemistry I (BP202T)': ['Semester II Core Subject', 'IUPAC Nomenclature & Reaction Mechanisms'],
  'Biochemistry (BP203T)': ['Semester II Core Subject', 'Biomolecules, Enzymes & Metabolic Pathways'],
  'Pathophysiology (BP204T)': ['Semester II Core Subject', 'Disease mechanisms & Etiology'],
  'Volumetric Titrations': ['Pharmaceutical Analysis & Limit Tests', 'Standardisation of NaOH, HCl & EDTA'],
  'Limit Tests (IP)': ['Pharmaceutical Analysis & Limit Tests', 'Indian Pharmacopoeia compliance'],
  'Dosage Compounding (Syrup/Emulsion)': ['Pharmaceutics Dosage Compounding', 'Syrups, Elixirs, Emulsions & Ointments'],
  'Hemocytometer Cell Counting': ['HAP Experimental Study & Histology', 'Total RBC and WBC Enumeration'],
  'Indian Pharmacopoeia (IP)': ['Pharmaceutics & Analysis Practicals', 'PCI Prescribed Standard'],
  'Good Laboratory Practices (GLP)': ['JIS University Lab Certification', 'Chemical hygiene & safety'],
  'Pharmaceutical Calculations': ['Posology, Dilling’s Rule, Alligation & Dilutions'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Prelude: Science Foundation',
    period: '2022 – 2024',
    synopsis: 'Higher Secondary education at West Bengal — mastering Physics, Chemistry, and Biology to prepare for pharmaceutical sciences.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Science Core',
        description: 'WBCHSE Higher Secondary in Science (PCB) — securing distinction and building deep chemistry and biology fundamentals.',
        tags: ['Physics', 'Chemistry', 'Biology', 'WBCHSE'],
        runtime: '2022 – 2024',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Calling: Pharmacy',
        description: 'Choosing pharmacy as a dedicated career path bridging medical sciences and patient therapeutic well-being.',
        tags: ['Career Choice', 'Healthcare', 'B.Pharm Admission'],
        runtime: 'Mid 2024',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'Semester I: Entering JIS University',
    period: '2024 – 2025',
    synopsis: 'Commencing B.Pharm at JIS University, Kolkata, under the official PCI syllabus — establishing core pharmaceutical laboratory capabilities.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Human Anatomy & Physiology I',
        description: 'Exploring cellular physiology, skeletal, muscular, nervous, and cardiovascular systems with hands-on histology slides and haematology tests.',
        tags: ['BP101T', 'BP107P', 'HAP I', 'Histology', 'Haematology'],
        runtime: 'Semester I',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Pharmaceutical Analysis I',
        description: 'Mastering titrimetric assays, primary/secondary standardisations, acid-base, redox, and precipitation volumetric determinations.',
        tags: ['BP102T', 'BP108P', 'Volumetric Titrations', 'Assays'],
        runtime: 'Semester I',
        palette: ocean,
      },
      {
        code: 'S02 E03',
        title: 'Pharmaceutics I',
        description: 'Learning the historical background of pharmacy, pharmacopoeias (IP/BP/USP), prescription parsing, and compounding liquid dosage forms.',
        tags: ['BP103T', 'BP109P', 'Dosage Forms', 'Compounding', 'IP'],
        runtime: 'Semester I',
        palette: jade,
      },
      {
        code: 'S02 E04',
        title: 'Pharmaceutical Inorganic Chemistry',
        description: 'Conducting pharmacopoeial limit tests for chloride, sulphate, iron, heavy metals, and arsenic, alongside studying gastrointestinal and dental agents.',
        tags: ['BP104T', 'BP110P', 'Limit Tests', 'Inorganic Chemistry'],
        runtime: 'Semester I',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Semester II: Chemistry & Molecular Foundations',
    period: '2025',
    synopsis: 'Advancing into organic reaction mechanisms, biochemical metabolism, pathophysiology of diseases, and advanced physiology.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Human Anatomy & Physiology II',
        description: 'Detailed study of the digestive, respiratory, urinary, and endocrine systems, fluid balance, and homeostatic physiological regulation.',
        tags: ['BP201T', 'BP207P', 'HAP II', 'Endocrine', 'Renal'],
        runtime: 'Semester II',
        palette: violet,
      },
      {
        code: 'S03 E02',
        title: 'Pharmaceutical Organic Chemistry I',
        description: 'IUPAC nomenclature, alkane/alkene/alkyne isomerism, nucleophilic substitutions (SN1/SN2), and carbonyl reaction mechanisms.',
        tags: ['BP202T', 'BP208P', 'Organic Synthesis', 'Reaction Mechanisms'],
        runtime: 'Semester II',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'Biochemistry',
        description: 'Investigating carbohydrates, lipids, amino acids, nucleic acid structures, bioenergetics, and enzyme kinetics relevant to drug action.',
        tags: ['BP203T', 'BP209P', 'Biomolecules', 'Metabolism', 'Enzymology'],
        runtime: 'Semester II',
        palette: jade,
      },
      {
        code: 'S03 E04',
        title: 'Pathophysiology',
        description: 'Understanding cellular adaptation, inflammation, basic principles of wound healing, and etiology of prevalent human disorders.',
        tags: ['BP204T', 'Pathophysiology', 'Disease Mechanisms'],
        runtime: 'Semester II',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'The Academic Horizon: Year 2 & Beyond',
    period: 'Now streaming',
    synopsis: 'Upcoming milestones — Pharmacology, Pharmacognosy, Medicinal Chemistry, Physical Pharmaceutics, and clinical pharmacy training.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Pharmacology & Medicinal Chemistry',
        description: 'Diving deep into mechanism of drug action, receptor interactions, SAR, and clinical pharmacokinetics in higher semesters.',
        tags: ['Pharmacology', 'Medicinal Chemistry', 'Next Arc'],
        runtime: 'Upcoming Year 2',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'Hospital & Industrial Exposure',
        description: 'Participating in industrial pharmaceutical plant visits and hospital pharmacy clinical rotations.',
        tags: ['Industrial Visit', 'Hospital Pharmacy', 'Future Season'],
        runtime: 'In Production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current Degree', title: 'B.Pharm 1st Year', detail: 'JIS University, Kolkata', palette: amber },
  { label: 'Curriculum', title: 'PCI Syllabus', detail: 'Pharmacy Council of India Standard', palette: crimson },
  { label: 'Core Subject', title: 'Pharmaceutics I', detail: 'Liquid & Semi-solid Formulations', palette: ocean },
  { label: 'Analysis', title: 'Limit Tests (IP)', detail: 'Chloride, Sulphate, Iron & Heavy Metals', palette: violet },
  { label: 'Physiology', title: 'HAP I & II', detail: 'Histology & Haematological Assays', palette: jade },
  { label: 'Chemistry', title: 'Inorganic & Organic', detail: 'Volumetric Assays & Reaction Mechanisms', palette: amber },
  { label: 'Lab Standard', title: 'GLP Compliant', detail: 'Safe laboratory practices & precision weighing', palette: crimson },
  { label: 'Biochemistry', title: 'Enzyme & Metabolism', detail: 'Bioenergetics & biomolecule kinetics', palette: ocean },
  { label: 'Academic Standing', title: 'Active Student', detail: 'Batch 2024–2028 at JIS University', palette: jade },
  { label: 'Aspiration', title: 'Clinical & R&D', detail: 'Drug Discovery & Formulation Sciences', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Pharm 1st Year',
    lines: ['JIS University, Kolkata', 'Batch 2024 – 2028 · PCI Syllabus'],
    chips: ['Bachelor of Pharmacy', 'JIS University', '1st Year'],
  },
  {
    kicker: 'Curriculum',
    title: 'PCI Core Subjects',
    lines: [
      'Human Anatomy & Physiology I & II (BP101T/BP201T)',
      'Pharmaceutics I & Pharmaceutical Analysis I (BP103T/BP102T)',
      'Inorganic & Organic Chemistry (BP104T/BP202T)',
    ],
    chips: ['HAP', 'Pharmaceutics', 'Analysis', 'Inorganic Chem', 'Organic Chem', 'Biochemistry'],
  },
  {
    kicker: 'Wet Lab Training',
    title: 'The Laboratory Arc',
    lines: [
      'Volumetric titrations & standardization of secondary standards',
      'IP Limit tests for trace chemical impurities (Cl, SO4, Fe, As, Heavy Metals)',
      'Compounding liquid dosage forms: syrups, elixirs, suspensions & emulsions',
    ],
  },
  {
    kicker: 'Original Projects',
    title: 'Three 1st-Year Studies',
    lines: [
      'Pharmaceutics Dosage Compounding — 15+ IP formulations',
      'Pharmaceutical Analysis & Limit Tests — volumetric assay precision',
      'HAP Experimental Study — histology microscopy & blood assays',
    ],
  },
  {
    kicker: 'Academic Creds',
    title: `${certifications.length} Credentials & Milestones`,
    lines: ['JIS University · Pharmacy Council of India Standards', 'Good Laboratory Practices (GLP) Training · WBCHSE Science'],
  },
  {
    kicker: 'Future Mission',
    title: 'The Pharmacy Road Ahead',
    lines: ['Aiming for excellence in Pharmacology, Clinical Pharmacy, and Pharmaceutical R&D.'],
  },
];

export type ProfileId = 'bitan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'bitan',
    name: 'Bitan',
    blurb: 'The full academic series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Academic / Mentor',
    blurb: 'Academic record, syllabus & lab skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Lab Researcher',
    blurb: 'Practicals, wet lab skills & projects first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Visitor',
    blurb: 'The journey seasons & top highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • JIS University & 1st Year', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'Lab Projects', meta: `${projects.length} Originals • 2024–25`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Highlights', meta: 'Top 10 academic highlights', palette: jade },
  skills: { nav: 'Subjects', card: 'PCI Syllabus', meta: `${skillCategories.length} Subject Categories`, palette: ocean },
  moments: { nav: 'Milestones', card: 'Achievements', meta: `${achievements.length} Milestones • ${certifications.length} Credentials`, palette: crimson },
  story: { nav: 'CV / Resume', card: 'The Full Story', meta: 'Academic CV • View & download', palette: violet },
};
