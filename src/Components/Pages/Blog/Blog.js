import React from 'react';
import useTitle from '../../../Hooks/Title';

const Blog = () => {

    useTitle('Blog');


    //

    // window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    // 

    return (

        <div>
            <section className="bgbg m-0 p-0">

                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">

                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase my-2">Blog</p>

                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Some 'MERN-STACK' Questions</h2>

                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">

                        {/* Q-1 */}
                        <div>

                            <h3 className="font-semibold text-black">
                                Difference between SQL and NoSQL.
                            </h3>

                            <p className="mt-1 text-white text-justify">
                                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                            </p>

                        </div>

                        {/* Q-2 */}
                        <div>

                            <h3 className="font-semibold text-black">
                                What is JWT, and how does it work ?
                            </h3>

                            <p className="mt-1 text-white text-justify">
                                What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                            </p>

                        </div>

                        {/* Q-3 */}
                        <div>

                            <h3 className="font-semibold text-black">
                                What is the difference between javascript and NodeJS ?
                            </h3>

                            <p className="mt-1 text-white text-justify">
                                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                            </p>

                        </div>

                        {/* Q-4 */}
                        <div>

                            <h3 className="font-semibold text-black">
                                How does NodeJS handle multiple requests at the same time ?
                            </h3>

                            <p className="mt-1 text-white text-justify">
                                How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                            </p>

                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default Blog;

