import { Breadcrumbs } from "@mui/material";
import {
  Link,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import SetupBusinessDetails from "../../components/SetupPage/SetupBusinessDetails";
import SetupGrid from "../../components/SetupPage/SetupGrid";
import { setupRoutes } from "../../data/routes";
import { AiFillHome } from "react-icons/ai";
import React from "react";

export default function SetupPage() {
  const { pathname } = useLocation();
  let params = useParams();
  const crumbs = setupRoutes
    .map(({ path, ...rest }) => ({
      path: Object.keys(params).length
        ? Object.keys(params).reduce(
            (path, param) => path.replace(`:${param}`, params[param]),
            path
          )
        : path,
      ...rest,
    }))
    .filter(({ path }) => pathname.includes(path));
  // console.log(crumbs);
  // console.log(params.locationId);
  // console.log(crumbs[crumbs.length - 2]);

  return (
    <>
      {pathname === "/setup" ? (
        <div className="flex flex-col flex-1">
          <SetupBusinessDetails business={business} />
          <SetupGrid />
        </div>
      ) : (
        <div className="flex flex-col flex-1">
          <Breadcrumbs separator="›">
            {React.Children.toArray(
              crumbs.map(({ name, path }, key) =>
                key + 1 === crumbs.length ? (
                  <span
                    className="flex items-center
                    py-[15px] pr-0 pl-2
                    space-x-1 text-xs
                    "
                  >
                    {name}
                  </span>
                ) : (
                  <NavBreadcrumbsLink
                    link={path}
                    label={name}
                    Icon={
                      key == 0 ? (
                        <AiFillHome className="fill-gray-500 w-4 h-4" />
                      ) : (
                        <></>
                      )
                    }
                  />
                )
              )
            )}
          </Breadcrumbs>
          <div
            className="flex flex-col items-center flex-1
             bg-white px-3 py-5
            "
          >
            <div className="max-w-6xl w-full">
              <Outlet context={[{ crumbs }]} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const business = {
  img: "/image_missing_no_logo.jpg",
  name: "KM REst",
  phone: "+966126502276",
  country: "Saudi Arabia",
  timezone: "Riyadh",
  endOfBusinessDay: "12:00 AM",
};

const NavBreadcrumbsLink = ({ link, Icon, label }) => (
  <Link
    to={link}
    className="flex items-center
      py-[15px] pr-0 pl-2
      space-x-1 text-xs
      hover:underline
      "
  >
    {Icon}
    <div>{label}</div>
  </Link>
);
