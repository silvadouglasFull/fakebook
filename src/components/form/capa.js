import React, { useContext } from 'react'
import { formContext } from '../../context/formContext'
const Capa = () => {
    const { img, setImg } = useContext(formContext)
    const handleFile = () => {
        const button = document.getElementById("prod_foto")
        button.click()
    }
    const handleImageChange = (event) => {
        setImg({
            preview: '',
            raw: event.target.flies[0]
        })
    }
    return <>
        <div class="mb-3 d-none">
            <label htmlFor="formFile" className="form-label">foto produto</label>
            <input className="form-control" type="file" id="prod_foto" name="prod_foto"
                multiple onChange={handleImageChange} accept="image/png, image/jpeg, image/jpg" />
        </div>
    </>
}
return Capa