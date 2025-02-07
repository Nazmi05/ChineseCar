 import './style.scss'
 import Logo1 from '../../assets/logo1.png'
 import Logo2 from '../../assets/logo2.png'
 import Logo3 from '../../assets/logo3.png'
 import Logo4 from '../../assets/logo4.png'
 import Logo5 from '../../assets/logo5.png'

 const Logos=()=>{
    return (
        <section className="Logos items-center">
       <div className="Logos-con flex flex-col py-[50px] items-center
   md:flex md:flex-row md:justify-around md:mt-[50px] md:mb-[175px]">
        <img src={Logo1} alt="Logo" />
        <img src={Logo2} alt="Logo2" />
        <img src={Logo3} alt="Logo3" />
        <img src={Logo4} alt="Logo4" />
        <img src={Logo5} alt="Logo5" />
       </div>
        </section>
    )
 }

 export default Logos