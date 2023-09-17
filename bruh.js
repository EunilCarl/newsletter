const main = document.querySelector("main");
const sec = document.querySelector("section");
const btn = document.querySelector(".btn");
const load = document.querySelector(".load");

function check() {
  let inp = document.querySelector("input").value;
  if (inp.includes("@")) {
    main.remove();
    const loader = document.querySelector(".loader");
    loader.style.display = "block";
    load.style.height = "90vh";
   

    setTimeout(() => {
      load.style.height = "0";
      loader.remove();
      sec.style.display = "grid";
      const b = document.querySelector("#bold");
      b.append(inp);
    }, 1000);
  } else {
    document.querySelector("input").style.boxShadow = "0 0 0.5em red";
    document.querySelector("input").style.borderColor = "rgba(255, 0, 0, 0.19)";
    document.querySelector('.secs').style.display = 'inline-block';
    
   

    //remove the class so animation can occur as many times as user triggers event, delay must be longer than the animation duration and any delay.
  }
}

btn.addEventListener("click", check);
