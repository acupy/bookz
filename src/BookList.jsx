import React from 'react';
import {
  List,
  ListItem,
  Icon,
} from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './css/style.css';

class BookList extends React.Component {
  render() {
    const { onClickBookItem, dataSource } = this.props;
    return (
      <List
        dataSource={dataSource}
        renderRow={row => (
          <ListItem
            onClick={() => onClickBookItem(row)}
            tappable
          >
            <div className="left">
              <Icon icon="md-library" />
            </div>
            <div className="center list__item__center">
              <div className="list__item__title">
                {row.title}
              </div>
              <div className="subtitle list__item__subtitle">
                {row.authors.join(', ')}
              </div>
            </div>
          </ListItem>
        )}
      />
    );
  }
}


export default BookList;
