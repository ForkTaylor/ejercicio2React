const CardLi = ({ title, first, second, third, fourth, fifth }) => {
    return (
        <div className="card">
            <h1>{title}</h1>
            <li>{first}</li>
            <li>{second}</li>
            <li>{third}</li>
            <li>{fourth}</li>
            <li>{fifth}</li>
        </div>
    )
};

export default CardLi;