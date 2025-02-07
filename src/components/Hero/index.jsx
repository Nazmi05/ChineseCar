 import './style.scss'
 import insta from '../../assets/insta__logo.png'
 import whatsapp from '../../assets/whatsapp.png'
 import teleg from '../../assets/teleg.png'

 const Hero =()=>{
    return (
        <section className="Hero flex flex-col ">
        <div className="hero-con mt-[130px] items-center justify-items-center">
        <div className="hero__text items-center justify-items-center">
            <h1 className="hero__title text-[32px] md:text-[66px] max-w-[343px] md:max-w-[500px] font-normal text-center text-white ">Berg Group
                <br></br> Авто из Китая </h1>
            <p className="hero__des max-w-[343px]  md:max-w-[674px] text-[16px] md:text-[18px] font-normal text-center text-white">Бы получите авто по самой лучшей цене, в кратчайшие сроки и верно растаможенным для поставновки на учет в РФ. С нами вы можете быть спокойны за технические и юридические аспекты .</p>
        </div> 
         <div className="hero__btns flex  flex-col mt-[50px] gap-[15px] md:flex md:flex-row  ">
            <button className="hero__avto 
            text-[15px] rounded-[40px] bg-white  text-black font-bold 
            px-[55px] py-[13px] w-[343px] 
             md:px-[22px] md:w-[190px] md:rounded-[12px]">Конфигуратор авто</button>
            <button className="back__call text-[15px] rounded-[40px] bg-transparent border-white border-[2px]
              text-white font-bold  px-[60px] py-[13px] w-[343px]
               md:px-[22px] md:w-[180px] md:rounded-[12px]">Обратный звонок</button>
         </div>
        </div>
        <div className="hero__media flex  mt-[120px] pb-[30px] gap-[30px] items-center self-center
         xl:flex-col xl:self-end xl:mt-[40px] xl:mr-[100px] xl:pb-[60px]">
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="insta" /></a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="whatsapp" /></a>
            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">  
            <img src={teleg} alt="teleg" /></a>
         </div>

        </section>
    )
 }
 export default Hero