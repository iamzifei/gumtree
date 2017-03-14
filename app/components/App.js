import React, { Component } from 'react';
import ContentBox from './ContentBox';
import contentJson from '../content.json';

export default class App extends Component {
  render() {
    return (
      <section>
        <ContentBox
          title={contentJson.title}
          panels={contentJson.content}
        />
      </section>
    );
  }
}
