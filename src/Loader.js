
const loader = {

    setLoader : async function(){
        document.getElementById("loader").style.opacity = "1";
       
        document.getElementById("loader").style.display="flex";
        
        console.log(document.getElementById("loader").classList)
    },
    disLoader : async function(){
        document.getElementById("loader").style.opacity = "0";
        setTimeout(()=>{
            document.getElementById("loader").style.display="none";
        },1500)
        console.log(document.getElementById("loader").classList)
    }
}


export default loader;