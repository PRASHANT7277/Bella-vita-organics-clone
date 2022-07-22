import B1img from '../images/3.png'
import C1img from '../images/4.png'
import D1img from '../images/5.png'



export default function Carousel2(){
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
      <img style={{borderRadius:'10px'}} src={B1img} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{borderRadius:'10px'}} src={C1img} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{borderRadius:'10px'}} src={D1img} class="d-block w-100" alt="..."/>
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