import {useState, useEffect} from 'react';
import "./App.css"

export default function Photo() {

  const [photoInfo, setPhotoInfo] = useState([]);

  useEffect(function(){
    fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
      .then(response => response.json())
      .then(data => {
          document.body.style.backgroundImage = `url(${data.urls.full})`;
          console.log(data);
          setPhotoInfo([data.location.name, data.user.first_name+" "+data.user.last_name]);
        }
    );
  },[]);

  

  return (
    <>
    <div className="photolocation">
      <h3 id="location-text">{(photoInfo[0])?photoInfo[0]:"Unknown Location"}</h3>
    </div>
    <div className="photocredit">
      <h3 id="credit-text">{photoInfo[1]}</h3>
    </div>
    </>
  );
}
