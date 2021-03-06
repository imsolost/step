import { newCouldDo } from './commands/couldDo'
import { newProject } from './commands/project'
import { mockCouldDoData, mockProjectData } from './mockTestData'

const withThreeCouldDos = callback => {
  context( 'when there are three couldDos in the database', () => {
    beforeEach( () =>
      Promise.all([
        newCouldDo(mockCouldDoData.fakeCouldDo1),
        newCouldDo(mockCouldDoData.fakeCouldDo2),
        newCouldDo(mockCouldDoData.fakeCouldDo3)
      ])
    )
    callback()
  })
}

const withThreeProjects = callback => {
  context( 'when there are three projects in the database', () => {
    beforeEach( () =>
      Promise.all([
        newProject(mockProjectData.fakeProject1),
        newProject(mockProjectData.fakeProject2),
        newProject(mockProjectData.fakeProject3)
      ])
    )
    callback()
  })
}

export { withThreeCouldDos, withThreeProjects }
