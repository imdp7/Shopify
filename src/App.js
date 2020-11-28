import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Main from './Component/Main/Main';
import Products from './Component/Products/Products';
import Orders from './Component/Orders/Orders';
import AddProduct from './Component/Products/AddProduct/AddProduct';
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const routes = [
  {
    path: "/",
    component: Main,
    
  },
  {
    path:"/AllProducts",
    component: Products,
    
  }, 
  {
    path:"/Orders",
    component: Orders,
    
  }, 
  {
    path:"/addprod",
    component: AddProduct,
    
  },
  
];

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
           ))}
         <Main/>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
