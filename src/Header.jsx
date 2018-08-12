import React from 'react';
import {
  Toolbar,
  BackButton,
  ToolbarButton,
  Icon,
  Select,
  SearchInput,
} from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './css/style.css';

class Header extends React.Component {
  render() {
    const { disableSearchbar } = this.props;
    return (
      <div>
        <Toolbar>
          <div className="left">
            <BackButton>
          Back
            </BackButton>
          </div>
          <div className="center">
      Bookz
          </div>
          <div className="right">
            <ToolbarButton>
              <Icon icon="book" />
            </ToolbarButton>
          </div>
        </Toolbar>
        {!disableSearchbar && (
        <div className="search-bar">
          <Select modifier="underbar">
            <option value="1">
Technology
            </option>
            <option value="2">
Economics
            </option>
            <option value="3">
Motivation and Inspiration
            </option>
          </Select>
          <SearchInput
            value=""
            modifier="material"
            placeholder="Search bookz..."
          />
        </div>
        )}
      </div>);
  }
}

export default Header;
