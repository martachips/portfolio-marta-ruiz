import './main-data.css';

export const myProfile = {
  currentPosition: 'Web Developer',
  areas: ['Sobre mí', 'Educación y Experiencia', 'Proyectos', 'Contacto'],
  education: {
    recentStudies: [
      {
        curso: 'Bootcamp Rock The Code',
        description:
          'Accesibilidad, HTML, CSS, Javascript, Node, React, MongoDB, PostgreSQL'
      },
      {
        curso: 'Programa Samsung DesArrolladoras - 140h',
        description: 'Desarrollo Front End: HTML, CSS, Javascript'
      },
      { curso: 'Programa Avanzado en Agile Project Management. SCRUM - 150h' }
    ],
    degree: 'Graduada en Psicología',
    reskill: 'ESTO TENGO QUE PENSARLO'
  },
  experience: [
    {
      position: 'Técnico de formación / Administradora Plataforma Moodle',
      company: 'Grupo IOE',
      startDate: 'Enero 2022',
      endDate: 'Septiembre 2023',
      functions: [
        'Gestión de plataforma LMS Moodle como Administradora',
        'Resolución de incidencias en plataforma',
        'Formación a tutores en el uso de la misma'
      ]
    },
    {
      position: "Guía/Informadora en Exposición Itinerante 'Symphony'",
      company: 'Fundación La Caixa',
      startDate: 'Octubre 2021',
      endDate: 'Noviembre 2021',
      functions: [
        'Presentación de la Exposición ante múltiples grupos de personas',
        'Información a los visitantes',
        'Coordinación con el equipo y gestión de colas'
      ]
    },
    {
      position: 'Embajadora de Nespresso',
      company: ['El Corte Inglés', 'Carrefour', 'Mediamarkt'],
      startDate: 'Noviembre 2018',
      endDate: 'Enero 2021',
      functions: [
        'Conocimiento completo de la marca para su adecuada promoción',
        'Venta de máquinas Nespresso así como de sus consumibles',
        'Atención al cliente y resolución de incidencias'
      ]
    },
    {
      position: 'Azafata en Puesto de Información al Cliente',
      company: 'Centro Comercial Thader',
      startDate: 'Septiembre 2015',
      endDate: 'Enero 2016',
      functions: [
        'Atención al cliente y resolución de posibles incidencias',
        'Realización de promociones'
      ]
    }
  ],
  skills: [
    {
      skill: 'Autonomía',
      description:
        'Tanto en aprendizaje como en la realización de mis funciones.'
    },
    {
      skill: 'Resolución de incidencias',
      description:
        'Con plena atención al problema para que no vuelva a suceder en la medida de lo posible.'
    },
    {
      skill: 'Organización y planificación',
      description: 'Del tiempo y de las tareas en función de los requisitos.'
    },
    {
      skill: 'Trabajo por proyectos',
      description:
        'Adquiriendo experiencia en la gestión de las prioridades, entre otras.'
    },
    {
      skill: 'Escucha activa',
      description: 'No escuchar para responder, sino escuchar para entender.'
    },
    {
      skill: 'Tolerancia a la frustración',
      description:
        'Por aquellas veces en que las cosas no salen como se espera.'
    },
    {
      skill: 'Gestión de las emociones',
      description:
        'Tanto las propias como las ajenas en situaciones de tensión o preocupación.'
    }
  ],
  projects: [
    {
      title: 'Proyecto 1: Estructura y estilo',
      description:
        'Primer proyecto en Rock The Code, donde se pone en práctica todo lo aprendido de HTML5 así como de CSS3, haciendo uso de "positions", "flex", "custom variables", etc.',
      link: 'https://github.com/martachips/Proyecto-1.git',
      netlify: 'https://project1-martaruiz.netlify.app/',
      preview: '/images/project1.png'
    },
    {
      title: 'Proyecto 2: Filtrado para comercios',
      description:
        'Con este proyecto se abre un conjunto de proyectos destinados a practicar Javascript, repasando HTML y CSS. Para el mismo, se crea una serie de productos para, posteriormente, poder filtrar por vendedor y por precio. Todo ello creado mediante JS.',
      link: 'https://github.com/martachips/Tienda.git',
      netlify: 'https://tienda-katanamart.netlify.app/',
      preview: '/images/project2.png'
    },
    {
      title: "Proyecto 3: 'Inspiration'",
      description:
        'Con este proyecto, de parecido razonable a Pinterest, se practica la conexión con APIs a través de Javascript, en este caso la API Unsplash.',
      link: 'https://github.com/martachips/Pinterest-or-similar.git',
      netlify: 'https://inspiration-photos.netlify.app/',
      preview: '/images/project3.png'
    }
  ],
  aboutMe: {
    largerText: [
      'Estoy convencida de que en el movimiento, así como en el cambio, se encuentran nuevas posibilidades. Soy inquieta en cuanto a buscar maneras diferentes de hacer las cosas, y me gusta ir encontrando nuevos retos de los que aprender y sentir que pueden aportar a otras personas. Tengo un perfil social y me encanta la tecnología, por lo cual me estoy desarrollando en este mundo IT, formándome como Desarrolladora Full Stack.'
    ],

    personalValues: [
      {
        value: 'Implicación',
        description:
          'Porque si no no dedicaría tiempo a ser mejor en lo que hago, aprendiendo cosas nuevas y tratando de que mi trabajo esté más que bien hecho.'
      },
      {
        value: 'Adaptabilidad',
        description:
          'Me siento cómoda readaptando el trabajo. Sirve de poco sostener una mentalidad rígida que choca cada vez con el constante cambio de las circunstancias.'
      },
      {
        value: 'Empatía',
        description:
          'He hecho llorar a más de un@. ¡Pero no en mal sentido! Transmito confianza y las personas encuentran en mí alguien con quien poder contar, en lo bueno y en lo malo.'
      },
      {
        value: 'Compañerismo',
        description:
          'Soy más de contribuir y mantener un buen ambiente de trabajo, fomentando una buena relación con mis compañeros.'
      },
      {
        value: 'Honestidad',
        description:
          'Valoro la sinceridad y actúo con integridad, manteniendo una comunicación abierta y transparente.'
      }
    ]
  },
  contact: {
    mail: 'martamrg93@gmail.com',
    telf: 'Tlf: 111111111',
    linkedInUrl: 'https://www.linkedin.com/in/martaruizgzlez/',
    githubUrl: 'https://github.com/martachips'
  }
};
