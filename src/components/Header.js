import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "取消" : "新增"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "任务清单",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
