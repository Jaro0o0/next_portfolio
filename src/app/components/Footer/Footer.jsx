import ShootingStar from "../ShootingStars/ShootingStars";

function Footer() {
    return ( 
        <>
            <section className="py-[120px] pb-[20px] px-0 ">
                <div className="container  mx-auto max-w-7xl  border border-[#171717] rounded-md p-8 relative">
                    <ShootingStar/>
                    {/* TEXT_BOX */}
                    <div className="mb-5">
                        <h1 className="text-white text-5xl">Lets build something together</h1>
                        <span>Send email for cooperation</span>
                        <button>Send</button>
                    </div>
                    {/* COL_TWO */}
                    <div className=" border-t border-[#171717]  flex justify-between  p-4">
                        <h1 className="text-white">Maciej Lach</h1>
                        {/* NAV */}
                        <div className="flex gap-3 ">
                            {/* NAV_ONE */}
                            <div className="flex flex-col">
                                <span className="text-white">Navigate</span>
                                <ul>
                                    <li>Home</li>
                                </ul>
                            </div>
                            {/* NAV_Two */}
                            <div className="flex flex-col">
                                <span className="text-white">Projects</span>
                                <ul>
                                    <li>Medical</li>
                                    <li>SocialMedia</li>
                                    <li>E-commerce</li>
                                    <li>Weather</li>
                                    <li>Gym website</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
     );
}

export default Footer;