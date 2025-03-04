const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Sample data - replace with your own or connect to a database later
const sampleData = {
  records: [
    {
      fields: {
        "Title": "Honeywell presenta nueva tecnología que utiliza inteligencia artificial para agilizar y simplificar las pruebas de salud",
        "Date": "2025-03-03",
        "Image": "https://via.placeholder.com/400x320",
        "Original Text": "Honeywell ha anunciado que ha desarrollado una nueva tecnología, Microscopía Holográfica Digital, que utiliza inteligencia artificial (IA) para ayudar a contar y analizar células en el ámbito de las pruebas de salud.\nEsta innovación tiene como objetivo hacer que los procesos de prueba sean más rápidos y precisos.",
        "GrandMa Text": "Imagina que la inteligencia artificial (IA) es como un asistente inteligente en la cocina que te ayuda a contar los ingredientes y asegurarse de que todo esté perfecto. Honeywell ha creado una nueva herramienta llamada Microscopía Holográfica Digital que ayuda a los médicos a contar células en las pruebas de salud, como si estuvieran haciendo una receta complicada. Aquí te cuento cómo funciona. 'La microscopía' es como una lupa mágica que permite ver cosas muy pequeñas que no podemos ver a simple vista. 'La IA' actúa como un ayudante que hace cálculos y análisis rápidos, para que los médicos puedan enfocarse en cuidar a los pacientes en lugar de contar células una por una. 'Agilizar los procesos' significa que las pruebas son más rápidas, como cuando el asistente de cocina te ayuda a preparar una cena en la mitad del tiempo.",
        "Votes": 5,
        "URL": "https://example.com/article1"
      }
    },
    {
      fields: {
        "Title": "Educación de nueva era: Cómo se está utilizando la inteligencia artificial en las aulas del sur de Georgia",
        "Date": "2025-03-03",
        "Image": "https://via.placeholder.com/400x320",
        "Original Text": "Las aulas del sur de Georgia están adoptando la inteligencia artificial (IA) para mejorar la educación de los estudiantes.\nLas herramientas de IA están ayudando a personalizar la enseñanza, permitiendo a los maestros adaptar el aprendizaje a las necesidades individuales de cada alumno.",
        "GrandMa Text": "Imagina que en la escuela los maestros tienen un asistente mágico que les ayuda a entender mejor a cada niño. Este asistente se llama inteligencia artificial (IA) y está aquí para hacer que aprender sea más divertido y fácil. Aquí va la historia - 'La IA' es como un amigo que sabe exactamente lo que necesitas para aprender. Si un niño tiene problemas con matemáticas, la IA le da juegos y ejercicios que le ayudarán a mejorar. 'Los maestros' son como capitanes de un barco, y la IA es su mapa que les muestra el mejor camino para que cada estudiante llegue a su destino educativo. 'El futuro' será como un viaje emocionante en tren, donde todos los niños estarán bien preparados para las aventuras que les esperan gracias a la tecnología.",
        "Votes": 3,
        "URL": "https://example.com/article2"
      }
    },
    {
      fields: {
        "Title": "Por qué las acciones de inteligencia artificial de Taiwan Semiconductor, Arista Networks y Vertiv",
        "Date": "2025-03-03",
        "Image": "https://via.placeholder.com/400x320",
        "Original Text": "Las acciones de inteligencia artificial (IA) y de empresas relacionadas con la IA, como Taiwan Semiconductor Manufacturing (NYSE: TSM) y Arista Networks (NYSE: ANET), han estado en el centro de atención debido a su crecimiento y potencial en el mercado tecnológico.",
        "GrandMa Text": "Imagina que tienes un jardín lleno de flores, y cada flor representa una empresa que está haciendo cosas increíbles con la inteligencia artificial (IA). Algunas de estas flores, como Taiwan Semiconductor y Arista Networks, están creciendo muy rápido porque están usando la IA para hacer que las computadoras sean más inteligentes y rápidas. Aquí está la idea - 'Las acciones' son como las semillas que siembras en tu jardín - si las cuidas bien de ellas, pueden crecer y darte frutos en el futuro. 'La IA' es como el agua y el sol que ayudan a que las plantas crezcan fuertes y saludables. Cuanto más la usen las empresas, más florecen. 'El crecimiento de estas acciones' es como ver a tus flores más brillantes y coloridas cada día, lo que significa que hay un gran interés y potencial en el mundo de la tecnología.",
        "Votes": 7,
        "URL": "https://example.com/article3"
      }
    }
  ]
};

// API endpoint to get news data
app.get('/api/data', (req, res) => {
  res.json(sampleData);
});

// Simple route for testing if the API is running
app.get('/', (req, res) => {
  res.send('AI Digest API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});