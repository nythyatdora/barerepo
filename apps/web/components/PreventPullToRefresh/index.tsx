"use client";
function PreventPullToRefresh(): JSX.Element {
  return (
    <style global jsx>
      {`
        html {
          overscroll-behavior: none;
        }
      `}
    </style>
  );
}

export { PreventPullToRefresh };
