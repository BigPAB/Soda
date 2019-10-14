import React, {useState} from 'react';
import {FormMultiSelect} from './../../commons/FormInputs'
import { Formik } from "formik";
import {InputText} from "primereact/inputtext";
import {forEach} from "lodash";

const RefriForm = ({refri, record}) => {

    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);

    const  options = [];

    refri.forEach(s => {
        options.push({
            label: s.marca + " " + s.quantidade,
            value: s.id
        })
    });

    const handleTotal = (value) => {

        let selectedDrink = [];
        let totalPrice = 0;

        value.map(drinkId => {
            refri.map(randomDrink => {
                if (drinkId == randomDrink.id && !selectedDrink.includes(randomDrink)) {
                    selectedDrink.push(randomDrink);
                }
                return null;
            });
            return null;
        });

        forEach(selectedDrink, drink => {
            totalPrice += drink.valor;
        });

        setTotal(totalPrice);
    };

    const handlePrice = (e) => {
        let selectedValue = e.target.value;
        refri.filter(soda => {
            if (soda.id == selectedValue[(selectedValue.length - 1)])
                setPrice(soda.valor);
            return null;
        });
        handleTotal(selectedValue)
    };


    return (
        <React.Fragment>
            <Formik
                initialValues={record}
                validationSchema={''}
                onSubmit={''}
            >

                {(props) =>
                    <div >
                        <form onSubmit={props.handleSubmit} autoComplete="off">
                            <FormMultiSelect field={"sodas"} label={"Select Soda"} options={options} change={handlePrice} events={props}/>
                            <label>{'Price: ' + price + (' reais')}</label>
                            <br/>
                            <label>{'Total: ' + total + ' reais'}</label>
                        </form>
                    </div>
                }
            </Formik>
        </React.Fragment>
    )
};

export default RefriForm;