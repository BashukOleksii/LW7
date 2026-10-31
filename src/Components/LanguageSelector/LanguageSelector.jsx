import { useState } from 'react'
import './LanguageSelector.css'

const languages = [
    {code: 'en', name: 'English'},
    {code: 'uk', name: 'Українська'},
    {code: "de", name: 'Deutsch'}
]

export default function LanguageSelector(){
    const [selectedLanguage, setLanguage] = useState('en');
    const [isOpen, setOpen] = useState(false);

    function handleSelect(code){
        setLanguage(code);
        setOpen(false);
    }

    return (
       
       <div className='language-selector'>
            <button  
                type='button'
                className='language-selector__trigger'
                onClick={() => setOpen(prev => !prev)}
            >
                {selectedLanguage}
                <span className="language-selector__arrow">
                    {isOpen ? "▴" : "▾"}
                </span>
            </button>

            {isOpen && (
                <ul className='language-selector__menu'>
                    {languages.map(lang => (
                        <li key={lang.code}>
                            <button
                                type='button'
                                className='language-selector__option'
                                onClick={() => handleSelect(lang.code)}
                            >
                                {lang.name}
                            </button>
                        </li>
                    ))}

                </ul>
            )}

        </div>
    )
}