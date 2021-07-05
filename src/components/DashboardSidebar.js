import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	Avatar,
	Box,
	Divider,
	Drawer,
	Hidden,
	Typography,
	List
} from '@material-ui/core';
import {
	BarChart as BarChartIcon
} from 'react-feather';
import NavItem from './NavItem';

const user = {
	jobTitle: '금오공과대학교',
	name: '인공지능 연구실'
};

const items = [
	{
		href: '/app/dashboard',
		icon: BarChartIcon,
		title: '메인'
	},
	{
		href: '/app/Farm',
		icon: BarChartIcon,
		title: '농장 목록'
	},
	{
		href: '/app/chart',
		icon: BarChartIcon,
		title: '센서 별 차트'
	},
	{
		href: '/app/charttime',
		icon: BarChartIcon,
		title: '시간,일자 별 차트'
	}
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
	const location = useLocation();

	useEffect(() => {
		if (openMobile && onMobileClose) {
			onMobileClose();
		}
	}, [location.pathname]);

	const content = (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%'
			}}
		>
			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
					p: 2
				}}
			>
				<Avatar
					component={RouterLink}
					src={user.avatar}
					sx={{
						cursor: 'pointer',
						width: 64,
						height: 64
					}}
					to="/app/dashboard"
				/>
				<Typography
					color="textPrimary"
					variant="h5"
				>
					{user.name}
				</Typography>
				<Typography
					color="textSecondary"
					variant="body2"
				>
					{user.jobTitle}
				</Typography>
			</Box>
			<Divider />
			<Box sx={{ p: 2 }}>
				<List>
					{items.map((item) => (
						<NavItem
							href={item.href}
							key={item.title}
							title={item.title}
							icon={item.icon}
						/>
					))}
				</List>
			</Box>
			<Box sx={{ flexGrow: 1 }} />
		</Box>
	);

	return (
		<>
			<Hidden lgUp>
				<Drawer
					anchor="left"
					onClose={onMobileClose}
					open={openMobile}
					variant="temporary"
					PaperProps={{
						sx: {
							width: 256
						}
					}}
				>
					{content}
				</Drawer>
			</Hidden>
			<Hidden lgDown>
				<Drawer
					anchor="left"
					open
					variant="persistent"
					PaperProps={{
						sx: {
							width: 256,
							top: 64,
							height: 'calc(100% - 64px)'
						}
					}}
				>
					{content}
				</Drawer>
			</Hidden>
		</>
	);
};

DashboardSidebar.propTypes = {
	onMobileClose: PropTypes.func,
	openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
	onMobileClose: () => { },
	openMobile: false
};

export default DashboardSidebar;
