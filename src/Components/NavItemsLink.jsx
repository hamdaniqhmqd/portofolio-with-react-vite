import { NavLink } from "react-router-dom";

export function NavItemsLink(params) {
  return (
    <NavLink
      to={`${params.to}`}
      className={({ isActive }) =>
        `block py-2 px-3 ${
          isActive
            ? "text-lime-500"
            : "text-lime-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-600 md:rounded-none"
        } `
      }>
      {params.children}
    </NavLink>
  );
}
