import React from 'react'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import { expect } from '../../../configuration/testSetup'
import ProjectListContainer from './ProjectListContainer'
import moxios from 'moxios'

describe( '<ProjectListContainer />', () => {

  context( 'componentDidMount()', () => {
    let wrapper
    const fakeData = [ { id: 1, text: 'cows' } ]

    before( async () => {
      moxios.install()
      sinon.spy(ProjectListContainer.prototype, 'componentDidMount')
      wrapper = await mount(<ProjectListContainer />)
    })
    after( () => {
      moxios.uninstall()
    })

    it( 'calls componentDidMount', () => {
      expect(ProjectListContainer.prototype.componentDidMount.calledOnce).to.equal(true)
    })

    it( 'it makes http request and sets state to response', ( done ) => {
      return moxios.wait( () => {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: fakeData
      }).then( () => {
        expect(wrapper.state().projects).to.eql(fakeData)
        done()
       }).catch(done)
     })
    })

    })

    it('renders the child component', () =>
      expect(shallow(<ProjectListContainer />).find('ProjectListPresentation').length).to.equal(1)
    )

})
