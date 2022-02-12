import Campaigns from "./Campaigns";
import campaignDatas from 'api/campaigns.json'
import categoryDatas from 'api/categories.json'
import productDatas from 'api/products.json'
import { useEffect, useState } from "react";
import Title from "./ui/Title";
import ProductItem from "./ui/ProductItem";
import axios from "axios";
import { BASE_API_URL } from "constants/constants";
import Basket from "./ui/products/Basket";
import Categories from "./ui/products/Categories";

export default function Products() {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [basketItems, setBasketItems] = useState([])

    const userId = localStorage.getItem("nameIdentifier");
    const token = `Bearer ${localStorage.getItem("token")}`;

    const addToCart = (cartItem) => {
        axios.post(BASE_API_URL + 'baskets/addbasket', { userId }, {
            headers: {
                'Authorization': token
            }
        }).then((response) => {
            cartItem.basketId = response.data.basketId;
            axios.post(BASE_API_URL + 'baskets/addbasketitem', cartItem, {
                headers: {
                    'Authorization': token
                }
            }).then((response) => {
                setBasketItems([...basketItems, response.data])
            })
        })
    }

    useEffect(() => {
        axios.all([
            axios.get(BASE_API_URL + "Baskets/GetUserBasketItems", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }),
            axios.get(BASE_API_URL + 'categories/getall'),
            axios.get(BASE_API_URL + 'Products/GetProductsByCategory/su-icecek')
        ]).then((response) => {
            setBasketItems(response[0].data);
            setCategories(response[1].data);
            setProducts(response[2].data);
        })
    }, [])

    return (
        <>
            <div className="container mx-auto md:pt-8" >
                <Campaigns campaignDatas={campaignDatas} />
                {/* Main container */}
                <div className="grid grid-cols-2 gap-x-44 md:grid-cols-3 pt-8">
                    {/* Categories */}
                    <Categories categories={categories} />
                    {/* Products */}
                    <div className="-mx-40">
                        <Title extraClass={`-mx-5 md:mx-0`}>Ürünler</Title>
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-0.1 rounded-lg overflow-hidden">
                            {products.length && products.map((product, index) => (
                                <ProductItem key={index} product={product} addToCart={addToCart} />
                            ))}
                        </div>
                    </div>
                    {/* Basket */}
                    {basketItems.length < 0 && (
                        <div className="mx-auto px-3">
                            <img className="w-24 mx-auto" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA3MiA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wLjUgMjVINzAuNzc1NlY4NS4yMzQ3SDAuNVYyNVoiIGZpbGw9IiNEQkRCRkYiLz4KPHBhdGggZD0iTTIzLjA4MzggMC4zMzMwMDhINDcuOTg3TDUyLjk3NTQgNS4zODlWMjUuNDMxNkw0Ny41NzgxIDI1LjQxNzRWNS4zNzgzNEgyMy41MjQ3VjI1LjQxNzRMMTguMDI3OCAyNS40MzE2VjUuMzc4MzRMMjMuMDgzOCAwLjMzMzAwOFoiIGZpbGw9IiNEQkRCRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI3MSIgaGVpZ2h0PSI4NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" />
                            <div>
                                <p className="pt-5 pb-3 text-brand-color font-semibold">Sepetiniz şu an boş</p>
                                <p className="text-sm font-medium text-gray-500">Sipariş vermek için sepetinize ürün ekleyin</p>
                            </div>
                        </div>
                    )}
                    <div className="hidden md:block w-[300px]">
                        <Title>Sepetim</Title>
                        <div className={`border-2 ${basketItems.length < 0 ? 'p-14' : 'p-2'} bg-white border-brand-yellow rounded-lg flex flex-col justify-center`}>
                            {basketItems.map((basket) => (
                                <Basket basket={basket} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
