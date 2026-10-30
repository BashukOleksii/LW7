import './ServiceCard.css'

export default function ServiceCard({isActive, service}){
    return (
        <div className={`service-card ${isActive ? "active" : ""}`}>
            <img 
                src={service.image}
                alt=''
                className='service-card__image'
            />

            <span className='service-card__title'>
                {service.cardTitle}
            </span>
        </div>
    )
}