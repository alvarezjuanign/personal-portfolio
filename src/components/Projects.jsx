import { MappedProjects } from '../logic/MappedProjects'
import { projects } from '../mocks/projects.json'

export function Projects () {
  return (
    <MappedProjects projects={projects} />
  )
}
