export default function Title({ children, extraClass }) {
    return (
        <h3 className={`text-sm font-semibold mb-3 px-6 md:px-0 ${extraClass}`}>{children}</h3>
    );
}
