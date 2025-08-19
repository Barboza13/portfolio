export interface Project {
  img: ImageMetadata
  name: string
  description: string
  technologies: string[]
  href: string
  gitHub: string
}

export type Technology = {
  name: string
  icon: string
}
