import ServiceCard from '../ServiceCard/ServiceCard'
import "./ServiceSlider.css"

export default function ServiceSlider({activeServiceId,services,onSelect}){
    const curentIndex = services.findIndex( s => s.id === activeServiceId);

    const orderedService = [
        ...services.slice(curentIndex),
        ...services.slice(0,curentIndex)
    ];

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
                    orderedService.map( (service,index) => (
                        <ServiceCard 
                            key={service.id}
                            service={service}
                            isActive={index === 0}
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