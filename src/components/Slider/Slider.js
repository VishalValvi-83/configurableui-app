import React from 'react'
import './Slider.css'
import { homepage } from '../../data'
function Slider() {
    return (
        <div id="carouselExampleAutoplaying" class="carousel slide carousel-home" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={homepage.sliderContentsimage[0].image} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={homepage.sliderContentsimage[1].image} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={homepage.sliderContentsimage[2].image} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider