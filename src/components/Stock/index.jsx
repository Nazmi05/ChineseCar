import "./data.js"
import "./index.css"
import { stockData } from "./data.js";






export default function Stock() {
    const data = stockData()

    return (
        <>
            <section className="stock mt-32" >
                <div className="container mx-auto px-4 max-w-[1240px] lg:px-0 ">
                    <div className="stock__content   ">
                        <div className="stock__config   lg:flex lg:items-center lg:justify-between lg:w-full ">
                            <p className=" text-[24px] font-[700]  " >Авто в наличии</p>
                            <a href="#" className="stock__link font-[600] text-[14px] border border-[#1F1F1E] px-[103px] py-[12px] mt-[32px] lg:m-0 flex justify-center rounded-lg hover:bg-[#1f1f1f] hover:text-white transition-all duration-500  " >Конфигуратор авто</a>
                        </div>





                        <div className="cards__content  lg:grid lg:grid-cols-4 lg:gap-[24px] lg:mt-[28px] ">
                            {data.map((item) => (
                                <div className="stock__wrap mt-[20px] lg:mt-0  " key={item.id}>

                                    <div className="cards__cards bg-white mt-[32px] w-full lg:mt-0 rounded-lg shadow-[0_31px_40px_-30px_rgba(16,16,16,0.07),_0_6px_15px_0_rgba(0,0,0,0.05)]">
                                        <img
                                            className=" rounded-tl-lg rounded-tr-lg w-full "
                                            src={item.picture}
                                            alt={item.name} />

                                        <div className="cards__title px-[14px] py-[15px] flex flex-col ">

                                            <p className=" text-[#bbbbba] font-[400] text-[14px] " >{item.class}</p>
                                            <h2 className=" font-[700] text-[20px] text-[#1f1f1f] mt-[2px] " > {item.name} </h2>
                                            <h3 className=" font-[700] text-[18px] mt-[10px] " > {item.price} </h3>
                                            <a href="#" className=" font-[600] text-[14px] border border-[#1f1f1f] px-[120px] py-[12px] mt-[23px] rounded-lg flex justify-center hover:bg-[#1f1f1f] hover:text-white transition-all duration-500 " >Подробнее</a>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

        </>
    )

}
