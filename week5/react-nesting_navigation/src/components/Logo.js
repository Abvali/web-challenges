import { Image } from "./Image";
import { Link } from "./Link";
import logo from "../img/logo.jpg"

export function Logo (){
    return (
        <Link>
          <img className="round-image" src={logo} alt={"logo"} />
        </Link>
    )
}