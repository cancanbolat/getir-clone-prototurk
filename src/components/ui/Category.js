export default function Category({category: {id, title, image }}) {
  return (
      <div>
          <a href="#" className="flex flex-col group items-center gap-y-2 text-center p-4 transition hover:bg-purple-50">
            <img src={image} alt={title} className="w-12 h-12 rounded border border-x-gray-200" />
            <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-color tracking-tighter whitespace-nowrap">{title}</span>
          </a>
      </div>
  );
}
