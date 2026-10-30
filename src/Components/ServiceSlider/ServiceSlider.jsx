import ServiceCard from '../ServiceCard/ServiceCard'
import "./ServiceSlider.css"

export default function ServiceSlider({activeServiceId,services,onSelect}){
    const curentIndex = services.findIndex( s => s.id === activeServiceId);

    function handlePrevius(){

        const previusIndex = (curentIndex - 1 + services.length) % services.length;

        onSelect(services[previusIndex].id)
    }

    function handleNext(){
        const nextIndex = (curentIndex + 1) % services.length;

        onSelect(services[nextIndex].id);
    }

    return (
        <div className='service-slider'>
            <button
                type='button'
                className='service-slider__arrow'
                onClick={handlePrevius}
            >
                ❮
            </button>

            <div className='service-slider__cards'>
                {
                    services.map( (service) => (
                        <ServiceCard 
                            key={service.id}
                            service={service}
                            isActive={service.id === activeServiceId}
                        />
                    ))
                }
            </div>

             <button
                type='button'
                className='service-slider__arrow'
                onClick={handleNext}
            >
                 ❯
            </button>

        </div>
    )

}