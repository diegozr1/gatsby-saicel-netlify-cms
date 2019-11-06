import React from 'react'

import { Button } from "../../components"

import "./PatologyNav.css"

const PatologyNav = ({ posts, path }) => {
    return (
        <ul className="patology--nav">
            {posts &&
                posts.map(({ node: post }) => {
                    const { id, frontmatter: { title } } = post;
                    const postTitle = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    const hrefId = `#${postTitle.replace(/\s/g, '')}`;
                    const active = path.hash === hrefId ? 'active' : '';
                    return (
                        <li className="menu-item--container" key={id}>
                            <a className={`menu-item--text ${active}`} href={hrefId}>{title}</a>
                        </li>
                    )
                })
            }
            <Button link="#contact"> Contáctanos </Button>
        </ul>
    )
}

export default PatologyNav;