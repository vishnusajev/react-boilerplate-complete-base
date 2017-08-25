/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#CACACA',
    accent1Color: '#E18156',
  },
  tabs: {
    backgroundColor: '#00BB6E',
    textColor: '#008A4F',
    selectedTextColor: '#FFFFFF',
  },
});


export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Helmet
              titleTemplate="%s"
              defaultTitle="Project Name"
              meta={[
                { name: 'description', content: 'Project Name' },
              ]}
            />
            {React.Children.toArray(children)}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
