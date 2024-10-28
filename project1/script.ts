const arrows: NodeListOf<HTMLDivElement> = document.querySelectorAll(".arrows");
const moviewrapper: NodeListOf<HTMLDivElement> = document.querySelectorAll(".movielistContainerWrapper");

let clickCounter: number = 0;

arrows.forEach((arrow: HTMLDivElement, i: number) => {
    arrow.addEventListener("click", () => {
        clickCounter++;
        const check: number = moviewrapper[i].querySelectorAll(".wrapperItem").length;
        
        if ((clickCounter + 3) - check < 0) {
            moviewrapper[i].style.transform = `translateX(${-425 * clickCounter}px)`;
        } else {
            moviewrapper[i].style.transform = `translateX(0px)`;
            clickCounter = 0;
        }
    });
});

// Theme changer

const ball: HTMLDivElement = document.querySelector(".ball") as HTMLDivElement;
const items: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".topbar, .navList, .leftbar, .leftbarWrapper, .mainContainer, .newreleaseheading, .theme, .ball, .profileHeading"
);

ball.addEventListener("click", () => {
    items.forEach((item: HTMLElement) => {
        item.classList.toggle("active");
    });
});