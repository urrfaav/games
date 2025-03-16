// თამაშების მონაცემები
const games = [
    {
        name: "ცეცხლი და წყალი",
        url: "https://www.crazygames.com/game/fireboy-and-watergirl",
        imgSrc: "https://tcf.admeen.org/category/3000/2944/400x400/fire-and-water.jpg",
        description: "თამაშის 1 აღწერა"
    },
    {
        name: "Pover Pamplona",
        url: "https://www.example.com/power-pamplona",
        imgSrc: "https://www1.minijuegosgratis.com/v3/games/thumbnails/8449_1.jpg",
        description: "Pover Pamplona"
    },
    {
        name: "Agar.io",
        url: "https://agar.io",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Agar.io_Logo.png",
        description: "Agar.io"
    },
    {
        name: "ჭადრაკი",
        url: "https://lichess.org/",
        imgSrc: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpZTvydV.png",
        description: "ჭადრაკი"
    },
    {
        name: "Slither.io",
        url: "https://slither.io",
        imgSrc: "https://imgs.crazygames.com/games/slitherio/cover-1587331280441.png?metadata=none&quality=40&width=1200&height=630&fit=crop",
        description: "Slither.io"
    },
    {
        name: "Tetris",
        url: "https://tetris.com/play-tetris",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/46/Tetris_logo.png",
        description: "Tetris"
    }
];

// თამაშების დამატება საიტზე
const gameContainer = document.getElementById('game-container');
games.forEach(game => {
    const gameElement = document.createElement('div');
    gameElement.classList.add('game');
    
    gameElement.innerHTML = `
        <a href="${game.url}" target="_blank">
            <img src="${game.imgSrc}" alt="${game.name} Icon" class="game-icon">
            <button onclick="window.location.href='${game.url}'">${game.name}</button>
        </a>
        <p>${game.description}</p>
    `;
    
    gameContainer.appendChild(gameElement);
});
