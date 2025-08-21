import { NexusQX, Valory } from '@/components/icons/logotypes'
import { type Project } from '@/types/projects'

export const ProjectsData: Project[] = [
  {
    year: 2023,
    title: 'VALORY',
    short_description: 'Мультиинструмент для стримеров',
    description: 'Description for VALORY',
    preview: '/projects/previews/valory.png',
    thumbnail: '/projects/thumbnails/valory.png',
    link: 'https://beta.valory.su',
    stage: 'In progress',
    icon: Valory,
    dependencies: [
      'FastAPI',
      'Vue 3',
      'Pinia',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'SQLAlchemy',
      'Docker',
    ],
    color: '#000000',
  },
]


// {
//   year: 2025,
//   title: 'NexusQX',
//   short_description: 'Short description for NexusQX',
//   description: 'Description for NexusQX',
//   preview: '/projects/previews/nexusqx.png',
//   thumbnail: '/projects/thumbnails/nexusqx.png',
//   link: 'https://example.com/project1',
//   stage: 'In progress',
//   icon: NexusQX,
//   dependencies: [
//     'Mazban',
//     'FastAPI',
//     'Aiogram',
//     'Nuxt 4',
//     'TypeScript',
//     'PostgreSQL',
//     'Redis',
//     'SQLAlchemy',
//     'Docker',
//   ],
//   color: '#176BD2',
// },
