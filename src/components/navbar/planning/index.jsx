import Card from "./card";


function Planning() {
    let cardloop=[1,2,3,4,5,6,7,8,9,10];


    return (
        <div className="card ms-4 mt-3 me-4 p-4 shadow">
            <div className="card-title text-center">
            <h2>Planning</h2>
            </div>
            <div className="container">
                <div className="dflex justify-content-between">
                    <div className="row flex-wrap">
                        {
                            cardloop.map(()=><Card/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Planning;
  