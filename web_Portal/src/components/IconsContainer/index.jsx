import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter, faLinkedin, faGoogle, faFacebook, faInstagram, faYoutube, faXTwitter, faDribbble, faBehance, faPinterest, faAmazon
    ,faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons'


const IconsContainer = ({ links }) => {
    const getIconForLink = (link) => {
        const iconMap = {
            'youtube.com': faYoutube,
            'twitter.com': faTwitter,
            'facebook.com': faFacebook,
            'linkedin.com': faLinkedin,
            'google.com': faGoogle,
            'instagram.com': faInstagram,
            'x.com': faXTwitter,
            'dribbble.com': faDribbble,
            'behance.net': faBehance,
            'pinterest.com': faPinterest,
            'amazon.com': faAmazon,
            'github.com':faGithub
        };
        for (const pattern in iconMap) {
            if (link.includes(pattern)) {
                return iconMap[pattern];
            }
        }
        return faLink;
    };
    return (
        <>
            {links.map((item, index) => (
                <a href={`${item.socialPlatformLink}`} className="bg-[#000] px-[7px] py-[4px] rounded-full" key={index}>
                    <FontAwesomeIcon icon={getIconForLink(item.socialPlatformLink)} className="text-[#fff]" />
                </a>
            ))}
        </>
    )
}

export default IconsContainer
