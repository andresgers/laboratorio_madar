export const labInfo = {
  name: "Laboratorio MADAR",
  fullName: "Laboratorio de Biomedicina BSL 2+ MADAR",
  acronym: "MADAR",
  institution: "Universidad Nacional de Misiones (UNaM)",
  tagline: "Espacio de I+D+i de excelencia para la investigación biomédica, vigilancia epidemiológica y genómica de patógenos.",
  description: "El Laboratorio MADAR de la Universidad Nacional de Misiones es un centro de referencia en bioseguridad BSL 2+ destinado al desarrollo de investigación científica, docencia de grado y posgrado, validación de ensayos diagnósticos y vinculación tecnológica en el marco de la Red de Laboratorios de la UNaM.",
  foundedYear: 2021,
  inaugurationDate: "17 de noviembre de 2021",
  director: "Dra. Elena Vance",
  location: "Campus Universitario, Ruta Nac. Nº 12 Km 7 y 1/2, CP 3300, Posadas, Misiones, Argentina",
  email: "contacto@lab-madar.unam.edu.ar",
  phone: "+54 376 4480200 (Interno 226)",
  stats: {
    publications: "120+",
    activeProjects: "14",
    researchers: "35",
    collaborations: "15+"
  }
};

export const historyData = {
  origins: "Inaugurado oficialmente el 17 de noviembre de 2021 en un acto que contó con la presencia del entonces ministro de Ciencia, Tecnología e Innovación de la Nación, Daniel Filmus, y la rectora de la Universidad Nacional de Misiones (UNaM), Alicia Bohren, el Laboratorio MADAR nació como un espacio de I+D+i de vanguardia diseñado bajo el concepto internacional de 'research facilities'.",
  evolution: "Desde su creación, el laboratorio potencia la investigación científica, la validación de ensayos diagnóstico in-house, la vigilancia epidemiológica y la caracterización genómica de patógenos relacionados con enfermedades infectocontagiosas emergentes, endémicas y pandémicas, integrándose estrechamente a la Red de Laboratorios de la UNaM y brindando servicios de diagnóstico y soporte a la comunidad regional y nacional.",
  milestones: [
    {
      year: "2021",
      title: "Inauguración Oficial del Laboratorio MADAR",
      description: "Puesta en marcha formal del laboratorio de Biomedicina BSL 2+ con la presencia de autoridades nacionales y universitarias, consolidando la infraestructura científica en Misiones."
    },
    {
      year: "2022",
      title: "Integración a la Red de Laboratorios UNaM",
      description: "Establecimiento de protocolos conjuntos para vigilancia epidemiológica y articulación con las Facultades de Exactas, Ingeniería y Ciencias Forestales."
    },
    {
      year: "2023",
      title: "Consolidación de la Plataforma Genómica",
      description: "Incorporación de secuenciadores y equipamiento de alta complejidad para caracterización de patógenos regionales."
    },
    {
      year: "2025",
      title: "Expansión de Proyectos de Vinculación Tecnológica",
      description: "Ampliación de servicios de diagnóstico a demanda y alianzas con centros de salud provinciales e institutos de investigación internacional."
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
    description: "Investigamos los principios físicos y termodinámicos que rigen el plegamiento de proteínas y las interacciones macromoleculares mediante simulaciones de dinámica molecular y algoritmos avanzados.",
    thematicAreas: ["Dinámica Molecular", "Plegamiento de Proteínas", "Diseño de Fármacos in silico", "Machine Learning Biológico"],
    associatedLines: [
      "Simulaciones all-atom de complejos enzimáticos",
      "Modelado predictivo de estructuras proteicas",
      "Optimización de ligandos alostéricos"
    ],
    lead: "Dr. Carlos Mendoza",
    membersCount: 12,
    keyPublications: [
      "Mendoza et al., Nature Computational Science (2023): 'All-atom simulations...'",
      "Vance & Mendoza, Cell Reports (2022): 'Alosterismo dinámico en quinasas reguladoras.'"
    ]
  },
  {
    id: "genomica",
    name: "Grupo de Genómica de Patógenos y Vigilancia Epidemiológica",
    shortName: "Genómica de Patógenos",
    code: "GGP-02",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    description: "Especializados en la caracterización genómica de patógenos asociados a enfermedades infectocontagiosas emergentes y endémicas de la región NEA y el país.",
    thematicAreas: ["Genómica Viral y Bacteriana", "Vigilancia Epidemiológica", "Bioinformática de NGS", "Bioseguridad BSL 2+"],
    associatedLines: [
      "Secuenciación y linajes de patógenos emergentes",
      "Monitoreo genómico en tiempo real",
      "Validación de ensayos diagnósticos moleculares"
    ],
    lead: "Dra. Sofía Rivas",
    membersCount: 15,
    keyPublications: [
      "Rivas et al., Nucleic Acids Research (2023): 'Genomic surveillance pipelines...'",
      "Gómez & Rivas, Genome Biology (2021): 'Pathogen evolution in subtropical ecosystems.'"
    ]
  },
  {
    id: "biocel",
    name: "Grupo de Biomedicina y Arquitectura Celular",
    shortName: "Biomedicina Celular",
    code: "BAC-03",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    description: "Estudiamos la interacción célula-patógeno y la arquitectura subcelular en condiciones de estrés infeccioso utilizando microscopía avanzada y biofísica celular.",
    thematicAreas: ["Biomedicina BSL 2+", "Interacción Host-Pathogen", "Microscopía Avanzada", "Citopatología"],
    associatedLines: [
      "Mecanismos de invasión celular por agentes endémicos",
      "Respuesta inflamatoria y citoesquelética",
      "Ensayos in-house de diagnóstico citológico"
    ],
    lead: "Dr. Alejandro Thorne",
    membersCount: 11,
    keyPublications: [
      "Thorne et al., Science Advances (2024): 'Cellular remodeling during infection...'",
      "Martínez & Thorne, Journal of Cell Biology (2022): 'Membrane dynamics in pathogen entry.'"
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
    researchArea: "Biología Estructural y Biomedicina",
    bio: "Doctora en Bioquímica. Lidera el Laboratorio MADAR de la Universidad Nacional de Misiones desde su inauguración.",
    email: "elena.vance@lab-madar.unam.edu.ar",
    profileUrl: "#"
  },
  {
    id: 2,
    name: "Dr. Carlos Mendoza",
    role: "Investigador Principal",
    category: "Investigadores",
    group: "Bioinformática Estructural",
    researchArea: "Dinámica Molecular y Computación Científica",
    bio: "Especialista en biofísica computacional y simulaciones atómicas.",
    email: "carlos.mendoza@lab-madar.unam.edu.ar",
    profileUrl: "#"
  },
  {
    id: 3,
    name: "Dra. Sofía Rivas",
    role: "Investigadora Principal",
    category: "Investigadores",
    group: "Genómica de Patógenos",
    researchArea: "Genómica y Vigilancia Epidemiológica",
    bio: "Doctora en Genética Molecular. Coordinadora de la plataforma de secuenciación NGS.",
    email: "sofia.rivas@lab-madar.unam.edu.ar",
    profileUrl: "#"
  },
  {
    id: 4,
    name: "Dr. Alejandro Thorne",
    role: "Investigador Principal",
    category: "Investigadores",
    group: "Biomedicina Celular",
    researchArea: "Microscopía y Bioseguridad BSL 2+",
    bio: "Experto en patología celular y técnicas de contención biológica.",
    email: "alejandro.thorne@lab-madar.unam.edu.ar",
    profileUrl: "#"
  },
  {
    id: 5,
    name: "Lucía Fernández, M.Sc.",
    role: "Becaria Doctoral",
    category: "Becarios",
    group: "Bioinformática Estructural",
    researchArea: "Modelado de proteínas y fármacos",
    bio: "Licenciada en Biotecnología (UNaM).",
    email: "lucia.fernandez@lab-madar.unam.edu.ar",
    profileUrl: "#"
  },
  {
    id: 6,
    name: "Mateo Silva",
    role: "Becario Doctoral",
    category: "Becarios",
    group: "Genómica de Patógenos",
    researchArea: "Bioinformática de patógenos",
    bio: "Graduado en Genética.",
    email: "mateo.silva@lab-madar.unam.edu.ar",
    profileUrl: "#"
  },
  {
    id: 7,
    name: "Valeria Gómez",
    role: "Estudiante Tesinista",
    category: "Estudiantes",
    group: "Biomedicina Celular",
    researchArea: "Citología e imagen celular",
    bio: "Estudiante avanzada de Genética (FCEQyN - UNaM).",
    email: "valeria.gomez@lab-madar.unam.edu.ar",
    profileUrl: "#"
  },
  {
    id: 8,
    name: "Ing. Roberto Paz",
    role: "Responsable Técnico HPC y Bioseguridad",
    category: "Personal técnico",
    group: "Infraestructura Tecnológica",
    researchArea: "Sistemas y Mantenimiento BSL 2+",
    bio: "Ingeniero en Sistemas. Encargado de la infraestructura de supercómputo y bioseguridad.",
    email: "roberto.paz@lab-madar.unam.edu.ar",
    profileUrl: "#"
  },
  {
    id: 9,
    name: "Dra. Marina H. Klein",
    role: "Colaboradora Externa",
    category: "Colaboradores",
    group: "Red de Laboratorios UNaM",
    researchArea: "Enfermedades Endémicas",
    bio: "Colaboradora en proyectos de salud regional y epidemiología.",
    email: "m.klein@unam.edu.ar",
    profileUrl: "#"
  }
];

export const researchProjects = [
  {
    id: "proj-1",
    title: "Caracterización Genómica y Vigilancia de Patógenos Emergentes en el NEA",
    summary: "Monitoreo genómico continuo de patógenos asociados a enfermedades endémicas y emergentes en la región subtropical argentina mediante NGS.",
    scientificArea: "Genómica y Epidemiología",
    researchGroup: "Grupo de Genómica de Patógenos y Vigilancia Epidemiológica",
    groupId: "genomica",
    participants: ["Dra. Sofía Rivas", "Mateo Silva", "Dr. Alejandro Thorne"],
    status: "En curso",
    year: "2024-2027",
    collaborators: ["Ministerio de Salud de Misiones", "Red de Laboratorios UNaM"],
    keywords: ["NGS", "Vigilancia Epidemiológica", "Patógenos", "NEA"]
  },
  {
    id: "proj-2",
    title: "Validación de Ensayos Diagnósticos In-House para Infecciones Endémicas",
    summary: "Desarrollo y validación clínica de metodologías de diagnóstico molecular de alta sensibilidad adaptadas para laboratorios BSL 2+.",
    scientificArea: "Biomedicina y Diagnóstico",
    researchGroup: "Grupo de Biomedicina y Arquitectura Celular",
    groupId: "biocel",
    participants: ["Dr. Alejandro Thorne", "Valeria Gómez", "Dra. Elena Vance"],
    status: "En curso",
    year: "2023-2026",
    collaborators: ["Hospital Escuela de Agudos Dr. Ramón Madariaga"],
    keywords: ["Diagnóstico", "BSL 2+", "Validación Clinica", "Ensayos In-House"]
  },
  {
    id: "proj-3",
    title: "Modelado Computacional de Inhibidores contra Enzimas de Patógenos Regionales",
    summary: "Simulaciones de dinámica molecular y cribado virtual de compuestos bioactivos contra blancos moleculares específicos de patógenos.",
    scientificArea: "Bioinformática Estructural",
    researchGroup: "Grupo de Bioinformática Estructural y Dinámica Molecular",
    groupId: "biopro",
    participants: ["Dr. Carlos Mendoza", "Lucía Fernández, M.Sc."],
    status: "En curso",
    year: "2024-2026",
    collaborators: ["CONICET", "UNaM"],
    keywords: ["Cribado Virtual", "Dinámica Molecular", "Fármacos", "Enzimas"]
  }
];

export const servicesData = {
  services: [
    {
      title: "Vigilancia Epidemiológica y Secuenciación Genómica (NGS)",
      target: "Ministerios de Salud, Hospitales e Instituciones Científicas",
      description: "Servicio de secuenciación masiva y análisis bioinformático para la caracterización de cepas y monitoreo de patógenos en la región.",
      procedures: ["Extracción y control de calidad de ácidos nucleicos", "Librerías NGS Illumina", "Alineamiento y filogenia viral/bacteriana", "Informe epidemiológico certificado"],
      requestInfo: "Solicitudes a genomica@lab-madar.unam.edu.ar o mediante la Red de Laboratorios UNaM."
    },
    {
      title: "Validación de Ensayos Diagnósticos In-House",
      target: "Centros de Salud y Laboratorios de Diagnóstico",
      description: "Soporte técnico y científico para la validación analítica y clínica de nuevos métodos diagnósticos moleculares y serológicos.",
      procedures: ["Diseño de protocolos de validación", "Pruebas de sensibilidad y especificidad", "Control de calidad BSL 2+", "Asesoramiento normativo"],
      requestInfo: "Consultas en diagnostico@lab-madar.unam.edu.ar."
    },
    {
      title: "Simulaciones y Modelado Biomolecular en Cluster HPC",
      target: "Investigadores y Sector Biotecnológico",
      description: "Acceso a capacidad de supercómputo para simulaciones de dinámica molecular, cribado virtual y análisis de estructuras proteicas.",
      procedures: ["Dinámica molecular all-atom", "Docking molecular de alta precisión", "Análisis conformacional", "Soporte computacional especializado"],
      requestInfo: "Solicitar turnos de cálculo en hpc@lab-madar.unam.edu.ar."
    }
  ],
  equipment: [
    {
      name: "Infraestructura de Bioseguridad BSL 2+",
      model: "Laboratorio de Contención Certificado UNaM",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      description: "Área de I+D+i aislada con presión negativa, esclusas de aire y gabinetes de bioseguridad clase II tipo A2, diseñada para la manipulación segura de agentes infecciosos.",
      applications: ["Cultivo celular y viral", "Manipulación segura de patógenos BSL 2", "Validación de ensayos diagnósticos"],
      specs: ["Presión negativa controlada", "Filtros HEPA de suministro y salida", "Autoclave de esterilización integrada", "Sistemas de monitoreo continuo de flujo"]
    },
    {
      name: "Secuenciador Illumina MiSeq / NextSeq",
      model: "Plataforma NGS UNaM-MADAR",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
      description: "Equipamiento de secuenciación de alto rendimiento para proyectos de metagenómica, transcriptómica y genómica de patógenos.",
      applications: ["Secuenciación de genomas completos", "Metagenómica ambiental y clínica", "Transcriptómica de célula única y bulk"],
      specs: ["Salida de hasta 120 Gb por corrida", "Lecturas paired-end de alta fidelidad", "Automatización de preparación de librerías"]
    },
    {
      name: "Cluster de Supercómputo MADAR-HPC",
      model: "Nodos de Cálculo con Aceleración GPU",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      description: "Infraestructura computacional dedicada a la modelización molecular y procesamiento masivo de datos genómicos en la UNaM.",
      applications: ["Simulaciones atomísticas de proteínas", "Machine learning para genómica", "Análisis de variantes genéticas"],
      specs: ["Nodos multi-core de alta velocidad", "Aceleradoras GPU NVIDIA", "Almacenamiento seguro de alta velocidad"]
    }
  ]
};

export const eventsData = [
  {
    id: "ev-1",
    title: "IV Jornadas de Bioseguridad y Genómica de Patógenos Regionales",
    category: "Próximo Evento",
    date: "17 - 18 de Noviembre, 2026",
    location: "Campus Universitario UNaM / Posadas",
    description: "Encuentro conmemorativo por el 5to aniversario de la inauguración del Laboratorio MADAR, reuniendo a referentes nacionales en epidemiología y bioseguridad.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    isHighlighted: true,
    linkText: "Inscripción libre y gratuita",
    linkUrl: "#"
  },
  {
    id: "ev-2",
    title: "Seminario: 'Vigilancia Genómica en Zonas Subtropicales'",
    category: "Seminario Destacado",
    date: "14 de Septiembre, 2026",
    location: "Auditorio FCEQyN - UNaM",
    description: "Conferencia magistral sobre el rol de la Red de Laboratorios UNaM en el monitoreo de patógenos emergentes.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    isHighlighted: true,
    linkText: "Ver transmisión",
    linkUrl: "#"
  }
];

export const newsData = [
  {
    id: "news-1",
    title: "A 5 años de su inauguración: El Laboratorio MADAR consolida su rol estratégico en la Red de Laboratorios de la UNaM",
    category: "Institucional",
    date: "17 de Noviembre, 2025",
    author: "Dra. Elena Vance",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    excerpt: "Desde su puesta en marcha en 2021 junto al Ministerio de Ciencia y Tecnología y el Rectorado de la UNaM, el laboratorio es bastión en investigación biomédica y vigilancia genómica en el NEA.",
    content: `
      <p>Inaugurado oficialmente el <strong>17 de noviembre de 2021</strong> por el entonces ministro de Ciencia, Tecnología e Innovación de la Nación, Daniel Filmus, y la rectora de la Universidad Nacional de Misiones, Alicia Bohren, el <strong>Laboratorio de Biomedicina BSL 2+ MADAR</strong> se proyecta como un centro de referencia indiscutido en la región.</p>
      <p>Diseñado bajo el concepto de <em>"research facilities"</em>, el MADAR articula actividades de investigación científica, docencia de grado y posgrado, validación de ensayos diagnósticos in-house y vigilancia epidemiológica en estrecha coordinación con las Facultades de la UNaM y el sistema de salud provincial.</p>
      <h3>Impacto Regional y Tecnológico</h3>
      <p>El espacio cuenta con infraestructura de contención biológica BSL 2+, equipamiento de secuenciación NGS de última generación y capacidades de supercómputo HPC, permitiendo caracterizar patógenos asociados a enfermedades infectocontagiosas emergentes y endémicas.</p>
      <p>Asimismo, cumple un rol fundamental en la formación de recursos humanos altamente calificados, becarios doctorales e investigadores de la región.</p>
    `
  },
  {
    id: "news-2",
    title: "Investigadores del Laboratorio MADAR publican avances en dinámica molecular de enzimas regionales",
    category: "Investigación",
    date: "10 de Agosto, 2026",
    author: "Dr. Carlos Mendoza",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
    excerpt: "Nuevas simulaciones all-atom realizadas en el cluster MADAR-HPC revelan detalles clave sobre interacciones alostéricas en complejos enzimáticos.",
    content: `
      <p>El grupo de Bioinformática Estructural ha completado una serie de simulaciones de dinámica molecular a escala atómica utilizando el superordenador del laboratorio.</p>
      <p>Los resultados, próximos a publicarse en revistas internacionales, aportan nuevas herramientas para el diseño de compuestos bioactivos contra patógenos de interés regional.</p>
    `
  }
];
