import React from 'react'
import Productadd from './Productadd'
import Productcart from './Productcart'
export default function Productcontainer(props) {
   //create objects
   const product=[{title:"Mobile", name:"Electronic Mobile",price:30000},
                  {title:"Laptop", name:"Laptop",price:20000},
                  {title:"Desktop", name:"Mobile",price:340000},
                  {title:"Charger", name:"Mobile Charger",price:80000}]
    return (
        <div className="container">
            <div className="row">
                <div className='col-md-4'>
                   {/* {
                 props.products.map((product)=>
                   // <Productcart key={product.id} id={product.id} name={product.name} price={product.price} />
                   <Productcart {...product}/>
                    )
                   } */}

                  
                    
                </div>
                <div className='col-md-4'>
                    {
                        product.map((p)=>{
                    <Productcart key={p.title} name={p.name} price={p.price}/>
                    })
                   }
                    
                </div>
                <div className='col-md-4'>
                    {/* <Productadd  name="Md Nasir Hussain" email="nasir@gmail.com"/>
                    <Productadd  name="Md Arif" email="arif@gmail.com"/>
                    <Productadd  name="Md Sonu" email="sonu@gmail.com"/>
                    <Productadd  name="Md Arham" email="arham@gmail.com"/> */}
                </div>
            </div>
        </div>
    )
}
