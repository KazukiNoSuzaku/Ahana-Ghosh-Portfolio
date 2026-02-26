// ─── Portfolio Data ────────────────────────────────────────────────────────────
// All content for Ahana Ghosh's academic portfolio

export const personal = {
  name: "Ahana Ghosh",
  title: "Biomedical Sciences Researcher",
  specialization: "Cancer Immunology",
  tagline:
    "Decoding the language of tumor immunity — from bench to bedside insights.",
  bio: `I am a PhD researcher in Biomedical Sciences with a deep focus on Cancer Immunology and the tumor microenvironment. My work sits at the intersection of basic immunology and translational oncology, where I investigate how tumors evade immune surveillance and how we can engineer more effective immunotherapeutic strategies.

My focus centres on the immunological circuits that govern anti-tumour responses — from the functional exhaustion of cytotoxic T-cells to the suppressive checkpoint networks that shield tumours from immune destruction. Using experimental immunology as my primary lens, I work to uncover how these pathways can be therapeutically reversed, with the goal of translating mechanistic discoveries into more effective and durable cancer immunotherapies.`,
  bioShort:
    "PhD researcher in Biomedical Sciences specializing in Cancer Immunology, tumor microenvironment biology, and translational oncology.",
  institution: "University of Glasgow",
  department: "School of Infection & Immunity",
  email: "ahana.ghosh@glasgow.ac.uk",
  linkedin: "https://linkedin.com/in/ahana-ghosh",
  googleScholar: "https://scholar.google.com/citations?user=placeholder",
  researchGate: "https://researchgate.net/profile/Ahana-Ghosh",
  orcid: "0000-0000-0000-0000",
  interests: [
    "Tumor Microenvironment",
    "T-cell Biology",
    "Treg Biology",
    "Immune Checkpoint Biology",
    "Translational Oncology",
    "Single-cell Genomics",
    "Therapeutic Antibody Design",
  ],
};

export const researchExperiences = [
  {
    id: "r0",
    title: "MRes Research Project",
    lab: "Seth Coffelt Lab",
    institution: "University of Glasgow",
    location: "Glasgow, UK",
    duration: "Jan 2026 – Jul 2026",
    type: "MRes Research",
    description:
      "Investigating the role of intraepithelial lymphocyte (IEL) gamma delta T cells in gut and colon cancer within the Coffelt Lab. Examining how γδ T cells in the intestinal epithelium respond to tumour development and their potential as immunotherapeutic targets in colorectal cancer.",
    achievements: [],
    techniques: [
      "Flow cytometry & FACS",
      "Immunofluorescence",
      "Mouse tumour models",
      "Cell culture",
      "ELISA",
    ],
    tags: ["Cancer Immunology", "γδ T cells", "Colorectal Cancer", "MRes"],
    color: "violet",
  },
  {
    id: "r1",
    title: "Graduate Research Fellow",
    lab: "Tumor Immunology & Checkpoint Biology Lab",
    institution: "University of Glasgow",
    location: "Glasgow, UK",
    duration: "Aug 2021 – Present",
    type: "PhD Research",
    description:
      "Investigating the mechanisms of T-cell exhaustion in the tumor microenvironment using mouse models of melanoma and lung adenocarcinoma. Developed a novel bioinformatics pipeline for single-cell RNA-seq analysis of tumor-infiltrating lymphocytes, identifying a previously undescribed exhaustion-progenitor subset with therapeutic relevance.",
    achievements: [
      "Identified novel TIL subset correlating with anti-PD-1 response",
      "Developed scRNA-seq pipeline processing 50k+ cells",
      "Co-first author on 2 manuscripts under review at Nature Immunology",
    ],
    techniques: [
      "Single-cell RNA sequencing",
      "Flow cytometry & FACS",
      "CRISPR-Cas9 gene editing",
      "Mouse tumor models",
      "Confocal microscopy",
      "ChIP-seq",
    ],
    tags: ["Tumor Immunology", "scRNA-seq", "T-cell Biology", "PhD"],
    color: "violet",
  },
  {
    id: "r2",
    title: "Research Rotation Fellow",
    lab: "Immuno-Oncology Translational Research Unit",
    institution: "National Cancer Institute (NCI/NIH)",
    location: "Bethesda, MD",
    duration: "Jan 2021 – Jun 2021",
    type: "Research Rotation",
    description:
      "Investigated mechanisms of resistance to immune checkpoint blockade in colorectal cancer. Performed multi-color flow cytometric panels to characterize tumor-infiltrating immune populations and employed patient-derived tumor organoids to model therapeutic response ex vivo.",
    achievements: [
      "Established patient-derived organoid culture protocols",
      "Characterized 14-color flow cytometry panels for TIL analysis",
      "Presented findings at NCI retreat",
    ],
    techniques: [
      "Multi-color flow cytometry",
      "Tumor organoid culture",
      "Immunohistochemistry",
      "Western blotting",
      "ELISA",
    ],
    tags: ["Immuno-Oncology", "Checkpoint Resistance", "NIH"],
    color: "sky",
  },
  {
    id: "r3",
    title: "Undergraduate Research Assistant",
    lab: "Cancer Genomics & Epigenomics Lab",
    institution: "University of California, San Diego",
    location: "San Diego, CA",
    duration: "Sep 2018 – May 2020",
    type: "Undergraduate Research",
    description:
      "Studied epigenetic regulation of oncogene expression in triple-negative breast cancer (TNBC). Used ATAC-seq and ChIP-seq to map chromatin accessibility changes in response to BET bromodomain inhibition, contributing to a published study on epigenetic vulnerabilities in TNBC.",
    achievements: [
      "Co-authored publication in Cancer Research journal",
      "Processed and analyzed ATAC-seq and ChIP-seq datasets",
      "Received Dean's Award for Undergraduate Research Excellence",
    ],
    techniques: ["ATAC-seq", "ChIP-seq", "qRT-PCR", "Cell culture", "R/Bioconductor"],
    tags: ["Epigenomics", "Breast Cancer", "Bioinformatics"],
    color: "mint",
  },
];

export const publications = [
  {
    id: "p1",
    title:
      "A progenitor-exhausted T cell subset predicts response to anti-PD-1 therapy in solid tumors",
    authors: "Ghosh A*, Chen L*, Park SJ, Huang X, Bhatt DL, Allison JP, Pardoll DM",
    journal: "Nature Immunology",
    year: 2024,
    volume: "",
    doi: "10.1038/ni.placeholder",
    abstract:
      "We identify a novel TCF7+TIM3- progenitor-exhausted T cell subset in the tumor microenvironment that serves as a predictive biomarker for anti-PD-1 therapeutic response across multiple solid tumor types.",
    tags: ["T-cell Exhaustion", "PD-1", "Biomarker"],
    status: "Under Review",
    featured: true,
  },
  {
    id: "p2",
    title:
      "Single-cell transcriptomic atlas of tumor-infiltrating lymphocytes reveals context-dependent exhaustion programs",
    authors: "Ghosh A, Park SJ, Li M, Huang X, Pardoll DM",
    journal: "Cell Reports",
    year: 2023,
    volume: "42(8):113042",
    doi: "10.1016/j.celrep.2023.placeholder",
    abstract:
      "Comprehensive scRNA-seq profiling of TILs across 12 cancer types reveals cancer-type-specific exhaustion trajectories and shared molecular checkpoints.",
    tags: ["scRNA-seq", "TILs", "Atlas"],
    status: "Published",
    featured: true,
  },
  {
    id: "p3",
    title:
      "BET bromodomain inhibition remodels chromatin accessibility at oncogenic enhancers in triple-negative breast cancer",
    authors: "Wang Y, Ghosh A, Torres J, Bhattacharya R, Bhatt DL",
    journal: "Cancer Research",
    year: 2021,
    volume: "81(15):3891–3905",
    doi: "10.1158/0008-5472.CAN-20-placeholder",
    abstract:
      "BETi treatment induces widespread chromatin remodeling at super-enhancers, suppressing oncogenic transcription programs in TNBC.",
    tags: ["Epigenetics", "TNBC", "BETi"],
    status: "Published",
    featured: false,
  },
  {
    id: "p4",
    title:
      "Resistance mechanisms to immune checkpoint blockade in microsatellite-stable colorectal cancer",
    authors: "Kim H, Ghosh A, Patel R, Zhong X, Bhatt DL",
    journal: "Journal for ImmunoTherapy of Cancer",
    year: 2022,
    volume: "10(4):e004320",
    doi: "10.1136/jitc-2022-placeholder",
    abstract:
      "Systematic characterization of resistance mechanisms to anti-PD-1 in MSS colorectal cancer using patient-derived tumor organoids and multi-omics approaches.",
    tags: ["Checkpoint Resistance", "Colorectal Cancer", "Organoids"],
    status: "Published",
    featured: false,
  },
];

export const skillCategories = [
  {
    id: "wet-lab",
    category: "Wet Lab",
    icon: "🧪",
    color: "violet",
    skills: [
      "Flow Cytometry (14-color panels)",
      "FACS Cell Sorting",
      "CRISPR-Cas9",
      "Tumor Dissociation",
      "Cell Culture",
      "Western Blotting",
      "ELISA",
      "Immunoprecipitation",
      "Retroviral Transduction",
    ],
  },
  {
    id: "bioinformatics",
    category: "Bioinformatics",
    icon: "💻",
    color: "sky",
    skills: [
      "scRNA-seq (Seurat, Scanpy)",
      "Bulk RNA-seq",
      "ATAC-seq / ChIP-seq",
      "TCR/BCR repertoire analysis",
      "Trajectory analysis (Monocle3)",
      "GSEA / Pathway Analysis",
      "Python (pandas, scikit-learn)",
      "R / Bioconductor",
    ],
  },
  {
    id: "microscopy",
    category: "Microscopy",
    icon: "🔬",
    color: "mint",
    skills: [
      "Confocal Microscopy",
      "Multiplex IHC (Vectra)",
      "Live Cell Imaging",
      "Super-resolution (STORM)",
      "Image Analysis (FIJI/ImageJ)",
      "CyCIF Cyclic Immunofluorescence",
    ],
  },
  {
    id: "molecular",
    category: "Molecular Biology",
    icon: "🧬",
    color: "peach",
    skills: [
      "qRT-PCR",
      "Droplet Digital PCR",
      "ChIP-seq",
      "Chromatin Accessibility (ATAC-seq)",
      "Cloning & Plasmid Design",
      "Lentiviral Vector Production",
      "Co-immunoprecipitation",
    ],
  },
  {
    id: "in-vivo",
    category: "In Vivo Models",
    icon: "🐭",
    color: "lavender",
    skills: [
      "Syngeneic Tumor Models",
      "Adoptive T Cell Transfer",
      "Tumor Growth Monitoring",
      "Immune Profiling of TME",
      "Survival Studies",
      "Tumor Volume Measurement",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
