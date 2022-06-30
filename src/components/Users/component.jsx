import User from "./User"
import data from "./mockData";

import "./styles.css";

const Users = () => (
    <div className="card">
        {data.map(user => <User key={user.id} {...user} />)}
    </div>
)

export default Users;