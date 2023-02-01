import maxence from './maxence.png';
import maxenceGlasses from './maxence-glasses.png';
import { useState } from 'react';

export function ClickablePicture() {
  const [img, setImage] = useState(maxence);

  function handleClickImage() {
    if (img === maxence) {
      setImage(maxenceGlasses);
    } else {
      setImage(maxence);
    }
  }

  return <img src={img} alt="glasses" onClick={handleClickImage} />;
}
