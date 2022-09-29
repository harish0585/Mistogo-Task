import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom";
import {localRoute} from "../../routes/localRoutes";
import Admin from '../admin/Admin';
import Dashboard from '../dashboard/Dashboard';
import Home from '../home/Home';
import Inbox from '../inbox/Inbox';
import Products from '../products/Products';

const Navigation = () => {
  return (
    <div>
      <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path={`${localRoute.dashboard}`} component={Dashboard} />
                <Route exact path={`${localRoute.home}`} component={Home} />
                <Route exact path={`${localRoute.inbox}`} component={Inbox} />
                <Route exact path={`${localRoute.products}`} component={Products} />
                <Route exact path={`${localRoute.admin}`} component={Admin} />
            </Switch>
    </div>
  )
}

export default Navigation
