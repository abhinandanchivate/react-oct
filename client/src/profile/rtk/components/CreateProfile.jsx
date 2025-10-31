import React, { useEffect, useMemo, useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createOrUpdateProfileAction,
  getCurrentProfileAction,
} from "../../redux/action/profileAction";

const emptyForm = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "", // comma-separated
  bio: "",
  githubusername: "",
  // social
  youtube: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  instagram: "",
};

const CreateProfile = () => {
  const isCreate = Boolean(useMatch("/profile/create-profile")); // true/false
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { profile, loading, error, status } = useSelector(
    (state) => state.profile
  );

  const [showSocial, setShowSocial] = useState(false);
  const [formData, setFormData] = useState(emptyForm);

  const {
    company,
    website,
    location,
    status: professionalStatus,
    skills,
    bio,
    githubusername,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const skillsArray = skills
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const payload = { ...formData, skills: skillsArray };
    dispatch(createOrUpdateProfileAction(payload));
  };

  const socialDetails = (
    <>
      <div className="form-group social-input">
        <i className="fab fa-twitter fa-2x"></i>
        <input
          type="text"
          placeholder="Twitter URL"
          name="twitter"
          onChange={onChange}
          value={twitter}
        />
      </div>
      <div className="form-group social-input">
        <i className="fab fa-facebook fa-2x"></i>
        <input
          type="text"
          placeholder="Facebook URL"
          name="facebook"
          onChange={onChange}
          value={facebook}
        />
      </div>
      <div className="form-group social-input">
        <i className="fab fa-youtube fa-2x"></i>
        <input
          type="text"
          placeholder="YouTube URL"
          name="youtube"
          onChange={onChange}
          value={youtube}
        />
      </div>
      <div className="form-group social-input">
        <i className="fab fa-linkedin fa-2x"></i>
        <input
          type="text"
          placeholder="LinkedIn URL"
          name="linkedin"
          onChange={onChange}
          value={linkedin}
        />
      </div>
      <div className="form-group social-input">
        <i className="fab fa-instagram fa-2x"></i>
        <input
          type="text"
          placeholder="Instagram URL"
          name="instagram"
          onChange={onChange}
          value={instagram}
        />
      </div>
    </>
  );

  const title = useMemo(
    () => (isCreate ? "Create Your Profile" : "Edit Your Profile"),
    [isCreate]
  );

  const subtitle = useMemo(
    () =>
      isCreate
        ? "Let's get some information to make your profile"
        : "Add some changes to your profile",
    [isCreate]
  );

  // Load current profile in edit mode
  useEffect(() => {
    if (!isCreate) dispatch(getCurrentProfileAction());
  }, [dispatch, isCreate]);

  // Prefill form when profile loads
  useEffect(() => {
    if (!profile || loading) return;

    const data = { ...emptyForm };

    // scalar fields
    for (const key in data) {
      if (profile[key] != null && typeof profile[key] !== "object") {
        data[key] = profile[key];
      }
    }

    // social links
    if (profile.social && typeof profile.social === "object") {
      for (const key in profile.social) {
        if (key in data && profile.social[key] != null) {
          data[key] = profile.social[key];
        }
      }
    }

    // skills array -> CSV
    if (Array.isArray(profile.skills)) {
      data.skills = profile.skills.join(", ");
    }

    setFormData(data);
  }, [profile, loading]);

  // Navigate after success (adjust 'succeeded' to your slice's value)
  useEffect(() => {
    if (status === "succeeded") navigate("/dashboard");
  }, [status, navigate]);

  return (
    <section className="container">
      <h1 className="large text-primary">{title}</h1>
      <p className="lead">
        <i className="fas fa-user"></i> {subtitle}
      </p>
      <small>* = required field</small>

      {error && (
        <div className="alert alert-danger" role="alert">
          {typeof error === "string" ? error : "Something went wrong."}
        </div>
      )}

      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="status" value={professionalStatus} onChange={onChange}>
            <option value="">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            onChange={onChange}
            value={company}
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            onChange={onChange}
            value={website}
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            onChange={onChange}
            value={location}
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            onChange={onChange}
            value={skills}
          />
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            onChange={onChange}
            value={githubusername}
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>

        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            onChange={onChange}
            value={bio}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => setShowSocial((s) => !s)}
          >
            {showSocial ? "Hide Social Details" : "Add social Links"}
          </button>
          <span> Optional</span>
        </div>

        {showSocial && socialDetails}

        <input
          type="submit"
          className="btn btn-primary my-1"
          disabled={loading}
          value={loading ? "Saving..." : "Save"}
        />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </section>
  );
};

export default CreateProfile;
