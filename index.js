import { data } from './data.js';

const container = document.querySelector("#item-list")

data.map(el => {
    let element; 
        if(el.type === "post") {
    element =/* html */`
    <div class="main__cards">
        <div class="main__cards--profile">
            <div class="main__cards--profile-left">
                <img class="main__cards--profile-img" src="${el.profile_picture}" alt="ramdom-image">
                <p class="main__cards--profile-id">${el.id}</p>
            </div>
            <div class="main__cards--profile-right">
                <img class="main__cards--profile-ellipsis" src="${el.ellipsis_icon}" alt="svg-icon">
            </div>
        </div>
        <div class="main__image">
            <img class="main__image--post" src="${el.main_image}" alt="ramdom-image">
        </div>
        <div class="main__icons">
            <div class="main__icons--left">
                <img src="/images/heart.svg" alt="svg-icon">
                <img class="main__icons-svg" src="/images/comm.svg" alt="svg-icon">
                <img class="main__icons-svg" src="/images/share.svg" alt="svg-icon">
            </div>
            <div class="main__icons--right">
                <img src="/images/favorite.svg" alt="svg-icon">
            </div>
        </div>
        <div class="main__comms">
            <p class="main__comms--like">${el.likes_count}</p>
            <p>${el.random_comment}</p>
        </div>
    </div>`;}

        else if (el.type === "add") {
    element = /*html*/`
        <div class="main__add">
            <div class="main__add__image">
                <img class="main__add__image--hk" src="${el.main_image}" alt="heroku-image">
            </div>
            <div class="main__add__icons">
                <div class="main__add__icons--left">
                    <img src="/images/heart.svg" alt="svg-icon">
                    <img class="main__add__icons--lf" src="/images/comm.svg" alt="svg-icon">
                    <img class="main__add__icons--lf" src="/images/share.svg" alt="svg-icon">
                </div>
                <div class="main__add__icons--right">
                    <img src="/images/favorite.svg" alt="svg-icon">
                </div>
            </div>
            <div class="main__add__likes">
                <p class="main__add__likes--count">${el.likes_count}</p>
            </div>
            <div class="main__add__info">
                <div class="main__add--profile">
                    <img class="main__add--profile-img-hk" src="${el.profile_picture}" alt="heroku-image">
                    <div class="main__add--profile-id">${el.id}</div>
                </div>
                <div class="main__add--location">${el.location}</div>
            </div>
            <div class="main__add__comms">
                <p class="main__add__comms--comm">${el.random_comment}</p>
            </div>
        </div>
    `
              
        }
    
    container.innerHTML += element
})
