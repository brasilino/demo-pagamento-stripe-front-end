import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'

const initState = {
    items: [
        {
            id:1,
            title:'UNA BLUSH', 
            desc: "A fragrância do Deo Parfum Una Blush traduz flores metalizadas e toda a sofisticação da Casa de Perfumaria do Brasil com o toque único do breu-branco, que traz diferenciação e intensidade. Una é a essência da sofisticação e feminilidade.", 
            price:125.20,
            img:Item1
        },
        {
            id:2,
            title:'ESSENCIAL CLÁSSICO', 
            desc: "Uma fragrância traduzida na combinação da Copaíba, madeira da biodiversidade brasileira, com especiarias frescas, como cardamomo e pimenta, que traz exclusividade da fragrância. Agora, em uma embalagem ainda mais sofisticada com facetas que simbolizam as diferentes formas de poder ser.", 
            price:123.90,
            img: Item2
        },
        {
            id:3,
            title:'ESSENCIAL EXCLUSIVO',
            desc: "Uma fragrância traduzida na combinação da Copaíba, madeira da biodiversidade brasileira, com especiarias frescas, como cardamomo e pimenta, que traz exclusividade da fragrância. Agora, em uma embalagem ainda mais sofisticada com facetas que simbolizam as diferentes formas de poder ser.",
            price:124.90,
            img: Item3
        },
        {
            id:4,
            title:'HUMOR DE SALTO ALTO FEMININO', 
            desc: "Fragrância que traz notas de espumante rosê com um toque de morango silvestre e limão. O Desodorante Colônia Humor de Salto Alto é ideal para usar tanto no dia a dia quanto em ocasiões especiais.", 
            price:62.90,
            img:Item4
        },
        {
            id:5,
            title:'KIT KAIAK CLÁSSICO MASCULINO', 
            desc: "O kit de Kaiak Clássico com 2 desodorantes colônia foi feito para o homem que não foge da aventura. A busca por viver intensamente traz a essência do que é Kaiak. Os desafios são atrativos para homens que não possuem medo de se aventurar. Kaiak vibra pelo frescor dos cítricos e gálbano, pulsa pela energia aquosa do coração desta fragrância e flui através das madeiras transparentes e musc, se inspirando na energia que emana da sua força.", 
            price:159.80,
            img: Item5
        },
        {
            id:6,
            title:'ILÍA', 
            desc: `O Deo Parfum Ilía possui uma delicada fragrância. Floral, é iluminada pelo doce frescor de frutas vermelhas com pomelo rosa. Ideal para quem busca sofisticação.
                Ao mesmo tempo em que seu sorriso suave encanta, seu olhar intenso impressiona. Mesmo quando demonstra sua graciosidade, mantém sua postura firme.
                Ser mulher para você é seguir seus sentidos e nem por isso deixar a razão de lado, é saber se lançar sobre as oportunidades sem se esquecer de ter os pés no chão, é ser firme mesmo em sua doçura.
                Ilía se inspira na força e delicadeza da mulher, e traduz a partir de formas e fragrâncias os contrastes das suas dualidades, capturando a intensidade e o magnetismo da feminilidade num buquê floral branco e o complexo adocicado, contrastados com a delicadeza e sensibilidade das notas frescas frutadas. Seu frasco traz uma fusão infinita de linhas retas e curvas. A forma e volume retratam a solidez de seus valores bem definidos, junto da transparência e leveza de ser mulher. Sua fragrância reflete a dualidade da mulher atual, com a força do Patchoulli e a doçura da Vanilla.`,
            price:99.90,
            img: Item6
        },
        {
            id:6,
            title:'ILÍA', 
            desc: `O Deo Parfum Ilía possui uma delicada fragrância. Floral, é iluminada pelo doce frescor de frutas vermelhas com pomelo rosa. Ideal para quem busca sofisticação.
                Ao mesmo tempo em que seu sorriso suave encanta, seu olhar intenso impressiona. Mesmo quando demonstra sua graciosidade, mantém sua postura firme.
                Ser mulher para você é seguir seus sentidos e nem por isso deixar a razão de lado, é saber se lançar sobre as oportunidades sem se esquecer de ter os pés no chão, é ser firme mesmo em sua doçura.
                Ilía se inspira na força e delicadeza da mulher, e traduz a partir de formas e fragrâncias os contrastes das suas dualidades, capturando a intensidade e o magnetismo da feminilidade num buquê floral branco e o complexo adocicado, contrastados com a delicadeza e sensibilidade das notas frescas frutadas. Seu frasco traz uma fusão infinita de linhas retas e curvas. A forma e volume retratam a solidez de seus valores bem definidos, junto da transparência e leveza de ser mulher. Sua fragrância reflete a dualidade da mulher atual, com a força do Patchoulli e a doçura da Vanilla.`,
            price:99.90,
            img: Item6
        },
        {
            id:6,
            title:'ILÍA', 
            desc: `O Deo Parfum Ilía possui uma delicada fragrância. Floral, é iluminada pelo doce frescor de frutas vermelhas com pomelo rosa. Ideal para quem busca sofisticação.
                Ao mesmo tempo em que seu sorriso suave encanta, seu olhar intenso impressiona. Mesmo quando demonstra sua graciosidade, mantém sua postura firme.
                Ser mulher para você é seguir seus sentidos e nem por isso deixar a razão de lado, é saber se lançar sobre as oportunidades sem se esquecer de ter os pés no chão, é ser firme mesmo em sua doçura.
                Ilía se inspira na força e delicadeza da mulher, e traduz a partir de formas e fragrâncias os contrastes das suas dualidades, capturando a intensidade e o magnetismo da feminilidade num buquê floral branco e o complexo adocicado, contrastados com a delicadeza e sensibilidade das notas frescas frutadas. Seu frasco traz uma fusão infinita de linhas retas e curvas. A forma e volume retratam a solidez de seus valores bem definidos, junto da transparência e leveza de ser mulher. Sua fragrância reflete a dualidade da mulher atual, com a força do Patchoulli e a doçura da Vanilla.`,
            price:99.90,
            img: Item6
        }
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
