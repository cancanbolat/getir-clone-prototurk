export default function LogInButton({ onClickAction }) {
    return (
        <button onClick={onClickAction} className="bg-blue-700 bg-opacity-10 px-4 transition-colors hover:bg-blue-700 hover:text-white h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-blue-700">
            <span className="mx-auto">Giriş Yap</span>
        </button>
    );
}
