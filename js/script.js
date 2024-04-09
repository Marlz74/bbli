const [leftslide, rightslide] = document.querySelectorAll('.slide'),
[bannerTitle, bannerDes] = document.querySelectorAll('.banner_ph'),
    links=document.querySelector('.links'),
    menu_=document.querySelector('#menu'),
    close_=document.querySelector('#close'),
    banners = [{
        img:'journey.png',
        title: 'Dollars Skills Mastery Program',
        description: 'Different text here'
    }, {
        img:'dollars.png',
        title:'Global Journey Mastery Program',
        description:'Learn all you need to know about your traveling dream to your dream country with ease, access loans, and connect with a community of like-minded individuals already there.'
    }, {
        img:'mastery.png',
        title:'Digital Influence Mastery Program',
        description:'Gain the skill-set needed to build your social influence, grow your social media platform, and become an influencer.'
    },{
        img:'journey.png',
        title: 'Dollars Skills Mastery Program',
        description: 'Different text here'
    } ],
    banner_img = document.querySelector('.banner_img');

var bi = 0;

rightslide.onclick = () => {
    let bl = banners.length;
    bi = bi == banners.length - 1 ? 0 : bi + 1;
    banner_img.attributes.src.value = './images/' + banners[bi].img;
    bannerTitle.innerHTML=banners[bi].title;
    bannerDes.innerHTML=banners[bi].description;
}
leftslide.onclick = () => {
    let bl = banners.length;
    bi = bi == 0 ? banners.length - 1 : bi - 1;
    banner_img.attributes.src.value = './images/' + banners[bi].img;
    bannerTitle.innerHTML=banners[bi].title;
    bannerDes.innerHTML=banners[bi].description;
}

menu_.onclick=()=>{
    links.classList.remove('md-hide');
}
close_.onclick=()=>{
    links.classList.add('md-hide');
}
