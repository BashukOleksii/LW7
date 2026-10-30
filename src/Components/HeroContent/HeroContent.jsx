import './HeroContent.css'

export default function HeroContent({title,description}){
    return (
        <div className='hero-content'>
            <h1 className='hero-content__title'>
                {title}
            </h1>

            <p className='hero-content__description'>
                {description}
            </p>
        </div>
    )
}