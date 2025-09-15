export interface IProject {
  year: number
  title: string
  description?: string
  preview?: string
  thumbnail?: string
  link?: string
  icon?: any
  stage: 'In progress' | 'Done' | 'Deferred'
  dependencies?: string[]
  color?: string
}
