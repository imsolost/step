import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from '../../../configuration/testSetup'
import sinon from 'sinon'
import ProjectListContainer from './ProjectListContainer'
import ProjectListPresentation from './ProjectListPresentation'

describe.only('<ProjectListContainer />', () => {

  it('calls componentDidMount', () => {

     sinon.spy(ProjectListContainer.prototype, 'componentDidMount')
     const wrapper = mount(<ProjectListContainer />)
     expect(ProjectListContainer.prototype.componentDidMount.calledOnce).to.equal(true);
   })

   it('allows us to set props', () => {
     const wrapper = mount(<ProjectListContainer bar="baz" />);
     expect(wrapper.props().bar).to.equal("baz");
     wrapper.setProps({ bar: "foo" });
     expect(wrapper.props().bar).to.equal("foo");
   })

  it('renders the child component', () =>
    expect(shallow(<ProjectListContainer />).find('ProjectListPresentation').length).to.equal(1)
  )

})
