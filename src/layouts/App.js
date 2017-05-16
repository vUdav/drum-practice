import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import theme from '../toolbox/theme.js';
import '../toolbox/theme.css';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Button label="Hello World!" />
			</ThemeProvider>
		);
	}
}

export default App;
