export interface Project {
  img: ImageMetadata
  name: string
  description: string
  technologies: string[]
  href: string
}

export interface Technology {
  name: string
  icon: string
  href: ImageMetadata | string
}
