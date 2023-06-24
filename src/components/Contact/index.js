import React from "react";

const data = [
    {
        section: "linkedin",
        title: "Kraisorn",
        link: "https://www.linkedin.com/in/kraisorn-deelert/",
    },
    {
        section: "Github",
        title: "tOxicV4p0r",
        link: "https://github.com/tOxicV4p0r",
    },
    {
        section: "Youtube",
        title: "Blackboy96",
        link: "https://www.youtube.com/@blackboi96",
    },
]

function Contact() {
    return (
        <div className="space-y-3">
            <span>Links</span>
            <div className="grid grid-cols-8 gap-y-3">
                {
                    data.map(({ section, title, link }) => (
                        <React.Fragment key={title}>
                            <div className="col-span-2 text-gray-500">{section}</div>
                            <div className="col-span-6">
                                <div>
                                    <a className="underline underline-offset-4 after:content-['_↗']" href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                                </div>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
};

export default Contact;