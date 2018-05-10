import * as React from 'react';
import { Route, Switch } from 'react-router';

import HeaderComponent from '../../components/header/header.component';
import SidebarComponent from '../../components/sidebar/sidebar.component';

import ApiComponent from '../../pages/api/api.component';
import BlockComponent from '../../pages/block/block.component';
import DataComponent from '../../pages/data/data.component';
import NotFoundComponent from '../../pages/not-found/not-found.component';

import './app.scss';

export default class AppComponent extends React.PureComponent {
  render (): JSX.Element {
    return (
      <div className='bi-app g-flex'>
        <SidebarComponent/>
        
        <div className="bi-app__body g-flex__item g-flex-column">
          <HeaderComponent/>
          
          <Switch>
            <Route exact={ true } path='/' component={ DataComponent }/>
            <Route exact={ true } path='/api' component={ ApiComponent }/>
            <Route exact={ true } path='/blocks/:id' component={ BlockComponent }/>
            
            <Route component={ NotFoundComponent }/>
          </Switch>
        </div>
      </div>
    );
  }
}
