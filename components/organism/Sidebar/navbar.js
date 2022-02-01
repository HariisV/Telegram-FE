import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import ToggleButton from "@mui/material/ToggleButton";

export default function Navbar() {
  return (
    <div className="d-flex justify-content-between mx-2 mt-3">
      <h5 className="mt-2 sidebar__title">Telegram</h5>

      <div className="dropdown align-self-center ">
        <button
          className="btn"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FormatAlignCenterIcon sx={{ color: "#0c145a" }} />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
