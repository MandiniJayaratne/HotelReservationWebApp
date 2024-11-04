import "./navbar.css";
import { Link } from "react-router-dom";
import {
  faBed,
  faCalendarDays,
  faCarSide,
  faHotel,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Verity Vacations</span>
        </Link>
      </div>
      <div className="headerList">
        <div className="headerListItem active">
          <FontAwesomeIcon icon={faBed} />
          <span>Stays</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faCarSide} />
          <span>Rentals</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faHotel} />
          <span>Attractions</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Taxi</span>
        </div>
      </div>
      {user ? (
        user.username
      ) : (
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
