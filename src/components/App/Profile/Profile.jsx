import "./Profile.css"
export default function Profile({ users: { stats: { likes, views, followers }, avatar, location, tag, username } }) {
  return (
    <div className="profile-wrap">
      <div className="profile-info-wrap">
        <img className="profile-img" src={avatar} alt={username} />
        <p className="profile-name">{username}</p>
        <p className="profile-text">@{tag}</p>
        <p className="profile-text">{location}</p>
      </div>

      <ul className="profile-list">
        <li className="profile-list-item">
          <span>Followers</span>
          <span> {followers}</span>
        </li>
        <li className="profile-list-item">
          <span>Views</span>
          <span> {views}</span>
        </li>
        <li className="profile-list-item">
          <span>Likes</span>
          <span> {likes}</span>
        </li>
      </ul>
    </div>
  )
}