import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as MyPictures }  from '../../Assets/feed.svg'
import { ReactComponent as Statistics }  from '../../Assets/statistics.svg'
import { ReactComponent as AddPicture }  from '../../Assets/add.svg'
import { ReactComponent as Logout }  from '../../Assets/logout.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../store/user'

const UserHeaderNav = () => {
  const dispatch = useDispatch()
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const { pathname } = useLocation()
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
        <button onClick={() => dispatch(userLogout())}>
          <Logout />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav
