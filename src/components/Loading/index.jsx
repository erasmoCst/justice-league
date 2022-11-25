import "./style.css"

export const Loading = () =>
{      
    return(
        <div
            style={{
                position: "fixed", 
                zIndex: 2, 
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgb(0,0,0,0.3)",
                visibility: "visible"
                }}>

            <div className="loading"
                style={{
                width: 70,
                height: 70,
            }}>

            </div>
        </div>
    )
}