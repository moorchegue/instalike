// ==UserScript==
// @name        InstaLike
// @description Instagram auto like
// @homepag     http://github.com/moorchegue
// @include     https://www.instagram.com/
// @version     0.0.1
// ==/UserScript==

like_timeout = 1000;
search_timeout = 5000;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function like_all() {
    var event_object = document.createEvent('Events');
    event_object.initEvent('click', true, false);
    while (true) {
        var hearts = document.getElementsByClassName('coreSpriteLikeHeartOpen');
        if (hearts.length == 0) {
            await sleep(search_timeout);
            continue;
        }
        var like = hearts[0] + ' by ' + hearts[0].parentElement.parentElement
			.parentElement.parentElement.firstChild.lastChild.textContent;
        hearts[0].dispatchEvent(event_object);
        console.log('liked ' + like);
        await sleep(like_timeout);
    }
}

like_all();
