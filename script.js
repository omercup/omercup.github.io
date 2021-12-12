fetch('https://api.lanyard.rest/v1/users/349536885749579777')
	.then((res) => res.json())
	.then((lanyardData) => {
		if (lanyardData && lanyardData.success && lanyardData.data && lanyardData.data.spotify) {
			const spotify = lanyardData.data.spotify;
			document.querySelector('.lanyard').innerHTML = `${spotify.artist} - ${spotify.song}`;
		} else {
            document.querySelector('.lanyard').innerHTML = `I'm not listening to anything right now`;
        }
	});