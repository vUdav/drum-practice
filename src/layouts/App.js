import React, { Component } from 'react';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';
import theme from '../toolbox/theme.js';
import '../toolbox/theme.css';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Layout>
					<Panel>
						<AppBar title='Drum Practice' />
						<IconMenu icon='more_vert' position='topLeft' menuRipple>
							<MenuItem value='download' icon='get_app' caption='Download' />
							<MenuItem value='help' icon='favorite' caption='Favorite' />
							<MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
							<MenuDivider />
							<MenuItem value='signout' icon='delete' caption='Delete' disabled />
						</IconMenu>
					</Panel>
				</Layout>
			</ThemeProvider>
		);
	}
}

export default App;
