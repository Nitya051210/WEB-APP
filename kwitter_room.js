
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBklLR0spB7E2HDIBVMAA6-I-h0iRKo6PY",
      authDomain: "kwitter-7811d.firebaseapp.com",
      databaseURL: "https://kwitter-7811d-default-rtdb.firebaseio.com",
      projectId: "kwitter-7811d",
      storageBucket: "kwitter-7811d.appspot.com",
      messagingSenderId: "27060660480",
      appId: "1:27060660480:web:0a592fdfcc250c118aebe5"
    };
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome"+ user_name + "|";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose :" adding room name "
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
console.log("Room Name - " + Room_names);
row ="<div class='room_name' id= " +Room_names+ "onclick= 'redirectToRoomName(this.id)'># " + Room_names+ "</div> <hr>";
document.getElementById("output") .innerHTML += row;
     //End code
     });});}
getData();

function redirectToroomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"; 
}

