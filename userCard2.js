let gandhioldinfo = {
    imgurl: "http://upload.wikimedia.org/wikipedia/commons/7/70/Gandhi_smiling_R.jpg",
    name: "Mahatma Gandhi",
    Description: "Freedom Fighter"
}

let gandhiyounginfo = {
    imgurl: "https://i0.wp.com/www.zestvine.com/wp-content/uploads/2018/03/mahatma-gandhi-young-the-man-who-change-the-world.jpg?resize=620%2C680",
    name: "Mohandas Karamchand Gandhi Gandhi",
    Description: "Father of the Nation"
}

let isgandhiold = true;
let displayobject;
let flipdata = function(){
    if(isgandhiold == true){
        displayobject = gandhiyounginfo;
        isgandhiold = false;
    }
    else{
        displayobject = gandhioldinfo;
        isgandhiold = true;
    }
    document.getelementById("gandhi-img").src = displayobject.imgurl;
    document.getelementById("mahatma-name").innerHTML = displayobject.name;
    document.getelementById("gandhi-description").innerHTML = displayobject.description;
}