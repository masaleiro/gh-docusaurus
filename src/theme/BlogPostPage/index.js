import React, { useContext } from 'react';
import AuthContext from '../AuthContext'; // Adjust the path according to your project structure
import clsx from 'clsx';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {BlogPostProvider, useBlogPost} from '@docusaurus/theme-common/internal';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import TOC from '@theme/TOC';
function BlogPostPageContent({sidebar, children}) {
  const {metadata, toc} = useBlogPost();
  const {nextItem, prevItem, frontMatter} = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;
  const { user, authReady } = useContext(AuthContext);
  
  let roles = null
  let allowed = false;
  if(authReady){
    if(user){
      roles = user.app_metadata.roles;
      if(roles.includes("admin")){
        allowed = true;
      }else{
        if(metadata.tags){
          allowed = metadata.tags.some(tag => roles.includes(tag.label));
        }
      }
    }
  }
  return (
    <>
    <BlogLayout
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }>
      {allowed? (
      <BlogPostItem>{children}</BlogPostItem>
      ) : (
        <div>You do not have permissions to view this page. Please login or upgrade your account.</div>
      )}
      {(nextItem || prevItem) && (
        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
      )}
    </BlogLayout>
    </>
  );
}
export default function BlogPostPage(props) {
  const BlogPostContent = props.content;
  const { user, login, logout, authReady } = useContext(AuthContext);
  return (
    <>
        <BlogPostProvider content={props.content} isBlogPostPage>
          <HtmlClassNameProvider
            className={clsx(
              ThemeClassNames.wrapper.blogPages,
              ThemeClassNames.page.blogPostPage,
            )}>
            <BlogPostPageMetadata />
            <BlogPostPageContent sidebar={props.sidebar}>
            {/* {user ? ( */}
              <BlogPostContent />
              {/* ) : <div>Unauthorized</div>} */}
            </BlogPostPageContent>
          </HtmlClassNameProvider>
        </BlogPostProvider>
    </>
  );
}
