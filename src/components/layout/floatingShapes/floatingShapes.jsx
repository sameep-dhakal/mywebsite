import React, { useEffect } from "react";
import "./floatingShapes.css"; // Import the CSS file for styling

const FloatingShapes = () => {
    useEffect(() => {
        // Create random shapes dynamically
        const container = document.querySelector(".floating-shapes-container");
        const numberOfShapes = 9; // Adjust the number of shapes

        const shapes = [
            { name: "circle", animation: "customFloat" },
            { name: "square", animation: "circularMotion" },
            { name: "triangle", animation: "bouncing" },
            { name: "star", animation: "customFloat" },
            { name: "heart", animation: "bouncing" },
            { name: "diamond", animation: "circularMotion" },
            { name: "hexagon", animation: "bouncing" },
            { name: "octagon", animation: "customFloat" },
            { name: "infinity", animation: "circularMotion" }
        ];

        for (let i = 0; i < numberOfShapes; i++) {
            const shape = document.createElement("div");

            // Randomly select a shape object
            const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

            shape.classList.add("floating-shape", randomShape.name, randomShape.animation);
            shape.style.left = `${Math.random() * 100}%`; // Random horizontal position
            shape.style.top = `${Math.random() * 100}%`; // Random vertical position
            shape.style.animationDuration = `${Math.random() * 6 + 18}s`; // Random animation duration
            container.appendChild(shape);
        }
    }, []);

    return <div className="floating-shapes-container"></div>;
};

export default FloatingShapes;
