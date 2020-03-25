console.log('function.js connected')

// read schdule function
const currDate = () => {
    let d = Date().split(" ");
    let date = d[2] + "/" + d[1] + "/" + d[3] + " " + d[4];
    return date;
}

const returnShowContent = () => {
    let storeContent = [];
    storeContent.push(content.filter(each => currDate() >= each.start && currDate() <= each.end))
    return storeContent;
}



// time schdule (read and reset) function
const schdule = () => {
    $("#liveContent").empty();
    $("#schduleList").empty();

    returnShowContent()[0].map(each => {

        $("#liveContent").append('<h1>' + each.title + '</h1><small>' + each.author +
            '</small><p>' + each.description + '</p>')

    })
    content.map(each => {
        if (each.day == '26'){
            $("#26mar").append('<div class="list"><div class="list-t"><h2>' + each.title +
            '</h2><small>'+  each.author +'</small></div><div class="list-b"><h3>' + each.start.slice(12,17) +'-' + each.end.slice(12,17) + '</h3></div></div>')
        }
        if (each.day == '27'){
            $("#27mar").append('<div class="list"><div class="list-t"><h2>' + each.title +
            '</h2><small>'+  each.author +'</small></div><div class="list-b"><h3>' + each.start.slice(12,17) +'-' + each.end.slice(12,17) + '</h3></div></div>')
        }
        if (each.day == '28'){
            $("#28mar").append('<div class="list"><div class="list-t"><h2>' + each.title +
            '</h2><small>'+  each.author +'</small></div><div class="list-b"><h3>' + each.start.slice(12,17) +'-' + each.end.slice(12,17) + '</h3></div></div>')
        }
        if (each.day == '29'){
            $("#29mar").append('<div class="list"><div class="list-t"><h2>' + each.title +
            '</h2><small>'+  each.author +'</small></div><div class="list-b"><h3>' + each.start.slice(12,17) +'-' + each.end.slice(12,17) + '</h3></div></div>')
        }
        if (each.day == '30'){
            $("#30mar").append('<div class="list"><div class="list-t"><h2>' + each.title +
            '</h2><small>'+  each.author +'</small></div><div class="list-b"><h3>' + each.start.slice(12,17) +'-' + each.end.slice(12,17) + '</h3></div></div>')
        }
        if (each.day == '31'){
            $("#31mar").append('<div class="list"><div class="list-t"><h2>' + each.title +
            '</h2><small>'+  each.author +'</small></div><div class="list-b"><h3>' + each.start.slice(12,17) +'-' + each.end.slice(12,17) + '</h3></div></div>')
        }
        if (each.day == '01'){
            $("#1apr").append('<div class="list"><div class="list-t"><h2>' + each.title +
            '</h2><small>'+  each.author +'</small></div><div class="list-b"><h3>' + each.start.slice(12,17) +'-' + each.end.slice(12,17) + '</h3></div></div>')
        }
        if (each.day == '02'){
            $("#2apr").append('<div class="list"><div class="list-t"><h2>' + each.title +
            '</h2><small>'+  each.author +'</small></div><div class="list-b"><h3>' + each.start.slice(12,17) +'-' + each.end.slice(12,17) + '</h3></div></div>')
        }
        if (each.day == '03'){
            $("#3apr").append('<div class="list"><div class="list-t"><h2>' + each.title +
            '</h2><small>'+  each.author +'</small></div><div class="list-b"><h3>' + each.start.slice(12,17) +'-' + each.end.slice(12,17) + '</h3></div></div>')
        }
        if (each.day == '04'){
            $("#4apr").append('<div class="list"><div class="list-t"><h2>' + each.title +
            '</h2><small>'+  each.author +'</small></div><div class="list-b"><h3>' + each.start.slice(12,17) +'-' + each.end.slice(12,17) + '</h3></div></div>')
        }
        if (each.day == '05'){
            $("#5apr").append('<div class="list"><div class="list-t"><h2>' + each.title +
            '</h2><small>'+  each.author +'</small></div><div class="list-b"><h3>' + each.start.slice(12,17) +'-' + each.end.slice(12,17) + '</h3></div></div>')
        }
    })

    setTimeout(schdule, 300000);
}
schdule();


// toggle list //////////////////////////////////////////////////////////////
function openList(evt, listName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("schduleList"); // get all content
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("schdulebtn"); // get tab button
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(listName).style.display = "block"; // show that content
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpenList").click();