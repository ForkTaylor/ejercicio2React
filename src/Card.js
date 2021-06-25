const Card = ({ title, data}) => {
    return (
        <div className="card">
            <h1>{title}</h1>
            <span>
               {data}
            </span>
        </div>
    )
};

export default Card;