import React from "react";

type Props = {};

function StaticRoute({}: Props) {
  return (
    <div>
      This is a Static Route
      <p>And here we will show some static content </p>
      <p>
        also from this we will learn about some benefits of static rendering{" "}
      </p>
    </div>
  );
}

export default StaticRoute;
