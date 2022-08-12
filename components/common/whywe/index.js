import Image from "next/image"
import ad from "../../../img/ad1.png"


export default function WhyWe() {
    return (
        <section id="whyme" className=" bg-white shadow-2xl rounded-lg p-5 mt-5">
                <div className="flex flex-row gap-x-5">
                    <div>
                    <Image className='bg-tramsparent'
                            alt="ATB"
                            src={ad}                           
                            priority
                        />
                    </div>
                    <div>
                    <Image className='bg-tramsparent'
                            alt="ATB"
                            src={ad}                           
                            priority
                        />
                    </div>
                    <div>
                    <Image className='bg-tramsparent'
                            alt="ATB"
                            src={ad}                           
                            priority
                        />
                    </div>
                    <div>
                    <Image className='bg-tramsparent'
                            alt="ATB"
                            src={ad}                           
                            priority
                        />
                    </div>
                    <div>
                    <Image className='bg-tramsparent'
                            alt="ATB"
                            src={ad}                           
                            priority
                        />
                    </div> <div>
                    <Image className='bg-tramsparent'
                            alt="ATB"
                            src={ad}                           
                            priority
                        />
                    </div>
                    
                    

                </div>
        </section>
    )
} 