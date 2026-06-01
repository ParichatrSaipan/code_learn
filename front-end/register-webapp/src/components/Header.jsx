import regIcon from '../assets/reg.svg'

export default function Header() {
  return (
    <header className="header">
      <img src={regIcon} alt="register" className="header-logo" />
      <h1 className="header-title">Register App</h1>
    </header>
  )
}
