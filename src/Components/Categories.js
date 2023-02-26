import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getCategories } from "../Api";

const Categories = () => {
  const category = getCategories();
  return (
    <div className="container">
      <h1>Session categories</h1>
      <ul className="categories">
        {category.map((cat) => (
          <li key={cat.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "category-active" : null
              }
              to={cat.id}
            >
              {cat.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Categories;
