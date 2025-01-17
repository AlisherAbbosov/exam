import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Context } from "../../../../Content/Videos";
import SearchImg from "../../../../Components/Lib/Icons/Navbar/search.png";
import "./MiddlePlayer.scss";

const MiddlePlayer = () => {
  const { videos } = React.useContext(Context);
  const { user_id } = useParams();

  const video = videos[user_id];

  return (
    <div className="middle__container">
      <ul className="channel__list">
        <li className="channel__item">
          <NavLink
            className=" channel__item selected"
            to={"/channel/" + user_id}
          >
            Home
          </NavLink>
        </li>

        <li className="channel__item">
          <NavLink to={"/channel/" + user_id}>Videos</NavLink>
        </li>

        <li className="channel__item">
          <NavLink to={"/channel/" + user_id}>Channels</NavLink>
        </li>

        <li className="channel__item">
          <NavLink to={"/channel/" + user_id}>Discussion</NavLink>
        </li>

        <li className="channel__item">
          <NavLink to={"/channel/" + user_id}>About</NavLink>
        </li>

        <li className="channel__item">
          <NavLink to={"/channel/" + user_id}>
            <img src={SearchImg} alt="search" />
          </NavLink>
        </li>
      </ul>

      <div className="middle__left">
        <NavLink to={"/video/" + video?.id}>
          <img className="middle__left-video" src={video?.url} alt="video" />
        </NavLink>

        <div className="middle__left-info">
          <NavLink to={"/video/" + video?.id}>
            <h4 className="middle__video-title">{video?.title}</h4>
          </NavLink>

          <p className="middle__video-comment">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            ipsam porro quasi, debitis laboriosam rem quos nesciunt perferendis,
            voluptatem aliquid praesentium.
          </p>

          <p className="middle__video-info">
            <span>11k views </span> · <span>6 months ago</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiddlePlayer;
