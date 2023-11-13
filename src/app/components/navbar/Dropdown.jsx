import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { useWindowResize } from "../../hooks/useWindowResize";

const Dropdown = ({ title, links, dropdownState, setDropdownState, setIsMenuOpen }) => {
  const {width} = useWindowResize()

  return (
    <li data-dropdown={dropdownState === title && "open"}>
      <span>
        <Link onClick={prev => setIsMenuOpen(!prev)} href="#">{title}</Link>{" "}
        <IoMdArrowDropdown
          onClick={() => {
            if(width > 992) return
            setDropdownState((prev) => (prev === title ? null : title))
          }}
        />
      </span>
      <nav className="nested-navbar">
        <ul className="nav-list">
          {links.map((link,i) => (
            <li key={i}>
            <span className="forHoverEffect"></span>
            <Link onClick={prev => setIsMenuOpen(!prev)} href={link.href}>{link.label}</Link>
          </li>
          ))}
        </ul>
      </nav>
    </li>
  )
}

export default Dropdown;
