import React from 'react'
import "../Xeyperx/Xeyperx.scss"

const Xeyperx = () => {
    return (
        <div>
             <section>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src={"https://nout.uz/wp-content/uploads/2022/04/hyperx-alloy-origins-1.jpg"} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={"https://nout.uz/wp-content/uploads/2022/04/hyperx-pulsvare-haste-1970x650-1.jpg"} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <br />
            </section>

            <section>
                
                <div className="ota_2">
                    <div className="card_1">
                        <img className='xprx' src="https://nout.uz/wp-content/uploads/2022/03/hyperx-mouse@2x.png" alt="" />
                        <br />
                        <h3 className='px'>Мыши</h3>
                    </div>

                    <div className="card_1">
                        <img className='xprx' src="https://nout.uz/wp-content/uploads/2022/03/hyperx-headset@2x.png" alt="" />
                        <br />
                        <h3 className='px'>Наушники</h3>
                    </div>

                    <div className="card_1">
                        <img className='xprx' src="https://nout.uz/wp-content/uploads/2022/03/hyperx-keyboard@2x.png" alt="" />
                        <br />
                        <h3 className='px'>Клавиатуры</h3>
                    </div>

                    <div className="card_1">
                        <img className='xprx' src="https://nout.uz/wp-content/uploads/2022/03/hyperx-mousepad@2x.png" alt="" />
                        <br />
                        <h3 className='px'>Коврики</h3>
                    </div>

                    <div className="card_1">
                        <img className='xprx' src="https://nout.uz/wp-content/uploads/2022/03/hyperx-charger@2x.png" alt="" />
                        <br />
                        <h3 className='px'>Зарядные станции</h3>
                    </div>
                </div>

        </section>
        </div>
    )
}

export default Xeyperx