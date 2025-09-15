import type { IProject } from '@/types/projects.type'

export const ProjectsData: IProject[] = [
  {
    year: 2023,
    title: 'VALORY',
    description: 'Мультиинструмент для стримеров 🧩',
    link: 'https://beta.valory.su',
    stage: 'In progress',
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
  {
    year: 2023,
    title: 'Avion',
    description: 'Простое, интуитивное ToDo-приложение с современным дизайном ✨💅 ',
    link: 'https://github.com/haxgun/avion',
    stage: 'In progress',
    dependencies: ['Flask', 'Pillow', 'Jinja2'],
    color: '#000000',
  },
  {
    year: 2022,
    title: 'GloryCanvas',
    description: 'Пет-проект для изучения Flask. Выводит карточку игрока Dota 2 👺',
    link: 'https://github.com/haxgun/GloryCanvas',
    stage: 'Done',
    dependencies: ['Flask', 'Pillow', 'Jinja2'],
    color: '#000000',
  },
]
