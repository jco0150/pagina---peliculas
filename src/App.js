import React from 'react';
import Header from './components/Header';
import MovieSection from './components/MovieSection';
import Footer from './components/Footer';
import './App.css';

const movies1 = [
  { image: 'imagenes/1.jpg', title: 'Iron Man 3', description: 'El descarado y brillante Tony Stark, tras ver destruido todo su universo personal, debe encontrar y enfrentarse a un enemigo cuyo poder no conoce límites.' },
  { image: 'imagenes/2.jpg', title: 'Thor: Love and Thunder', description: 'Thor está buscando la paz interior, pero la irrupción de Gorr, el asesino de dioses, le obliga a volver al combate.' },
  { image: 'imagenes/3.jpg', title: 'Thor: Ragnarok', description: 'Thor está preso en el otro extremo del universo. Necesita regresar a tiempo para evitar que la todopoderosa Hela destruya su mundo.' },
  { image: 'imagenes/4.jpg', title: 'Resident Evil: Welcome To Raccoon City', description: 'Los supervivientes intentan descubrir la verdad que oculta Umbrella Corporation. Mientras, luchan contra zombis sedientos de sangre en los páramos de Raccoon City.' },
  { image: 'imagenes/5.jpg', title: 'La vieja guardia', description: 'Un grupo de mercenarios, todos inmortales y con la capacidad de curarse a sí mismos, descubren que alguien sabe su secreto y deben luchar para proteger su libertad.' },
  { image: 'imagenes/6.jpg', title: 'Spectral', description: 'Una fuerza sobrenatural ataca a la ciudad de Nueva York, devastada por la guerra. Un equipo de fuerzas especiales se prepara para detener a la terrible amenaza.' },
  { image: 'imagenes/7.jpg', title: '300: El nacimiento de un imperio', description: 'El general ateniense Temístocles intenta unir a las ciudades-estado griegas para poder derrotar a las poderosas fuerzas invasoras persas, guiadas por el rey Jerjes y por Artemisia, la vengativa comandante de la armada persa.' },
  { image: 'imagenes/8.jpg', title: 'Proyecto Power', description: 'Un exsoldado se une a un policía para encontrar la fuente detrás de una píldora peligrosa que proporciona superpoderes temporales.' },

];

const movies2 = [
  { image: 'imagenes/9.jpg', title: 'Venom: Carnage liberado', description: 'Después de encontrar un cuerpo anfitrión en el periodista de investigación Eddie Brock, el simbionte alienígena debe enfrentarse a un nuevo enemigo, Carnage, el alter ego del asesino en serie Cletus Kasady.' },
  { image: 'imagenes/10.jpg', title: 'Venom', description: 'El periodista Eddie Brock está investigando a Carlton Drake, el célebre fundador de Life Foundation. Brock establece una simbiosis con un ente alienígena que le ofrece superpoderes, pero el ser se apodera de su personalidad y lo vuelve perverso.' },
  { image: 'imagenes/11.jpg', title: 'Spider-Man: sin camino a casa', description: 'Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter le pide ayuda al Doctor Strange para recuperar su vida, pero algo sale mal y provoca una fractura en el multiverso.' },
  { image: 'imagenes/12.jpg', title: 'Avengers: Infinity War', description: '    Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado. Si Thanos logra reunir las seis gemas del infinito: poder, tiempo, alma, realidad, mente y espacio, nadie podrá detenerlo.' },
  { image: 'imagenes/13.jpg', title: 'Avengers: Endgame', description: 'Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.' },
  { image: 'imagenes/14.jpg', title: 'Mad Max: furia en el camino', description: 'Aunque está decidido a vagar solo por el páramo post-apocalíptico, Mad Max se une a Furiosa, una comandante fugitiva, y su banda, quienes están tratando de escapar de un señor de la guerra.' },
  { image: 'imagenes/15.jpg', title: 'Duro de Matar 4.0', description: 'El detective McClane debe detener a un grupo terrorista que pretende colapsar la infraestructura computacional de Estados Unidos.' },
  { image: 'imagenes/16.jpg', title: 'Duro de matar: un buen día para morir', description: 'John McClane, un policía de la ciudad de Nueva York, y su hijo deben dejar de lado sus diferencias para trabajar juntos y evitar que el hampa de Moscú controle unas armas nucleares.' },

];

const movies3 = [
  { image: 'imagenes/17.jpg', title: 'Life: vida inteligente', description: 'Seis astronautas descubren indicios de la existencia de vida inteligente en Marte. Cuando comienzan a investigar, se dan cuenta de que esa forma de vida está mucho más evolucionada y es infinitamente más aterradora de lo que habían supuesto.' },
  { image: 'imagenes/18.jpg', title: 'Morbius', description: 'Al intentar encontrar una cura para una extraña enfermedad en su sangre, un doctor se transforma en un vampiro.' },
  { image: 'imagenes/19.jpg', title: 'WandaVisión', description: 'Los seres superpoderosos Wanda y Vision, que viven sus vidas idealizadas en los suburbios, comienzan a sospechar que no todo es lo parece.' },
  { image: 'imagenes/20.jpg', title: 'The Batman', description: 'Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia. Además, entra en conflicto con un asesino en serie conocido como "el Acertijo".' },
  { image: 'imagenes/21.jpg', title: 'Bohemian Rhapsody', description: 'Freddie Mercury desafía los estereotipos y se convierte en uno de los vocalistas más reconocidos de la música mundial. Después de dejar la banda Queen para seguir una carrera como solista, Mercury se reúne con la banda para dar una de las mejores actuaciones en la historia del rock n roll.' },
  { image: 'imagenes/22.jpg', title: 'Rogue One', description: 'El Imperio va a construir una estación espacial capaz de destruir planetas, conocida como la Estrella de la Muerte. Los rebeldes se embarcan en una misión extraordinaria: robar los planos y sabotear la estación.' },
  { image: 'imagenes/23.jpg', title: 'Black Widow', description: 'Una peligrosa conspiración, relacionada con su pasado, persigue a Natasha Romanoff, también conocida como Viuda Negra. La agente tendrá que lidiar con las consecuencias de haber sido espía, así como con las relaciones rotas, para sobrevivir.' },
  { image: 'imagenes/24.jpg', title: 'Black Adam', description: 'Unos arqueólogos liberan de su tumba a Black Adam, quien llevaba 5000 años preso tras haber recibido los poderes de los dioses. De nuevo entre los humanos, Black Adam se dispone a imponer su justicia, muy diferente a la del mundo en el que despertó.' },

];

const App = () => (
  <>
    <Header />
    <MovieSection title="Películas más vistas" movies={movies1} id="1" />
    <MovieSection title="Películas de Acción" movies={movies2} id="2" />
    <MovieSection title="Películas de Estreno" movies={movies3} id="3" />
    <Footer />
  </>
);

export default App;
