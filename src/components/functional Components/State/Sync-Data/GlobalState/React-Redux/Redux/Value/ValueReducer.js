

var value = {
  val:0
}

export function ValReducer(data=value, action) {
  switch (action.type) {
    case "increaseval":
      return {
        val: data.val + 1
        
      }
      break;
    case "decreaseval":
      return {
        val: data.val - 1
        
      }
      break;
    default:
      {
        return value
      }
  }
  
}

