import React, { Component, PropTypes } from 'react';

import ContentBoxHeader from './ContentBoxHeader';
import ContentBoxBody from './ContentBoxBody';
import ContentBoxFooter from './ContentBoxFooter';

import styles from './App.css';

class ContentBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isExpanded: true,
      activePanelIndex: 0,
    };

    this.nextPanel = this.nextPanel.bind(this);
    this.prevPanel = this.prevPanel.bind(this);
    this.toggleExpandedState = this.toggleExpandedState.bind(this);
  }

  getNextPanelTitle() {
    const { activePanelIndex } = this.state;
    const { panels } = this.props;

    const nextIndex = activePanelIndex < panels.length - 1
      ? activePanelIndex + 1
      : 0;

    return panels[nextIndex].title;
  }

  nextPanel() {
    const { activePanelIndex } = this.state;
    const { panels } = this.props;

    const next = activePanelIndex + 1 < panels.length
      ? activePanelIndex + 1
      : 0;

    this.setState({ activePanelIndex: next });
  }

  prevPanel() {
    const { activePanelIndex } = this.state;
    const { panels } = this.props;

    const prev = activePanelIndex === 0
      ? panels.length - 1
      : activePanelIndex - 1;

    this.setState({ activePanelIndex: prev });
  }

  toggleExpandedState() {
    const { isExpanded } = this.state;

    this.setState({ isExpanded: !isExpanded });
  }

  render() {
    const { isExpanded, activePanelIndex } = this.state;
    const { title, panels } = this.props;

    const containerClass = isExpanded
      ? styles.container_open
      : styles.container;

    const displayClass = isExpanded
      ? styles.expanded
      : styles.collapsed;

    const activePanel = panels[activePanelIndex];
    const nextTitle = this.getNextPanelTitle();

    return (
      <section className={containerClass}>
        <ContentBoxHeader
          title={title}
          clickHandler={this.toggleExpandedState}
          isExpanded={isExpanded}
        />
        <div className={displayClass}>
          <ContentBoxBody {...activePanel} />
          <ContentBoxFooter
            handleNextClick={this.nextPanel}
            handlePrevClick={this.prevPanel}
            nextTitle={nextTitle}
          />
        </div>
      </section>
    );
  }
}

ContentBox.propTypes = {
  title: PropTypes.string.isRequired,
  panels: PropTypes.arrayOf(PropTypes.shape(ContentBoxBody.propTypes)),
};

ContentBox.defaultProps = {
  panels: [],
};

export default ContentBox;
