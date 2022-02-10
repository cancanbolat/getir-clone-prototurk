import Campaigns from "./Campaigns";
import campaignDatas from 'api/campaigns.json'
import categoryDatas from 'api/categories.json'
import productDatas from 'api/products.json'
import { useEffect, useState } from "react";
import Favorites from "./Favorites";
import Title from "./ui/Title";
import { Link } from "react-router-dom";
import ProductItem from "./ui/ProductItem";

export default function Products() {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        setCategories(categoryDatas)
        setProducts(productDatas)
    }, [])

    return (
        <>
            <div className="container mx-auto md:pt-8" >
                <Campaigns campaignDatas={campaignDatas} />
                {/* Main container */}
                <div className="grid grid-cols-2 gap-x-44 md:grid-cols-3 pt-8">
                    {/* Categories */}
                    <div className="flex flex-col">
                        <Title extraClass={`-mx-5 md:mx-0`}>Kategoriler</Title>
                        <div className="bg-white w-60 rounded-md">
                            {categories.map((category, index) => (
                                <a key={index} className="flex gap-x-3 p-1 mt-2 cursor-pointer hover:bg-gray-100 transition">
                                    <img className="w-8 h-8 bg-cover rounded border border-x-gray-200" src={category.image} />
                                    <p className="self-center font-semibold text-sm text-gray-700">{category.title}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Products */}
                    <div className="-mx-40">
                        <Title extraClass={`-mx-5 md:mx-0`}>Ürünler</Title>
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-0.1 rounded-lg overflow-hidden">
                            {products.length && products.map((product, index) => (
                                <ProductItem key={index} product={product} />
                            ))}
                        </div>
                    </div>
                    {/* Basket */}
                    <div className="hidden md:block w-[300px]">
                        <Title>Sepetim</Title>
                        <div className="border-2 p-14 bg-white border-brand-yellow rounded-lg flex flex-col justify-center">
                            <div className="mx-auto px-3">
                                <img className="w-24 mx-auto" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA3MiA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wLjUgMjVINzAuNzc1NlY4NS4yMzQ3SDAuNVYyNVoiIGZpbGw9IiNEQkRCRkYiLz4KPHBhdGggZD0iTTIzLjA4MzggMC4zMzMwMDhINDcuOTg3TDUyLjk3NTQgNS4zODlWMjUuNDMxNkw0Ny41NzgxIDI1LjQxNzRWNS4zNzgzNEgyMy41MjQ3VjI1LjQxNzRMMTguMDI3OCAyNS40MzE2VjUuMzc4MzRMMjMuMDgzOCAwLjMzMzAwOFoiIGZpbGw9IiNEQkRCRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI3MSIgaGVpZ2h0PSI4NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" />
                                <div>
                                    <p className="pt-5 pb-3 text-brand-color font-semibold">Sepetiniz şu an boş</p>
                                    <p className="text-sm font-medium text-gray-500">Sipariş vermek için sepetinize ürün ekleyin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
