/* SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,gr) */
const form = document.querySelector('.top-banner form')
const input = document.querySelector('.top-banner input')
const msg = document.querySelector('.top-banner .msg')
const list = document.querySelector('.ajax-section .cities')
const apiKey = 'bcb2904747995a67eeec3d4a72f343da'

form.addEventListener('submit', e => {
  e.preventDefault()
  const inputVal = input.value

  // ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&lang=es&appid=${apiKey}&units=metric`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather, rain } = data
      // const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`
      const li = document.createElement('li')
      const mmRain = typeof rain === 'object' ? `${rain['1h']}mm` : ''
      li.classList.add('city')
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <div>Máx. ${main.temp_max.toFixed(1)}° Min. ${main.temp_min.toFixed(1)}°</div>
        <figure>
          <img class="city-icon" src=${icon} alt=${weather[0].main}>
          <figcaption>${weather[0].description} <span>${mmRain}</span></figcaption>
        </figure>
      `
      li.innerHTML = markup
      list.appendChild(li)
    })
    .catch(() => {
      msg.textContent = 'Ciudad no encontrada 😩'
    })

  msg.textContent = ''
  form.reset()
  input.focus()
})
