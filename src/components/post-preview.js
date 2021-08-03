import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from '../components/read-link';

const PostPreview = ({ post }) => (
    <article
        css={css`
            border-bottom: 1px solid #ddd;
            margin-top: 0.75rem;
            padding-bottom:1rem;

            :first-of-type {
                margin-top: 1rem;
            }
        `}
    >
        <Link to={post.slug} css={css` margin: 1rem 1rem 0 0; width: 100%`}>
            <Image
                //fluid={}
                css={css`
                    * {
                        margin-top: 0;
                    }
                `}
                alt={post.title}
            />
        </Link>
        <h3>
            <Link to={post.slug}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </article>
);

export default PostPreview;