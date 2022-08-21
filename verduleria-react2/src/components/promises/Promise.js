import React from "react";



function APICall () {
    return new Promise((resolve) => {
        const data = [
            {
                id: 1,
                img: <img className="Item-image" src='/lechuga.jpg' alt='Lechuga'/>,
                name: 'Lechuga',
                description: 'Lechuga fresca y natural',
                price: 30,
                stock: 20,
            },
            {
                id: 2,
                img: <img className="Item-image" src='/tomate.webp' alt='Tomates'/>,
                name: 'Tomates',
                description: 'Tomatitos ricos',
                price: 80,
                stock: 10,
            },
            {
                id: 3,
                name: 'Banana',
                img: <img className="Item-image" src='/banana.jpg' alt='Bananas'/>,
                description: 'Bananas sin arañas',
                price: 58,
                stock: 5,
            },
            {
                id: 4,
                name: 'Naranja',
                img: <img className="Item-image" src='/naranja.jpg' alt='Naranja'/>,
                description: 'No es lo mismo que toronja',
                price: 30,
                stock: 35,
            },
            {
                id: 5,
                img: <img className="Item-image" src='/toronja.webp' alt='Toronja'/>,
                name: 'Toronja',
                description: 'No es lo mismo que naranja',
                price: 45,
                stock: 15,
            },
        ];
        setTimeout(() => resolve(data), 1500)
    })
};

async function main() {
    try {  
    let resAPI = await APICall();
    console.log(`Respuesta: ${resAPI}`);
    }
    catch (error) {
        console.error('Error en la promesa', error)
    }
}

main();

console.log('App finalizada');

export default APICall;