import React, { useContext } from 'react';
import AuthContext from '../../AuthContext'; // Adjust the path according to your project structure
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}
export default function DocItemContent({children}) {
  const syntheticTitle = useSyntheticTitle();
  // const { user, login, logout, authReady } = useContext(AuthContext);
  
  // let roles = null
  // let allowed = false;
  // if(authReady){
  //   if(user){
  //     roles = user.app_metadata.roles;
  //     if(roles.includes("admin")){
  //       allowed = true;
  //     }else{
  //       if(metadata.tags){
  //         allowed = metadata.tags.some(tag => roles.includes(tag.label));
  //       }
  //     }
  //   }
  // }
  return (
    <>
    {/* {allowed? ( */}
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
    {/* ) : (
      <div>You do not have permissions to view this page. Please login or upgrade your account.</div>
    )} */}
    </>
  );
}
