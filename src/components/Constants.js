// all the constants
function Constants() {

  const url = 'https://capstoneserver-ravi.herokuapp.com/services'

  return {

    // all the URLs
    url,
    getSongs: `${url}/getsongs`,
    updateRating: `${url}/updaterating/{id}/{rating}`,

    // the Content-Type
    header: { 'Content-Type': 'application/json' },

    // HTTP verbs
    method: {
      "POST": "POST",
      "GET": "GET",
      "PUT": "PUT"
    },
    RATING_POINTS: [1, 2, 3, 4, 5],
    PERMISSIBLE_SONG_FILE_TYPE: '.mp3'
  }
}

export default Constants;