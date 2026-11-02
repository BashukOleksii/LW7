import { useEffect, useRef, useState } from 'react'
import './LoginModal.css'

export default function LoginModal({onClose}){
    const dialogRef = useRef(null);
    const [errors, setErrors] = useState({ email: '', password: '' });

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

    function handleSubmit(event) {
        event.preventDefault();

        const form = new FormData(event.currentTarget);

        const email = form.get('login-email');
        const password = form.get('login-password');

        const newErrors = {
            email: '',
            password: ''
        };

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Невірний формат пошти';
        }

        if (!password || password.trim().length < 8) {
            newErrors.password = 'Пароль має містити щонайменше 8 символів';
        }

        setErrors(newErrors);

        if (!newErrors.email && !newErrors.password) {
            onClose();
        }
    }

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
                        name="login-email"
                        placeholder="Enter your email"
                        required
                    />

                    {errors.email && <span className="login-modal__error">{errors.email}</span>}

                    <label htmlFor="login-password">
                        Password
                    </label>

                    <input
                        id="login-password"
                        name="login-password"
                        type="password"
                        placeholder="Enter your password"
                        required
                    />

                    {errors.password && <span className="login-modal__error">{errors.password}</span>}

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