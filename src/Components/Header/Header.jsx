import logo from '../../assets/SiteLogo.png'
import language from '../../assets/Group 36.png'
import find from '../../assets/find.png'
import account from '../../assets/account.png'
import './Header.css'

import Navigation from '../Navigation/Navigation'

export default function Header(){
    return(
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt='logotype' />
            </div>

            <div className='heared__right'>
                <Navigation /> 

                <div className='header__actions'>
                    <img src={language} alt='language'/>
                    <div className='separator'/>
                    <img src={find} alt='find'/>
                    <img src={account} alt='account'/>
                </div>
            </div>
        </header>
    )
}