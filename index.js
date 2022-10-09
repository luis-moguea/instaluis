const DATA = [

{

    id: "Cat.2004",
    profile_picture: "/images/cat-1.jpg",
    ellipsis_icon: "/images/svg-ellipsis.png",
    location: "Huston, Texas - United States",
    main_image: "/images/cat-1.jpg",
    like_icon: "/images/svg-heart-black.png",
    like_icon_two: "/images/svg-heart-white.png",
    comms_icon: "/images/svg-comm.png",
    sharing_icon: "/images/svg-share.png",
    favorite_icon: "/images/svg-favorite.png",
    likes_count: "14",
        ramdom_comment: [
        "Ohhhhh what a cat <3", 
        "Prettyyyy",
        "Can I get your phone number",
        "Check your DM honey jeje",
    ]
},

{

    id: "Cat.132",
    profile_picture: "/images/cat-2.jpg",
    ellipsis_icon: "/images/svg-ellipsis.png",
    location: "Arlington, Texas - United States",
    main_image: "/images/cat-2.jpg",
    like_icon: "/images/svg-heart-black.png",
    like_icon_two: "/images/svg-heart-white.png",
    comms_icon: "/images/svg-comm.png",
    sharing_icon: "/images/svg-share.png",
    favorite_icon: "/images/svg-favorite.png",
    likes_count: "43",
    ramdom_comment: [
        "Ohhhhh what a cat <3", 
        "Prettyyyy",
        "Can I get your phone number",
        "Check your DM honey jeje",
    ]
},

{

    id: "Cat.44",
    profile_picture: "/images/cat-3.jpg",
    ellipsis_icon: "/images/svg-ellipsis.png",
    location: "Miami, Florida - United States",
    main_image: "/images/cat-3.jpg",
    like_icon: "/images/svg-heart-black.png",
    like_icon_two: "/images/svg-heart-white.png",
    comms_icon: "/images/svg-comm.png",
    sharing_icon: "/images/svg-share.png",
    favorite_icon: "/images/svg-favorite.png",
    likes_count: "369",
    ramdom_comment: [
        "Ohhhhh what a cat <3", 
        "Prettyyyy",
        "Can I get your phone number",
        "Check your DM honey jeje",
    ]
},

{

    id: "Cat.689",
    profile_picture: "/images/cat-4.jpg",
    ellipsis_icon: "/images/svg-ellipsis.png",
    location: "Orlando, Florida - United States",
    main_image: "/images/cat-4.jpg",
    like_icon: "/images/svg-heart-black.png",
    like_icon_two: "/images/svg-heart-white.png",
    comms_icon: "/images/svg-comm.png",
    sharing_icon: "/images/svg-share.png",
    favorite_icon: "/images/svg-favorite.png",
    likes_count: "78",
    ramdom_comment: [
        "Ohhhhh what a cat <3", 
        "Prettyyyy",
        "Can I get your phone number",
        "Check your DM honey jeje",
    ]
}



]


const container = document.querySelector("#item-list")

DATA.map(el => {
    const element = `
    <div class="hero__main">
        <div class= "hero__main--profile">
            <div class= "hero__main--profile--img">
                <img src="${el.profile_picture}" alt="">
            </div>
            <div class= "hero__main--profile--id">
                <p>${el.id}</p>
                <img src="${el.ellipsis_icon}" alt="">
            </div>
        </div>
        <div class= "hero__main--image">
            <img src="${el.main_image}" alt="">
        </div>
        <div class= "hero__main--icons">
            <div class= "hero__main--icons--1">
                <img src="${el.like_icon}" alt="">
                <img src="${el.comms_icon}" alt="">
                <img src="${el.sharing_icon}" alt="">
            </div>
            <div class= "hero__main--icons--2">
                <img src="${el.favorite_icon}" alt="">
            </div>
        </div>
        <div class= "hero__main--comms">
            <p>${el.likes_count}</p>
            <p>${el.ramdom_comment}</p>
        </div>
    </div>`;
    
    container.innerHTML += element
})
