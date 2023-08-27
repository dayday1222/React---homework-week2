
function ItemOrder(item) {
  return (
    <tr key={item.item.id}>
      <td>{item.item.name}</td>
      <td>{item.item.quantity}</td>
      <td>{item.item.subtotal}</td>
    </tr>
  )
}

export default ItemOrder