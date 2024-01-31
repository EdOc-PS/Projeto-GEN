class CardFood extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const compRoot = document.createElement("div");
        compRoot.setAttribute("class", "card-food");

        const foodImg = document.createElement("div");
        foodImg.setAttribute("class", "div-food-img");
 
        const newsImg = document.createElement("img");
        newsImg.src = this.getAttribute("image") || "./assets/img/inexistente.png"
        newsImg.alt = "food";
        foodImg.appendChild(newsImg);

        const foodInfo = document.createElement("div");
        foodInfo.setAttribute("class", "food-info");       

        const foodName = document.createElement("h3");
        foodName.textContent = this.getAttribute("titulo") || "Food";

        const foodDesc = document.createElement("p");
        foodDesc.textContent = this.getAttribute("paragrafo")
        
        foodInfo.appendChild(foodName);
        foodInfo.appendChild(foodDesc);

        const foodAdd = document.createElement("div");
        foodAdd.setAttribute("class", "food-add");

        const foodAddIcon = document.createElement("i");
        foodAddIcon.setAttribute("class", "fi fi-rr-plus-small") || "Food";   
        
        foodAdd.appendChild(foodAddIcon);
      

        compRoot.appendChild(foodImg);
        compRoot.appendChild(foodInfo);
        compRoot.appendChild(foodAdd);

        return compRoot;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
      
        .card-food{
            width: 85vw;
            min-height: 6.5rem;
            border-radius: 20px;
            background-color: #F7F7F7;
            box-shadow: 0px 0px 20px #9595ACE7;
            display: flex;
            align-items: center;
        }
        
        .card-food .div-food-img img{
            width: 20vw;
            height: 20vw;
            border-radius: 50%;
            margin: .5rem;
        }
        .card-food .food-info{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            height: 100%;
            font-size: 12px;
        }
        
        .card-food .food-add{
            height: 100%;
            display: flex;
            align-items: center;
        }
        .card-food .food-add i{
            margin: 0 .6rem;
            display: flex;
            align-items: center;
            color: #364856;
        }
        @media screen and (min-width: 992px) {
            .card-food{
                width: 50vw;
                min-height: 2.5rem;
                fon
            }
            .card-food .div-food-img img{
                width: 200px;
                height: 200px;
                margin: .8rem
            }
            .card-food .food-info{
                font-size: 16px;
            }
        }
        `
        return style;
    }
}
customElements.define('card-food', CardFood);