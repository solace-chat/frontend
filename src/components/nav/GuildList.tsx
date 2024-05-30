import Logo from "../assets/Logo";
import Link from "next/link";
import CogIcon from "../assets/CogIcon";

export default function GuildList() {
    return (
        <nav className="guild-list">
            <Link href={'/'}><Logo width={50} height={50} fill="white" /></Link>
            <div className="divider" style={{ width: '50%' }} />
            <ul className="guild-list">

            </ul>
            <div className="divider" style={{ width: '50%' }} />
            <CogIcon className="guild-list-icon" width={50} height={50} fill={"white"} />
        </nav>
    )
}