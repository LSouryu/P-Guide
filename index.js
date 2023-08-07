function Afficher_Accueil () {
    const Mounth = document.getElementById("enssenble_Mounth").children
    let i = 0;
    document.getElementById("Guide_Titre").style.display = "flex";
    document.getElementById("nav_Guide").style.display = "none";
    document.getElementById("nav_Dungeon").style.display = "none";
    document.getElementById("nav_Confident").style.display = "none";
    while(i <= 1) {
        Mounth[i].style.display = "none";
        i++
    }
}
function Afficher_Guide () {
    const Mounth = document.getElementById("enssenble_Mounth").children
    let i = 0;
    document.getElementById("Guide_Titre").style.display = "none";
    document.getElementById("nav_Guide").style.display = "flex";
    document.getElementById("nav_Dungeon").style.display = "none";
    document.getElementById("nav_Confident").style.display = "none";
    while(i <= 1) {
        Mounth[i].style.display = "none";
        i++
    }
}
function Afficher_Dungeon () {
    const Mounth = document.getElementById("enssenble_Mounth").children
    let i = 0;
    document.getElementById("Guide_Titre").style.display = "none";
    document.getElementById("nav_Guide").style.display = "none";
    document.getElementById("nav_Dungeon").style.display = "flex";
    document.getElementById("nav_Confident").style.display = "none";
    while(i <= 1) {
        Mounth[i].style.display = "none";
        i++
    }
}
function Afficher_Confident () {
    const Mounth = document.getElementById("enssenble_Mounth").children
    let i = 0;
    document.getElementById("Guide_Titre").style.display = "none";
    document.getElementById("nav_Guide").style.display = "none";
    document.getElementById("nav_Dungeon").style.display = "none";
    document.getElementById("nav_Confident").style.display = "flex";
    while(i <= 1) {
        Mounth[i].style.display = "none";
        i++
    }
}
function Afficher_April () {
    const Mounth = document.getElementById("enssenble_Mounth").children
    let i = 0;
    document.getElementById("nav_Guide").style.display = "none";
    while(i <= 1) {
        Mounth[i].style.display = "none";
        i++
    }
    document.getElementById("april").style.display = "flex";
}
function Afficher_May () {
    const Mounth = document.getElementById("enssenble_Mounth").children
    let i = 0;
    document.getElementById("nav_Guide").style.display = "none";
    while(i <= 1) {
        Mounth[i].style.display = "none";
        i++
    }
    document.getElementById("May").style.display = "flex";
}