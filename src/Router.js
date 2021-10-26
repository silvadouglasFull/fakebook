import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FormContext from './context/formContext';
import UserContext from './context/userContext';
import Login from './pages/login';
import HomeIndex from './pages';
import ProtectedRoute from './services/protectedRoute';
import LayoutTemple from './components/layout/layoutTemple';
import { AnimationContext } from './context/animationContext';
import { StorageContext } from './context/storageContext';
const Router = () => {
    return <BrowserRouter>
        <FormContext>
            <UserContext>
                <AnimationContext>
                    <StorageContext>
                        <Switch>
                            <Route path='/login' component={Login} />
                            <LayoutTemple>
                                <ProtectedRoute exact path='/' component={HomeIndex} />
                            </LayoutTemple>
                        </Switch>
                    </StorageContext>
                </AnimationContext>
            </UserContext>
        </FormContext>
    </BrowserRouter>
}
export default Router