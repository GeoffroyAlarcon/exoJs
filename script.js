let cl = console.log;
let verbe = document.getElementById("verbe");
let resultat = document.getElementById("resultat");
let selectPronom = document.getElementById("pronom");
let tabPronom = ["je", "tu", "il/on/elle", "nous ", "vous", "ils/elles"];
let tabConjugaison = ["e", "es", "e", "eons", "ez", "ent"]
function pronom() {

    for (let x = 0; x < tabPronom.length; x++) {
        let option = document.createElement("button");
        selectPronom.appendChild(option).innerHTML = tabPronom[x];
        option.id = "btn" + x;
        option.value = x;

    }
    let button = document.getElementsByTagName("button")

    for (const elt of button) {
        elt.addEventListener("click", function test() {
            let string = "";
            string = verbe.value

            resultat.value = string.replace("er", tabConjugaison[elt.value]);

        })
    }

   

}
pronom();
