import React from 'react'
import { Link } from 'react-router-dom'
import { DropdownItem } from 'reactstrap'
import { NavDropdown } from './MenuComponent'

const AdminMenu = () => {
  return (
    <NavDropdown
      //icon="th-list"
        //id="entity-menu"
      name="Actions (Admin)"
      style={{maxHeight:"80vh", overflow:"auto"}}
>

      <DropdownItem
       tag={Link}
       to="/admin-dashboard" 
      >
       Dashboard
      </DropdownItem>


      <DropdownItem
       tag={Link}
       to="/alltransactions" 
      >
       Transaction Query
      </DropdownItem>

      

      <DropdownItem
       tag={Link}
       to="/user-management" 
      >
       User Management
      </DropdownItem>

    </NavDropdown>

    


  )
}

export default AdminMenu