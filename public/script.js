document.addEventListener("DOMContentLoaded", function() {
    const spinButton = document.getElementById("spinButton");
    const wheel = document.getElementById("wheel");
    const arrow = document.getElementById("arrow");

    // Проверка на существование элементов
    console.debug("Element wheel:", wheel);
    console.debug("Element arrow:", arrow);

    const segments = [
        { class: 'black', multiplier: 2, count: 2 },
        { class: 'white', multiplier: 3, count: 3 },
        { class: 'red', multiplier: 5, count: 5 },
        { class: 'gold', multiplier: 25, count: 1 }
    ];

    function generateSegments() {
        let angle = 0;
        const totalSegments = segments.reduce((acc, segment) => acc + segment.count, 0);
        const segmentAngle = 360 / totalSegments;

        segments.forEach(segment => {
            for (let i = 0; i < segment.count; i++) {
                const div = document.createElement('div');
                div.classList.add('segment', segment.class);
                div.style.transform = `rotate(${angle}deg)`;
                div.dataset.multiplier = segment.multiplier;
                wheel.appendChild(div);
                console.debug(`Добавлен сегмент: ${segment.class} с углом ${angle}`); // Добавлен просмотр консоли для отладки
                angle += segmentAngle;
            }
        });
    }

    function spinWheel() {
        const totalSegments = wheel.children.length;
        const randomIndex = Math.floor(Math.random() * totalSegments);
        const selectedSegment = wheel.children[randomIndex];
        console.debug("Selected segment:", selectedSegment);

        const multiplier = parseInt(selectedSegment.dataset.multiplier);

        wheel.style.transition = "transform 4s ease-out";
        const spins = Math.floor(Math.random() * 5) + 5; // Кількість повних обертів колеса
        const endRotation = (spins * 360) + (360 / totalSegments * randomIndex); // Загальний кут повороту
        wheel.style.transform = `rotate(${endRotation}deg)`;

        setTimeout(() => {
            alert(`Ви виграли множник ${multiplier}х!`);
            wheel.style.transition = "none";
            wheel.style.transform = "rotate(0deg)";
        }, 4000); // Час, через який скидється положення колеса
    }

    generateSegments();
    spinButton.addEventListener("click", spinWheel);
});
