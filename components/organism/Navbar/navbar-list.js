export default function NavbarList(props) {
  return (
    <li className="nav-item">
      <a
        className={`nav-link navbar__list ${
          props.title === "Home" && "active"
        }`}
        aria-current="page"
        href="#"
      >
        {props.title}
      </a>
    </li>
  );
}
