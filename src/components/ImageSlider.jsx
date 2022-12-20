import React, {useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const ImageSlider = () => {

    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80',
            title: 'Taquitos'
        },
        {
            url: 'https://images.unsplash.com/photo-1625166913168-9135c6ffddcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            title: 'Cosita Rica'
        },
        {
            url: 'https://images.unsplash.com/photo-1585975754487-25489eabf36a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            title: 'Desayuno riki'
        },
        {
            url: 'https://images.unsplash.com/photo-1625166641130-089d937ffa7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            title: 'Yeah'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);    

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex)
    }
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
        <div className='absolute top-[80%]'>
            <h2 className='font-bold text-2xl text-white shadow-md'></h2>
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
    </div>
    
  )
}

export default ImageSlider