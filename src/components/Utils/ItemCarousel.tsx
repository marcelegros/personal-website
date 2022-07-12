
import React, { useState } from 'react';

import '../../styles/General/itemCarousel.css'

import ItemsCarousel from 'react-items-carousel';



export interface ItemCaroselProps {

    children: any,

}

export const ItemCarousel = (props: ItemCaroselProps) => {

    const [activeIndex, setActiveIndex] = useState(0);


    return <div>

        {/* Display for Browser */}
        <div className='browserOnly'>

            <ItemsCarousel
                infiniteLoop={true}
                gutter={32}
                activePosition={'center'}
                chevronWidth={60}
                disableSwipe={false}
                alwaysShowChevrons={false}
                numberOfCards={1}
                slidesToScroll={1}
                outsideChevron={true}
                showSlither={false}
                firstAndLastGutter={false}
                activeItemIndex={activeIndex}
                requestToChangeActive={setActiveIndex}
                rightChevron={">"}
                leftChevron={"<"}
            >

                {props.children}

            </ItemsCarousel>

        </div>

        {/* Display For Mobile */}
        <div className='mobileOnly'>

            <ItemsCarousel
                infiniteLoop={false}
                gutter={32}
                activePosition={'center'}
                chevronWidth={60}
                disableSwipe={false}
                alwaysShowChevrons={false}
                numberOfCards={1}
                slidesToScroll={1}
                outsideChevron={false}
                showSlither={false}
                firstAndLastGutter={false}
                activeItemIndex={activeIndex}
                requestToChangeActive={setActiveIndex}
                rightChevron={">"}
                leftChevron={"<"}
            >

                {props.children}

            </ItemsCarousel>

        </div>



    </div>
    
    
}

export default ItemCarousel;