import Title from '../Title'

export default function Categories({categories}) {
    return (
        <div className="flex flex-col">
            <Title extraClass={`-mx-5 md:mx-0`}>Kategoriler</Title>
            <div className="bg-white w-60 rounded-md">
                {categories.map((category, index) => (
                    <a key={index} className="flex gap-x-3 p-1 mt-2 cursor-pointer hover:bg-gray-100 transition">
                        <img src={category.imageUrl} className="w-8 h-8 bg-cover rounded border border-x-gray-200" />
                        <p className="self-center font-semibold text-sm text-gray-700">{category.title}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}
