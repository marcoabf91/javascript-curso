const fetchData = async () => {
    const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=grandFather');
    const res = await req.json();
    
    const data = res.Search

    for (const iterator of data) {
        console.log(iterator.Title)
    }
}

fetchData();