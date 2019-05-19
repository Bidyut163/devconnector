import React, { Component } from "react";
import Moment from "react-moment";
import isEmpty from "../../validation/is-empty";

class ProfileCreds extends Component {
  render() {
    const { education, experience } = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{exp.form}</Moment> -
          {isEmpty(exp.to) ? (
            "Now"
          ) : (
            <span>
              <Moment format="YYYY/MM/DD">{exp.to}</Moment>{" "}
            </span>
          )}
        </p>
        <p>
          <span>
            <strong>Position: </strong>
            {exp.title}
          </span>
        </p>
        <p>
          {isEmpty(exp.location) ? null : (
            <span>
              <strong>Location: </strong>
              {exp.location}
            </span>
          )}
        </p>
        <p>
          {isEmpty(exp.description) ? null : (
            <span>
              <strong>Description: </strong>
              {exp.description}
            </span>
          )}
        </p>
      </li>
    ));

    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.school}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{edu.form}</Moment> -
          {isEmpty(edu.to) ? (
            "Now"
          ) : (
            <span>
              <Moment format="YYYY/MM/DD">{edu.to}</Moment>{" "}
            </span>
          )}
        </p>
        <p>
          <span>
            <strong>Degree: </strong>
            {edu.degree}
          </span>
        </p>
        <p>
          {isEmpty(edu.fieldofstudy) ? null : (
            <span>
              <strong>Field of study: </strong>
              {edu.fieldofstudy}
            </span>
          )}
        </p>
        <p>
          {isEmpty(edu.description) ? null : (
            <span>
              <strong>Description: </strong>
              {edu.description}
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No experience listed</p>
          )}
        </div>
        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          {eduItems.length > 0 ? (
            <ul className="list-group">{eduItems}</ul>
          ) : (
            <p className="text-center">No education listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
