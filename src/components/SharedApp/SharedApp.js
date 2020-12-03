import React from 'react'

export const SharedApp = ({ lang }) => {

    const onShared = (e) => {
        e.preventDefault();
        let url = (`whatsapp://send?text=Hola, como estas? te comparto esta app que te permite enviar WhatsApp sin necesidad de agendar un número. %0A%0A*Versión Web* https://bit.ly/wpquickweb %0A%0A*App Android* https://bit.ly/wpquickandroid`)
        window.open(url) //abrir url
    }

    return (
        <div className="col-md-6 offset-md-3 p-4">
            <div className="card card-body">
                <form id="myForm" onSubmit={onShared}>
                    <button className="btn btn-outline-danger btn-block" type="submit">{lang.shareButton.text}</button>
                </form>

                <div id="accordion">
                    <div className="card mt-2 h10">
                        <div className="card-header alert-secondary" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    {lang.privaci.title}
                                </button>
                            </h5>
                        </div>

                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                {lang.privaci.text1}
                            </div>
                            <div className="card-body">
                                {lang.privaci.text2}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
