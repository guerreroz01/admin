import { PermIdentity } from '@material-ui/icons'
import './user.css'

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={process.env.PUBLIC_URL + "/profile.jpg"} alt="" className="userShowImage" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Oliver Reyes</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <PermIdentity />
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                </div>
                <div className="userUpdate"></div>
            </div>
        </div>
    )
}
