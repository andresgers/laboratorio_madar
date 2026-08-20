export const labInfo = {
  name: "Laboratorio MADAR",
  fullName: "Laboratorio de Biología Molecular, Bioinformática y Dinámica Celular",
  acronym: "MADAR",
  institution: "Centro Avanzado de Investigación Científica e Innovación Tecnológica (CAICIT)",
  tagline: "Decodificando los mecanismos moleculares y computacionales de la vida celular.",
  description: "El Laboratorio MADAR es un centro de referencia internacional dedicado a la investigación interdisciplinaria en biología molecular, genómica computacional y biofísica de macromoléculas, combinando experimentación de vanguardia con modelado algorítmico avanzado.",
  foundedYear: 2008,
  director: "Dra. Elena Vance",
  location: "Edificio de Investigación Biomédica, Campus Tecnológico, Piso 3",
  email: "contacto@lab-madar.org",
  phone: "+34 91 456 7890",
  stats: {
    publications: "340+",
    activeProjects: "18",
    researchers: "45",
    collaborations: "25+"
  }
};

export const historyData = {
  origins: "Fundado en 2008 como una iniciativa conjunta entre el Departamento de Bioquímica y el Instituto de Computación Avanzada, el Laboratorio MADAR nació con la convicción de que los grandes misterios de la biología celular moderna sólo pueden resolverse en la intersección entre la experimentación húmeda ('wet lab') y la computación de alto rendimiento.",
  evolution: "Durante su primera década (2008-2018), el laboratorio consolidó su infraestructura en cristalografía de rayos X y secuenciación masiva (NGS), liderando consorcios internacionales para el estudio de interacciones proteína-proteína. A partir de 2019, MADAR expandió sus capacidades hacia la biología de sistemas unicelulares, el aprendizaje automático aplicado al diseño de fármacos y la biofísica de membranas.",
  milestones: [
    {
      year: "2008",
      title: "Fundación institucional",
      description: "Inauguración oficial de las instalaciones con un equipo inicial de 6 investigadores liderados por la Dra. Elena Vance."
    },
    {
      year: "2012",
      title: "Consolidación en Genómica Estructural",
      description: "Adquisición del primer espectrómetro de masas de alta resolución y establecimiento de la plataforma bioinformática interna."
    },
    {
      year: "2015",
      title: "Primer Consorcio Europeo Horizon",
      description: "Liderazgo en el proyecto europeo de dinámicas macromoleculares para el diseño terapéutico avanzado."
    },
    {
      year: "2019",
      title: "Expansión en Inteligencia Artificial Biológica",
      description: "Creación de la unidad de modelado predictivo y redes neuronales para predicción de plegamiento proteico."
    },
    {
      year: "2024",
      title: "Inauguración del Cluster de Cálculo MADAR-HPC",
      description: "Puesta en marcha del superordenador dedicado a simulaciones de dinámica molecular a escala atómica."
    }
  ]
};

export const researchGroups = [
  {
    id: "biopro",
    name: "Grupo de Bioinformática Estructural y Dinámica Molecular",
    shortName: "Bioinformática Estructural",
    code: "BEDM-01",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
    description: "Investigamos los principios físicos y termodinámicos que rigen el plegamiento de proteínas y las interacciones macromoleculares mediante simulaciones de dinámica molecular y algoritmos de deep learning.",
    thematicAreas: ["Dinámica Molecular", "Plegamiento de Proteínas", "Diseño de Fármacos in silico", "Machine Learning Biológico"],
    associatedLines: [
      "Simulaciones all-atom de complejos enzimáticos",
      "Modelado predictivo de estructuras cuaternarias",
      "Optimización de ligandos alostéricos"
    ],
    lead: "Dr. Carlos Mendoza",
    membersCount: 12,
    keyPublications: [
      "Mendoza et al., Nature Computational Science (2023): 'All-atom simulations of conformational ensembles...'",
      "Vance & Mendoza, Cell Reports (2022): 'Alosterismo dinámico en quinasas reguladoras.'"
    ]
  },
  {
    id: "genomica",
    name: "Grupo de Genómica Funcional y Epigenética",
    shortName: "Genómica y Epigenética",
    code: "GGE-02",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    description: "Analizamos la regulación de la expresión génica a nivel de célula única (single-cell RNA-seq) y las modificaciones epigenéticas en respuesta al estrés celular y envejecimiento.",
    thematicAreas: ["Single-Cell Omics", "Epigenómica", "Regulación Transcripcional", "Bioinformática de Alto Rendimiento"],
    associatedLines: [
      "Mapeo de metilación en cromatina compactada",
      "Dinámica de transcripción en células madre",
      "Firmas transcriptómicas en patologías complejas"
    ],
    lead: "Dra. Sofía Rivas",
    membersCount: 15,
    keyPublications: [
      "Rivas et al., Nucleic Acids Research (2023): 'Single-cell mapping of chromatin accessibility...'",
      "Gómez & Rivas, Genome Biology (2021): 'Epigenetic signatures during cellular reprogramming.'"
    ]
  },
  {
    id: "biocel",
    name: "Grupo de Biología Celular y Arquitectura de Membranas",
    shortName: "Biología Celular",
    code: "BAM-03",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    description: "Estudiamos la organización espacial de orgánulos y la dinámica de membranas lipídicas utilizando microscopía de superresolución (STED/STORM) y biofísica celular.",
    thematicAreas: ["Microscopía de Superresolución", "Dinámica de Membranas", "Tráfico Vesicular", "Biofísica Celular"],
    associatedLines: [
      "Nanodominios lipídicos y señalización celular",
      "Mecánica de la fusión vesicular en sinapsis",
      "Organización citoesquelética en tiempo real"
    ],
    lead: "Dr. Alejandro Thorne",
    membersCount: 11,
    keyPublications: [
      "Thorne et al., Science Advances (2024): 'Nanoscale lipid packing controls membrane protein mobility...'",
      "Martínez & Thorne, Journal of Cell Biology (2022): 'Super-resolution imaging of endocytic pits.'"
    ]
  }
];

export const membersData = [
  {
    id: 1,
    name: "Dra. Elena Vance",
    role: "Directora del Laboratorio",
    category: "Dirección",
    group: "Dirección General",
    researchArea: "Biología Estructural y Regulación Enzimática",
    bio: "Doctora en Bioquímica por la Universidad de Cambridge. Postdoctorado en el MIT. Lidera el Laboratorio MADAR desde su fundación en 2008. Autora de más de 90 publicaciones científicas en revistas de alto impacto.",
    email: "elena.vance@lab-madar.org",
    profileUrl: "#"
  },
  {
    id: 2,
    name: "Dr. Carlos Mendoza",
    role: "Investigador Principal",
    category: "Investigadores",
    group: "Bioinformática Estructural",
    researchArea: "Dinámica Molecular y Machine Learning",
    bio: "Especialista en biofísica computacional y simulaciones a escala atómica. Profesor Titular de Biología Computacional.",
    email: "carlos.mendoza@lab-madar.org",
    profileUrl: "#"
  },
  {
    id: 3,
    name: "Dra. Sofía Rivas",
    role: "Investigadora Principal",
    category: "Investigadores",
    group: "Genómica Funcional",
    researchArea: "Single-cell Transcriptomics y Epigenética",
    bio: "Doctora en Genética Molecular por ETH Zurich. Pionera en técnicas de análisis de expresión génica unicelular en el país.",
    email: "sofia.rivas@lab-madar.org",
    profileUrl: "#"
  },
  {
    id: 4,
    name: "Dr. Alejandro Thorne",
    role: "Investigador Principal",
    category: "Investigadores",
    group: "Biología Celular",
    researchArea: "Microscopía de Superresolución y Biofísica",
    bio: "Experto en técnicas ópticas avanzadas y microscopía confocal de alta velocidad.",
    email: "alejandro.thorne@lab-madar.org",
    profileUrl: "#"
  },
  {
    id: 5,
    name: "Lucía Fernández, M.Sc.",
    role: "Becaria Doctoral (CONICET)",
    category: "Becarios",
    group: "Bioinformática Estructural",
    researchArea: "Predicción de estructura de proteínas mediante IA",
    bio: "Licenciada en Biotecnología. Actualmente investiga modelos generativos para diseño de anticuerpos monoclonales.",
    email: "lucia.fernandez@lab-madar.org",
    profileUrl: "#"
  },
  {
    id: 6,
    name: "Mateo Silva",
    role: "Becario Doctoral",
    category: "Becarios",
    group: "Genómica Funcional",
    researchArea: "Epigenómica en modelos celulares",
    bio: "Graduado en Bioinformática. Enfocado en pipelines de análisis de secuenciación masiva (NGS).",
    email: "mateo.silva@lab-madar.org",
    profileUrl: "#"
  },
  {
    id: 7,
    name: "Valeria Gómez",
    role: "Estudiante de Tesina de Grado",
    category: "Estudiantes",
    group: "Biología Celular",
    researchArea: "Análisis de imágenes de microscopía STED",
    bio: "Estudiante avanzada de Biología Molecular.",
    email: "valeria.gomez@lab-madar.org",
    profileUrl: "#"
  },
  {
    id: 8,
    name: "Ing. Roberto Paz",
    role: "Responsable Técnico HPC",
    category: "Personal técnico",
    group: "Infraestructura Tecnológica",
    researchArea: "Administración de Sistemas y Cómputo de Alto Rendimiento",
    bio: "Ingeniero en Sistemas. Administra el cluster MADAR-HPC y los repositorios de datos genómicos.",
    email: "roberto.paz@lab-madar.org",
    profileUrl: "#"
  },
  {
    id: 9,
    name: "Dra. Marina H. Klein",
    role: "Colaboradora Externa",
    category: "Colaboradores",
    group: "Universidad de Heidelberg",
    researchArea: "Cristalografía de Rayos X",
    bio: "Colaboradora internacional en proyectos estructurales conjuntos.",
    email: "m.klein@uni-heidelberg.de",
    profileUrl: "#"
  }
];

export const researchProjects = [
  {
    id: "proj-1",
    title: "Modelado Predictivo de Interacciones Proteína-Ligando mediante Redes de Atención Atómica",
    summary: "Desarrollo de una arquitectura de deep learning basada en grafos moleculares para predecir afinidades de unión en complejos enzimáticos de interés farmacológico.",
    scientificArea: "Bioinformática y IA",
    researchGroup: "Grupo de Bioinformática Estructural y Dinámica Molecular",
    groupId: "biopro",
    participants: ["Dr. Carlos Mendoza", "Lucía Fernández, M.Sc.", "Dra. Elena Vance"],
    status: "En curso",
    year: "2023-2026",
    collaborators: ["Instituto Pasteur", "European Bioinformatics Institute (EBI)"],
    keywords: ["Deep Learning", "Dinámica Molecular", "Diseño de Fármacos", "Grafos"]
  },
  {
    id: "proj-2",
    title: "Atlas Transcriptómico de Célula Única en Respuestas de Estrés Celular Agudo",
    summary: "Mapeo exhaustivo de cambios en la expresión génica a resolución de célula única bajo condiciones de estrés oxidativo y térmico en líneas celulares modelo.",
    scientificArea: "Genómica Funcional",
    researchGroup: "Grupo de Genómica Funcional y Epigenética",
    groupId: "genomica",
    participants: ["Dra. Sofía Rivas", "Mateo Silva", "Dr. Alejandro Thorne"],
    status: "En curso",
    year: "2022-2025",
    collaborators: ["Consorcio Genómico Europeo", "Universidad de Barcelona"],
    keywords: ["Single-Cell RNA-seq", "Epigenética", "Estrés Celular", "Transcriptómica"]
  },
  {
    id: "proj-3",
    title: "Organización Nanoscópica de Lípidos de Membrana analizada por Microscopía STED",
    summary: "Estudio de la formación de balsas lipídicas (lipid rafts) y su modulación sobre la movilidad de receptores de membrana mediante técnicas ópticas de superresolución.",
    scientificArea: "Biofísica Celular",
    researchGroup: "Grupo de Biología Celular y Arquitectura de Membranas",
    groupId: "biocel",
    participants: ["Dr. Alejandro Thorne", "Valeria Gómez"],
    status: "En curso",
    year: "2024-2027",
    collaborators: ["Max Planck Institute for Biophysical Chemistry"],
    keywords: ["Superresolución", "STED", "Membranas Lipídicas", "Receptores"]
  },
  {
    id: "proj-4",
    title: "Simulaciones de Dinámica Molecular a Escala Atómica de Canales Iónicos Sensibles a Voltaje",
    summary: "Investigación de los mecanismos de compuerta (gating) en canales iónicos mediante simulaciones de coarse-graining y all-atom en superordenador.",
    scientificArea: "Biofísica Computacional",
    researchGroup: "Grupo de Bioinformática Estructural y Dinámica Molecular",
    groupId: "biopro",
    participants: ["Dr. Carlos Mendoza", "Dra. Elena Vance"],
    status: "Completado",
    year: "2021-2024",
    collaborators: ["Centro de Supercomputación Nacional"],
    keywords: ["Canales Iónicos", "Dinámica Molecular", "Coarse-Grained", "Biofísica"]
  },
  {
    id: "proj-5",
    title: "Dinámica Epigenética en Modelos de Envejecimiento Celular In Vitro",
    summary: "Seguimiento longitudinal de perfiles de metilación del ADN y accesibilidad de cromatina durante senescencia replicativa en fibroblastos humanos.",
    scientificArea: "Epigenómica",
    researchGroup: "Grupo de Genómica Funcional y Epigenética",
    groupId: "genomica",
    participants: ["Dra. Sofía Rivas", "Mateo Silva"],
    status: "En curso",
    year: "2023-2026",
    collaborators: ["Hospital Universitario Central"],
    keywords: ["Senescencia", "Metilación", "Cromatina", "Envejecimiento"]
  }
];

export const servicesData = {
  services: [
    {
      title: "Secuenciación de Nueva Generación (NGS) y Análisis Bioinformático",
      target: "Investigadores, Institutos y Empresas Biotecnológicas",
      description: "Servicio integral de secuenciación de ARN y ADN (RNA-seq, ChIP-seq, WGS) acompañado de pipelines computacionales avanzados para anotación y análisis diferencial.",
      procedures: ["Control de calidad de librerías", "Secuenciación Illumina HiSeq", "Alineamiento y análisis de expresión diferencial", "Reporte bioinformático detallado"],
      requestInfo: "Enviar solicitud a servicios@lab-madar.org adjuntando especificaciones de la muestra."
    },
    {
      title: "Simulaciones de Dinámica Molecular y Modelado Estructural",
      target: "Industria Farmacéutica e Investigadores Académicos",
      description: "Ejecución de simulaciones atomísticas y cálculos de energía libre (FEP/MM-PBSA) para evaluación de afinidad de unión fármaco-receptor.",
      procedures: ["Homology modeling y AlphaFold customization", "Simulaciones MD de 100ns a 1us", "Cálculos de energía de interacción", "Análisis de trayectorias y clustering"],
      requestInfo: "Consultar disponibilidad de cluster HPC y tiempos de procesamiento en computacional@lab-madar.org."
    },
    {
      title: "Microscopía Confocal y de Superresolución (STED)",
      target: "Grupos de Investigación Biomédica",
      description: "Adquisición de imágenes de alta resolución espacial por debajo del límite de difracción para muestras biológicas marcadas con fluoróforos especializados.",
      procedures: ["Preparación y optimización de muestras", "Imagen confocal 3D y deconvolución", "Superresolución STED en tiempo real", "Análisis cuantitativo de colocalización"],
      requestInfo: "Reservas a través del sistema interno o mediante contacto directo con microscopia@lab-madar.org."
    }
  ],
  equipment: [
    {
      name: "Cluster de Cómputo de Alto Rendimiento MADAR-HPC",
      model: "Dell PowerEdge C6520 / 128 Nodos GPU NVIDIA A100",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      description: "Infraestructura de supercómputo dedicada exclusivamente a simulaciones biomoleculares intensivas, entrenamiento de redes neuronales y procesamiento masivo de datos genómicos.",
      applications: ["Dinámica molecular all-atom", "Inferencia estructural con IA", "Ensamblaje genómico de <i>de novo</i>"],
      specs: ["128 nodos de cálculo", "256 GPUs NVIDIA A100 80GB", "Almacenamiento NVMe distribuido de 2.5 PB", "Red InfiniBand HDR 200Gb/s"]
    },
    {
      name: "Microscopio Confocal de Superresolución STED Leica TCS SP8",
      model: "Leica TCS SP8 3X STED",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      description: "Sistema óptico avanzado que permite romper el límite de difracción de Abbe, alcanzando resoluciones laterales de hasta 30 nanómetros en células vivas.",
      applications: ["Visualización de nanodominios de membrana", "Arquitectura de orgánulos subcelulares", "Tracking de vesículas sinápticas"],
      specs: ["Resolución lateral < 30 nm", "Láserespulsados de alta potencia (pulsed STED 775 nm)", "Detectores HyD ultrasensibles con conteo de fotones", "Incubadora ambiental integrada"]
    },
    {
      name: "Secuenciador Illumina NovaSeq 6000",
      model: "Illumina NovaSeq 6000 System",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
      description: "Plataforma de secuenciación masiva de alto rendimiento capaz de generar terabases de datos genómicos por corrida con máxima precisión.",
      applications: ["WGS (Whole Genome Sequencing)", "RNA-Seq de alto rendimiento", "Metagenómica y epigenómica global"],
      specs: ["Hasta 6 Tb por corrida", "Salida de hasta 20,000 genomas humanos por año", "Tecnología de patrones de flujo (Patterned Flow Cells)"]
    }
  ]
};

export const eventsData = [
  {
    id: "ev-1",
    title: "XI Simposio Internacional de Biología Computacional y Estructural",
    category: "Próximo Evento",
    date: "15 - 17 de Octubre, 2026",
    location: "Auditorio Central CAICIT / Híbrido",
    description: "Reunión anual que convoca a destacados científicos internacionales para debatir sobre los últimos avances en inteligencia artificial aplicada al plegamiento de proteínas y dinámica molecular.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    isHighlighted: true,
    linkText: "Inscripciones abiertas",
    linkUrl: "#"
  },
  {
    id: "ev-2",
    title: "Workshop Intensivo: Análisis de Datos Single-Cell RNA-Seq",
    category: "Próximo Evento",
    date: "10 de Noviembre, 2026",
    location: "Laboratorio de Cómputo MADAR",
    description: "Taller práctico orientado a doctorandos e investigadores sobre pipelines modernos en R y Python para el procesamiento y clustering de datos de célula única.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    isHighlighted: false,
    linkText: "Cupos limitados",
    linkUrl: "#"
  },
  {
    id: "ev-3",
    title: "Seminario Abierto: 'Fuerzas Físicas en la Organización de la Cromatina'",
    category: "Seminario Destacado",
    date: "28 de Agosto, 2026",
    location: "Sala de Conferencias B y Online",
    description: "Conferencia magistral a cargo de la Dra. Elena Vance sobre la biofísica del núcleo celular y la compactación de la cromatina.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    isHighlighted: true,
    linkText: "Ver grabación en diferido",
    linkUrl: "#"
  },
  {
    id: "ev-4",
    title: "Conferencia Anual de Innovación Bioinformática 2025",
    category: "Evento Anterior",
    date: "12 de Noviembre, 2025",
    location: "Madrid, España",
    description: "Encuentro enfocado en la integración de datos multiómicos y modelos de lenguaje biológico.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    isHighlighted: false,
    linkText: "Memoria del evento",
    linkUrl: "#"
  }
];

export const newsData = [
  {
    id: "news-1",
    title: "Investigadores del Laboratorio MADAR descubren nuevo mecanismo alostérico en quinasas reguladoras",
    category: "Investigación",
    date: "18 de Agosto, 2026",
    author: "Dr. Carlos Mendoza",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    excerpt: "Un equipo multidisciplinario combinando simulaciones all-atom y cristalografía ha revelado cómo cambios conformacionales sutiles modulan la actividad quinasa a distancia.",
    content: `
      <p>El estudio, publicado esta semana en la prestigiosa revista <em>Nature Computational Science</em>, detalla el hallazgo de vías de comunicación alostérica en una familia clave de quinasas asociadas a procesos proliferativos.</p>
      <p>Utilizando el cluster de supercómputo MADAR-HPC, los investigadores simularon trayectorias de microsegundos que demostraron la existencia de redes de residuos altamente conservados que actúan como "compuertas mecánicas" moleculares.</p>
      <h3>Implicaciones terapéuticas</h3>
      <p>Este descubrimiento abre la puerta al diseño racional de inhibidores alostéricos altamente específicos, capaces de evitar los conocidos problemas de resistencia asociados a los sitios activos tradicionales.</p>
      <p>El proyecto contó con la colaboración internacional del European Bioinformatics Institute y financiamiento del programa de excelencia científica.</p>
    `
  },
  {
    id: "news-2",
    title: "Publicación Destacada: Mapeo de cromatina en célula única aparece en Nucleic Acids Research",
    category: "Publicaciones",
    date: "02 de Agosto, 2026",
    author: "Dra. Sofía Rivas",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
    excerpt: "El grupo de Genómica Funcional presenta un nuevo pipeline algorítmico para la desconvulción de perfiles de accesibilidad cromatínica en tejidos complejos.",
    content: `
      <p>Nuestra última contribución metodológica en <em>Nucleic Acids Research</em> introduce un enfoque computacional innovador denominado <strong>Chromatin-SCAN</strong>, diseñado para superar el ruido técnico típico de los experimentos de single-cell ATAC-seq.</p>
      <p>El software ya se encuentra disponible de código abierto para toda la comunidad científica global, facilitando el análisis de perfiles regulatorios en la diferenciación celular.</p>
    `
  },
  {
    id: "news-3",
    title: "Adquisición de nueva infraestructura óptica eleva capacidad de microscopía en tiempo real",
    category: "Institucional",
    date: "14 de Julio, 2026",
    author: "Ing. Roberto Paz",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    excerpt: "Con la llegada del nuevo sistema STED de última generación, el laboratorio amplía sus servicios de caracterización nanométrica de membranas.",
    content: `
      <p>Gracias a un fondo especial de equipamiento científico, el Laboratorio MADAR ha incorporado a su plataforma experimental el microscopio Leica TCS SP8 STED.</p>
      <p>Este equipo permitirá a los investigadores observar procesos dinámicos subcelulares con una resolución espacial sin precedentes, fortaleciendo las líneas de biología celular y biofísica.</p>
    `
  },
  {
    id: "news-4",
    title: "Apertura de Convocatoria para Becas Doctorales CONICET - MADAR 2026",
    category: "Formación",
    date: "25 de Junio, 2026",
    author: "Comité Académico MADAR",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    excerpt: "Se encuentran abiertas tres vacantes para doctorados en bioinformática estructural, genómica funcional y dinámica molecular.",
    content: `
      <p>El Laboratorio MADAR invita a graduados en Biología, Biotecnología, Computación, Física o carreras afines a postularse a las becas doctorales cofinanciadas.</p>
      <p>Los candidatos seleccionados se integrarán en proyectos punteros con acceso directo al cluster HPC y tecnología de punta.</p>
      <p>Fecha límite de postulación: 30 de Septiembre de 2026.</p>
    `
  }
];
