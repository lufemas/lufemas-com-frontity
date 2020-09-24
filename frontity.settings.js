const settings = {
  "name": "lufemas.com",
  "state": {
    "frontity": {
      "url": "lufemas.com",
      "title": "LuFeMas",
      "description": "Web and Games Development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Blog",
              "/blog/"
            ],
            [
              "About Us",
              "/author/lufemas/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://public-api.wordpress.com/wp/v2/sites/lufemas.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
