import React from 'react';

const Heading = () => (
    <center>
          <h1>
            Center for Innovation and Incubation | Innovation Garage has
            incubated many startups
          </h1>
          <h3>Projects</h3>
    </center>
);

export{
    Heading,
}

export default ({ project }) => (
    <div className="row">
        <div className="col-lg-4 col-md-3">
            {project.projectImage === ""?<center><p style={{marginTop: 100}} >Image not available</p></center>:
                <center>
                    <img alt={project.name} src={"/cii" + project.projectImage} height="230px" />
                </center>
            }
        </div>
          <div className="col-lg-8 col-md-9">
            <br />
            <h3>
              {project.name}
              <br />
            </h3>
            <p>
              {project.description}
            </p>
            <br />
            <p>Status: {project.status}</p>
            <br />
            {JSON.stringify(project.moreInfo) === "{}"||project.moreInfo===undefined?null:
                <div className="tag">
                    {Object.keys(project.moreInfo).map((key)=>(
                        <h6 className="tag">{key} : {typeof(project.moreInfo[key])==="string"?project.moreInfo[key]:project.moreInfo[key].join(", ")}</h6>
                    ))}

                </div>
            }
            <br />
            {project.Link === ""? null:
                <a href={project.Link} className="btn btn-primary">
                Learn More
                </a>
            }
        </div>
    </div>
);