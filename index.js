import data from './data.json' assert { type: 'json' };

const container = document.querySelector("#item-list")

data.map(el => {
    const element = /* html */`
    <div class="hero__main">
        <div class="hero__main--profile">
            <div class="hero__main--profile--img">
                <img src="${el.profile_picture}" alt="">
            </div>
            <div class="hero__main--profile--id">
                <p>${el.id}</p>
                <img src="${el.ellipsis_icon}" alt="">
            </div>
        </div>
        <div class="hero__main--image">
            <img src="${el.main_image}" alt="">
        </div>
        <div class="hero__main--icons">
            <div class="hero__main--icons--1">
                <img src="/images/svg-heart-black.png" alt="">
                <img src="/images/svg-comm.png" alt="">
                <img src="/images/svg-share.png" alt="">
            </div>
            <div class="hero__main--icons--2">
                <img src="/images/svg-favorite.png" alt="">
            </div>
        </div>
        <div class="hero__main--comms">
            <p>${el.likes_count}</p>
            <p>${el.random_comment}</p>
        </div>
    </div>`;
    
    container.innerHTML += element
})
