import React, { useContext } from 'react';
import AuthContext from '../AuthContext'; // Adjust the path according to your project structure
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
export default function BlogLayout(props) {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  const { user, authReady } = useContext(AuthContext);
  let roles = null
  let allowed = true;
  if(authReady){
    if(user){
      // roles = user.app_metadata.roles;
      // if(roles.includes("admin")){
        allowed = true;
      // }else{
      //   if(metadata.tags){
      //     allowed = metadata.tags.some(tag => roles.includes(tag.label));
      //   }
      // }
    }
  } 
  return (
    <>
      <Layout {...layoutProps}>
        <div className="container margin-vert--lg">
          <div className="row">
            {/* {user && role == 'admin' ? ( */}
            {allowed ? (
              <>
                <BlogSidebar sidebar={sidebar} />
                <main
                  className={clsx('col', {
                    'col--7': hasSidebar,
                    'col--9 col--offset-1': !hasSidebar,
                  })}
                  itemScope
                  itemType="http://schema.org/Blog"
                >
                  {children}
                </main>
                {toc && <div className="col col--2">{toc}</div>}
              </>
            ) : (
              <div>You are not authorized to view this page. Please Login.</div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
  
}
