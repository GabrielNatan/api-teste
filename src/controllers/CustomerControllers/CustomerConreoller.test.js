function soma(num1,num2){
    return num1 + num2
}

test('Deve testar rota "/"',()=>{
    expect(soma(3,5)).toBe(8)
})