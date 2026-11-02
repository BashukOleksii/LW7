import LanguageSelector from '../LanguageSelector/LanguageSelector'
import logo from '../../assets/SiteLogo.png'
import find from '../../assets/find.png'
import accountIcon from '../../assets/account.png'
import './Header.css'
import LoginModal from '../LoginModal/LoginModal'
import Navigation from '../Navigation/Navigation'
import { useState } from 'react'

export default function Header(){
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    return(
        <>
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt='logotype' />
            </div>

            <div className='heared__right'>
                <Navigation /> 

                <div className='header__actions'>
                    <LanguageSelector />
                    <div className='separator'/>
                    <img src={find} alt='find'/>
                    <button
                        type="button"
                        className="header__account"
                        onClick={() => setIsLoginOpen(true)}
                      aria-label="Open login"
                    >
                    <img src={accountIcon} alt="" />
                    </button>
                </div>
            </div>
        </header>

        {isLoginOpen && (
                <LoginModal
                    onClose={() => setIsLoginOpen(false)}
                />
            )}
        </>
    )
}