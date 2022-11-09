import React from 'react';

const AboutMe = () => {

    return (

        <div className='py-5' id='aboutMe'>

            <h1 className="text-7xl text-center font-mono tracking-widest mt-5 mb-10">
                ABOUT
            </h1>

            <div className="flex flex-col lg:flex-row mx-5 justify-center items-center gap-3">

                <div className="lg:w-1/2 flex items-center justify-center w-full">


                    <img
                        src={
                            "https://images.pexels.com/photos/4161786/pexels-photo-4161786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        }
                        alt=""
                        className="w-[90%] h-full rounded-xl"
                    />

                </div>


                <div className="lg:w-1/2 my-5">

                    <h3 className="text-4xl font-[Caveat] mb-5">About Me</h3>

                    <h1 className="text-6xl mb-10 font-serif text-center">
                        "If you can See it,
                        <br />
                        You can Shoot it."

                    </h1>

                    <p className="text-xl text-justify">
                        Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. It is employed in many fields of science, manufacturing (e.g., photolithography), and business, as well as its more direct uses for art, film and video production, recreational purposes, hobby, and mass communication.

                        Typically, a lens is used to focus the light reflected or emitted from objects into a real image on the light-sensitive surface inside a camera during a timed exposure. With an electronic image sensor, this produces an electrical charge at each pixel, which is electronically processed and stored in a digital image file for subsequent display or processing. The result with photographic emulsion is an invisible latent image, which is later chemically "developed" into a visible image, either negative or positive, depending on the purpose of the photographic material and the method of processing. A negative image on film is traditionally used to photographically create a positive image on a paper base, known as a print, either by using an enlarger or by contact printing.

                    </p>

                </div>

            </div>
        </div>

    );
};

export default AboutMe;

