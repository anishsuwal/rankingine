


import logo from "../../../img/studyabroad.png"
import Image from 'next/image';


export default function Hero() {

    /* useEffect(() => {
 
         if (typeof window != 'undefined')
             var obj = document.getElementById('video');
         obj.playbackRate = 0.75;
     }, []);*/


    return (
        <section id="home" className=" scroll-m-64 mt-5   ">
            <div className="w-full  rounded-lg bg-white shadow-2xl">
                <div className="flex ">
                    <div className="ml-10 w-fit">
                        <header className=" group mt-12">
                            <h1 className="inline-flex text-3xl text-[#d10006] lg:text-5xl">
                                <span className="inline-flex h-14 xl:h-20  overflow-x-hidden animate-type
                                 group-hover:animate-type-reverse   whitespace-nowrap text-brand-accent will-change-transform
                                 text-2xl sm:text-3xl xl:text-5xl font-bold ">
                                    Planning To Study Abroad !!!
                                </span>
                            </h1>
                            <div className="text-[10px] lg:text-sm font-bold uppercase ">
                                One Stop solutions to find all the info you need for Consultancies in NEPAL
                            </div>

                            
                        </header>                       
                        <div className=" flex lg:justify-start  gap-x-5 md:gap-x-10 mt-12">
                            <div >
                                <input className=" items-center  justify-center 
                                px-5 py-2 border-[#d10006] border 
                                text-base font-medium rounded-full w-96 "/>
                            </div>

                            <div >
                                <input className=" items-center  justify-center 
                                px-5 py-2  border-[#d10006] border 
                                text-base font-medium rounded-full  "/>
                            </div>
                            <div >
                                <button
                                    className=" items-center justify-center 
                                px-10 py-2 border-[#d10006] border 
                                text-base font-medium rounded-full 
                                hover:bg-[#d10006]   ">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=" flex-1 items-end justify-end text-right  ">
                        <Image className='bg-tramsparent'
                            alt="ATB"
                            src={logo}
                            width={300}
                            height={300}
                            priority
                        />
                    </div>
                </div>
            </div>

        </section>

    )

}




