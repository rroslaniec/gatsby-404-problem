import React from "react";


export const onPreRenderHTML = (
  { getHeadComponents, replaceHeadComponents, pathname },
) => {
  console.log(pathname)
  if (pathname === '/404/') {
    console.log("not include", pathname);
    return;
  }

  const headComponents = getHeadComponents();
  headComponents.push([
    <script
      key="thisIsMyExternalScriptUsedEverywhereExcept404"
      dangerouslySetInnerHTML={{
        __html: `
        var thisIsMyExternalScriptUsedEverywhereExcept404 = true;
    `,
      }}
    />,
  ]);

  replaceHeadComponents(headComponents);
};
