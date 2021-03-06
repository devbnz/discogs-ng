/**
* DISCOGS
* AngularJS Service for Discogs
*
* Created by Erik Woitschig on 03/07/15.
* http://iambnz.github.io/discogs-ng/
* http://twitter.com/devbnz

*/

(function(){


  var discogs = angular.module('Discogs', []);

  discogs.service("Discogs",
  function( $http, $q) {
    var baseUrl = 'https://api.discogs.com';
    // Return public API.
    return({
      // User Identity
      getUser : getUser,
      getUserSubmissions : getUserSubmissions,
      getUserContributions : getUserContributions,

      // User Wantlist
      getUserWantlist : getUserWantlist,

      // Marketplace
      getMarketitemsByUsername : getMarketitemsByUsername
    });


    function getUser(username) {

      var request = $http({
        method: "get",
        url: baseUrl + "/users/" + username
      });

      return( request.then( handleSuccess, handleError ) );

    }

    function getUserSubmissions(username) {

      var request = $http({
        method: "get",
        url: baseUrl + "/users/" + username + "/contributions"
      });

      return( request.then( handleSuccess, handleError ) );

    }

    function getUserContributions(username) {

      var request = $http({
        method: "get",
        url: baseUrl + "/users/" + username + "/contributions"
      });

      return( request.then( handleSuccess, handleError ) );

    }

    function getUserWantlist(username) {

      var request = $http({
        method: "get",
        url: baseUrl + "/users/" + username + "/wants"
      });

      return( request.then( handleSuccess, handleError ) );

    }

    function getMarketitemsByUsername(username) {

      var request = $http({
        method: "get",
        url: baseUrl + "/users/" + username + "/inventory"
      });

      return( request.then( handleSuccess, handleError ) );

    }

    function handleError( response ) {

      // The API response from the server should be returned in a
      // nomralized format. However, if the request was not handled by the
      // server (or what not handles properly - ex. server error), then we
      // may have to normalize it on our end, as best we can.
      if (
        ! angular.isObject( response.data ) ||
        ! response.data.message
      ) {

        return( $q.reject( "An unknown error occurred." ) );

      }

      // Otherwise, use expected error message.
      return( $q.reject( response.data.message ) );

    }

    function handleSuccess( response ) {

      return( response.data );

    }

  }
);


})();
