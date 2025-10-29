use("sample_mflix");

// db.movies.aggregate([
// 	{$match: {directors: "Christopher Nolan"}},
// 	{$sort: {year: -1}},
// 	{$limit: 5},
// 	{$project: {_id: 0, year: 1, title: 1}}
// ])

// db.movies.aggregate([
//   { $match: { year: { $gte: 2000, $lte: 2010 } } },
//   { $group: { _id: "$year", totalMovies: { $sum: 1 } } },
//   { $sort: { _id: 1 } }
// ])

// db.movies.aggregate([
//   { $unwind: "$genres" },
//   { $sortByCount: "$genres" },   // groups + counts + sorts, all in one
//   { $limit: 10 }
// ])

// db.comments.aggregate([
//   {
//     $lookup: {
//       from: "movies",          // right-hand collection
//       localField: "movie_id",  // value present in comments
//       foreignField: "_id",     // matching field in movies
//       as: "movie"              // new array field to hold matches
//     }
//   }
//   { $unwind: "$movie" },       // flatten the single match
//   {
//     $project: {                // keep it tidy
//       _id: 0,
//       text: 1,
//       movieTitle: "$movie.title"
//     }
//   },
//   { $limit: 3 }
// ])


