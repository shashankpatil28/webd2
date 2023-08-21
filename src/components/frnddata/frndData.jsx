import './frndData.css'

export default function frndData({user}) {
  return (
    <div className="frnddata">
      <img src={user.profilePic} alt="" />
      <p className='frndName'>{user.first_name} {user.last_name}</p>
      <p className='frndId'>{user.userId}</p>

      <div className="frndDataButton">
        <button>ADD FRND</button>
      </div>
    </div>
  )
}
