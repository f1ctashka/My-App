import "./styles.css";

const User = ({id, name, phone, email}) => (
    <div className="item">
        <h1 className="number">Id: {id})</h1>
        <h1 className="name">{name}</h1>
        <h2 className="phone">Mobile phone: {phone}</h2>
        <div className="email">E-mail: {email}</div>
    </div>
)

export default User;