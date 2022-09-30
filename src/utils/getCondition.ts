
export const getCondition = (conditon:string) => {
  if(conditon === 'A'){
    return 'Salvage Title'
  }else if(conditon === 'N'){
    return 'New'
  }else{
    return 'N/A'
  }
}