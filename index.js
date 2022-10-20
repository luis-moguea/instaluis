import data from './data.json' assert { type: 'json' };

const container = document.querySelector("#item-list")

data.map(el => {
    const element = /* html */`
    <div class="main__cards">
        <div class="main__cards--profile">
            <div class="main__cards--profile-left">
                <img class="main__cards--profile-img" src="${el.profile_picture}" alt="">
                <p class="main__cards--profile-id">${el.id}</p>
            </div>
            <div class="main__cards--profile-right">
                <img class="main__cards--profile-ellipsis" src="${el.ellipsis_icon}" alt="">
            </div>
        </div>
        <div class="main__image">
            <img class="main__image--post" src="${el.main_image}" alt="">
        </div>
        <div class="main__icons">
            <div class="main__icons--left">
                <img src="/images/svg-heart-black.png" alt="">
                <img class="main__icons-svg" src="/images/svg-comm.png" alt="">
                <img class="main__icons-svg" src="/images/svg-share.png" alt="">
            </div>
            <div class="main__icons--right">
                <img src="/images/svg-favorite.png" alt="">
            </div>
        </div>
        <div class="main__comms">
            <p class="main__comms--like">${el.likes_count}</p>
            <p>${el.random_comment}</p>
        </div>
    </div>`;
    
    container.innerHTML += element
})
