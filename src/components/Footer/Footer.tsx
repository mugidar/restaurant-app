import Logo from "../ui/Logo/Logo"
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="pl-10 pr-10 h-[70px] bg-neutral-200/50">
      <div className="container flex items-center h-full justify-between">
        <Logo className="text-sm"/>
        <div className="rights">
        All rights are reserved©
        </div>
      </div>
    </footer>
  )
}

export default Footer