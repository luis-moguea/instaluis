import data from './data.json' assert { type: 'json' };

const container = document.querySelector("#item-list")

data.map(el => {
    let element;
    // Conditional render
    if (el.type === "post") {
        element = /* html */`
            <div class="hero__main">
                <div class="hero__main--profile">
                    <div class="hero__main--profile--img">
                        <img class="hero__main--profile--img-1" src="${el.profile_picture}" alt="">
                        <p class="hero__main--profile--id-1">${el.id}</p>
                    </div>
                    <div class="hero__main--profile--id">
                        <img class="hero__main--profile--ellipsis" src="${el.ellipsis_icon}" alt="">
                    </div>
                </div>
                <div class="hero__main--image">
                    <img src="${el.main_image}" alt="">
                </div>
                <div class="hero__main--icons">
                    <div class="hero__main--icons--1">
                        <img src="/images/svg-heart-black.png" alt="">
                        <img class="hero__main--icons--1-1" src="/images/svg-comm.png" alt="">
                        <img class="hero__main--icons--1-1" src="/images/svg-share.png" alt="">
                    </div>
                    <div class="hero__main--icons--2">
                        <img src="/images/svg-favorite.png" alt="">
                    </div>
                </div>
                <div class="hero__main--comms">
                    <p class="hero__main--comms-lk">${el.likes_count}</p>
                    <p>${el.random_comment}</p>
                </div>
            </div>`;
    } else if (el.type === 'add') {
        element = 'HTML POST HERE'
    }

    // Adding element to container's elements list.
    container.innerHTML += element
})
