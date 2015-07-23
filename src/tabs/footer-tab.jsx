let React = require('react');
let StylePropable = require('../mixins/style-propable');
let Colors = require('../styles/colors.js');


let FooterTab = React.createClass({
  displayName: 'FooterTab',
  mixins: [StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object,
  },

  propTypes: {
    handleTouchTap: React.PropTypes.func,
    selected: React.PropTypes.bool,
    width: React.PropTypes.string,
    href: React.PropTypes.string,
    label: React.PropTypes.string,
    linkStyles: React.PropTypes.object,
  },

  handleTouchTap() {
    this.props.handleTouchTap(this.props.tabIndex, this);
  },

  render() {
    let styles = this.mergeAndPrefix({
      display: 'table-cell',
      cursor: 'pointer',
      textAlign: 'center',
      verticalAlign: 'middle',
      height: 48,
      color: Colors.white,
      opacity: 0.6,
      fontSize: 14,
      fontWeight: '500',
      whiteSpace: 'initial',
      fontFamily: this.context.muiTheme.contentFontFamily,
      boxSizing: 'border-box',
      width: this.props.width,
    }, this.props.style);

    if (this.props.selected) styles.opacity = '1';

    return (
      <div style={styles} onTouchTap={this.handleTouchTap} routeName={this.props.route}>
        <a href={this.props.href} style={this.props.linkStyles}>{this.props.label}</a>
      </div>
    );
  },

});

module.exports = FooterTab;
