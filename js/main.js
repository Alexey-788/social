{
    {
        let topIconBtn = document.getElementsByClassName('top__chat-icon-btn')[0];
        topIconBtn.addEventListener('click', () => {
            let userBlock = document.getElementsByClassName('user')[0];
            userBlock.classList.add('user--active');

            let leftSide = document.getElementsByClassName('left-side')[0];
            leftSide.classList.remove('left-side--active');
        });

        let userHideBtn = document.getElementsByClassName('user__hide-btn')[0];
        userHideBtn.addEventListener('click', () => {
            let userBlock = document.getElementsByClassName('user')[0];
            userBlock.classList.remove('user--active');
        });

        let topNavIconBtn = document.getElementsByClassName('top__nav-icon-btn')[0];
        topNavIconBtn.addEventListener('click', () => {
            let leftSide = document.getElementsByClassName('left-side')[0];
            leftSide.classList.toggle('left-side--active');

            let userBlock = document.getElementsByClassName('user')[0];
            userBlock.classList.remove('user--active');
        })
    }
}