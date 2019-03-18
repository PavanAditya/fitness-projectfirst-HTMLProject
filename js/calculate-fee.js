function calculateFee(){
    var cardioGraphyFee = document.getElementById('userInput').value;
    var gentleStrechingFee = document.getElementById('userInput1').value;
    var zumbaFee = document.getElementById('userInput2').value;
    var discount = document.querySelector('input[name="pack"]:checked').value
    var sum = cardioGraphyFee/discount;
    var sum1 = gentleStrechingFee/discount;
    var sum2 = zumbaFee/discount;
    // sum += cardioGraphyFee+gentleStrechingFee+zumbaFee;
    document.getElementById('result').innerHTML = sum+sum1+sum2;
    // return(sum2+sum1+sum);
    // sum -= sum/discount;
}
