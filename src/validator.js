const validator = {

  isValid: function (card) { // función de validación, se toma card como entrada (card = arrayMaskify.join("")) 

      const arrayCardNumber = card.split("").reverse().map(Number); //convertir nº tarjeta en array, obtener reversa y convertir en number
      let sum = 0 // variable para sumar dígitos
      

      for (let i = 0; i < arrayCardNumber.length; i++) {
          if (i % 2 === 1) {
              let evenNumber = arrayCardNumber[i] * 2;
              if (evenNumber > 9) {
                  evenNumber = 1 + evenNumber % 10;
              }
              sum += evenNumber;
          } else {
              sum += arrayCardNumber[i];
          }
      }
      let result = sum % 10 // variable para obtener el residuo de sum módulo 10
      if (result === 0) {
          return true
      } else {

          return false
      }
  },

  maskify: function (card) {

      let arrayCardNumber = card.split(""),
          maskifySum = ""; // sumar # para reemplazar números

      for (let i = 0; i < arrayCardNumber.length; i++) {
          if (i < arrayCardNumber.length - 4) {
              maskifySum += "#";
          } else {
              maskifySum += arrayCardNumber[i];
          }
      }
      return maskifySum
  }
}



export default validator;
