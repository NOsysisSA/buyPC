import React, { useState, useEffect } from 'react';
import './header.css'
function Header() {
  const [dataPcComponents, setDataPcComponents] = useState(null);

  const imgStyle = {
    with:"100px",
    height:"100px"
  }

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/NOsysisSA/data/4d5267c9afe069e0cda8c3f9bb7d0c276260eb36/data.json')
      .then(response => response.json())
      .then(data => {
        setDataPcComponents(data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  return (
    <div>
      <h1>I want to collect PC</h1>
      <div className='main'>
        {dataPcComponents && (
          <div>
            {Object.keys(dataPcComponents).map(key => (
              <div key={key} className={key}>
                <h3>{dataPcComponents[key].name}</h3>
                <p>Price: {dataPcComponents[key].price}</p>
                <a href={dataPcComponents[key].url}><img src={dataPcComponents[key].imgUrl} style={imgStyle}/></a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
