var parolaUtente = prompt('Dimmi una parola');

function check_palindroma(str){
    var maiusc = str.toLowerCase(); 
    console.log('La parola scelta è: ' + maiusc);
    
    var parolaContr = maiusc.split('').reverse().join('');
    console.log('Al contrario è: ' + parolaContr);
    
    if (parolaContr == maiusc){
    return (str + ' è una parola palindroma');
    }
    return (str + ' non è palindroma');
}
    
