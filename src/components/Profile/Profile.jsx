import "./Profile.css"
export default function Profile({ users: { stats: { likes, views, followers }, avatar, location, tag, username } }) {
  return (
    <div className="profile-wrap">
      <div className="profile-info-wrap">
        <img className="profile-img" src={avatar} alt={username} />
        <div className="profile-text-wrap">
          <p className="profile-name">{username}</p>
          <p className="profile-text">@{tag}</p>
          <p className="profile-text">{location}</p>
        </div>
      </div>

      <ul className="profile-list">
        <li className="profile-list-item">
          <span className="profile-item-text">Followers</span>
          <span className="profile-item-number"> {followers}</span>
        </li>
        <li className="profile-list-item">
          <span className="profile-item-text">Views</span>
          <span className="profile-item-number"> {views}</span>
        </li>
        <li className="profile-list-item">
          <span className="profile-item-text">Likes</span>
          <span className="profile-item-number"> {likes}</span>
        </li>
      </ul>
    </div>
  )
}