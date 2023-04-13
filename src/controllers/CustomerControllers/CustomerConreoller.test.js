function soma(num1,num2){
    return num1 + num2
}

test('Deve testar rota "/"',()=>{
    expect(soma(2,6)).toBe(8)
})