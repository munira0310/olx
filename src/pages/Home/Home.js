import "./Home.css"
import React from 'react'
import { Link, useParams } from "react-router-dom";
import Container from "../../containers/Container/Container";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import CategoryCard from "../../components/MainProduct/CategoryCard";

// Детский мир
// Недвижимость
// Транспорт
// Работа
// Животные
// Дом и сад
// Электроника
// Бизнес и услуги
// Мода и стиль
// Хобби, отдых и спорт
// Отдам даром
// Обмен
const data = [
  {
    titile: "Детский мир",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
    to: "detskiy-mir",
    color: "#ffce32"    
  },
  {
    titile: "Недвижимость",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
    to: "nedvijimost",
    color: "##3a77ff"    
  },
  {
    titile: "Транспорт",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
    to: "transport",
    color: "#23e5db"    
  },
  {
    titile: "Работа",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png",
    to: "rabota",
    color: "#ff5636 "    
  },
  {
    titile: "Животные",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/zhivotnye-35-2x.png",
    to: "jivotniye",
    color: "#fff6d9 "    
  },
  {
    titile: "Дом",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/dom-i-sad-899-2x.png",
    to: "dom",
    color: "#ceddff "    
  },
  {
    titile: "Электроника",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/elektronika-37-2x.png",
    to: "elektronika",
    color: "#c8f8f6 "    
  },
  {
    titile: "Бизнес и услуги",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/uslugi-7-2x.png",
    to: "biznes",
    color: "#ffd6c9 "    
  },
  {
    titile: "Мода и стиль",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-2x.png",
    to: "moda",
    color: "#ffce32 "    
  },
  {
    titile: "Хобби и спорт",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/hobbi-otdyh-i-sport-903-2x.png",
    to: "hobbi",
    color: "#ceddff  "    
  },
  {
    titile: "Отдам даром",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/otdam-darom-1151-2x.png",
    to: "otdam",
    color: "#c8f8f6  "    
  },
  {
    titile: "Обмен",
    img: "https://categories.olxcdn.com/assets/categories/olxuz/obmen-barter-1153-2x.png",
    to: "obmen",
    color: "#ffd6c9  "    
  },
]
const Home = () => {
  return (
    <Container>
    
      <div className="container text-center py-10">
        <h1 className="text-center mb-5 ">Главные категории</h1>
        <div className='d-flex' >
         <div className="row justify-content-center">
         {data.map(v => <div className="col-10 col-sm-4 col-md-4 col-lg-2">
          <Link to={v.to} className="category text-center mb-4">
            <div className="circle mx-auto" style={{backgroundColor: v.color}}><img src={v.img}className="w-75" alt=""/>
            </div>
            <p>{v.titile}</p>
          </Link>
         </div>
         )}
         </div>
        </div>
      </div>
      <div class="mb-5">
         <h1 className="text-center">Премиум объявления</h1>
         <div className="container pt-5">
           {/* <div className="row">
            <CategoryCard data={data}/>
           </div> */}
         </div>
    </div>
    </Container>
  )
}

export default Home;
