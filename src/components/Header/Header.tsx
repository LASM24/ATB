// Header.tsx
"use client";

import { useState, useEffect } from 'react';
import SliderItem from './slider-item';
import SliderThumbnailItem from './slider-thumbnail-item';
import Arrows from './arrows';
import data from '../../api/destinos/imgs.json'; // Importa los datos desde el archivo JSON

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  headerRef: React.RefObject<HTMLDivElement>;
  conocenosRef: React.RefObject<HTMLDivElement>;
  destinosRef: React.RefObject<HTMLDivElement>;
  sobreNosotrosRef: React.RefObject<HTMLDivElement>;
  contactoRef: React.RefObject<HTMLDivElement>;
}

type DestinationMap = {
  [key: number]: React.RefObject<HTMLDivElement>;
};

const Header: React.FC<HeaderProps> = ({
  scrollToSection,
  headerRef,
  conocenosRef,
  destinosRef,
  sobreNosotrosRef,
  contactoRef
}) => {
  const [itemActive, setItemActive] = useState<number>(1);
  const [sliderItems, setSliderItems] = useState<any[]>([]);
  const countItems = sliderItems.length;

  useEffect(() => {
    setSliderItems(data); // Asigna los datos desde el archivo JSON
  }, []);

  const onNext = () => {
    setItemActive((prev) => (prev >= countItems ? 1 : prev + 1));
  };

  const onPrevious = () => {
    setItemActive((prev) => (prev === 1 ? countItems : prev - 1));
  };

  const destinationMap: DestinationMap = {
    1: conocenosRef,
    2: destinosRef,
    3: sobreNosotrosRef, //falta inpoortar correctamene los dialogog que se queiren pero ya se abriria por id el boton
    4: contactoRef,
    5: headerRef,  
    6: headerRef, 
  };

  const handleItemClick = (id: number) => {
    setItemActive(id);
    const ref = destinationMap[id];
    if (ref && ref.current) {
      scrollToSection(ref);
    }
  };

  return (
    <header ref={headerRef} className='relative h-screen bg-cover bg-center'>
      <div className='absolute inset-0 flex flex-col justify-center'>
        <ul className='relative h-full'>
          {sliderItems.map((item) => (
            <SliderItem
              key={item.id}
              itemActive={itemActive}
              id={item.id}
              image={item.image}
              brand={item.brand}
              name={item.name}
              desc={item.desc}
              scrollToDestinos={() => handleItemClick(item.id)}
            />
          ))}
        </ul>
        <Arrows onClickPrev={onPrevious} onClickNext={onNext} />
      </div>

      {/* Thumbnails */}
      <ul className='absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full h-[250px] px-14 overflow-y-hidden overflow-x-auto'>
        {sliderItems.map((item) => (
          <SliderThumbnailItem
            key={item.id}
            itemActive={itemActive}
            image={item.image}
            id={item.id}
            name={item.name}
            onClick={() => setItemActive(item.id)}
          />
        ))}
      </ul>
    </header>
  );
};

export default Header;
