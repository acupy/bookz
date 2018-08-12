import React from 'react';
import { Navigator } from 'react-onsenui';
import BookListPage from './BookListPage';

class App extends React.Component {
  static renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{ component: BookListPage }}
        renderPage={App.renderPage}
      />
    );
  }
}

export default App;
