
const threeServices =
    async () => {
        return fetch('http://localhost:5000/services')
    };

const allServices =
    async () => {
        return fetch('http://localhost:5000/allservices')
    };

const singleServiceDetails =
    async ({ params }) => {
        return fetch(`http://localhost:5000/allservices/${params.id}`)
    };

// const singleCourse =
//     async ({ params }) => {
//         return fetch(`https://learn-with-labib-server.vercel.app/courses/${params.id}`)
//     };

export { threeServices, allServices, singleServiceDetails };

