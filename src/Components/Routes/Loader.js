
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

const updateReview =
    async ({ params }) => {
        return fetch(`http://localhost:5000/myReview/${params.id}`)
    };

export { threeServices, allServices, singleServiceDetails, updateReview };

