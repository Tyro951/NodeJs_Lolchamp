const getHello = (req, res) => {
    res.send ("Hello There!")
  }
  
const getFrenchHello = (req, res) => {
    res.send ("Bonjour!")
  }

  export { getHello, getFrenchHello}