import {useState} from 'react'

function DataHandler({btnText, submit,
    title, description, items, totalAmount, _id}) {
    const initialInputs = {title: title || '', description: description || '',
    totalAmount: totalAmount || ''};
    const [inputs, setInputs] = useState(initialInputs)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs, _id);
        setInputs(initialInputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='title'
                value={inputs.title}
                onChange={handleChange}
                placeholder='Ary title' />
            <input
                type='text'
                name='description'
                value={inputs.description}
                onChange={handleChange}
                placeholder='Ary description' />
            <input
                type='number'
                name='totalAmount'
                value={inputs.totalAmount}
                onChange={handleChange}
                placeholder='Items total amount' />
            <button>{btnText}</button>
        </form>
    )
}

export default DataHandler;