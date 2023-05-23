import React from 'react'


export const TableCartFoot = ({total}) => {
    return (
        <>
            <tr>
                <th scope="row">Total</th>
                <td></td>
                <td></td>
                <td></td>
                <td className="fw-bold">$ {total()}</td>
            </tr>
        </>
    )
}


export const TableCart = ({ item,name, quantity, price, subTotal,clear }) => {


    return (
        <>
            <tr>
                <th scope="row">{item.slice(0,4)}</th>
                <td className="fw-bold text-capitalize">{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>${subTotal}</td>
                <td>
                    <button className="btn btn-danger p-0 d-flex align-items-center" onClick={()=>clear(item)}>
                        <box-icon name='x'></box-icon>
                    </button>
                </td>
            </tr>
        </>
    )
}
