import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <>
    <Menu color='olive' stackable id='navbar'>
      <Menu.Menu position='right'>
          <Menu.Item
            as={NavLink}
            to='/cv'
            id='cv-page'
            name='CV'
          />
        </Menu.Menu>
      </Menu>
    </>
  )
}

export default NavBar