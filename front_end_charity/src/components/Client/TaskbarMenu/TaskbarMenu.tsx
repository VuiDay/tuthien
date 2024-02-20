'use client'
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import './TaskbarMenu.css'

export default function TaskbarMenu() {
  return (
    <div className="MenuTop">
        <h3 className="MenuTop-Left">Quản Lý</h3>
        <div className="MenuTop-Right">
            <FontAwesomeIcon icon={solidIcons.faImage}/>
            <h2>Name  
                <ul className="Setting-Account">
                  <li>Name</li>
                  <li><Link href='#'>My Profile</Link></li>
                  <li><Link href='#'>Account Setting</Link></li>
                  <li><Link href='#'>Sign Out</Link></li>
                </ul>
            </h2>
        </div>
    </div>
  )
}
