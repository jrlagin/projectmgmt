import React from 'react'
import AddClientModal from '../components/AddClientModal'
import AddProjectModal from '../components/AddProjectModal'
import Clients from '../components/Clients'
import LoginModal from '../components/LoginModal'
import Projects from '../components/Project'

export default function Home() {
  return (
    <>
      <div className='row'>
       <AddClientModal/>
       <AddProjectModal/>
       <LoginModal/>

      </div>
       <div className='d-flex gap-3 mb-4'>
        <Clients/>
        </div>
        <Projects/>
        <hr/>
    </>
  )
}
