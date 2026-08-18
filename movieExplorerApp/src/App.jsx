import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState('')
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  )
  const [showFavorites, setShowFavorites] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const apiData = async () => {
      setLoading(true)

      try {
        const res = await fetch('https://api.tvmaze.com/shows')
        const data = await res.json()
        setMovies(data)
      } catch (error) {
        setError('Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    apiData()
  }, [])

  const moviesPerPage = 10

  const startIndex = (currentPage - 1) * moviesPerPage

  const filterMovies = movies.filter((movie) => {
    return movie.name
      .toLowerCase()
      .replace(/\s/g, "")
      .includes(
        search.toLowerCase().replace(/\s/g, "")
      )
  })

  const favoriteMovie = movies.filter(
    (movie) =>
      favorites.includes(movie.id) &&
      movie.name
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(
          search.toLowerCase().replace(/\s/g, "")
        )
  )

  const movieShow = showFavorites
    ? favoriteMovie
    : filterMovies

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    )
  }, [favorites])

  const currentMovies = movieShow.slice(
    startIndex,
    startIndex + moviesPerPage
  )

  const totalPages = Math.ceil(
    movieShow.length / moviesPerPage
  )

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-8">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">

          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-purple-400">
            🎬 Movie Explorer
          </h1>

          <p className="text-gray-400">
            Search and explore your favorite movies & shows
          </p>

        </div>


        {/* Search + Buttons */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 mb-8 shadow-xl">

          <div className="flex flex-col md:flex-row gap-3">

            {/* Search */}
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setSelectedMovie(null)
                setCurrentPage(1)
              }}
              placeholder="🔍 Search movies..."
              className="
                flex-1
                bg-gray-800
                border border-gray-700
                rounded-xl
                px-4 py-3
                text-white
                placeholder-gray-500
                outline-none
                focus:border-purple-500
                focus:ring-2
                focus:ring-purple-500/20
                transition
              "
            />

            {/* Clear */}
            <button
              onClick={() => {
                setSearch('')
                setCurrentPage(1)
              }}
              className="
                bg-gray-700
                hover:bg-gray-600
                px-5 py-3
                rounded-xl
                font-medium
                transition
              "
            >
              Clear Search
            </button>

            {/* Favorites */}
            <button
              onClick={() => {
                setShowFavorites(!showFavorites)
                setCurrentPage(1)
                setSelectedMovie(null)
              }}
              className="
                bg-purple-600
                hover:bg-purple-700
                px-5 py-3
                rounded-xl
                font-medium
                transition
              "
            >
              {showFavorites
                ? "🎬 All Movies"
                : "❤️ Favorites"}
            </button>

          </div>


          {/* Favorite Count */}
          <div className="mt-4 flex justify-between items-center">

            <h3 className="text-gray-300">
              ❤️ Favorites:
              <span className="text-purple-400 font-bold ml-2">
                {favorites.length}
              </span>
            </h3>

            <p className="text-gray-500 text-sm">
              {movieShow.length} movies found
            </p>

          </div>

        </div>


        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-10">

            <div className="
              w-10 h-10
              border-4
              border-gray-700
              border-t-purple-500
              rounded-full
              animate-spin
            "></div>

            <p className="ml-4 text-gray-400">
              Loading movies...
            </p>

          </div>
        )}


        {/* Error */}
        {error && (
          <div className="
            bg-red-900/30
            border border-red-800
            text-red-400
            rounded-xl
            p-4
            mb-6
            text-center
          ">
            ❌ {error}
          </div>
        )}


        {/* Selected Movie */}
        {selectedMovie && (

          <div className="max-w-4xl mx-auto">

            <div className="
              bg-gray-900
              border border-gray-800
              rounded-2xl
              overflow-hidden
              shadow-2xl
            ">

              <div className="
                flex
                flex-col
                md:flex-row
              ">

                {/* Image */}
                <div className="md:w-1/3">

                  <img
                    src={selectedMovie.image?.original}
                    alt={selectedMovie.name}
                    className="
                      w-full
                      h-full
                      min-h-[400px]
                      object-cover
                    "
                  />

                </div>


                {/* Details */}
                <div className="p-6 md:w-2/3">

                  <h2 className="
                    text-3xl
                    font-bold
                    text-purple-400
                    mb-4
                  ">
                    {selectedMovie.name}
                  </h2>


                  <p className="text-yellow-400 text-lg mb-3">
                    ⭐ {selectedMovie.rating?.average || "N/A"}
                  </p>


                  <div className="flex flex-wrap gap-2 mb-5">

                    {selectedMovie.genres.map((genre) => (

                      <span
                        key={genre}
                        className="
                          bg-purple-900/40
                          text-purple-300
                          border border-purple-800
                          px-3 py-1
                          rounded-full
                          text-sm
                        "
                      >
                        {genre}
                      </span>

                    ))}

                  </div>


                  <p className="
                    text-gray-400
                    leading-7
                    mb-6
                  ">
                    {selectedMovie.summary?.replace(
                      /<[^>]*>/g,
                      ""
                    )}
                  </p>


                  <button
                    onClick={() => setSelectedMovie(null)}
                    className="
                      bg-purple-600
                      hover:bg-purple-700
                      px-6 py-3
                      rounded-xl
                      font-semibold
                      transition
                    "
                  >
                    ← Back to Movies
                  </button>

                </div>

              </div>

            </div>

          </div>

        )}


        {/* Movies */}
        {!selectedMovie && !loading && (

          <>

            {currentMovies.length === 0 ? (

              <div className="
                bg-gray-900
                border border-gray-800
                rounded-2xl
                p-10
                text-center
              ">

                <p className="text-5xl mb-4">
                  😔
                </p>

                <h2 className="text-2xl font-bold mb-2">
                  No Movies Found
                </h2>

                <p className="text-gray-500">
                  Try searching for another movie.
                </p>

              </div>

            ) : (

              <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                xl:grid-cols-5
                gap-6
              ">

                {currentMovies.map((movie) => (

                  <div
                    key={movie.id}
                    onClick={() => {
                      console.log("clicked", movie)
                      setSelectedMovie(movie)
                    }}
                    className="
                      group
                      bg-gray-900
                      border border-gray-800
                      rounded-2xl
                      overflow-hidden
                      cursor-pointer
                      hover:border-purple-600
                      hover:-translate-y-2
                      hover:shadow-2xl
                      hover:shadow-purple-900/20
                      transition
                      duration-300
                    "
                  >

                    {/* Movie Image */}
                    <div className="relative overflow-hidden">

                      <img
                        src={movie.image?.medium}
                        alt={movie.name}
                        className="
                          w-full
                          h-72
                          object-cover
                          group-hover:scale-105
                          transition
                          duration-500
                        "
                      />


                      {/* Rating */}
                      <div className="
                        absolute
                        top-3
                        right-3
                        bg-black/80
                        backdrop-blur-sm
                        px-3 py-1
                        rounded-full
                        text-yellow-400
                        text-sm
                        font-semibold
                      ">
                        ⭐ {movie.rating?.average || "N/A"}
                      </div>

                    </div>


                    {/* Movie Content */}
                    <div className="p-4">

                      <h2 className="
                        text-lg
                        font-bold
                        mb-2
                        truncate
                        group-hover:text-purple-400
                        transition
                      ">
                        {movie.name}
                      </h2>


                      {/* Genres */}
                      <div className="
                        flex
                        flex-wrap
                        gap-1
                        mb-3
                      ">

                        {movie.genres
                          .slice(0, 2)
                          .map((genre) => (

                            <span
                              key={genre}
                              className="
                                text-xs
                                bg-gray-800
                                text-gray-400
                                px-2 py-1
                                rounded-md
                              "
                            >
                              {genre}
                            </span>

                          ))}

                      </div>


                      {/* Summary */}
                      <p className="
                        text-gray-500
                        text-sm
                        leading-5
                        line-clamp-3
                        mb-4
                      ">
                        {movie.summary?.replace(
                          /<[^>]*>/g,
                          ""
                        )}
                      </p>


                      {/* Favorite Button */}
                      <button
                        onClick={(e) => {

                          e.stopPropagation()

                          if (favorites.includes(movie.id)) {

                            setFavorites(
                              favorites.filter(
                                (id) => id !== movie.id
                              )
                            )

                          } else {

                            setFavorites([
                              ...favorites,
                              movie.id
                            ])

                          }

                        }}
                        className={`
                          w-full
                          py-2
                          rounded-lg
                          font-medium
                          transition
                          ${
                            favorites.includes(movie.id)
                              ? "bg-red-900/40 text-red-400 border border-red-800 hover:bg-red-900/60"
                              : "bg-purple-600 text-white hover:bg-purple-700"
                          }
                        `}
                      >
                        {favorites.includes(movie.id)
                          ? "💔 Remove Favorite"
                          : "❤️ Favorite"}
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )}


            {/* Pagination */}
            {movieShow.length > 0 && (

              <div className="
                flex
                justify-center
                items-center
                gap-5
                mt-10
                mb-5
              ">

                <button
                  onClick={() =>
                    setCurrentPage(currentPage - 1)
                  }
                  disabled={currentPage === 1}
                  className="
                    px-5 py-2
                    rounded-lg
                    bg-gray-800
                    hover:bg-gray-700
                    disabled:opacity-30
                    disabled:cursor-not-allowed
                    transition
                  "
                >
                  ← Previous
                </button>


                <div className="
                  bg-gray-900
                  border border-gray-800
                  px-5 py-2
                  rounded-lg
                ">
                  <span className="text-gray-400">
                    Page
                  </span>

                  <span className="
                    text-purple-400
                    font-bold
                    mx-2
                  ">
                    {currentPage}
                  </span>

                  <span className="text-gray-400">
                    of {totalPages}
                  </span>
                </div>


                <button
                  onClick={() =>
                    setCurrentPage(currentPage + 1)
                  }
                  disabled={currentPage === totalPages}
                  className="
                    px-5 py-2
                    rounded-lg
                    bg-gray-800
                    hover:bg-gray-700
                    disabled:opacity-30
                    disabled:cursor-not-allowed
                    transition
                  "
                >
                  Next →
                </button>

              </div>

            )}

          </>

        )}

      </div>

    </div>
  )
}

export default App