import React from 'react';
import { Page, Card } from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './css/style.css';
import Header from './Header';

class BookDetailPage extends React.Component {
  render() {
    const { row } = this.props;
    return (
      <Page
        renderToolbar={() => <Header disableSearchbar />}
        contentStyle={{ top: 44 }}
      >
        <Card>
          <h2>
            {row.title}
          </h2>
          <div className="subtitle">
            {row.authors.join(', ')}
          </div>
          <p>
            {row.description}
          </p>
        </Card>
      </Page>
    );
  }
}

export default BookDetailPage;
