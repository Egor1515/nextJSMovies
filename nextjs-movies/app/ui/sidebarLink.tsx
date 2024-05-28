import Link from "next/link";
import { SidebarLinkProps } from "../types/SidebarLinkProps";
import { Icon } from '@mui/material'

export default function SidebarLink({ href,icon }: SidebarLinkProps) {
    return (
        <li className='list-none'>
            <Link href={href} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <Icon className="mr-2" /> {icon}
            </Link>
        </li>
    );
}
