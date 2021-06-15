import React from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../components/controls/Controls";
import {Form} from './FormUser'


const data = {
    "id":12,
    'user_name':'Pacifique Twagirayesu',
    'checkin':'30/10/2020',
    'checkout':'31/10/2020',
    'amount_of_adults':4,
    'number_of_children':2,
    'description':'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo,',
    'budget':20000,
    'condition':'Disponible',


}

const initialFValues = {
    id: 0,
    checkin: '',
    name:'',
    checkout: '',
    amount_of_adults: '',
    number_of_children: '',
    description: 'male',
    budget: '',
    condition: '',

}

export default function UserForm(props) {
    const { recordForEdit } = props


    return (
        <Form onSubmit={''}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label="ID"
                        value={data.id}
                        disabled={true}
                    />

                    <Controls.Input
                        label="PRESUPUESTO"
                        name="budget"
                        value={data.budget}
                        onChange={''}
                    />

                     <Controls.Input
                        label="DESCRIPCION" multiline
                        name="checkout"
                        value={data.description}
                        onChange={''}
                        error={''}
                    />


                </Grid>
                <Grid item xs={6}>

                    <Controls.Input
                        label="Nombre hab"
                        name="checkin"
                        value={data.user_name}
                        onChange={''}
                        error={''}
                        disabled={true}

                    />



                     <Controls.Input
                        label="ESTADO"
                        name="condition"
                        value={data.condition}
                        onChange={''}
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="ACEPTAR OFERTA " />
                        <Controls.Button
                            text="ENVIAR CONTRAOFERTA"
                            color="light"
                            onClick={''} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
