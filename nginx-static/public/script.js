function cambiarColor() {
    const colores = [
        'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)',
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    ];
    
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.background = colorAleatorio;
}