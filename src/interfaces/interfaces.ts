export interface Project {
  img: ImageMetadata
  name: string
  description: string
  technologies: string[]
  href: string
}

export type Technology = {
  name: string
  level: 'Principiante' | 'Intermedio' | 'Avanzado'
  icon: string
  href: ImageMetadata | string
}
