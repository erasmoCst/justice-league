import "./style.css";

export const Card = ({srcImg, title, ...resto}) => {
  return (
    <div 
      className="card"
      {...resto}>
      <img
        width="100%"
        alt="cards"
        src={srcImg}
        style={{ borderRadius: "8px" }}
      />
      <h4 style={{ textAlign: "center", marginTop: "10px" }}>{title}</h4>
    </div>
  );
};
