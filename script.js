‎document.getElementById('ip-form').addEventListener('submit', function(event) {
‎    event.preventDefault();
‎
‎    const ipAddress = document.getElementById('ip-address').value;
‎    const apiUrl = `https://ipapi.co/${ipAddress}/json/`;
‎
‎    fetch(apiUrl)
‎        .then(response => response.json())
‎        .then(data => {
‎            document.getElementById('country').textContent = `Country: ${data.country_name}`;
‎            document.getElementById('region').textContent = `Region: ${data.region_name}`;
‎            document.getElementById('city').textContent = `City: ${data.city}`;
‎            document.getElementById('latitude').textContent = `Latitude: ${data.latitude}`;
‎            document.getElementById('longitude').textContent = `Longitude: ${data.longitude}`;
‎        })
‎        .catch(error => {
‎            console.error('Error:', error);
‎            alert('An error occurred. Please try again later.');
‎        });
‎});


