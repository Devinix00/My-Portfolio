import { MouseEventHandler } from "react";
import MenuIcon from "@mui/icons-material/Menu";

interface IProps {
  onClick: MouseEventHandler<SVGSVGElement>;
}

function Menu({ onClick }: IProps): JSX.Element {
  return <MenuIcon onClick={onClick} />;
}

export default Menu;
