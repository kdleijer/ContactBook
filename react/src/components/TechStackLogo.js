import {Link} from "react-router-dom";
import React from "react";

function TechStackLogo({ name, logoUrl, linkName, width = 70, height = 70 }) {
    return (
        <Link to={`//${linkName}`} style={{ marginRight: 5 }}>
            <img src={logoUrl} alt={name} style={{ width: `${width}px`, height: `${height}px` }}/>
        </Link>
    );
}
function TechStackRender() {
    return (
        <div className='tech-stack'>
            <h3 className='tech-stack-header'>
                Tech Stack:
            </h3>
            <div className='tech-stack-logo'>
                <TechStackLogo linkName="developer.mozilla.org/en-US/docs/Web/JavaScript"       logoUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
                <TechStackLogo linkName="python.org"                                            logoUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
                <TechStackLogo linkName="reactjs.org"                                           logoUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
                <TechStackLogo linkName="djangoproject.com"                                     logoUrl="https://cdn.worldvectorlogo.com/logos/django.svg" />
                <TechStackLogo linkName="django-rest-framework.org"                             logoUrl="https://inlab.fib.upc.edu/sites/default/files/styles/large/public/field/image/django-rest-framework.jpg"  width={90} />
                <TechStackLogo linkName="w3schools.com/html"                                    logoUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" />
                <TechStackLogo linkName="w3schools.com/css"                                     logoUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" />
                <TechStackLogo linkName="getbootstrap.com"                                      logoUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" />
                <TechStackLogo linkName="sqlite.com"                                            logoUrl="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" />
                <TechStackLogo linkName="nodejs.org"                                            logoUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" />
                <TechStackLogo linkName="git-scm.com"                                           logoUrl="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" />
            </div>
        </div>
    )
}
export default TechStackRender