import React from "react";



function ShowRank({results}){
    const style = {
        border: '1px solid black',
        padding: '8px',
        margin: '8px'
    };
    

    return(
        <div style={style}>
            {results.rank}등 {results.username} <span> 점수 : {results.score}</span> <span>플레이 시간 : {results.time}</span>
        </div>
    );

}

function AllRank({result}){
    const data =[];

    const resultdata = data.concat(result);
    resultdata.sort((a, b) => {
        return b.score - a.score
    });


    //등수 추가
    for(let i=0; i<resultdata.length; i++){
        resultdata[i].rank = i+1;
    }


    return (
        
        <div>
            {resultdata.map(results =>(
                <ShowRank results = {results}/>
            ))}

        </div>
    );
}


export default AllRank;