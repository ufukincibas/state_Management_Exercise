export default function (state , action ) {
    switch (action.type) {
        case "ADD_NAME" : 
        const newList = [...state.nameList , action.payload.name] //eski halini kopyala sonuna action.payload ı ekle payload tanımlanan obje ismi gibi bir sey
        return {...state , nameList : newList }
        //mevcut state leri geri gonder , nameList adlı state e yeni degeri gonder

        case "CLEAN_LIST" : 
        return {...state , nameList : []}
            
            break;
    
        default:
            return state;
    }
}