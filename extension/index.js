const texts = document.querySelector(".text")
const fetchData = async ()=>{
    try{
   const response = await fetch('https://icanhazdadjoke.com/slack');
   const {attachments} = await response.json();
   console.log(attachments)
  texts.innerHTML = attachments[0].text
    }
    catch (e){
        console.log("something went wrong " +e)
    }
}
fetchData()
