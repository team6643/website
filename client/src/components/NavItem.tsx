import { A } from "@solidjs/router";
import { JSX, ParentProps } from "solid-js";

const NavItem = ({ children, ...props }: ParentProps & JSX.HTMLAttributes<HTMLAnchorElement> & { href: string; }) => {
    return (
        <A {...props} class="flex-grow-0 flex-shrink-0 text-base text-left text-black">{children}</A>
    );
};

export default NavItem;