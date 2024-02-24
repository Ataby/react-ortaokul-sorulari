import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Route,Router, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
 import NotFound from './pages/NotFound';
import { Link,NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import turkce from "./icons/turkce.jpg"
import mat from "./icons/mat.jpg"
import fen from "./icons/fen.jpeg"
import sosyal from "./icons/sosyal.jpeg"
import ing from "./icons/ing.jpeg"
import din from "./icons/din.jpeg"
import { useState } from 'react';
 

 

function App() {
  const uyelist=["gelikayici"];
  const sifrelist =["2302ayici"];
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [kontrol,setkontrol]=useState(null);
  
  const handleLogin=()=>{
    sessionStorage.setItem("user",username);
    sessionStorage.setItem("passw",password);
    if(uyelist.includes(sessionStorage.getItem("user")) && (sifrelist.includes(sessionStorage.getItem("passw")))){
      setkontrol(true)
      sessionStorage.setItem("control",kontrol);
    }
  }

  return (
    <div>
      {(!sessionStorage.getItem("control"))&&
      ( <div className="container text-center mt-4 w-25">
      <h3 className="text-primary">GİRİŞ EKRANI</h3>
      <form  >
        <div className="mb-3">
          <label className="form-label">
            Kullanıcı
          </label>
          <input
            type="text"
            className='form-control'
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Şifre
          </label>
          <input
            type="password"
            className='form-control'
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={handleLogin} className="btn btn-primary mb-4">Giriş Yap</button>
      </form>
    </div>)}

    {(sessionStorage.getItem("control")) && 
    (<div>
      <Header setkontrol={setkontrol} setUsername={setUsername} setPassword={setPassword}/>
 
      <div className='d-flex flex-wrap p-2 gap-3'>
      <Card style={{ width: '15rem',border:"5px solid red" }}>
        <img  src={turkce} />
        <div >
          <Card.Title>TÜRKÇE SORULAR</Card.Title>
          <ul>
            <li><Link to="/Soru5turkce" >5.Sınıf</Link>  </li>
            <li><Link to="/Soru6turkce" >6.Sınıf</Link>  </li>
            <li><Link to="/Soru7turkce" >7.Sınıf</Link>  </li>
            <li><Link to="/Soru8turkce">8.Sınıf</Link>  </li>
          </ul>
        </div>
      </Card>
      <Card style={{ width: '15rem',border:"5px solid blue" }}>
        <Card.Body >
          <Card.Title>MATEMATİK SORULAR</Card.Title>
          <ul>
            <li><Link to="/Soru5mat">5.Sınıf</Link>  </li>
            <li><Link to="/Soru6mat">6.Sınıf</Link>  </li>
            <li><Link to="/Soru7mat">7.Sınıf</Link>  </li>
            <li><Link to="/Soru8mat">8.Sınıf</Link>  </li>
          </ul>
        </Card.Body>
        <Card.Img variant="top" src={mat} />
      </Card>
      <Card style={{ width: '15rem',border:"5px solid cyan"}}>
        <Card.Img variant="top" src={fen} />
        <Card.Body>
          <Card.Title>FEN BİLGİSİ SORULAR</Card.Title>
          <ul>
            <li><Link to="/Soru5fen">5.Sınıf</Link>  </li>
            <li><Link to="/Soru6fen">6.Sınıf</Link>  </li>
            <li><Link to="/Soru7fen" >7.Sınıf</Link>  </li>
            <li><Link to="/Soru8fen">8.Sınıf</Link>  </li>
          </ul>
        </Card.Body>
      </Card>
      {/* </div>
      <div className='d-flex'> */}
      <Card style={{ width: '15rem',border:"5px solid yellow"}}>
        <Card.Body>
          <Card.Title>SOSYAL BİLGİLER SORULAR</Card.Title>
          <ul>
            <li><Link to="/Soru5sosyal" >5.Sınıf</Link>  </li>
            <li><Link to="/Soru6sosyal" >6.Sınıf</Link>  </li>
            <li><Link to="/Soru7sosyal">7.Sınıf</Link>  </li>
            <li><Link to="/Soru8sosyal" >8.Sınıf</Link>  </li>
          </ul>
        </Card.Body>
        <Card.Img variant="top" src={sosyal} />
      </Card>
      <Card style={{ width: '15rem',border:"5px solid green" }}>
        <Card.Img variant="top" src={ing} />
        <Card.Body>
          <Card.Title>İNGİLİZCE SORULAR</Card.Title>
          <ul>
            <li><Link to="/Soru5ing" >5.Sınıf</Link>  </li>
            <li><Link to="/Soru6ing">6.Sınıf</Link>  </li>
            <li><Link to="/Soru7ing">7.Sınıf</Link>  </li>
            <li><Link to="/Soru8ing">8.Sınıf</Link>  </li>
          </ul>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem',border:"5px solid lightblue"}}>
        <Card.Body>
          <Card.Title>DİN KÜLTÜRÜ SORULAR</Card.Title>
          <ul>
            <li><Link to="/Soru5din">5.Sınıf</Link>  </li>
            <li><Link to="/Soru6din">6.Sınıf</Link>  </li>
            <li><Link to="/Soru7din">7.Sınıf</Link>  </li>
            <li><Link to="/Soru8din">8.Sınıf</Link>  </li>
          </ul>
        </Card.Body>
        <Card.Img variant="top" src={din} />
      </Card>
      </div>  
      <Outlet/>
      <Footer />
 
    </div>)}
    </div>
  );
}

export default App;
