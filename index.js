function findMatching(drivers,string ){
return drivers.filter(d =>
    d.toLowerCase() === string.toLowerCase()
 )
}

function fuzzyMatch(drivers,string ){
    return drivers.filter(d => d.toLowerCase().startsWith(string.toLowerCase()))
}

function matchName(drivers,string){
return drivers.filter(d=>d.name.toLowerCase() === string.toLowerCase())
}