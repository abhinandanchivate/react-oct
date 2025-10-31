import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentProfileAciton } from "../../profile/rtk/profile.action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // component will get the data from the store.
  // useSelector to get the auth state from the store.
  const { isAuthenticated, token } = useSelector((state) => state.auth);
  // state : global state
  // state.auth: auth slice state
  // state.auth.isAuthenticated : isAuthenticated value from auth slice state

  const { profile, loading, error, status } = useSelector(
    (state) => state.profile
  );
  // state.profile : profile slice state
  // state.profile.profile : profile value from profile slice state
  // status values : 'loading' | 'success' | 'empty' | 'failed'
  useEffect(() => {
    console.log("hello from useeffect");
    // if ur an authenticated user , token, and status !=loading===> getCurrentProfileAction ()
    if (isAuthenticated && token && status === "empty") {
      dispatch(getCurrentProfileAciton()); // will it bringthe profile data from the backend ==> NO.
    }
  }, []); // to run it only once when the component is mounted.loading phase of component.

  // 1. user is not authenticated but came to dashboard
  if (!isAuthenticated) {
    return (
      <section className="container">
        <h2>Please sign in</h2>
        <p>You must be authenticated to view the dashboard.</p>
        <Link to="/auth/login" className="btn btn-primary">
          Go to Login
        </Link>
      </section>
    );
  }
  // 2. u r in loading phase

  //   if (loading || status === "loading") {
  //     return (
  //       <section className="container">
  //         <h2 className="my-2">Dashboard</h2>
  //         <p>Loading your profile…</p>
  //       </section>
  //     );
  //   }
  // 3. empty there is no profile
  if (isAuthenticated == true && profile === null) {
    console.log("inside the user loaded and create proifle");
    return (
      <section className="container">
        <h2 className="my-2">Dashboard</h2>
        <p>You haven’t created a profile yet.</p>
        <Link to="/profile/create-profile" className="btn btn-primary">
          Create Profile
        </Link>
      </section>
    );
  }
  // 4. success there we have a user profile.
  if (status === "success" && profile) {
    const {
      company,
      website,
      location,
      status: jobStatus,
      skills,
      githubusername,
      bio,
      social,
    } = profile;

    return (
      <section className="container">
        <h2 className="my-2">Dashboard</h2>

        <div className="card card-body mb-3">
          <h3>Profile Details</h3>
          <ul className="list-group">
            {company && (
              <li className="list-group-item">
                <strong>Company:</strong> {company}
              </li>
            )}
            {website && (
              <li className="list-group-item">
                <strong>Website:</strong>{" "}
                <a href={website} target="_blank" rel="noreferrer">
                  {website}
                </a>
              </li>
            )}
            {location && (
              <li className="list-group-item">
                <strong>Location:</strong> {location}
              </li>
            )}
            {jobStatus && (
              <li className="list-group-item">
                <strong>Status:</strong> {jobStatus}
              </li>
            )}
            {skills && (
              <li className="list-group-item">
                <strong>Skills:</strong>{" "}
                {Array.isArray(skills) ? skills.join(", ") : skills}
              </li>
            )}
            {githubusername && (
              <li className="list-group-item">
                <strong>GitHub:</strong>{" "}
                <a
                  href={`https://github.com/${githubusername}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {githubusername}
                </a>
              </li>
            )}
            {bio && (
              <li className="list-group-item">
                <strong>Bio:</strong> {bio}
              </li>
            )}
            {social && (
              <li className="list-group-item">
                <strong>Social:</strong>
                <ul>
                  {social.twitter && (
                    <li>
                      <a href={social.twitter} target="_blank" rel="noreferrer">
                        Twitter
                      </a>
                    </li>
                  )}
                  {social.facebook && (
                    <li>
                      <a
                        href={social.facebook}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Facebook
                      </a>
                    </li>
                  )}
                  {social.linkedin && (
                    <li>
                      <a
                        href={social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                  )}
                  {social.youtube && (
                    <li>
                      <a href={social.youtube} target="_blank" rel="noreferrer">
                        YouTube
                      </a>
                    </li>
                  )}
                  {social.instagram && (
                    <li>
                      <a
                        href={social.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                  )}
                </ul>
              </li>
            )}
          </ul>
        </div>

        <Link to="/profile/edit-profile" className="btn btn-primary">
          Edit Profile
        </Link>
      </section>
    );
  }
  // 5. failure : rest call failures.

  return <>Dashboard</>;
};

export default Dashboard;
