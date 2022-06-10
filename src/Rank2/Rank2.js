import React from 'react';

function ranking(score, name, time) {
    var Rank = {
        name: name,
        score: score,
        time: time
    };
    RankArray.push(Rank);
    RankArray.sort(NumberCompare);
    var rankingElem = document.getElementById("ranking");
    var printArray = [];
    for (var i = 0; i < RankArray.length; i++) {
        if (i >= 10) {
            break;
        }
        printArray.push((i + 1) + '등 : ' + RankArray[i].name + " " + RankArray[i].score + '점' + RankArray[i].time + " ");
    }
    rankingElem.innerHTML = printArray.join("<br/>");
}
function NumberCompare(a, b) {
    return a.score - b.score;
}

export default Rank2;
