import s from './Header.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <div className="wrapper">
        <div className={s.container}>
          <div className={s.blockOne}>
            <img src="/Menu.svg" alt="menu" />
            <span>Меню</span>
          </div>
          <div>
            <img src="/Rostelecom.svg" alt="logo" />
          </div>
          <div>
            <img src="/Search.svg" alt="" />
            <img src="/Heart.svg" alt="" />
            <img src="/Compare add.svg" alt="" />
            <img src="/Cart.svg" alt="" />
            <img src="/Profile.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header