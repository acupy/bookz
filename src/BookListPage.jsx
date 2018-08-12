import React from 'react';
import { Page } from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './css/style.css';
import Header from './Header';
import BookList from './BookList';
import BookDetailPage from './BookDetailPage';


class BookListPage extends React.Component {
  constructor() {
    super();
    this.pushPage = this.pushPage.bind(this);
    this.dataSource = [
      {
        title: 'The Phoenix Project',
        authors: ['Gene Kim', 'George Spafford', 'Kevin Behr'],
        description: 'The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win is the third book by Gene Kim.',
      },
      {
        title: 'The Five Dysfunctions of a Team',
        authors: ['Patrick Lencioni'],
        description: 'The Five Dysfunctions of a Team is a business book by consultant and speaker Patrick Lencioni first published in 2002. It describes the many pitfalls that teams face as they seek to "grow together".',
      },
      {
        title: 'Awakening Your Inner Genius',
        authors: ['Sean Patrick'],
        description: 'If you\'d like to know what some of history\'s greatest thinkers and achievers can teach you about awakening your inner genius, and how to find, follow, and fulfill your journey to greatness, then you want to read this book today.',
      },
    ];
  }

  pushPage(row) {
    const { navigator } = this.props;
    navigator.pushPage({ component: BookDetailPage, props: { row } });
  }

  render() {
    return (
      <Page
        renderToolbar={() => <Header />}
        contentStyle={{ top: 130 }}
      >
        <BookList
          onClickBookItem={this.pushPage}
          dataSource={this.dataSource}
        />
      </Page>
    );
  }
}

export default BookListPage;
