import { Image } from "@chakra-ui/react"
export default function Cart(){
    return(
        <><button style={{ backgroundColor: 'white',border:'none',}} class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><Image id='b8' src='https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-shopping-bag-icon-png-image_927105.jpg' alt='img' /></button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            ...
          </div>
        </div>
        </>
    )
}