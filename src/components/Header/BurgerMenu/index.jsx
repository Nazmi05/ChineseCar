import Delete from "../../../assets/MenuDelete.png";
import "./style.scss";
import insta from "../../../assets/insta__logo.png";
import whatsapp from "../../../assets/whatsapp.png";
import teleg from "../../../assets/teleg.png";

const Burger=({isVisible,toggleElement})=>{
  if(!isVisible) return null
  return(
    <section className="Burger  fixed top-0 left-0 items-center justify-center w-full h-full">
      <div className="burger-con bg-black">
        <div className="burger__header flex justify-between px-[10px] pt-[20px]">
        <img src="/MainLogo.png" alt="Logo"/>
        <img src={Delete} alt="delete" className="burger__delete"  onClick={toggleElement}/>
        </div>
        <div className="burger__content flex flex-col items-center">
        <ul className="burger__list flex flex-col mt-[53px] text-white text-xl font-bold text-center gap-y-[23px]">
            <li className="burger__item">Конфигуратор</li>
            <li className="burger__item">О компании</li>
            <li className="burger__item">Авто в наличии</li>
            <li className="burger__item">Контакты</li>
        </ul>
        <hr className="burger__line flex w-full mx-[10px] mt-[40px] border" />
        <div className="burger__data text-center mt-[40px]">
        <h2 className="burger__contact text-2xl text-white font-bold">+7 777 123 34 56</h2>
        <p className="burger__time text-sm font-light text-white">Пн-Вс 10:00-21:00</p>
        </div>
        <div className="burger__media flex mt-[52px] gap-[10px] ">
           <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <img src={insta} alt="insta" /></a>
                      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                      <img src={whatsapp} alt="whatsapp" /></a>
                      <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">  
                      <img src={teleg} alt="teleg" /></a>
        </div>
        <div className="burger__des text-sm text-normal text-white mt-[20px] text-center pb-[120px]">
          © Дизайн Студия “ITMAG”® 2024 <br></br>
        Все права защищены.
        </div>
        </div>
        </div>
        
    </section>
  )
}

export default Burger


