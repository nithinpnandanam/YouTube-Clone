


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


export function formatViewCount(views) {
   if (views >= 1000000) {
       return (views / 1000000).toFixed(1) + 'M';  
   } else if (views >= 1000) {
       return (views / 1000).toFixed(1) + 'K';  
   } else {
       return views.toString(); 
   }
}

export const getRandomNumber = () => Math.floor(Math.random() * (30 - 10 + 1)) + 10;
