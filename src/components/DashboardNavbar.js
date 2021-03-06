import { useState } from 'react';
import PropTypes from 'prop-types';
import {
	AppBar,
	Badge,
	Box,
	Hidden,
	IconButton,
	Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
	const [notifications] = useState([]);

	return (
		<AppBar
			elevation={0}
			{...rest}
		>
			<Toolbar>
				농가 센서 데이터
				<Box sx={{ flexGrow: 1 }} />
				<Hidden lgDown>
					<IconButton color="inherit">
						<Badge
							badgeContent={notifications.length}
							color="primary"
							variant="dot"
						/>
					</IconButton>
				</Hidden>
				<Hidden lgUp>
					<IconButton
						color="inherit"
						onClick={onMobileNavOpen}
					>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

DashboardNavbar.propTypes = {
	onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
