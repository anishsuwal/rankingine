import Image from "next/image"
import contactusimg from "../../../img/contactus-img.png"



export default function ContactUs() {

    return (
        <section id="contactus" className="pt-28">
           
                <div><h1 className="text-2xl md:text-5xl  font-semibold pb-20 ">Contact Us</h1>
                    <div  className="grid grid-row grid-row-6 grid-flow-col gap-4">
                        <div className="bg-white-300 rounded-lg">
                            <input
                                type="text"
                                className="
                                form-control
                                block 
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-red-400 focus:outline-none
                            "
                                id="exampleText0"
                                placeholder="Name"
                            />
                        </div>
                        <div className="bg-white-300 rounded-lg">
                            <input
                                type="text"
                                className="
                                form-control
                                block 
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-red-400 focus:outline-none
                            "
                                id="exampleText0"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="bg-white-300 col-span-2 rounded-lg">
                            <textarea
                                id="message" rows="4"
                                className="block p-2.5 
                                w-full
                                text-sm
                                text-gray-700
                                bg-white bg-clip-padding 
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-red-400 focus:outline-none"
                                placeholder="Message">

                            </textarea>
                        </div>
                        <div className="row-start-4 rounded-lg">
                        <button className="text-base font-medium rounded-full border-red-400 border shadow-2xl  px-7 mx-4 lg:w-40 h-10 w-full    mt-5 lg:mt-0
                        text-center justify-center items-centercursor-pointer hover:bg-red-500 bg-transparent">
                        Send 
                        </button>
                        </div>
                        <div className="bg-white-500 row-span-1 rounded-lg"><input
                            type="text"
                            className="
                                form-control
                                block 
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-red-400 focus:outline-none
                            "
                            id="exampleText0"
                            placeholder="Email"
                        /></div>
                        <div className="bg-white-300 rounded-lg"><input
                            type="text"
                            className="
                                form-control
                                block 
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-red-400 focus:outline-none
                            "
                            id="exampleText0"
                            placeholder="Subject"
                        /></div>

                        <div className="row-span-3 ">
                            <Image className="w-16 md:w-32 lg:w-48"
                                alt="ATB"
                                src={contactusimg}
                                width={589}
                                height={612}
                                layout='responsive'
                            />
                        </div>
                    </div>
                </div>
        </section>

    )
}


