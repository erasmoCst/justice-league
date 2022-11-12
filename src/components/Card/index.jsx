import "./style.css";


export const Card = (props) => {
  return (
    <div className="card">
      <img width="100%" src={ props.srcImg } />
    </div>
  );
};
