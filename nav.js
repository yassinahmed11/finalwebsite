console.log('Navbar element found!');

document.getElementById('navbar').addEventListener('click', function(e){
    if(e.target.nodeName === 'A'){
        let pageName = e.target.getAttribute('href');
        console.log(`Navigating to ${pageName}...`);
    }
});