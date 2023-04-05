import './App.css';
import Header from './components/Header';

function App() {
  const massiv = [
    {
        "name": "Jallolidin ahmadaliyev",
        "categories": "musica",
        "img": "https://www.youtube.com/embed/MPO3WzRTibs"
    },
    {
        "name": "Meher Zain",
        "categories": "musica",
        "img": "https://www.youtube.com/embed/rXowSxfp-fc"
    },
    {
        "name": "Doston Ergashev",
        "categories": "musica",
        "img": "https://www.youtube.com/embed/zA7IcX816RQ"
    },
    {
        "name": "Talib Tale",
        "categories": "musica",
        "img": "https://www.youtube.com/embed/5vppJrWii4k"
    },
    {
        "name": "Shohrux",
        "categories": "musica",
        "img": "https://www.youtube.com/embed/HMbSsdcu8Qo"
    },
    {
        "name":"Dizayin",
        "categories": "comedy",
        "img":"https://www.youtube.com/embed/Zk1vjWqReyk"
    },
    {
        "name":"Million",
        "categories": "comedy",
        "img":"https://www.youtube.com/embed/sxWszokjdzg"
    },
    {
        "name":"Bravo",
        "categories": "comedy",
        "img":"https://www.youtube.com/embed/sxWszokjdzg"
    },
    {
        "name":"Aristokratlar",
        "categories": "comedy",
        "img":"https://www.youtube.com/embed/2sP75ZDb0RM"
    },
    {
        "name":"Millon",
        "categories": "comedy",
        "img":"https://www.youtube.com/embed/ZXhvi-YiQx8"
    },
    {
        "name":"ronaldo",
        "categories": "sport",
        "img":"https://www.youtube.com/embed/0fcwmBQloas"
    },
    {
        "name":"ronaldo",
        "categories": "sport",
        "img":"https://www.youtube.com/embed/hm45fKy8srI"
    },
    {
        "name":"habib",
        "categories": "sport",
        "img":"https://www.youtube.com/embed/81tXbOYJRJw"
    },
    {
        "name":"hakkey",
        "categories": "sport",
        "img":"https://www.youtube.com/embed/6y9DusAxaEk"
    },
    {
        "name":"nemo",
        "categories": "sport",
        "img":"https://www.youtube.com/embed/WfZhR5A_8vo"
    },
    {
        "name":"Noah",
        "categories": "kino",
        "img":"https://www.youtube.com/embed/Kb3WpSZjnkg"
    },
    {
        "name":"Milyarder",
        "categories": "kino",
        "img":"https://www.youtube.com/embed/f1Er7pJFh0M"
    },
    {
        "name":"tiger",
        "categories": "kino",
        "img":"https://www.youtube.com/embed/DixResD1d34"
    },
    {
        "name":"Abdullajon",
        "categories": "kino",
        "img":"https://www.youtube.com/embed/4JhASWD_NmI"
    },
    {
        "name":"Maktab",
        "categories": "kino",
        "img":"https://www.youtube.com/embed/fBy-ddnwkfk"
    },
]
  return (
    <div className="App">
      <Header arr={massiv}/>
    </div>
  );
}

export default App;
