document.getElementById('yesBtn').addEventListener('click', function() {
    alert('OK ThankYou For Tapping Yes Diwali Par Aaunga Na Tb De Dena');
});

function handleMouseOverNo() {
    const noBtn = document.getElementById('noBtn');
    const randomX = Math.random() * (window.innerWidth - 100); // 100 is button width
    const randomY = Math.random() * (window.innerHeight - 50); // 50 is button height
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}
