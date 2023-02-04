import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Header from './my-components/components/header';
import Menu from './my-components/components/menu';
import Slider from './my-components/components/slider';
import Productcontainer from './my-components/components/Productcontainer';
import Greed from './my-components/components/Greed';
import  {Welcome} from './my-components/components/Greed';
import Productcart from './my-components/components/Productcart';
import TraceComponents from './TraceComponents/TraceComponents';
import Admin from './my-components/components/Admin';
import Events from './my-components/components/Events';
import Content from './my-components/components/Content';
import Message from './my-components/components/Message';
import Api_integration from './my-components/components/Api_integration';
import Api from './my-components/components/Api';
import Api_integration_using_axios from './my-components/components/Api_integration_using_axios';
import Lifecycle from './my-components/components/Lifecycle';
import Counter from './my-components/components/Counter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import AxiosExample from './my-components/components/AxiosExample';
import Wrapper from './my-components/components/Wrapper';
import Displayusers from './my-components/components/Displayusers';
import DataDisplayer from './my-components/components/DataDisplayer';



const root = ReactDOM.createRoot(document.getElementById('root'));
 //create objects
 let products=[{id:1,name:"AshokIt", price:2000},
 {id:2,name:"Nasir", price:12000},
 {id:3,name:"Raja", price:1900},
 {id:4,name:"Deepak", price:22000}]
 let simpleData={componentsname:"componentsname,",title:"Trace Componets title,",name:"Traccomponents"}
root.render(
  <div>
     <Header />
     {/* <Displayusers/> */}
     {/* <AxiosExample/>  */}
     <Wrapper/>
     {/* <Events/> */}
     {/* <Content name="Content" value="100"/> */}
     {/* <Message/> */}
     {/* <Api_integration/> */}
     <Api/>
      {/* <Api_integration_using_axios/> */}
     {/* <Lifecycle/> */}
     {/* <Counter/>  */}
  {/* <Productcontainer products={products}/>
  <Productcontainer/>
  <Greed/>
  <Productcart/>  */}
  {/* <TraceComponents componentsname={simpleData.componentsname} title={simpleData.title} name={simpleData.name}/> */}
  {/* <TraceComponents {...simpleData}/> */}
 {/* <Admin isLoggedIn={false}/> */}
 
  {/* <Welcome/>
    <Menu/>
    <Slider/> */}
    <DataDisplayer/>
  </div>
);

