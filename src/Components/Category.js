import React from "react";
import { useParams,NavLink } from "react-router-dom";
import { getCategory } from "../Api";
import { Outlet } from "react-router-dom";

const Category = () => {
  const { catId } = useParams();
  const category = getCategory(catId);

  return (
    <>
      <h2>{category.name}</h2>
      <ul className="session-list">
        {category.sessions.map((session) => (
          <li key={session.id} className="session">
            <NavLink className={({isActive})=>isActive?"session-active":null} to={session.id}>
            <p className="session-name">{session.name}</p>
            <p>
              {session.speaker.name} | {session.speaker.org}
            </p>
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Category;
