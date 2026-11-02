import { useEffect, useRef } from 'react'
import './LoginModal.css'

export default function LoginModal({onClose}){
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog.open) {
        dialog.showModal();
        }

        return () =>{
            if(dialog.open)
                dialog.close();
        }
    }, [])

    function handleSubmit(event){
        event.preventDefault()
    };

      function handleBackdropClick(event) {
        if (event.target === event.currentTarget) {
            event.currentTarget.close();
        }
    }

    return (
        <dialog
            ref={dialogRef}
            className="login-modal"
            onClose={onClose}
            onClick={handleBackdropClick}
            aria-labelledby="login-modal-title"
        >
            <div className="login-modal__content">
                <button
                    type="button"
                    className="login-modal__close"
                    onClick={() => dialogRef.current?.close()}
                    aria-label="Close"
                >
                    &times;
                </button>

                <h2 id="login-modal-title">Sign in</h2>

                <form
                    className="login-modal__form"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="login-email">
                        Email
                    </label>

                    <input
                        id="login-email"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />

                    <label htmlFor="login-password">
                        Password
                    </label>

                    <input
                        id="login-password"
                        type="password"
                        placeholder="Enter your password"
                        required
                    />

                    <button
                        type="submit"
                        className="login-modal__submit"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </dialog>
    );
}