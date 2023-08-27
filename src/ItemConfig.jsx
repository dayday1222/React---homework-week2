

function ItemConfig({item, cart, setCart, updateCart}) {

  return(
          <tr key={item.id}>
            <td><button type="button" className="btn btn-sm" onClick={() => {
              const newCart = cart.filter((carItem) => {
                return carItem.id !== item.id
              })
              setCart(newCart)
            }}>x</button></td>
            <td>{item.name}</td>
            <td><small>{item.description}</small></td>
            <td>
              <select className="form-select" value={item.quantity} onChange={(e) => {
                const value =e.target.value
                updateCart(item, value)
              }}>
              {[...Array(10).keys()].map((item) => {
                return (<option value={item+1} key={item} >{item+1}</option>)
              })}
              </select>
            </td>
            <td>{item.price}</td>
            <td>{item.subtotal}</td>
          </tr>
        )
}

export default ItemConfig