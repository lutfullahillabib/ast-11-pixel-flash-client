
const threeServices =
    async () => {
        return fetch('https://ast-11-pixel-flash-server.vercel.app/services')
    };

const allServices =
    async () => {
        return fetch('https://ast-11-pixel-flash-server.vercel.app/allservices')
    };

const singleServiceDetails =
    async ({ params }) => {
        return fetch(`https://ast-11-pixel-flash-server.vercel.app/allservices/${params.id}`)
    };

const updateReview =
    async ({ params }) => {
        return fetch(`https://ast-11-pixel-flash-server.vercel.app/myReview/${params.id}`)
    };

export { threeServices, allServices, singleServiceDetails, updateReview };

