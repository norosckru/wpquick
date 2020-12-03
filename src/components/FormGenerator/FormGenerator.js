import React, { useState } from 'react'

export const FormGenerator = ({ lang }) => {

    //en el estado quiero almacenar el numero y el mensaje
    const [form, setForm] = useState({
        number: '',
        message: ''
    })

    //console.log('form.number', form.number)
    //console.log('form.message', form.message)


    //escucho cambios de los input y textarea
    const onInputChange = (e) => {
        //console.log('e.target.value',e.target.name, e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value //dependiendo del nombre dle input, vas actualizar un dato o otro
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let url = (`https://api.whatsapp.com/send?phone=${form.number}&text=${form.message}`)
        //console.log(url)

        //limpiar form
        document.getElementById("myForm").reset();
        window.open(url) //abrir url
    }

    return (
        <div className="col-md-6 offset-md-3 p-4">
            <div className="card card-body">

                <form id="myForm" type="submit">

                    <div className="form-group">
                        <input
                            type="number"
                            name="number"
                            className="form-control"
                            placeholder={lang.form.place1}
                            required
                            value={form.number}
                            onChange={onInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            className="form-control"
                            type="text"
                            placeholder={lang.form.place2}
                            required
                            value={form.message}
                            onChange={onInputChange}
                        />
                    </div>
                    <button className="btn btn-success btn-block" onClick={onSubmit}>{lang.form.button}</button>
                </form>

                <div id="accordion">
                    <div className="card mt-2 mb-2">
                        <div className="card-header alert-success" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>{lang.help.title}</strong>
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                {lang.help.text}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
