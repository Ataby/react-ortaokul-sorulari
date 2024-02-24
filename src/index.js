import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NotFound from './pages/NotFound';
import Home from "./pages/Home"
import Soru5turkce from './pages/Soru5turkce';
import Soru6turkce from './pages/Soru6turkce';
import Soru7turkce from './pages/Soru7turkce';
import Soru8turkce from './pages/Soru8turkce';

import Soru5mat from './pages/Soru5mat';
import Soru6mat from './pages/Soru6mat';
import Soru7mat from './pages/Soru7mat';
import Soru8mat from './pages/Soru8mat';

import Soru5fen from './pages/Soru5fen';
import Soru6fen from './pages/Soru6fen';
import Soru7fen from './pages/Soru7fen';
import Soru8fen from './pages/Soru8fen';

import Soru5sosyal from './pages/Soru5sosyal';
import Soru6sosyal from './pages/Soru6sosyal';
import Soru7sosyal from './pages/Soru7sosyal';
import Soru8sosyal from './pages/Soru8sosyal';

import Soru5ing from './pages/Soru5ing';
import Soru6ing from './pages/Soru6ing';
import Soru7ing from './pages/Soru7ing';
import Soru8ing from './pages/Soru8ing';

import Soru5din from './pages/Soru5din';
import Soru6din from './pages/Soru6din';
import Soru7din from './pages/Soru7din';
import Soru8din from './pages/Soru8din';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Routes>
        <Route path="*" element={<NotFound />} />
        <Route index element={<App />} />

        <Route path="soru5turkce" element={<Soru5turkce/>} />
        <Route path="soru6turkce" element={<Soru6turkce/>} />
        <Route path="soru7turkce" element={<Soru7turkce/>} />
        <Route path="soru8turkce" element={<Soru8turkce/>} />

        <Route path="soru5mat" element={<Soru5mat/>} />
        <Route path="soru6mat" element={<Soru6mat/>} />
        <Route path="soru7mat" element={<Soru7mat/>} />
        <Route path="soru8mat" element={<Soru8mat/>} />

        <Route path="soru5fen" element={<Soru5fen/>} />
        <Route path="soru6fen" element={<Soru6fen/>} />
        <Route path="soru7fen" element={<Soru7fen/>} />
        <Route path="soru8fen" element={<Soru8fen/>} />

        <Route path="soru5sosyal" element={<Soru5sosyal/>} />
        <Route path="soru6sosyal" element={<Soru6sosyal/>} />
        <Route path="soru7sosyal" element={<Soru7sosyal/>} />
        <Route path="soru8sosyal" element={<Soru8sosyal/>} />

        <Route path="soru5ing" element={<Soru5ing/>} />
        <Route path="soru6ing" element={<Soru6ing/>} />
        <Route path="soru7ing" element={<Soru7ing/>} />
        <Route path="soru8ing" element={<Soru8ing/>} />
        
        <Route path="soru5din" element={<Soru5din/>} />
        <Route path="soru6din" element={<Soru6din/>} />
        <Route path="soru7din" element={<Soru7din/>} />
        <Route path="soru8din" element={<Soru8din/>} />
        
    </Routes>
</BrowserRouter>);

