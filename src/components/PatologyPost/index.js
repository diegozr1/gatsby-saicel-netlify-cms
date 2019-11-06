import React from 'react'

import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { ArrowBottom } from '../../img';

import './PatologyPost.css';

const PatologyPost = ({
    post: {
        frontmatter: {
            title,
            tittleIcon,
            description,
            featuredimage,
            tags
        },
        excerpt,
        html
    }
}) => {
    const postTitle = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    console.log(excerpt)
    console.log(html)
    return (
        <div className="patology--post">
            <h3 className="patology--title" id={postTitle.replace(/\s/g, '')}>
                {tittleIcon && <img src={tittleIcon} alt={`Imagen de ${title}`} />}
                {title}                          
            </h3>

            {excerpt && <p className="patology--body"  dangerouslySetInnerHTML={{ __html: excerpt }} />}
            {html && <p className="patology--body"> {html} </p>}
            <p className="patology--description">
                {description}
            </p>
            {featuredimage && (
                <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                        imageInfo={{
                            image: featuredimage,
                            alt: `Imagen de ${title}`,
                        }}
                    />
                </div>
            )}
            <h4 className="patology--objective-title">- Objetivos</h4>
            <div className="objective-wrapper--container">                      
                {
                    tags.map((item, idx) => (
                        <div className="objective-wrapper--element" key={idx}>
                            <img key={idx} src={ArrowBottom} alt="arrow-objective" className="objective-wrapper--arrow"/>
                            <span> {item} </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PatologyPost;