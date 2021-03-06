/**
 *
 * User: Alexander Khaylo aka naxel
 * Date: 04.02.14 22:48
 */
var Prostopleer = require('./prostopleer');
var SearchTracks = require('./index');

var searchTracks = new SearchTracks(new Prostopleer());

var params = {
    query: 'slot',
    limit: 20
};
searchTracks.search(params, function(error, response) {

    if (!error) {
        if (response) {

            if (response.success) {

                console.log('Found tracks: ' + response.count);

                for (var track in response.tracks) {
                    console.log('First track: ' + response.tracks[track].artist + ' - ' + response.tracks[track].track);

                    var params = {
                        track_id: response.tracks[track].id
                    };
                    searchTracks.getTrackUrl(params, function(error, url) {

                        if (!error && url) {
                            console.log('URL: ' + url);
                        } else {
                            console.error(error);
                        }
                    });
                    break;
                }
            } else {
                console.error(response);
            }
        } else {
            console.error('Empty response.');
        }
    } else {
        console.error(error);
    }
});


var Vkontakte = require('./vkontakte');

var config = {
    token: ''
};

searchTracks = new SearchTracks(new Vkontakte(config));

params = {
    query: 'slot',
    limit: 20
};
searchTracks.search(params, function(error, result) {

    if (!error) {
        if (result) {

            if (result && result.success) {

                console.log('Found tracks: ' + result.count);

                for (var track in result.tracks) {
                    console.log('First track: ' + result.tracks[track].artist + ' - ' + result.tracks[track].track);
                    console.log('URL: ' + result.tracks[track].url);
                    break;
                }
            } else {
                console.error(result);
            }
        } else {
            console.error('Empty response.');
        }
    } else {
        console.error(error);
    }
});
