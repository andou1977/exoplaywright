import {expect, test} from "@playwright/test";

test('HTTP Get',async ({request})=>{
    const responseget=await request.get('https://6957bb19f7ea690182d2e402.mockapi.io/api/andouv1/andouv1api/4')
    expect(responseget.status()).toBe(200)
    expect(responseget.body()).toBeTruthy()

})


test('HTTP Post',async ({request})=>{
    const postvalue={
        name:'vinicius junior',
        avatar:'https://avatars.githubusercontent.com/u/30204827'
    }

    const postadd=await request.post('https://6957bb19f7ea690182d2e402.mockapi.io/api/andouv1/andouv1api/', {data:postvalue})

    expect(postadd.status()).toBe(201)

    const verifyvalue=await postadd.json()
    expect(verifyvalue.name).toBe('vinicius junior')
})


test('verifier si value existe', async ({request})=>{
    const verify= await request.get('https://6957bb19f7ea690182d2e402.mockapi.io/api/andouv1/andouv1api/2')
    const verify2=await verify.json()
    expect(verify2.name).toBe('Hope Nolan')
})

test('HTTP PUT',async ({request})=>{
    const putvaluenow={
        name:'emmanuel'
    }

    const potvalue=await request.put('https://6957bb19f7ea690182d2e402.mockapi.io/api/andouv1/andouv1api/4',{data:putvaluenow})
    expect(potvalue.status()).toBe(200)

    const  verify= await potvalue.json()
    expect(verify.name).toBe('emmanuel')
})


test('HTTP DELETE',async ({request})=>{
    const deletep=await request.delete('https://6957bb19f7ea690182d2e402.mockapi.io/api/andouv1/andouv1api/6')
   expect(deletep.status()).toBe(200)
})


