import React from 'react';
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container"> 
         <div className="footer-ota">
            <div className="footer-bola1">
            <img className='logo' src="https://nout.uz/wp-content/uploads/2021/03/logotype-nout.svg" alt="" />
          
          <div className="parent1">
              <img src="https://cdn-icons-png.flaticon.com/512/3225/3225319.png" alt="" />
            <div>
            <h6>Есть вопросы? Свяжитесь с нами!</h6>
              <h6>+998 (93) 399-22-72</h6>
            </div>
          </div>
          <div className="icon">
              <h5>Наши контакты</h5>
              <h6>ПН – ВС : c 10:00 до 18:30 без выходных</h6>
          </div>
         <div className="icon1">
          <img src="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-facebook-512.png" alt="" />
          <img src="https://parspng.com/wp-content/uploads/2022/10/instagram30png.parspng.com_.png" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0_OZ2mvLh8_tCRWF9sH70xQGVUAahEvFFA&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMI_Qw_SsfbOzLB4KrKfh15n71tMnt4y1pdQ&usqp=CAU" alt="" />
         </div>
            </div>
            <div className="footer-bola2">
                <ul>
                    <h5 >Бренды</h5>
                    <li>Asus</li>
                    <li>MSI</li>
                    <li>Lenovo</li>
                    <li>HP</li>
                    <li>Dell</li>
                    <li>Razer</li>
                    <li>Samsung</li>
                    <li>Microsoft Surface</li>
                    <li>Apple</li>
                    <li>Acer</li>
                    <li>LG</li>
                    <li>HyperX</li>
                </ul>
            </div>
            <div className="footer-bola3">
                <ul>
                    <h5>Магазин</h5>
                    <li>Ноутбуки</li>
                    <li>Ультрабуки</li>
                    <li>Трансформеры</li>
                    <li>Ноутбуки для бизнеса</li>
                    <li>Игровые ноутбуки</li>
                    <li>ПК</li>
                </ul>
            </div>
            <div className="footer-bola4">
                <ul>
                    <h5>Помощь</h5>
                    <li>Как сделать заказ</li>
                    <li>Доставка</li>
                    <li>Оплата</li>
                    <li>Реквизиты</li>
                </ul>
            </div>
      
         </div>
        </div>
    </footer>
    <div className="container">
      <div className="index">
        <h6 className='met'>© Nout.uz - Ноутбуки в Ташкенте из первых рук. Цены №1 в Узбекистане! | Разработка сайта</h6>
        <img src=" https://nout.uz/wp-content/uploads/2021/03/payments.jpg" alt="" />
      </div>
 
    </div>
    </>
  )
}

export default Footer