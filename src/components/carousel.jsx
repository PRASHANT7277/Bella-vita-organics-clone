import Bimg from './images/b.png'
import Cimg from './images/c.png'
import Dimg from './images/d.jpg'


export default function Carousel(){
    return(
        <>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div  class="carousel-item active">
      <img style={{borderRadius:'10px'}} src={Bimg} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{borderRadius:'10px'}} src={Cimg} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{borderRadius:'10px'}} src={Dimg} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}