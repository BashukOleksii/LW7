import { useState } from "react";
import { services } from '../services';
import HeroContent from '../HeroContent/HeroContent'
import ServiceSlider from '../ServiceSlider/ServiceSlider'

import './Hero.css'

export default function Hero(){
    const [activeId, setActiveId] = useState(1);

    const activeService = services.find( s => s.id === activeId);

    return(
        <section className="hero">
            <HeroContent
                title={activeService.title}
                description={activeService.description}
            />

            <ServiceSlider 
                activeServiceId={activeId}
                services={services}
                onSelect={setActiveId}
            />
        </section>
    )
}