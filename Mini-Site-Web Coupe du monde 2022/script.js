document.getElementById("img").style.display='inline';


function afficheGroupeA(){
    document.getElementById("groupeA").style.display='inline';
    document.getElementById("groupeB").style.display='none';
    document.getElementById("groupeC").style.display='none';
    document.getElementById("groupeF").style.display='none';

    document.getElementById("lblmess").style.display='none';
    document.getElementById("table").style.display='none';
    document.getElementById("ajoutergroupe").style.display="none";

    console.log("hello");
}

function afficheGroupeB(){
    document.getElementById("groupeB").style.display='inline';
    document.getElementById("groupeA").style.display='none';
    document.getElementById("groupeC").style.display='none';
    document.getElementById("groupeF").style.display='none';
    
    document.getElementById("lblmess").style.display='none';
    document.getElementById("table").style.display='none';
    document.getElementById("ajoutergroupe").style.display="none";

    console.log("hello");
}

function afficheGroupeC(){
    document.getElementById("groupeC").style.display='inline';
    document.getElementById("groupeA").style.display='none';
    document.getElementById("groupeB").style.display='none';
    document.getElementById("groupeF").style.display='none';
    
    document.getElementById("lblmess").style.display='none';
    document.getElementById("table").style.display='none';
    document.getElementById("ajoutergroupe").style.display="none";

    console.log("hello");
}

function afficheGroupeF(){
    document.getElementById("groupeF").style.display='inline';
    document.getElementById("groupeA").style.display='none';
    document.getElementById("groupeB").style.display='none';
    document.getElementById("groupeC").style.display='none';
    
    document.getElementById("lblmess").style.display='none';
    document.getElementById("table").style.display='none';
    document.getElementById("ajoutergroupe").style.display="none";
    
    console.log("hello");
}

/*---------------modifier groupe F--------*/
var aIndex,
table2=document.getElementById("table3");

    function En(){
        var vide = false;
        pre = document.getElementById("pre").value;
        pr= document.getElementById("pr").value;
        if(pre === ""){
        alert("le nom  ne doit pas être vide");
        vide = true;
        }
    return vide;
    }

function selected1() {

    for( i= 0; i <table2.rows.length;i++){
        table2.rows[i].onclick = function(){
            aIndex=this.rowIndex;
            document.getElementById("pre").value = this.cells[0].innerHTML;
            document.getElementById("pr").value = this.cells[1].innerHTML;
            };
    }
}
selected1();

function Modif(){
    var pre = document.getElementById("pre").value;
    var pr = document.getElementById("pr").value;

    if(!En()){
    table2.rows[aIndex ].cells[0].innerHTML = pre;
    table2.rows[aIndex ].cells[1].innerHTML = pr;
    }
}

function Suppri(){
    table2.deleteRow(aIndex);
    pre = document.getElementById("pre").value = "";
    pr = document.getElementById("pr").value = "";
}

/*---------------ajouter groupe-----------*/

function supprimer(e) {

    const parent = e.target.parentNode;
    parent.remove();
  };
  
  function addElement(){
    var li=document.createElement('tr');
    var txt=document.querySelector('.txt');
    let check=document.querySelector('input[name="position"]:checked')?.value;

            
    //supprimer un element
  
    var btn1=document.createElement('button');
    btn1.type='button';
    btn1.style.marginLeft='40px';
    btn1.textContent="supprimer";
    btn1.style.backgroundColor='#003153';
    btn1.style.color='#ffff';
    btn1.style.borderRadius='5px';
    btn1.addEventListener("click",(e) => supprimer(e));
  
  //modifier un element
    var btn2=document.createElement('button');
    btn2.type='button';
    btn2.style.marginLeft='40px';
    btn2.textContent="supprimer";
    btn2.style.backgroundColor='#003153';
    btn2.style.color='#ffff';
    btn2.style.borderRadius='5px';
    btn2.textContent="modifier";
    btn2.onclick = function () {
    var p = prompt("modifier l'élement");
    if (p != null) {
     li.innerHTML = p ;
      li.appendChild(btn1);
      li.appendChild(btn2);
    }
   }
  
    li.innerText=txt.value;
    li.appendChild(btn1);
    li.appendChild(btn2);
    var list=document.querySelector('#list');
  if(txt.value!="") {
    if(check=='fin') {
  
    list.appendChild(li);
  
  }
   else if(check=='debut') {
    list.insertBefore(li, list.firstElementChild);
  
   }
   else {
    list.appendChild(li);
   };
    txt.value="";
    txt.focus();
    }
else {
    alert("vous n'avez pas entré un élement!");
    }
}; 

function ajoutergroupe(){
    document.getElementById("ajoutergroupe").style.display="inline";
    document.getElementById("lblmess").style.display='inline';

    document.getElementById("groupeF").style.display='none';
    document.getElementById("groupeA").style.display='none';
    document.getElementById("groupeB").style.display='none';
    document.getElementById("groupeC").style.display='none';
    document.getElementById("table").style.display='none';

}

/*------------------volet 3---------------------*/

var compteurImage=1;
var totalImage=9;

function silder(x){

var image=document.getElementById('img');
compteurImage=compteurImage + x;
image.src="images/photo"+compteurImage+".jpeg";
	if (compteurImage>=totalImage){compteurImage=1;}
	if (compteurImage<1)
    {
        compteurImage=totalImage;
    }
}
function silderAuto(){

    var image=document.getElementById('img');
    compteurImage=compteurImage + 1;
    image.src="images/photo"+compteurImage+".jpeg";
        if (compteurImage>=totalImage){compteurImage=1;}
        if (compteurImage<1){compteurImage=totalImage;}
        
    }  
window.setInterval(silderAuto,2000);

function addTeam(){
    var adt="<img src='images/team31.jpg' onclick usemap='#maroc' style='height: 410px ; border-radius: 2px; width: 915px;'>"+
    "<map name='maroc'>"+
    "<area shape='rect' coords='440,20,520,100' alt='Banone' onclick='player1()' href='#'/>"+
    "<area shape='rect' coords='340,120,430,200' alt='Hakimi' onclick='player2()' href='#'/>"+
    "</map>"
    document.getElementById("volet3").innerHTML=adt;
    document.getElementById("volet41").innerHTML="<iframe id='la' margin-top='2px' src='listeEquipe/ListeEquipe.html' width='915px' height='750px' overflow='hidden' margin-left: 20.2%;></iframe>";
    document.getElementById("volet41").style.display='inline';
    document.getElementById("imgvolet4").style.display='none';
    document.getElementById("TabMatch").style.display="none";
    document.getElementById("vole4").style.display="n";



}

function player2() {
    document.getElementById("player2").style.display= 'inline';
    document.getElementById("volet41").style.display='none';
    document.getElementById("imgvolet4").style.display='none';
    document.getElementById("TabMatch").style.display="none";
    document.getElementById("vole4").style.display="none";


}

/*---------------------match------------------------*/
function match(){
    document.getElementById("TabMatch").style.display="inline";
    document.getElementById("volet41").style.display="none";
    document.getElementById("imgvolet4").style.display="none";
    document.getElementById("player2").style.display="none"
    document.getElementById("vole4").style.display="none";
    document.getElementById("volet234").style.display="none";
    document.getElementById("contact").style.display="none";
}

var rIndex,
    table=document.getElementById("table1");
    // vérifie si l'entrée vide
    function Entrérvide(){
        var vide = false;
            nom = document.getElementById("nom1").value;
            nom = document.getElementById("nom2").value;
            nom = document.getElementById("nom3").value;
                    
            if(nom1 === ""){
                alert("le nom  ne doit pas être vide");
                vide = true;
            }
            else if(nom2 === ""){
                alert("le nom  ne doit pas être vide");
                vide = true;
            }
            else if(nom3 === ""){
                    alert("le nom  ne doit pas être vide");
                    vide = true;
            }
        return vide;
    }

    function Ajou(){
        if(!Entrérvide()){
            var newRow = table.insertRow(table.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1),
                cell3 = newRow.insertCell(2),
                nom1 = document.getElementById("nom1").value,
                nom2 = document.getElementById("nom2").value,
                nom3 = document.getElementById("nom3").value;
            
                cell1.innerHTML = nom1;
                cell2.innerHTML = nom2;
                cell3.innerHTML = nom3;
                
                selectedRowToInput();
        }
    }

    function selectedRowToInput() {
        for( i= 1; i <table.rows.length;i++){
            table.rows[i].onclick = function(){
                rIndex=this.rowIndex;
                document.getElementById("nom1").value = this.cells[0].innerHTML;
                document.getElementById("nom2").value = this.cells[1].innerHTML;
                document.getElementById("nom3").value = this.cells[2].innerHTML;
            };
        }
    }
    selectedRowToInput();

function Mod(){
        var nom1 = document.getElementById("nom1").value;
        var nom2 = document.getElementById("nom2").value;
        var nom3 = document.getElementById("nom3").value;
        if(!Entrérvide()){
        table.rows[rIndex ].cells[0].innerHTML = nom1;
        table.rows[rIndex ].cells[1].innerHTML = nom2;
        table.rows[rIndex ].cells[2].innerHTML = nom3;
        }
    }

function Supp(){
        table.deleteRow(rIndex);
        // efface le texte d'entrée
            nom1 = document.getElementById("nom1").value = "";
            nom2= document.getElementById("nom2").value = "";
            nom3 = document.getElementById("nom3").value = "";
}

/*----------------classement------------------------*/
function classement(){
    document.getElementById("vole4").style.display="inline";
    document.getElementById("TabMatch").style.display="none";
    document.getElementById("volet41").style.display="none";
    document.getElementById("imgvolet4").style.display="none";
    document.getElementById("player2").style.display="none"
    document.getElementById("contact").style.display="none";
    document.getElementById("volet2").style.display="inline";
    document.getElementById("img").style.display='inline';

}

var Index,
    table1=document.getElementById("table2");
        function Envide(){
            var vide = false;
            N1 = document.getElementById("N1").value;
            N2= document.getElementById("N2").value;
            N3 = document.getElementById("N3").value;
            if(N1 === ""){
                alert("le nom  ne doit pas être vide");
                vide = true;
            }
            else if(N2 === ""){
                alert("le nom  ne doit pas être vide");
                vide = true;
            }
            else if(N3 === ""){
            alert("le nom  ne doit pas être vide");
            vide = true;
            }
        return vide;
    }

    function A(){
        if(!Envide()){
            var newRow = table1.insertRow(table1.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            N1 = document.getElementById("N1").value,
            N2 = document.getElementById("N2").value,
            N3 = document.getElementById("N3").value;
            cell1.innerHTML = N1;
            cell2.innerHTML = N2;
            cell3.innerHTML = N3;
            
            selected();
            }
    }
    
    function selected() {
        for( i= 1; i <table1.rows.length;i++){
            table1.rows[i].onclick = function(){
            Index=this.rowIndex;
            document.getElementById("N1").value = this.cells[0].innerHTML;
            document.getElementById("N2").value = this.cells[1].innerHTML;
            document.getElementById("N3").value = this.cells[2].innerHTML;
            };
        }
    }
    selected();
    function M(){
        var N1 = document.getElementById("N1").value;
        var N2 = document.getElementById("N2").value;
        var N3 = document.getElementById("N3").value;
                                            
        if(!Envide()){
                table1.rows[Index ].cells[0].innerHTML = N1;
                table1.rows[Index ].cells[1].innerHTML = N2;
                table1.rows[Index ].cells[2].innerHTML = N3;
        }
    }
    
    function S(){
        table1.deleteRow(Index);
            N1 = document.getElementById("N1").value = "";
            N2= document.getElementById("N2").value = "";
            N3 = document.getElementById("N3").value = "";
    }

/*----------------------contact------------------- */

function contact(){
    document.getElementById("contact").style.display="inline";
    document.getElementById("volet2").style.display="none";
    document.getElementById("volet3").style.display="none";
    document.getElementById("volet4").style.display="none";
    document.getElementById("volet234").style.display="none";
    document.getElementById("class23").style.display="none";
    document.getElementById("volet23").style.display="none";
    document.getElementById("volet3").style.display='none';

}   

/*------------------------actualite----------------------*/

function actualite() {

    document.getElementById("volet234").style.display='inline';
    document.getElementById("volet4").style.display='none';
    document.getElementById("volet3").style.display='none';
    document.getElementById("volet2").style.display='none';
    document.getElementById("volet23").style.display="none";

    document.getElementById("contact").style.display='none';


    var add="<iframe src='actuailite/actualite1.html' style='height:1150px; width:100%;'></iframe>";
    document.getElementById("volet234").innerHTML=add;
    
}

/*----------------------footer-------------------------*/

function Lien1() {

    document.getElementById("volet234").style.display='inline';
    document.getElementById("volet4").style.display='none';
    document.getElementById("volet3").style.display='none';
    document.getElementById("volet2").style.display='none';
    document.getElementById("contact").style.display="none";


    var add="<iframe src='https://world-cup-matches.codsfli.com/' style='height:1150px; width:100%;'></iframe>";
    document.getElementById("volet234").innerHTML=add;
}

function Lien2(){
    document.getElementById("volet23").style.display="inline";
    document.getElementById("class23").style.display="inline";
    document.getElementById("footTabMatch").style.display="none";
    document.getElementById("volet4").style.width="80%"
    document.getElementById("img1volet4").style.width="100%"
    document.getElementById("img2volet4").style.width="100%"
    document.getElementById("volet4").style.marginLeft="0%"

    document.getElementById("volet2").style.display='none';
    document.getElementById("volet3").style.display='none';
    document.getElementById("contact").style.display="none";
    document.getElementById("volet4").style.display="inline";
    document.getElementById("TabMatch").style.display="none";
    document.getElementById("volet234").style.display='none';



}

function Lien3(){
    document.getElementById("volet23").style.display="inline";
    document.getElementById("footTabMatch").style.display="inline";
    document.getElementById("class23").style.display="none";
    document.getElementById("contact").style.display="none";
    document.getElementById("volet4").style.width="80%"
    document.getElementById("img1volet4").style.width="100%"
    document.getElementById("img2volet4").style.width="100%"
    document.getElementById("volet4").style.marginLeft="0%"

    document.getElementById("volet4").style.display="inline";
    document.getElementById("TabMatch").style.display="none";
    document.getElementById("img1volet4").style.display="inline";
    document.getElementById("img2volet4").style.display="inline";
    document.getElementById("volet234").style.display='none';



    document.getElementById("volet2").style.display='none';
    document.getElementById("volet3").style.display='none';
}

