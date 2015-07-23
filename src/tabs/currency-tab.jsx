let React = require('react');
let StylePropable = require('../mixins/style-propable');
let Colors = require('../styles/colors.js');


let CurrencyTab = React.createClass({

  mixins: [StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object,
  },

  propTypes: {
    handleTouchTap: React.PropTypes.func,
    selected: React.PropTypes.bool,
    width: React.PropTypes.string,
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
    let selectedStyle = {
      'display': 'table-cell',
      'cursor': 'pointer',
      'textAlign': 'center',
      'verticalAlign': 'middle',
      'height': '48px',
      'color': '#35acef',
      'opacity': '1',
      'fontSize': '13px',
      'fontWeight': '500',
      'whiteSpace': 'initial',
      'fontFamily': this.context.muiTheme.contentFontFamily,
      'boxSizing': 'border-box',
      'width': this.props.width,
    };
    if (this.props.selected){
      return (
        <div style={selectedStyle} onTouchTap={this.handleTouchTap} routeName={this.props.route}>
          <span>BTC</span>
          <span>{this.props.label}</span>
        </div>
      );
    } else {
      return (
        <div style={styles} onTouchTap={this.handleTouchTap} routeName={this.props.route}>
          <span style={{color: 'black', opacity: '.3'}}>BTC</span>
          <span style={{color: 'black', opacity: '1'}}>{this.props.label}</span>
        </div>
      );
    }
  },

});

module.exports = CurrencyTab;
