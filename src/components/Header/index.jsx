import React, {useState} from 'react';
import './style.scss'
import BurgerMenu from './BurgerMenu'

const Header = ()=>{
  const [isVisible,setVisible]= useState(false);

  const toggleElement=()=>{
    setVisible((prev)=>!prev);

  }
  if(isVisible){
    document.body.style.overflow='hidden'
  }
  else{
    document.body.style.overflow='auto'
  }

  return (
    <section className="Header">
 <div className="header__con flex align-center justify-between mx-[12px]  md:mx-[100px] items-center pt-2 max-w-[1440px]">
        <img src="/MainLogo.png" alt="Logo"/>
         <div className="header__list hidden lg:flex 
        gap-[50px] xl:ml-[-280px] ">
            <li className="header__item">Конфигуратор</li>
            <li className="header__item">О компании</li>
            <li className="header__item">Авто в наличии</li>
            <li className="header__item">Контакты</li>
         </div>
         <div className="header__contact hidden lg:flex flex-col ">
            <div className="header__num">+7 777 123 34 56</div>
            <p className="header__time text-[11px]">Пн-Вс 10:00-21:00</p>
         </div>
         <button onClick={toggleElement}
          className="header__burger 
        sm:block 
         lg:hidden">
         <svg width="35" height="13" viewBox="0 0 35 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.85645 11.5L33.8564 11.5" stroke="#F8FAFC" strokeWidth="2" strokeLinecap="round" />
  <path d="M1.85645 1.5L33.8564 1.5" stroke="#F8FAFC" strokeWidth="2" strokeLinecap="round" />
</svg>
         </button>
         {isVisible && <BurgerMenu  isVisible={isVisible} toggleElement={toggleElement}/>}
       
    </div>
    </section>
  )
}




export default Header