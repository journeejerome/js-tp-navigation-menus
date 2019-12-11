(function () {
    const navBar = {
        init(){
            document.documentElement.className = "js-enabled";
            this.button = document.querySelectorAll('button');
            for(const element of this.button){
                element.addEventListener("click", ()=>{
                    this.showHideMenu(element);
                });
            }
            this.reset();
        },
        showHideMenu(element){
            this.reset();
            this.id = element.getAttribute("aria-controls");
            document.querySelector(`button[aria-controls="${this.id}"]`).setAttribute("aria-expanded", "true");
            document.querySelector(`ul[id=${this.id}]`).style.display = "block";

        },
        reset(){
            this.button = document.querySelectorAll('button');
            this.menu = document.querySelectorAll('li ul');
            for(const element of this.button){
                element.setAttribute("aria-expanded", "false");
            }
            for(const element of this.menu){
                element.style.display = "none";
            }
        }
    }
    navBar.init();
})();

