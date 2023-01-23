import Link from "next/link";

interface props {
  text: string;
  href: string;
  active: boolean;
}

const NavItem = (props: props) => {
  const { text, href, active } = props;
  return (
    <Link href={href}>
      <div className={`nav__item ${active ? "active" : ""}`}>{text}</div>
    </Link>
  );
};

export default NavItem;
