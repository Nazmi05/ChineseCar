
import { useState } from "react"


import white from "../../assets/Drive/white_car.svg"
import black from "../../assets/Drive/black_car.svg"
import green from "../../assets/Drive/geen_car.svg"
import prev from "../../assets/Drive/Icon/Icon/arrow.svg"
import next from "../../assets/Drive/Icon/arrow.svg"
import icon from "../../assets/Drive/Icon/360.svg"

const images = [

    {
        id: 1,
        pic: white,
        color: 'bg-grey-200'
    },
    {
        id: 2,
        pic: black,
        color: '#000000'
    },
    {
        id: 3,
        pic: green,
        color: '#638175'
    },



]





export default function Drive() {
    const [active, setActive] = useState(3)
    const selectedImage = images.find((color) => color.id === active)?.pic;

    return (

        // ШАПКА

        <section className="drive mt-20  ">
            <div className="container max-w-[1200px] w-full mx-auto px-4">
                <div className="drive__content  ">
                    <div className="drive__text lg:flex lg:justify-between items-center">
                        <h2 className="drive__title text-3xl font-light text-[#007029] lg:text-[48px] lg:leading-[117%] ">Выбери свой цвет</h2>
                        <p className="drive__desc text-base  mt-6 lg:w-[513px] lg:text-[17px] leading-[160%] lg:mt-0   ">Минималистичный дизайн. Мощное исполнение. LiXiang L9 переносит впечатления от вождения в постбензиновую эпоху.</p>
                    </div>




                    {/* АВТО */}
                    <div className="drive__model mt-10 relative">
                        <img
                            src={selectedImage}
                            key={active}
                            alt={active}
                            className={` w-full h-full object-cover transition-opacity  duration-500 ease-in-out opacity-100`}
                        />
                    </div>


                    {/* ИНПУТЫ ЦВЕТОВ и СМЕНА */}

                    <div className="drive__colors flex gap-3 items-center justify-center mt-8  lg:justify-between  " >
                        <div className="drive__icon  hidden lg:block ">
                            <img src={icon} alt="icon_360" />
                        </div>
                        <div className="drive__inputs lg: flex gap-3 items-center justify-center  ">

                            {images.map((item) => (
                                <div key={item.id} >
                                    <input
                                        type="radio"
                                        className=" appearance-none w-5 h-5 transition   rounded-full bg-gray-200 focus:ring-2 focus:ring-[#007029] ring-offset-2 ring-1 ring-gray-500"
                                        onChange={() => { setActive(item.id) }}
                                        checked={active === (item.id)}
                                        value={item.id}
                                        style={{ backgroundColor: (item.color) }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* ПРОЧИЕ */}
                    <div className="drive__mod max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:items-end lg:flex lg:gap-[56px]  lg:items-center lg:mt-[40px] ">

                        <div className="drive__swipes flex gap-3 items-center mt-11 lg:mt-0 ">
                            <img src={next} alt="next" className="w-4 h-auto hover:bg- focus:bg-blue-500 " />
                            <img src={prev} alt="prev" className="w-4 h-auto  " />
                        </div>
                        <div className="drive__models flex gap-8 item-center justify-center mt-8 lg:mt-0 ">
                            <button className="drive__about font-medium text-gray-500 hover:text-black focus:text-black focus:font-bold transition "  >LiXiang L9</button>
                            <button className="drive__about font-medium text-gray-500 hover:text-black focus:text-black focus:font-bold transition ">Hongqi</button>
                            <button className="drive__about font-medium text-gray-500 hover:text-black  focus:text-black focus:font-bold transition ">Geely</button>
                            <button className="drive__about text-gray-500 hover:text-black focus:text-black  focus:font-bold transition ">Zeekr 001</button>
                        </div>
                    </div>











                </div>
            </div>
        </section>



    )

}