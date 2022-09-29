import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { localRoute } from './localRoutes';
import DrawerUI from '../components/drawer/DrawerUI';

const Routing = () => {
  return (
    <div>
      <Router>
                    <Switch>
                        <Route exact path="/" component={DrawerUI} />
                        <Route exact path={`${localRoute.home}`} component={DrawerUI} />
                        <Route exact path={`${localRoute.dashboard}`} component={DrawerUI} />
                        <Route exact path={`${localRoute.inbox}`} component={DrawerUI} />
                        <Route exact path={`${localRoute.products}`} component={DrawerUI} />
                        <Route exact path={`${localRoute.admin}`} component={DrawerUI} />
                    </Switch>
            </Router>
    </div>
  )
}

export default Routing
