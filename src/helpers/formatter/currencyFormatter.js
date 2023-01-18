export const formatCurrencyWithoutComma=(value)=>{
  let value_string=value.toString()
  let residue=value_string.length%3;
  let rupiah=value_string.substr(0, residue)
  let thousand=value_string.substr(residue).match(/\d{3}/g)

  if(thousand){
    let separator=residue? '.':'';
    rupiah+=separator+thousand.join('.');
  }
  return rupiah +' IDR'
}