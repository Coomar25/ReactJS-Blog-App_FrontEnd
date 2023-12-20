import React from "react";

const ProfileButton = () => {
  const styles = {
    color: "black",
  };

  return (
    <div className="col-md-9 col-xs-6 text-end header-top-right" style={styles}>
      <ul className="list-inline nav-topbar d-none d-md-inline">
        <li className="menu-item-has-children">
            <img className="profileImage" src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="" />
          <ul className="sub-menu font-small">
            <li className="menu-item-has-children">
              <a className="profileText" style={{ color: "black" }} href="#">
                Pages
              </a>
            </li>
            <li className="menu-item-has-children">
              <a className="profileText" style={{ color: "black" }} href="#">
                Pages
              </a>
            </li>
            <li className="menu-item-has-children">
              <a className="profileText" style={{ color: "black" }} href="#">
                Pages
              </a>
            </li>
          </ul>
        </li>
  
      </ul>
    </div>
  );
};

export default ProfileButton;
