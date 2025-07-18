export interface Project {
  year: number
  title: string
  short_description: string
  description?: string
  preview?: string
  link?: string
  icon?: any
  stage: 'In progress' | 'Done' | 'Deferred'
  dependencies?: string[]
}
