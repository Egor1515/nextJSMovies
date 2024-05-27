import SidebarLink from "./sidebarLink"
export default function Sidebar() {
    return (
        <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium h-screen">
                    <SidebarLink href="/"  />
                    <SidebarLink href="profile" />
                    <SidebarLink href="settings" />
                    <SidebarLink href="favorites" />
                    <SidebarLink href="search" />
                </ul>
                    <div className='absolute bottom-0 mb-10'>
                    <SidebarLink href="auth" />
                    </div>
            </div>
        </aside>
    )
}