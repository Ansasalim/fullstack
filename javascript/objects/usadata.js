var usaData=[
    {
      "name": "United States of America",
      "topLevelDomain": [
        ".us"
      ],
      "alpha2Code": "US",
      "alpha3Code": "USA",
      "callingCodes": [
        "1"
      ],
      "capital": "Washington, D.C.",
      "altSpellings": [
        "US",
        "USA",
        "United States of America"
      ],
      "subregion": "Northern America",
      "region": "Americas",
      "population": 329484123,
      "latlng": [
        38,
        -97
      ],
      "demonym": "American",
      "area": 9629091,
      "gini": 41.4,
      "timezones": [
        "UTC-12:00",
        "UTC-11:00",
        "UTC-10:00",
        "UTC-09:00",
        "UTC-08:00",
        "UTC-07:00",
        "UTC-06:00",
        "UTC-05:00",
        "UTC-04:00",
        "UTC+10:00",
        "UTC+12:00"
      ],
      "borders": [
        "CAN",
        "MEX"
      ],
      "nativeName": "United States",
      "numericCode": "840",
      "flags": {
        "svg": "https://flagcdn.com/us.svg",
        "png": "https://flagcdn.com/w320/us.png"
      },
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Estados Unidos",
        "pt": "Estados Unidos",
        "nl": "Verenigde Staten",
        "hr": "Sjedinjene Američke Države",
        "fa": "ایالات متحده آمریکا",
        "de": "Vereinigte Staaten von Amerika",
        "es": "Estados Unidos",
        "fr": "États-Unis",
        "ja": "アメリカ合衆国",
        "it": "Stati Uniti D'America",
        "hu": "Amerikai Egyesült Államok"
      },
      "flag": "https://flagcdn.com/us.svg",
      "regionalBlocs": [
        {
          "acronym": "NAFTA",
          "name": "North American Free Trade Agreement",
          "otherNames": [
            "Tratado de Libre Comercio de América del Norte",
            "Accord de Libre-échange Nord-Américain"
          ]
        }
      ],
      "cioc": "USA",
      "independent": true
    }
  ]

//   print country name
var countryName=usaData[0].name
// print capital
var capital=usaData[0].capital
// population
let population=usaData[0].population
// print borders
let borders=[...usaData[0].borders]
// print currency name
let currencyName=usaData[0].currencies[0].name
// print currency symbol
let symbol=usaData[0].currencies[0].symbol
// print languages name
let languageName=usaData[0].languages[0].name
// print flag
let flag=usaData[0].flags

let finalData={countryName,capital,population,borders,currencyName,symbol,languageName,flag}
console.log(finalData);