import { useState } from "react";
import { services } from '../services';
import HeroContent from '../HeroContent/HeroContent'
import ServiceSlider from '../ServiceSlider/ServiceSlider'
import arrow from '../../assets/Vector 1.svg'

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

              <div className="hero__slider-wrapper">
                <img
                    src={arrow}
                    alt=""
                    className="hero__pointer"
                    aria-hidden="true"
                />

                <ServiceSlider
                    services={services}
                    activeServiceId={activeId}
                    onSelect={setActiveId}
                />
            </div>
        </section>
    )
}