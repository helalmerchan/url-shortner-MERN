import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';
import { UrlData } from '../../interface/UrlData';
import DataTable from '../DataTable/DataTable';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {

    const [data, setData] = React.useState<UrlData[]>([]);

    const [reload, setReload] = React.useState<boolean>(false);

    const updateReloadeState = (): void => {
        setReload(true)
    }

    const fetchTableData = async () => {
        const response = await axios.get(`${serverUrl}/shorturl`);
        console.log("Response from server is: ", response);
        setData(response.data);
        setReload(false)
    };

    React.useEffect(() => {
        fetchTableData();
    }, [reload]);

    return (
        <>
            <FormContainer updateReloadeState={updateReloadeState} />
            <DataTable updateReloadeState={updateReloadeState} data={data} />
        </>
    )
};

export default Container;
