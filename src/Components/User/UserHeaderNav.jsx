import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as MyPictures }  from '../../Assets/feed.svg'
import { ReactComponent as Statistics }  from '../../Assets/statistics.svg'
import { ReactComponent as AddPicture }  from '../../Assets/add.svg'
import { ReactComponent as Logout }  from '../../Assets/logout.svg'
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null)
  const { userLogout } = React.useContext(UserContext)

  return (
    <nav className={styles.nav}>
      <NavLink to='/account' end>
        <MyPictures />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to='/account/statistics'>
        <Statistics />
        {mobile && 'Estatística'}
      </NavLink>
      <NavLink to='/account/post'>
        <AddPicture />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <Logout />
        {mobile && 'Sair'}
      </button>
    </nav>
  )
}

export default UserHeaderNav
