export default function SignInButton({ onClickAction }) {
    return (
        <button onClick={onClickAction} className="bg-brand-yellow transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color">
            Kaydol
        </button>
    );
}
