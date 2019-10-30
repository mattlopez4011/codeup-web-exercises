function wait(ms) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, ms)
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

fetch('https://swapi.co/api/people/4').then(function (res) {
    return res.json();
}).then(function (data) {
    console.log(data);
});


function userLastCommit(userName) {
    fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': `token ${gitHubKey}`}})
        .then(data => data.json())
        // .then(data => console.log(data))
        .then(data => console.log(data[0].created_at));

}

userLastCommit('mattlopez4011');