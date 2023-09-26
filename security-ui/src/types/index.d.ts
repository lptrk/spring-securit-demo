export type NavItem = {
    title: string;
    href: string;
    active?: boolean;
};

export type MainNavItem = NavItem;

export type HomeConfig = {
    mainNav: MainNavItem[];
};