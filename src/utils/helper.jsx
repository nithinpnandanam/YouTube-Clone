


export const generateRandomName = (nameList) =>{
   let finalName = nameList[Math.floor( Math.random() * nameList.length )];
   return finalName
}

export function generateRandomMessage(length) {
   let result = '';
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   const charactersLength = characters.length;
   let counter = 0;
   while (counter < length) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
     counter += 1;
   }
   return result;
}

export const getRandomNumber = () => Math.floor(Math.random() * (30 - 10 + 1)) + 10;
