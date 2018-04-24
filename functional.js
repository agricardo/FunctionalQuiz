//map practice

// Doubling values in an array


const array = [6, 7, 8,]

var newArrayMap = array.map(function(arr){
    return arr * 2
})
console.log(newArrayMap)


//filter practice
//filter through movie array for raiting
const movies = [
    {name:"Wonder Woman", rating: "PG-13"},
    {name:"The Shining", rating: "R"},
    {name:"Finding Nemo", rating: "G"},
]

const newMovieArray = movies.filter(function(movie){
    return (movie.rating === "PG-13") ? 1 : 0
})


console.log(newMovieArray)


// reduce practice
// finding min / max

const nums = [100, 4500, 3210000, 5]

const newNums = num.reduce(function(acc, curr){
    console.log(index)
    console.log(acc)
    return (current > acc) ? curr : acc
})

console.log(newNums)