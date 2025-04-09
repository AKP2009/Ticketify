// src/data/movieData.js
import avengersImage from './MovieImages/avengers.png';
import shawshankImage from './MovieImages/shawshank.png';
import DarkknigthImage from './MovieImages/TheDarkKnight.png';
import InceptionImage from './MovieImages/Inception.png';
import TheMatrixImage from './MovieImages/TheMatrix.png';
import ForestGrumpImage from './MovieImages/ForestGrump.png';
import InterstellarImage from './MovieImages/Interstellar.png';
import FightClubImage from './MovieImages/FightClub.png';
import JokerImage from './MovieImages/Joker.png';
import ParasiteImage from './MovieImages/Parasite.png';


export const movies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      genre: "Action/Sci-Fi",
      rating: "4.8",
      image: avengersImage, // Fixed path for local images
      director: "Anthony & Joe Russo",
      duration: "181 min",
      releaseDate: "2019-04-26",
      cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
      description: "The Avengers assemble once more to undo Thanos' actions and restore order to the universe.",
      trailerLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      showTimes: ["10:00 AM", "1:30 PM", "4:45 PM", "8:00 PM"]
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      genre: "Drama",
      rating: "4.9",
      image: shawshankImage, 
      director: "Frank Darabont",
      duration: "142 min",
      releaseDate: "1994-09-23",
      cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      description: "Two imprisoned men bond over years, finding solace and eventual redemption.",
      trailerLink: "https://www.youtube.com/watch?v=6hB3S9bIaco",
      showTimes: ["11:00 AM", "2:30 PM", "5:45 PM", "9:00 PM"]
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action/Thriller",
      rating: "4.9",
      image: DarkknigthImage,
      director: "Christopher Nolan",
      duration: "152 min",
      releaseDate: "2008-07-18",
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      description: "Batman faces the Joker, a criminal mastermind unleashing chaos on Gotham.",
      trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      showTimes: ["10:30 AM", "1:00 PM", "3:45 PM", "7:15 PM", "10:00 PM"]
    },
    {
      id: 4,
      title: "Inception",
      genre: "Sci-Fi/Thriller",
      rating: "4.7",
      image: InceptionImage,
      director: "Christopher Nolan",
      duration: "148 min",
      releaseDate: "2010-07-16",
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
      showTimes: ["9:45 AM", "12:30 PM", "3:15 PM", "6:00 PM", "8:45 PM"]
    },
    {
        id: 5,
        title: "Forrest Gump",
        genre: "Drama/Romance",
        rating: "4.8",
        image: ForestGrumpImage,
        director: "Robert Zemeckis",
        duration: "142 min",
        releaseDate: "1994-07-06",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        trailerLink: "https://www.youtube.com/watch?v=bLvqoHBptjg",
        showTimes: ["10:00 AM", "1:15 PM", "4:30 PM", "7:45 PM"]
    },
    {
      id: 6,
      title: "The Matrix",
      genre: "Sci-Fi/Action",
      rating: "4.7",
      image: TheMatrixImage,
      director: "The Wachowskis",
      duration: "136 min",
      releaseDate: "1999-03-31",
      cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      description: "A computer hacker learns about the reality of his world.",
      trailerLink: "https://www.youtube.com/watch?v=m8e-FF8MsqU",
      showTimes: ["10:15 AM", "1:00 PM", "3:45 PM", "6:30 PM", "9:15 PM"]
    },
    {
      id: 7,
      title: "Interstellar",
      genre: "Sci-Fi/Adventure",
      rating: "4.8",
      image: InterstellarImage,
      director: "Christopher Nolan",
      duration: "169 min",
      releaseDate: "2014-11-07",
      cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth becomes uninhabitable.",
      trailerLink: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
      showTimes: ["10:45 AM", "2:15 PM", "5:45 PM", "9:15 PM"]
    },
    {
      id: 8,
      title: "Fight Club",
      genre: "Drama/Thriller",
      rating: "4.8",
      image: FightClubImage,
      director: "David Fincher",
      duration: "139 min",
      releaseDate: "1999-10-15",
      cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
      description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
      trailerLink: "https://www.youtube.com/watch?v=qtRKdVHc-cE",
      showTimes: ["11:30 AM", "2:45 PM", "6:00 PM", "9:30 PM"]
    },
    {
      id: 9,
      title: "Joker",
      genre: "Crime/Drama",
      rating: "4.6",
      image: JokerImage,
      director: "Todd Phillips",
      duration: "122 min",
      releaseDate: "2019-10-04",
      cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
      description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      trailerLink: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
      showTimes: ["10:15 AM", "1:00 PM", "3:45 PM", "6:30 PM", "9:15 PM"]
    },
    {
      id: 10,
      title: "Parasite",
      genre: "Drama/Thriller",
      rating: "4.9",
      image: ParasiteImage,
      director: "Bong Joon Ho",
      duration: "132 min",
      releaseDate: "2019-11-08",
      cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
      description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      trailerLink: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
      showTimes: ["11:00 AM", "1:45 PM", "4:30 PM", "7:15 PM", "10:00 PM"]
    }
];