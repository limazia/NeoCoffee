import { Link } from "react-router-dom";
import { WhatsappLogo, InstagramLogo } from "@phosphor-icons/react";

export function Navbar() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-4 pb-3">
      <Link to="/">
        <h1>
          Neo<span>Coffee</span>
        </h1>
      </Link>
      <small className="text-muted">Aberto diariamente das 8h às 22h</small>

      <div className="d-flex mt-2 social">
        <a href="#" target="_blank">
          <WhatsappLogo size={20} />
        </a>
        <a href="#" target="_blank">
          <InstagramLogo size={20} />
        </a>
      </div>
    </div>
  );
}
