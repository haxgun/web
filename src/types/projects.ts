export interface Project {
  year: number
  title: string
  short_description: string
  description?: string
  imageUrl?: string
  link?: string
  stage: 'In progress' | 'Done' | 'Backlog'
}
