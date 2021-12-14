import Link from "next/link";
const NavItem = ({ href, text }) => {
    return (
        <Link href={href}>
            <a>{text}</a>
        </Link>
    );
};

export default NavItem;
