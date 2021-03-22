var loginVisibile = 0;
var activeFeaturesNav;
var isLoggedIn = window.localStorage.getItem("Login");
var todayIncomeValue = window.localStorage.getItem("incomeValue");

function subscribe() {
    document.getElementById("subscribe-box").style.opacity = "0";
    document.getElementById("subscribe-desc").innerHTML =
        "<h2>Terima Kasih</h2> <p> Terima kasih telah berlangganan berita kami </p>";
}

function featuresTabChanged(id){
    for(var i = 0; i <= 3; i++){
        
        if(i == id){
            document.getElementById("features-id-"+i).classList.remove('idle');
            document.getElementById("features-id-"+i).classList.add('active');
            activeFeaturesNav = id;
            changeTabItem(i);
        }else{
            document.getElementById("features-id-"+i).classList.remove('active');
            document.getElementById("features-id-"+i).classList.add('idle');
        }
    }
}

function loginCheck() {
    if (isLoggedIn == 1) {
        document.getElementById("btnLogin").innerHTML = "Welcome";
        document.getElementById("btnLogin").style.borderColor = "white";
        firstLogin++;
        if (firstLogin == 1){
            
        }
    } else {
        document.getElementById("btnLogin").innerHTML = "Sign In";
        document.getElementById("btnLogin").style.borderColor = "#0086cd";
    }
}

function toggleLogin(n) {
    window.localStorage.setItem("Login", n);
}

function changeTabItem(id){
    if(id == 0){
        document.getElementById("features-item-1").style.display = "block";
        document.getElementById("features-item-2").style.display = "none";
        document.getElementById("features-item-3").style.display = "none";
        document.getElementById("features-item-4").style.display = "none";
    }else if(id == 1){
        document.getElementById("features-item-1").style.display = "block";
        document.getElementById("features-item-2").style.display = "block";
        document.getElementById("features-item-3").style.display = "block";
        document.getElementById("features-item-4").style.display = "block";
    }else if(id == 2){
        document.getElementById("features-item-1").style.display = "block";
        document.getElementById("features-item-2").style.display = "none";
        document.getElementById("features-item-3").style.display = "none";
        document.getElementById("features-item-4").style.display = "none";
    }else if(id == 3){
        document.getElementById("features-item-1").style.display = "block";
        document.getElementById("features-item-2").style.display = "block";
        document.getElementById("features-item-3").style.display = "block";
        document.getElementById("features-item-4").style.display = "block";
    }
}
