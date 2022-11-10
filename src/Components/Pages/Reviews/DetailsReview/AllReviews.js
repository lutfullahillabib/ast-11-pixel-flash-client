import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';


const AllReviews = ({ serviceDetails }) => {

    const { user } = useContext(AuthContext);

    const { name, img, description, price, rating } = serviceDetails;

    const [reviews, setReviews] = useState([]);

    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        const url = `http://localhost:5000/reviews?serviceName=${name}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                setRefresh(!refresh);
            });
    }, [name, refresh]);
    // console.log(reviews);

    return (

        <div>

            <div className='p-2'>

                <h1 className='text-white font-semibold text-xl '> All Available Reviews: {reviews?.length ? reviews.length : "0"}</h1>

                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                        serviceDetails={serviceDetails}></ReviewCard>)
                }

            </div>


            {
                user?.email ?
                    <>
                        <ReviewForm serviceDetails={serviceDetails} ></ReviewForm>
                    </>
                    :
                    <>
                        <Link to='/login'>

                            <button
                                className="block w-11/12 mx-auto p-3 text-center my-5 text-white bg-blue-900 rounded-lg font-medium hover:text-black hover:bg-blue-300 duration-1000">
                                To Give A Review, Please, Login First.
                            </button>

                        </Link>


                    </>
            }


        </div>

    );
};

export default AllReviews;


