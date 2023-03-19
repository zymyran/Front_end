const exchange = {
    usd: {
        euro: 0.8467583497,
        kzt: 429.0
    },
    euro: {
        usd: 1.181,
        kzt: 507.0
    },
    kzt: {
        usd: 0.002325,
        euro: 0.001973
    }    
}

function remove() {
    document.getElementById("usd").value = "-";
    document.getElementById("kzt").value = "-";
    document.getElementById("euro").value = "-";
}

function getValue(){
    let val = document.getElementById("fth").value;


    if (val == "") {
        remove();
        return;
    }

    let sl = document.getElementById("select");

    let amount = parseInt(val);

    let typeOfCurrency = sl.value;
    
    
    converter(amount, typeOfCurrency, "kzt");
    converter(amount, typeOfCurrency, "euro");
    converter(amount, typeOfCurrency, "usd");

}

function converter(amount, typeOfCurrency, fromTo){
    let current = document.getElementById(fromTo);

    if (fromTo == typeOfCurrency){
        current.value = "-";
        return;
    }

    let amt = parseInt(amount);

    if (typeOfCurrency == "usd") {
        if (fromTo == "kzt") {
            current.value = (amt * 429).toFixed(3);
        } else {
            current.value = (amt * 1.181818182).toFixed(3);
        }
        return;
    } 


    if (typeOfCurrency == "euro"){
        if (fromTo == "kzt") {
            current.value = (amt * 507).toFixed(3);
        } else {
            current.value = (amt * 0.846153846).toFixed(3);
        }
        return;
    }


    if (typeOfCurrency == "kzt"){
        if (fromTo == "usd"){
            current.value  = (amt * 0.002331002).toFixed(3);
        } else {
            current.value = (amt * 0.001972387).toFixed(3);
        }
        return;
    }
    

}


function doIt(){
    remove();

    let opton = document.getElementById("select").value;

    let amount = document.getElementById("fth").value;

    if (amount == "NaN" || amount == ""){
        remove();
        return;
    }

    let amt = parseInt(amount);

    converter(amt, opton, "kzt");
    converter(amt, opton, "euro");
    converter(amt, opton, "usd");
}