<html>
<head>
<script>
// Google Sign-in (new)
auth2 = gapi.auth2.init({
  client_id: '988869895749-rvr844s1b547g618qi23ul9ta5v7idpn.apps.googleusercontent.com',
  scope: 'profile', 'email'
});

...

auth2.grantOfflineAccess().then(signInCallback);
</script>
</head>
<body>
</body>
</html>