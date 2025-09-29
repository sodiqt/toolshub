function copyAddress() {
    const address = document.getElementById('usdt-address').textContent;
    const copyMessage = document.getElementById('copy-message');
    
    navigator.clipboard.writeText(address).then(() => {
        copyMessage.style.display = 'block';
        
        const copyBtn = document.querySelector('.copy-btn');
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyBtn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        
        setTimeout(() => {
            copyMessage.style.display = 'none';
            copyBtn.innerHTML = originalHtml;
            copyBtn.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy address. Please select and copy manually.');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
