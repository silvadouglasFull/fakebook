import React from 'react'
import { Form, Image, InputGroup } from 'react-bootstrap'
const PostForm = () => {
    return <InputGroup className="mb-3">
        <Image src='https://scontent.fcpq9-1.fna.fbcdn.net/v/t1.6435-9/207156418_593371488291256_2010393096666164648_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG8kaxMvzKq_hCVtyrFNLRZNGL53c1roIU0YvndzWughRwfijEtK90iCprtgukc_9HV43uXsI0R4BNmb9iZGd8q&_nc_ohc=GMpAW-NqLtQAX_dbVMG&_nc_ht=scontent.fcpq9-1.fna&oh=ab7b381f4a906bf7bbeed7c4a016c484&oe=616B2DBE'
            roundedCircle style={{ maxWidth: 50, maxWeight: 50 }} alt="img_small" className="me-3" />
        <Form.Control style={{ borderRadius: 50, background: 'rgb(240 242 244 / 1)' }} placeholder="No que você está pensando" />
    </InputGroup>
}
export default PostForm