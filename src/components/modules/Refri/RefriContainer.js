import React, {useState, useEffect} from 'react';
import RefriForm from "./RefriForm";
import * as api from '../../../api/axios-api';
import * as URL from './../../commons/url-consts'
import {Card} from 'primereact/card'

const RefriContainer = () => {

    const initialState = {
        sodas: []
    };

    const [sodas, setSodas] = useState([]);
    const [soda, setSoda] = useState(initialState); /*setSoda to set one soda when getting by Id or editing*/

    useEffect(() => {
        api.getDataPromisse(URL.SODA_URL)
            .then((result) => {
                    setSodas(result.data);
                }
            );
    }, []);

    return (
        <Card>
            <RefriForm refri={sodas} record={soda}/>
        </Card>
    )
};

export default RefriContainer;