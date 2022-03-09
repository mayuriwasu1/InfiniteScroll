
const container = document.querySelector('.grid-scroll');
var page = 1; 
// default img
const loadImage = async () => {
    let res = await fetch(
      `https://api.unsplash.com/photos/?client_id=6myA9-lS4-FN3KtNX64IdnEbLhgsuqKYn9UGQbm09SU&per_page=15&page=${page}`
    );
    let data = await res.json();
    showImage(data);
  };
  loadImage();
// info of default
function showImage(items) {
    items.forEach((item) => {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = item.urls.small;
    //   let title = document.createElement("p");
    //   title.innerText = item.description;
    //   title.style.color = "#ffffff";
    //   title.style.fontSize = "1.4vw";
      div.append(img);
      container.insertAdjacentElement("beforeend", div);
    });
  }
//timeout 
function showData(){
    setTimeout(()=>{
        page++;
        loadImage();
    }, 200)
}
window.addEventListener('scroll', ()=>{
    //default 
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if(scrollTop+clientHeight >= scrollHeight){
        showData()
    }

})
