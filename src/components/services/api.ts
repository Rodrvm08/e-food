import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Product {
    id: number;
    price: number;
}

interface Address {
    description: string;
    city: string;
    zipCode: string;
    number: number;
    complement?: string;
}

interface Card {
    name: string;
    number: string;
    code: number;
    expires: {
        month: number;
        year: number;
    };
}

export interface CheckoutRequest {
    products: Product[];
    delivery: {
        receiver: string;
        address: Address;
    };
    payment: {
        card: Card;
    };
}

interface CheckoutResponse {
    orderId: string;
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api-ebac.vercel.app/api/efood/",
    }),
    tagTypes: ['Order'],
    endpoints: (builder) => ({
        purchase: builder.mutation<CheckoutResponse, CheckoutRequest>({
            query: (body) => ({
                url: "checkout",
                method: "POST",
                body,
            })
        })
    })
});

export const { usePurchaseMutation } = api;
export default api;