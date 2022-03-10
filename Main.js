const countries=require("./data/countries.json");
const[,, ...args] =process.argv;
if(args.length===0){
    console.log("Pease pass the Translation argument values");
    process.exit();
}

GetAllTranslations();



function GetAllTranslations(){
    let allCountry=[];
    for(var i = 0; i < countries.length; i++) {
        var obj = countries[i];
       const matches= getKeyByValue(obj.translations,args[0]);
      
    }
    PrintCountries(allCountry);
}


function getKeyByValue(object, value) {
    const matches=[];
    if(object.hasOwnProperty(value)){
        matches.push(object[value].official)
       
   } 
   return matches;
  }

  function PrintCountries(object){
     if(object.length>0){
         for(let i=0;i<object.length;i++){
              console.log(object);
         }
     } 
     else{
        console.log("No Match found");
     }
  }