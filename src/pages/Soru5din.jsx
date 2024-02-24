import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { correctAnswer,wrongAnswer,ready } from '../components/sounds/SoundEffects';
import { useNavigate } from 'react-router-dom';
 

function Soru5din() {
  // Resimlerin yollarını ve numaralarını içeren bir dizi (örneğin, 32 resim)
  const images = Array.from({ length: 36 }, ( _, index) => ({
    path: `/images/din5images/image${index + 1}.png`,
    number: index + 1
  }));

  // Seçili seçenekleri ve resmin arka plan rengini saklamak için bir state tanımlayalım
  const [selectedOptions, setSelectedOptions] = useState(Array(images.length).fill(null));
  const [imageBackgrounds, setImageBackgrounds] = useState(Array(images.length).fill(''));
  const [puan, setpuan] = useState(0);

  // Radyo düğmesi seçeneğini ve resmin arka plan rengini güncellemek için bir fonksiyon
  const handleOptionChange = (index, option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = option;
    setSelectedOptions(newSelectedOptions);

    // Resmin numarası 1-9 aralığında ve seçenek "A" ise arka plan rengini yeşil yap
    // Resmin numarası 10-18 aralığında ve seçenek "B" ise arka plan rengini yeşil yap  
    if (option === 'A' && index >= 1 && index <= 9) {
      const newImageBackgrounds = [...imageBackgrounds];
      newImageBackgrounds[index] = 'green';
      correctAnswer();
      setpuan( puan => puan+1);
      setImageBackgrounds(newImageBackgrounds);
    } else if (option !== 'A' && index >= 1 && index <= 9)  {
      const newImageBackgrounds = [...imageBackgrounds];
      newImageBackgrounds[index] = 'red';
      wrongAnswer();
      setpuan( puan => puan-1);
      setImageBackgrounds(newImageBackgrounds);
     }  
    if (option === 'B' && index >= 10 && index <= 17) {
      const newImageBackgrounds = [...imageBackgrounds];
      newImageBackgrounds[index] = 'green';
      correctAnswer();
      setpuan( puan => puan+1);
      setImageBackgrounds(newImageBackgrounds);
    } else if (option !== 'B' && index >= 10 && index <= 17) {
      const newImageBackgrounds = [...imageBackgrounds];
      newImageBackgrounds[index] = 'red';
      setpuan( puan => puan-1);
      wrongAnswer();
      setImageBackgrounds(newImageBackgrounds);
    }  
    if (option === 'C' && index >= 18 && index <= 26) {
      const newImageBackgrounds = [...imageBackgrounds];
      newImageBackgrounds[index] = 'green';
      correctAnswer();
      setpuan( puan => puan+1);
      setImageBackgrounds(newImageBackgrounds);
    } else if (option !== 'C' && index >= 18 && index <= 26) {
      const newImageBackgrounds = [...imageBackgrounds];
      newImageBackgrounds[index] = 'red';
      wrongAnswer();
      setpuan( puan => puan-1);
      setImageBackgrounds(newImageBackgrounds);
    }  
    if (option === 'D' && index >= 27 && index <= 36) {
      const newImageBackgrounds = [...imageBackgrounds];
      newImageBackgrounds[index] = 'green';
      correctAnswer();
      setpuan( puan => puan+1);
      setImageBackgrounds(newImageBackgrounds);
    } else if (option !== 'D' && index >= 27 && index <= 36) {
      const newImageBackgrounds = [...imageBackgrounds];
      newImageBackgrounds[index] = 'red';
      wrongAnswer();
      setpuan( puan => puan-1);
      setImageBackgrounds(newImageBackgrounds);
    }  
  };
  

  const [limitedQues, setlimitedQues] = useState(-1);
  const [randomIndex, setRandomIndex]=useState(null);

  const handleClick = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
       setRandomIndex(randomIndex);
       setlimitedQues(limitedQues => limitedQues+1)
       console.log(limitedQues);
       setCount(60);
   };

   useEffect(() => {
    handleClick();
    //SADECE AÇILIŞTA RANDOM SAYI URETILMESI ICIN 
  }, []);

  const [count, setCount] = useState(5);
  const Counter = () => {
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);
  
      const timeout = setTimeout(() => {
        clearInterval(interval);
      }, 6000);
  
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }, []);
  
    return (
      <div>
        {(count>0) && <h4>KALAN : {count}</h4>}
      </div>
    );
  }
    
   return (
    <div style={{margin:"auto 1rem"}}>
        <div style={{margin:"auto 1rem"}} >
        <h2 style={{backgroundColor:"lightblue", padding:"1rem" ,color:"white", margin:"auto"}} >5.SINIF DİN KÜLTÜRÜ SORULAR</h2>
        </div>
      
      <div style={{margin:"auto 1rem", border:"2px solid lightblue"}} >
        <div className="flex-column d-flex align-items-center  ">
          <div style={{padding:".5rem",border:"3px solid grey",width:"fit-content",margin:"1rem auto",borderRadius:"8px",boxShadow:"0px 0px 5px",alignItems:"center" , backgroundColor: imageBackgrounds[randomIndex] }}>
            <img  src={`/images/din5images/image${randomIndex + 1}.png`} alt={`Random Image`} />
            <div >
              {['A', 'B', 'C', 'D']?.map((option,index) => (
                <label key={index} style={{padding:"1rem",fontSize:"1.5rem" }}>
                  <input
                    type="radio"
                    name={`image-${randomIndex}-options`}
                    value={option}
                    checked={selectedOptions[randomIndex] === option}
                    onChange={() => handleOptionChange(randomIndex, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <Counter  />
          <p style={{color:"white",fontSize:"2rem", marginLeft:"auto", padding:"1rem",backgroundColor:"lightblue"}}> Puan Durumu: {puan}</p>
          
          {((count<=0) )&&<p style={{color:"white",fontSize:"2rem", marginLeft:"auto", padding:"1rem",backgroundColor:"lightblue"}}> {puan} puan kazandın. Tebrikler !</p>}
  
          {((limitedQues<6) && (count>0) )&&( <button style={{backgroundColor:"lightblue",color:"white",padding:".5rem"}}   onClick={handleClick}>SONRAKİ SORU</button>)}
        </div>
        <button onClick={() => window.location.reload(false)} style={{backgroundColor:"lightblue",color:"white",padding:".5rem"}} >SAYFAYI YENİLE</button> 
   
  </div>
    </div>
  );
}

export default Soru5din;
