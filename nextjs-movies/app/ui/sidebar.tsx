import SidebarLink from './sidebarLink'
import HomeIcon from '@mui/icons-material/AddHome'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import SearchIcon from '@mui/icons-material/Search'
import LogoutIcon from '@mui/icons-material/Logout'

export default function Sidebar() {
	return (
		<aside
			id='sidebar-multi-level-sidebar'
			className='fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0'
			aria-label='Sidebar'
		>
			<div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
				<ul className='space-y-2 font-medium h-screen'>
					<SidebarLink href='/' icon={<HomeIcon />} />
					<SidebarLink href='profile' icon={<PersonOutlineOutlinedIcon />} />
					<SidebarLink href='settings' icon={<SettingsIcon />} />
					<SidebarLink href='favorites' icon={<BookmarkBorderIcon />} />
					<SidebarLink href='search' icon={<SearchIcon />} />
				</ul>
				<div className='absolute bottom-0 mb-10'>
					<SidebarLink href='auth' icon={<LogoutIcon />} />
				</div>
			</div>
		</aside>
	)
}
