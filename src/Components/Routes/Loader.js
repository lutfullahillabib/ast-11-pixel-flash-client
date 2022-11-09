
const threeServices =
    async () => {
        return fetch('http://localhost:5000/services')
    };

const allServices =
    async () => {
        return fetch('http://localhost:5000/allservices')
    };

// const allCategories =
//     async () => {
//         return fetch('https://learn-with-labib-server.vercel.app/categories')
//     };

// const singleCategory =
//     async ({ params }) => {
//         return fetch(`https://learn-with-labib-server.vercel.app/categories/${params.name}`)
//     };

// const singleCourse =
//     async ({ params }) => {
//         return fetch(`https://learn-with-labib-server.vercel.app/courses/${params.id}`)
//     };

export { threeServices, allServices };
