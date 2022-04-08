import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import './App.css';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SigningPage from './pages/signing/signingPage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionPage from './components/category/collection-page.component';

import { onSnapshot } from 'firebase/firestore';
import { auth, createUserProfileData } from './firebase/firebase.utils';

import { selectCollectionItem } from './redux/shop/shop.selectors';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileData(userAuth);

        onSnapshot(userRef, { includeMetadataChanges: true }, (snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })

      }
      setCurrentUser(userAuth)
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  render() {

    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:collectionId" element={<CollectionPage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="/signIn" element={<SigningPage />} />
        </Routes>
      </div>

    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapToDispatch = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapToDispatch)(App);
