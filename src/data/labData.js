export const labInfo = {
  name: "Laboratorio MADAR",
  fullName: "Laboratorio de Biomedicina BSL 2+ MADAR",
  acronym: "MADAR",
  institution: "Universidad Nacional de Misiones (UNaM)",
  tagline: "Madar, un laboratorio inédito en la región creado por la científica misionera Karina Salvatierra. Único en Misiones con tecnología para hacer ensayos con células vivas.",
  description: "El Laboratorio de Biomedicina BSL 2+ MADAR, anexado al Instituto de Biotecnología de Misiones (InBioMis) e integrado a la Red de Laboratorios de la UNaM, es un espacio de I+D+i construido con el concepto de 'research facilities'. Inaugurado en noviembre de 2021, está orientado a la investigación de las enfermedades emergentes de la región (dengue, zika, chikungunya, HPV, COVID-19), la validación de ensayos de diagnóstico in-house, la vigilancia epidemiológica y la caracterización genómica de patógenos.",
  foundedYear: 2021,
  inaugurationDate: "17 de noviembre de 2021",
  founder: "Dra. Karina Salvatierra",
  director: "Dra. Karina Salvatierra",
  location: "Campus Universitario, Ruta Nac. Nº 12 Km 7 y 1/2, CP 3300, Posadas, Misiones, Argentina",
  email: "contacto@lab-madar.unam.edu.ar",
  phone: "+54 376 4480200 (Interno 226)",
  funding: "Programa de fortalecimiento de las capacidades institucionales para la investigación en enfermedades emergentes y endémicas del Ministerio de Ciencia de la Nación: subsidio de $12.000.000 con contraparte de la UNaM de $3.000.000",
  stats: {
    biosafety: "BSL 2+",
    funding: "$12 M",
    teamPerNode: "4",
    conicet: "300+"
  }
};

export const historyData = {
  origins: "Madar en honor a Madariaga, figura emblemática de la tierra colorada, representa una conquista liderada por la científica misionera y doctora en Biotecnología Karina Salvatierra. El laboratorio se armó en un contenedor móvil y fue anexado al Instituto de Biotecnología de Misiones (InBioMis). La propuesta resultó seleccionada en el 'Programa de fortalecimiento de las capacidades institucionales para la investigación en enfermedades emergentes y endémicas', financiado por el Ministerio de Ciencia de la Nación con un subsidio de 12 millones de pesos y una contraparte de la Universidad Nacional de Misiones (UNaM) de 3 millones de pesos. Tras ser evaluado por la Administración Nacional de Laboratorios e Institutos de Salud (ANLIS) Malbrán, quedó inaugurado el miércoles 17 de noviembre de 2021 en un acto que contó con la presencia del ministro de Ciencia, Tecnología e Innovación de la Nación, Daniel Filmus, y la rectora de la UNaM, Alicia Bohren.",
  evolution: "El MADAR es el único laboratorio de su categoría en Misiones: nivel de bioseguridad 2 plus (BSL 2+), apenas un escalón antes que el nivel 3, con cultivo de células. Se divide en dos secciones principales: el laboratorio 1 de biología molecular, para todos los ensayos de amplificación génica y PCR; y el laboratorio 2 de cultivo celular, para los ensayos de investigación in vitro con células vivas. Está destinado al desarrollo de actividades de investigación, docencia de grado y posgrado, la validación de ensayos de diagnóstico in-house y, sobre todo, la vigilancia epidemiológica en una zona donde las patologías endémicas están a la orden del día. Forma parte de la Red de Laboratorios de la UNaM y, en caso de ser necesario, puede brindar servicios de diagnóstico a demanda.",
  milestones: [
    {
      year: "2021",
      title: "Selección y Financiación del Programa del Ministerio de Ciencia de la Nación",
      description: "La propuesta del laboratorio móvil es seleccionada en el 'Programa de fortalecimiento de las capacidades institucionales para la investigación en enfermedades emergentes y endémicas', con un subsidio de $12.000.000 y una contraparte de $3.000.000 de la UNaM."
    },
    {
      year: "2021",
      title: "Aval de ANLIS Malbrán e Inauguración Oficial (17 de Noviembre)",
      description: "Tras la evaluación de la ANLIS Malbrán, se inaugura el Laboratorio de Biomedicina BSL 2+ MADAR con la presencia del ministro Daniel Filmus, la rectora Alicia Bohren, el vicerrector Fernando Kramer y los decanos de las facultades de la UNaM."
    },
    {
      year: "2022",
      title: "Puesta en Marcha del Laboratorio",
      description: "Según lo estimado en la inauguración, el laboratorio comienza a operar en 2022, iniciando las investigaciones en biología molecular (amplificación génica y PCR) y cultivo celular (ensayos in vitro y antivirales)."
    },
    {
      year: "2022",
      title: "Compromiso de Inversión para Institutos CONICET-UNaM",
      description: "Durante la inauguración, el ministro Daniel Filmus confirmó la firma con la Universidad para que dos institutos de doble dependencia CONICET-UNaM reciban 436 millones de pesos para la construcción de sus edificios."
    }
  ]
};

export const researchGroups = [
  {
    id: "biomol",
    name: "Laboratorio 1 de Biología Molecular y Amplificación Génica",
    shortName: "Biología Molecular",
    code: "Lab 1",
    image: "/laboratorio_madar/unam-inauguracion.jpg",
    description: "Destinado a todos los ensayos de amplificación génica y PCR, permitiendo la detección de patógenos, la validación de ensayos de diagnóstico in-house y la secuenciación de genomas para identificar variantes, como las del SARS-CoV-2.",
    thematicAreas: ["Amplificación Génica", "PCR", "Diagnóstico Molecular", "Secuenciación de Genomas"],
    associatedLines: [
      "Detección y secuenciación de genomas para identificar variantes del SARS-CoV-2 en la provincia",
      "Validación de ensayos de diagnóstico in-house",
      "Caracterización genómica de patógenos de enfermedades infectocontagiosas emergentes, endémicas y pandémicas"
    ],
    lead: "Dra. Karina Salvatierra",
    membersCount: 4,
    achievements: [
      "Laboratorio de bioseguridad nivel 2+ aprobado por la ANLIS Malbrán",
      "Diagnóstico de enfermedades virales como el COVID-19 dentro de la Red de Laboratorios UNaM",
      "Articulación con ANLIS Malbrán, CONICET e INMET"
    ]
  },
  {
    id: "cultivo",
    name: "Laboratorio 2 de Cultivo Celular y Ensayos In Vitro",
    shortName: "Cultivo Celular y Antivirales",
    code: "Lab 2",
    image: "/laboratorio_madar/territorio-galeria-1.webp",
    description: "Único laboratorio en Misiones con tecnología para hacer ensayos con células vivas. En él se puede aislar e identificar virus (por ejemplo, en líneas celulares VERO crece el virus del dengue), producir proteínas para formulación de vacunas y ensayar posibles tratamientos antivirales.",
    thematicAreas: ["Cultivo Celular", "Ensayos In Vitro", "Antivirales", "Aislamiento de Virus"],
    associatedLines: [
      "Aislamiento e identificación de virus a partir de muestras biológicas en líneas celulares VERO",
      "Ensayos de antivirales contra dengue, zika y chikungunya",
      "Investigaciones relacionadas con leucemia y otras patologías oncológicas"
    ],
    lead: "Dra. Karina Salvatierra",
    membersCount: 4,
    achievements: [
      "Único centro de la provincia con tecnología para ensayos con células vivas",
      "Nivel de bioseguridad 2 plus (BSL 2+), apenas un escalón antes del nivel 3",
      "Permite trabajar con patógenos aéreos, agentes virales y peribacterianos peligrosos"
    ]
  }
];

export const membersData = [
  {
    id: 1,
    name: "Dra. Karina Salvatierra",
    role: "Directora y Encargada del Laboratorio",
    category: "Dirección",
    group: "Dirección / Proyecto MADAR",
    researchArea: "Biotecnología, Virología y Biología Molecular",
    bio: "Científica misionera, doctora en Biotecnología, gestora e impulsora del Laboratorio MADAR. Es egresada de la Facultad de Ciencias Exactas, Químicas y Naturales de la UNaM, con dos masters y un doctorado en Biotecnología obtenido en Valencia, España. Volvió a Misiones en 2016 y se desempeña como docente de microbiología y virología en la carrera de Bioquímica de la UNaM.",
    email: "contacto@lab-madar.unam.edu.ar",
    profileUrl: "#"
  },
  {
    id: 2,
    name: "Investigadores UNaM-CONICET",
    role: "Investigadores de doble dependencia",
    category: "Investigadores",
    group: "Equipo del Proyecto MADAR",
    researchArea: "Genética y Bioquímica",
    bio: "El proyecto está integrado por cuatro investigadores de cada nodo de la universidad: dos genetistas y dos bioquímicos, en el marco de la doble dependencia UNaM-CONICET que caracteriza a la investigación en Misiones.",
    email: "contacto@lab-madar.unam.edu.ar",
    profileUrl: "#"
  },
  {
    id: 3,
    name: "Becarios y Doctorandos UNaM-CONICET",
    role: "Becarios de posgrado",
    category: "Becarios",
    group: "Formación UNaM-CONICET",
    researchArea: "Doctorados y posdoctorados en biomedicina",
    bio: "Investigadores de doble dependencia UNaM-CONICET que, gracias al laboratorio, amplían sus posibilidades para doctorados y posdoctorados en biomedicina, cultivo celular y enfermedades virales.",
    email: "contacto@lab-madar.unam.edu.ar",
    profileUrl: "#"
  },
  {
    id: 4,
    name: "Investigadores del Proyecto PAIS",
    role: "Vigilancia Genómica de Variantes",
    category: "Investigadores",
    group: "Red Nacional de Vigilancia Genómica",
    researchArea: "Secuenciación de genomas del SARS-CoV-2",
    bio: "Equipo que integra el Proyecto PAIS, que consiste en la vigilancia genómica de variantes del coronavirus, permitiendo detectar las variantes del SARS-CoV-2 dentro de la provincia.",
    email: "contacto@lab-madar.unam.edu.ar",
    profileUrl: "#"
  },
  {
    id: 5,
    name: "Comisión de Evaluación ANLIS-Malbrán",
    role: "Evaluación externa",
    category: "Colaboradores",
    group: "Evaluación externa",
    researchArea: "Evaluación y certificación de bioseguridad",
    bio: "Comisión de evaluación externa del ANLIS-Malbrán, organismo que evaluó y habilitó el laboratorio y que acompaña la puesta en orden de los proyectos de investigación.",
    email: "contacto@lab-madar.unam.edu.ar",
    profileUrl: "#"
  },
  {
    id: 6,
    name: "Red de Laboratorios UNaM",
    role: "Red institucional",
    category: "Colaboradores",
    group: "Red de Laboratorios UNaM",
    researchArea: "Articulación y servicios de diagnóstico",
    bio: "El MADAR se integra a la Red de Laboratorios de la UNaM y se abre la posibilidad de vincularse con otros laboratorios, entre ellos el INMET, junto al ANLIS Malbrán, para asistir a la provincia en caso de que la pandemia lo requiera.",
    email: "contacto@lab-madar.unam.edu.ar",
    profileUrl: "#"
  }
];

export const researchProjects = [
  {
    id: "proj-1",
    title: "Cultivo celular y evaluación de antivirales contra dengue, zika y chikungunya",
    summary: "Ensayos in vitro en líneas celulares (células VERO, entre otras) para aislar e identificar virus, probar medicamentos nuevos y evaluar la actividad de compuestos antivirales contra los arbovirus endémicos de la región.",
    scientificArea: "Virología Celular",
    researchGroup: "Laboratorio 2 de Cultivo Celular y Ensayos In Vitro",
    groupId: "cultivo",
    participants: ["Dra. Karina Salvatierra", "Investigadores UNaM-CONICET"],
    status: "En curso",
    year: "2022-2026",
    collaborators: ["ANLIS Malbrán", "CONICET", "INMET"],
    keywords: ["Cultivo Celular", "Antivirales", "Dengue", "Zika", "Chikungunya"]
  },
  {
    id: "proj-2",
    title: "PCR de COVID-19 y secuenciación de genomas del SARS-CoV-2",
    summary: "Diagnóstico molecular por PCR y secuenciación de genomas completos para detectar las variantes del SARS-CoV-2 dentro de la provincia y fortalecer la capacidad de diagnóstico en enfermedades virales.",
    scientificArea: "Diagnóstico Molecular y Genómica",
    researchGroup: "Laboratorio 1 de Biología Molecular y Amplificación Génica",
    groupId: "biomol",
    participants: ["Dra. Karina Salvatierra", "Investigadores del Proyecto PAIS"],
    status: "En curso",
    year: "2021-2025",
    collaborators: ["ANLIS Malbrán", "Proyecto PAIS", "Red de Laboratorios UNaM"],
    keywords: ["PCR", "Secuenciación de Genomas", "SARS-CoV-2", "Variantes", "Vigilancia Genómica"]
  },
  {
    id: "proj-3",
    title: "Investigación de enfermedades virales emergentes de la región (HPV, herpes, leucemia)",
    summary: "Líneas de investigación orientadas a las enfermedades emergentes y endémicas de la región —dengue, zika, chikungunya, herpes, Virus Papiloma Humano (HPV)— y a otras líneas como las relacionadas a la leucemia y el cáncer.",
    scientificArea: "Virología y Epidemiología",
    researchGroup: "Laboratorio 2 de Cultivo Celular y Ensayos In Vitro",
    groupId: "cultivo",
    participants: ["Dra. Karina Salvatierra", "Investigadores UNaM-CONICET", "Becarios UNaM-CONICET"],
    status: "En curso",
    year: "2022-2026",
    collaborators: ["Ministerio de Salud de Misiones", "InBioMis", "CONICET"],
    keywords: ["HPV", "Herpes", "Leucemia", "Enfermedades Emergentes", "Vigilancia Epidemiológica"]
  },
  {
    id: "proj-4",
    title: "Validación de ensayos de diagnóstico in-house",
    summary: "Desarrollo y validación analítica de metodologías moleculares locales para asistir a la Red de Laboratorios de la UNaM y al sistema de salud, fortaleciendo la capacidad de diagnóstico en enfermedades virales como el COVID-19.",
    scientificArea: "Diagnóstico Molecular",
    researchGroup: "Laboratorio 1 de Biología Molecular y Amplificación Génica",
    groupId: "biomol",
    participants: ["Dra. Karina Salvatierra", "Investigadores UNaM-CONICET"],
    status: "En curso",
    year: "2021-2025",
    collaborators: ["ANLIS Malbrán", "Hospital Escuela Dr. Ramón Madariaga", "Red de Laboratorios UNaM"],
    keywords: ["Diagnóstico In-House", "Validación", "PCR", "Red de Laboratorios"]
  }
];

export const servicesData = {
  services: [
    {
      title: "Investigación y Diagnóstico de Enfermedades Virales",
      target: "Sistema de Salud y Comunidad Científica",
      description: "Investigación de enfermedades emergentes, endémicas y pandémicas (dengue, zika, chikungunya, HPV, COVID-19) y fortalecimiento de la capacidad de diagnóstico en enfermedades virales dentro de la Red de Laboratorios de la UNaM.",
      procedures: ["Diagnóstico por PCR en bioseguridad BSL 2+", "Vigilancia epidemiológica", "Secuenciación de genomas", "Servicios de diagnóstico a demanda"],
      requestInfo: "Coordinación a través de la Red de Laboratorios de la UNaM. Contacto en contacto@lab-madar.unam.edu.ar."
    },
    {
      title: "Cultivo Celular y Ensayos de Antivirales",
      target: "Investigadores y Sector Científico-Tecnológico",
      description: "Utilización del laboratorio especializado de cultivo celular para aislar e identificar virus, producir proteínas (por ejemplo, para formulación de vacunas) y ensayar posibles tratamientos antivirales y desinfectantes con efecto virucida.",
      procedures: ["Aislamiento de virus en líneas celulares VERO", "Ensayos de actividad antiviral", "Evaluación de extractos y moléculas", "Estudios de citotoxicidad"],
      requestInfo: "Consultas de factibilidad en contacto@lab-madar.unam.edu.ar."
    },
    {
      title: "Docencia, Posgrado y Vinculación Tecnológica",
      target: "Universidad, Institutos y Empresas",
      description: "Espacio de I+D+i orientado a la docencia de grado y posgrado, la formación de investigadores de doble dependencia UNaM-CONICET y la vinculación tecnológica con el medio, en el marco del concepto de 'research facilities'.",
      procedures: ["Formación de becarios y doctorandos", "Prácticas de bioseguridad BSL 2+", "Articulación con ANLIS Malbrán, CONICET e INMET", "Desarrollo tecnológico"],
      requestInfo: "Vinculación institucional en contacto@lab-madar.unam.edu.ar."
    }
  ],
  equipment: [
    {
      name: "Infraestructura de Bioseguridad Nivel BSL 2+ (Laboratorio MADAR)",
      model: "Contenedor Móvil / Research Facilities",
      image: "/laboratorio_madar/territorio-hero.webp",
      description: "El laboratorio se armó en un contenedor móvil anexado al Instituto de Biotecnología de Misiones (InBioMis). Es el único de su categoría en Misiones: nivel de bioseguridad 2 plus, apenas un escalón antes del nivel 3, que permite trabajar con patógenos aéreos, agentes virales y peribacterianos peligrosos.",
      applications: ["Manipulación segura de patógenos aéreos y virales", "Investigación de enfermedades emergentes y endémicas", "Servicios de diagnóstico a demanda"],
      specs: ["Nivel de bioseguridad BSL 2+ aprobado por la ANLIS Malbrán", "Infraestructura modular con concepto de 'research facilities'", "Único laboratorio en Misiones con tecnología para ensayos con células vivas"]
    },
    {
      name: "Laboratorio 1 de Biología Molecular",
      model: "Amplificación Génica y PCR",
      image: "/laboratorio_madar/unam-inauguracion.jpg",
      description: "Sección destinada a todos los ensayos de amplificación génica y PCR, base del diagnóstico molecular y de la caracterización genómica de patógenos, incluyendo la secuenciación para detectar variantes del SARS-CoV-2.",
      applications: ["Amplificación génica", "Diagnóstico molecular por PCR", "Secuenciación de genomas"],
      specs: ["Ensayos de amplificación génica", "Validación de ensayos de diagnóstico in-house", "Vigilancia genómica de variantes"]
    },
    {
      name: "Laboratorio 2 de Cultivo Celular",
      model: "Ensayos In Vitro con Células Vivas",
      image: "/laboratorio_madar/territorio-galeria-2.webp",
      description: "Sección dedicada a los ensayos de investigación in vitro con células vivas. El cultivo celular permite aislar e identificar virus a partir de muestras biológicas, probar medicamentos nuevos y evaluar antivirales: es lo más semejante a lo que serían los ensayos in-vivo.",
      applications: ["Aislamiento e identificación de virus (líneas VERO)", "Producción de proteínas para vacunas", "Ensayos de antivirales y desinfectantes"],
      specs: ["Líneas celulares VERO (cultivo del virus del dengue)", "Ensayos de investigación in vitro", "Estudios de enfermedades como leucemia y cáncer"]
    }
  ]
};

export const eventsData = [
  {
    id: "ev-1",
    title: "Inauguración del Laboratorio de Biomedicina BSL 2+ MADAR en la UNaM",
    category: "Hito Institucional",
    date: "17 de Noviembre, 2021",
    location: "Campus Universitario UNaM / Posadas",
    description: "Tras ser evaluados por la ANLIS Malbrán, se dejó inaugurado el Laboratorio de Biomedicina BSL 2+ MADAR en la UNaM, en un acto que contó con la presencia del ministro de Ciencia, Tecnología e Innovación de la Nación, Daniel Filmus, y la rectora Alicia Bohren.",
    image: "/laboratorio_madar/unam-inauguracion.jpg",
    isHighlighted: true,
    linkText: "Video institucional",
    linkUrl: "https://www.youtube.com/channel/UChYoJ5B-w1OWOTt8-R9bzAQ"
  },
  {
    id: "ev-2",
    title: "Recorrida del ministro Daniel Filmus por el Laboratorio Madar",
    category: "Visita Oficial",
    date: "Noviembre, 2021",
    location: "Laboratorio MADAR - Campus UNaM",
    description: "Karina Salvatierra junto al ministro Daniel Filmus durante su reciente recorrida por el laboratorio Madar, en el campus de la UNaM, donde se anunció una inversión de 436 millones de pesos para institutos de doble dependencia CONICET-UNaM.",
    image: "/laboratorio_madar/madar-unam.jpg",
    isHighlighted: false,
    linkText: "Nota de Primera Edición",
    linkUrl: "#"
  },
  {
    id: "ev-3",
    title: "Puesta en Marcha del Laboratorio y Comienzo de Operaciones",
    category: "Hito Científico",
    date: "Año 2022",
    location: "Laboratorio MADAR - Campus UNaM",
    description: "Según lo estimado al momento de la inauguración, el laboratorio comienza a operar en 2022, iniciando las investigaciones en biología molecular (amplificación génica y PCR) y en cultivo celular (ensayos in vitro y antivirales).",
    image: "/laboratorio_madar/territorio-hero.webp",
    isHighlighted: false,
    linkText: "Nota de El Territorio",
    linkUrl: "#"
  }
];

export const newsData = [
  {
    id: "news-1",
    title: "Madar, un laboratorio inédito en la región creado por una científica misionera",
    category: "Investigación",
    date: "27 de Noviembre, 2021",
    author: "Griselda Acuña (El Territorio)",
    image: "/laboratorio_madar/territorio-hero.webp",
    excerpt: "Karina Salvatierra hizo de un contenedor un centro de investigación. Ubicado en el Campus Universitario, permitirá dar respuesta sobre varias enfermedades infecciosas. Es el único en Misiones con tecnología para hacer ensayos con células vivas.",
    content: `
      <p><strong>Karina Salvatierra hizo de un contenedor un centro de investigación.</strong> Madar, un laboratorio inédito en la región creado por una científica misionera. Ubicado en el Campus Universitario, permitirá dar respuesta sobre varias enfermedades infecciosas. Es el único en Misiones con tecnología para hacer ensayos con células vivas.</p>
      <p>Madar marcará un antes y un después en el desarrollo de la ciencia y la salud en Misiones. El laboratorio móvil ubicado en el Campus Universitario es único en la región dado por la infraestructura, diseño e innovación tecnológica. Allí se podrán realizar investigaciones en cultivo celular, tecnología que hasta el momento no había en la provincia.</p>
      <p>Madar en honor a Madariaga, figura emblemática en la tierra colorada, representa una conquista liderada por la científica misionera <strong>Karina Salvatierra (44)</strong>. <em>"Está orientado a la investigación de las enfermedades emergentes de la región, dentro de ella está el dengue, zika, chikungunya, pero también otras enfermedades virales como herpes o Virus Papiloma Humano (HPV). El estudio de enfermedades infecciosas es un pie importante pero hay otras líneas de investigaciones como aquellas relacionadas a leucemia, por ejemplo"</em>, indica la inquieta, comprometida y apasionada doctora en Biotecnología.</p>
      <p>Fue inaugurado la semana pasada, en tanto se estima que comenzará a operar en 2022. <em>"Tenemos el laboratorio 1 de biología molecular para todos los ensayos de amplificación génica; y el laboratorio 2 de cultivo celular, para los ensayos de investigación in vitro"</em>, comienza explicando Salvatierra en el tour científico exclusivo a El Territorio.</p>
      <img src="/laboratorio_madar/territorio-galeria-1.webp" alt="Laboratorio MADAR - Cultivo celular" />
      <p>Efectivamente, el laboratorio se armó en un contenedor móvil y fue anexado al <strong>Instituto de Biotecnología de Misiones (InBioMis)</strong>. La propuesta resultó seleccionada en el <em>"Programa de fortalecimiento de las capacidades institucionales para la investigación en enfermedades emergentes y endémicas"</em>, financiado por el Ministerio de Ciencia de la Nación con un subsidio por un monto de <strong>12 millones de pesos</strong> y una contraparte de la Universidad Nacional de Misiones (UNaM) de <strong>3 millones de pesos</strong>.</p>
      <p>El primer paso en el itinerario es el laboratorio de cultivo de células. <em>"Cultivo celular es lo más semejante a lo que sería ensayos in-vivo. Los cultivos celulares se han convertido hoy día en una herramienta de amplio uso en investigación básica biomédica, para el diagnóstico en salud animal y humana así como en sus aplicaciones para la elaboración de productos biotecnológicos y en la realización de pruebas de control de calidad"</em>, señala Salvatierra.</p>
      <p><em>"Acá nosotros con el cultivo celular, podemos de una muestra biológica, aislar e identificar un virus. Ponemos en contacto esa muestra biológica con un tipo de línea celular. Por ejemplo, la línea celular de células VERO en esas puede crecer el virus del dengue, entre otros virus"</em>, detalla la investigadora.</p>
      <img src="/laboratorio_madar/territorio-galeria-2.webp" alt="Laboratorio MADAR - Equipamiento" />
      <p>No hay en Misiones otro laboratorio en cuanto a la categoría que es <strong>nivel 2 plus con cultivo de células</strong>, apenas un escalón antes que nivel 3, el de mayor tecnología y complejidad.</p>
      <h3>Perfil</h3>
      <p>Karina Salvatierra es egresada de la Facultad de Ciencias Exactas, Químicas y Naturales de la UNaM, con dos masters y un doctorado en Biotecnología, en Valencia, España. Además de científica e investigadora se desempeña como docente de microbiología y virología en la carrera de Bioquímica en la UNaM y, como si fuera poco, integra el <strong>Proyecto PAIS</strong>, que consiste en la vigilancia genómica de variantes del coronavirus.</p>
    `
  },
  {
    id: "news-2",
    title: "Nuevo laboratorio de bioseguridad BSL 2+ investigará enfermedades virales en Misiones",
    category: "Institucional",
    date: "18 de Noviembre, 2021",
    author: "Primera Edición",
    image: "/laboratorio_madar/madar-unam.jpg",
    excerpt: "Luego de ser evaluados por la ANLIS Malbrán, se inauguró el laboratorio de Bioseguridad BSL 2+ 'Madar' con la presencia del ministro Daniel Filmus, autoridades de la UNaM e investigadores del CONICET.",
    content: `
      <p><em>Karina Salvatierra junto al ministro Daniel Filmus durante su reciente recorrida por el laboratorio Madar, en el campus de la UNaM.</em></p>
      <p>Luego de ser evaluados por la Administración Nacional de Laboratorios e Institutos de Salud <strong>(ANLIS) Malbrán</strong>, se inauguró el laboratorio de Bioseguridad <strong>BSL 2+ "Madar"</strong> en la Universidad Nacional de Misiones.</p>
      <p>El acto de apertura contó con la presencia del ministro de Ciencia, Tecnología e Innovación, <strong>Daniel Filmus</strong>, junto con autoridades de la UNaM e investigadores del CONICET. Esta nueva herramienta se incorporará a la red de laboratorios y permitirá fortalecer la capacidad de diagnóstico en enfermedades virales, entre ellas el <strong>COVID-19</strong>.</p>
      <p>La rectora de la Universidad Nacional de Misiones, <strong>Alicia Bohren</strong>, contó a PRIMERA EDICIÓN que desde la UNaM <em>"se viene desarrollando a través de carreras como genética, bioquímica y farmacia, varios proyectos de investigación relacionados con el tema salud y enfermedades endémicas propias de la región, como el dengue, zika y chikungunya. La apertura de este laboratorio es una manera de ampliar la investigación, al contar con infraestructura que permite manipular agentes patógenos con un nivel de seguridad adecuados. También permitirá articular con otros grupos de investigación de la provincia o la región. Tenemos un número importante de investigadores de doble dependencia, UNaM-CONICET, que ahora ampliarán sus posibilidades para doctorados y posdoctorados"</em>.</p>
      <p>Por su parte, el secretario general de Ciencia y Tecnología de la UNaM, <strong>Pedro Zapata</strong>, explicó que <em>"es un laboratorio que tiene nivel de seguridad que permite trabajar con patógenos aéreos, algunos agentes virales y peribacterianos que son peligrosos. La Universidad hasta ahora no tenía esta capacidad, con lo cual los proyectos de investigación no podían ahondar en estos temas. Ahora, esperamos tener más proyectos de investigaciones para generar nuevos desafíos, como la generación de antivirales e incursionar en el tema COVID"</em>.</p>
      <p>La encargada de este laboratorio de complejidad nivel II, <strong>Karina Salvatierra</strong>, contó que el proyecto <em>"está integrado por cuatro investigadores de cada nodo de la universidad, dos genetistas y dos bioquímicos. Fuimos convocados para poner en orden los proyectos de investigaciones y también habrá una comisión de evaluación externa, del ANLIS-Malbrán"</em>.</p>
      <p>Entre los temas pautados para estudiar: <em>"de momento, los proyectos que avanzarán están referidos al cultivo celular, antivirales en dengue, zika y chikungunya, además de PCR de COVID para la secuenciación de genomas"</em>. Esto último permitirá detectar las variantes del SARS-CoV-2 dentro de la provincia, en caso de que la pandemia lo requiera.</p>
      <p>El ministro Daniel Filmus remarcó: <em>"felicito a la Universidad Nacional de Misiones y que tengamos la posibilidad de brindar respuestas como esta. Nos comprometemos a seguir apostando por la ciencia, la tecnología, la universidad y el conocimiento"</em>. Asimismo, confirmó que <em>"hemos firmado con la Universidad para que dos institutos de doble dependencia CONICET-UNaM reciban 436 millones de pesos, que llegarán para poder construir los edificios"</em>.</p>
    `
  },
  {
    id: "news-3",
    title: "Se dejó inaugurado el Laboratorio de Biomedicina BSL 2+ MADAR en la UNaM",
    category: "Institucional",
    date: "19 de Noviembre, 2021",
    author: "Florencia Galarza (Noticias UNaM)",
    image: "/laboratorio_madar/unam-inauguracion.jpg",
    excerpt: "En la tarde del miércoles 17 de noviembre, en un acto con el ministro Daniel Filmus y la rectora Alicia Bohren, se dejó inaugurado el Laboratorio de Biomedicina BSL 2+ MADAR.",
    content: `
      <p>En la tarde del miércoles 17 de noviembre, en un acto que contó con la presencia del ministro de Ciencia, Tecnología e Innovación de la Nación, <strong>Daniel Filmus</strong>, y la rectora de la Universidad Nacional de Misiones, <strong>Alicia Bohren</strong>, se dejó inaugurado el <strong>Laboratorio de Biomedicina BSL 2+ MADAR</strong>.</p>
      <p>Este laboratorio está destinado al desarrollo de actividades de <strong>investigación, docencia de grado, posgrado y vinculación tecnológica</strong> a partir de un espacio de I+D+i desarrollado con el concepto de <em>"research facilities"</em> que potencie la investigación, la validación de ensayos de diagnóstico in-house, la vigilancia epidemiológica, la caracterización genómica de patógenos relacionadas con enfermedades infectocontagiosas emergentes, endémicas y pandémicas, y el desarrollo tecnológico en el marco de la <strong>Red de Laboratorios de la UNaM</strong>. Además, en el caso de ser necesario, puede brindar servicios de diagnóstico a demanda.</p>
      <p>Estuvieron presentes el vicerrector, <strong>Fernando Kramer</strong>; los decanos de las Facultades de Ingeniería de Oberá, <strong>Sergio Katogui</strong>; de Ciencias Forestales, <strong>Fabián Romero</strong>; de Arte y Diseño, <strong>Ian Kislo</strong>, y el vice-decano de Económicas, <strong>Horacio Simes</strong>.</p>
      <p>Asimismo acompañaron los directores de los laboratorios que integran la Red de Laboratorios de la UNaM, secretarios generales de la Universidad y secretarios de Facultades, docentes, investigadores, becarios y público en general.</p>
      <p>El video institucional y la recorrida virtual se pueden ver en el canal de YouTube de la UNaM.</p>
    `
  }
];