


export const generateRandomName = (nameList) =>{
   let finalName = nameList[Math.floor( Math.random() * nameList.length )];
   return finalName
}