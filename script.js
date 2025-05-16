
setInterval(() => {
    const Ctime = new Date();
    let hours = Ctime.getHours();
    let minutes = Ctime.getMinutes().toString().padStart(2, '0');
    let second = Ctime.getSeconds().toString().padStart(2, '0');
    let ampm = hours >= 12 ? 'PM' : 'AM';



    let day = Ctime.getDate();        
    let month = Ctime.getMonth() + 1; 
    let year = Ctime.getFullYear();

    hours = hours % 12 || 12; 

    document.getElementById("CTime").innerText = `${day}/${month}/${year}  ${hours}:${minutes}:${second} ${ampm}`;

}, 1000);

const copy = () =>{
let textToCopy = "8853756158"
navigator.clipboard.writeText(textToCopy)
}