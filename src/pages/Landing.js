import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === "/" && navigate("/businessSetup");
  }, [pathname]);

  return <div>Landing</div>;
}
