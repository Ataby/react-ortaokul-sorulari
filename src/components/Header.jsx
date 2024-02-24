import { Image } from "react-bootstrap";
import logo from "./gelik_ayici.jpeg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import App from "../App";

function Header({setkontrol,setUsername,setPassword}) {
  const navigate = useNavigate();
  const handleLogout = () => {
    setkontrol(false);
    setUsername('');
    setPassword('');
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <>
    <Navbar bg="light" data-bs-theme="light" className="ms-auto">
          <Image src={logo} alt="okul-logo" width={"15%"}/>
        <div className="text-align-center">
          <h2>GELİK AYİÇİ 100.YIL ORTAOKULU </h2>
          <h5> KİLİMLİ / ZONGULDAK</h5>
          {/* <Navbar.Brand href="#home">ANASAYFA</Navbar.Brand> */}
          <button onClick={handleLogout}>Çıkış Yap</button>
        </div>
      </Navbar>
      </>
  );
}

export default Header;
