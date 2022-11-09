import React from 'react';

const MiddleBanner = () => {
    return (
        <div>
            <div className="h-[80vh] my-5">
                <div
                    className="h-full bg-cover bg-no-repeat bg-center bg-fixed text-white "
                    style={{
                        backgroundImage: `url(${"https://images.pexels.com/photos/1787236/pexels-photo-1787236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
                    }}
                >
                    <div className="bg-gradient-to-r from-black/30 to-black/60 w-full h-full p-5 flex flex-col items-center justify-center">

                        <h1 className="text-4xl font-[Caveat]">Are You Ready?</h1>
                        <h1 className="lg:text-7xl text-4xl font-serif my-3">
                            Capture Your
                            <br />
                            Best Moments.
                        </h1>
                        <p className="text-lg text-justify">
                            It's high time make your wish come true. Take service whatever you want. And Capture your best moments for lifetime.
                        </p>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default MiddleBanner;


