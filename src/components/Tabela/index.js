import React, { useMemo } from 'react';

import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_PT_BR } from 'material-react-table/locales/pt-BR';
import { ContainerTabela, TituloTabela } from './styled';

const Tabela = (tableData) => {

    const columns = useMemo(
        () => [
            {
                accessorKey: 'temperatura',
                header: 'Temperatura',
                size: 50
            },
            {
                accessorKey: 'umidade',
                header: 'Umidade',
                size: 50
            },
            {
                accessorKey: 'distancia',
                header: 'Distância',
                size: 50,
                Cell: ({ row }) => {
                    if (row.original.distancia) {
                        return row.original.distancia + ' CM';
                    }
                    return '-';
                }
            },
            {
                accessorKey: 'data_hora',
                header: 'Data e hora',
                size: 180,
                Cell: ({ row }) => {
                    return new Date(row.original.data_hora).toLocaleString();
                }
            },
        ], [],
    );

    return (
        <ContainerTabela>
            <TituloTabela>Tabela</TituloTabela>
            <MaterialReactTable
                enableColumnActions={false}
                enableColumnFilters={false}
                enablePagination={true}
                enableSorting={false}
                enableDensityToggle={false}
                enableFullScreenToggle={false}
                enableHiding={false}
                enableFilters={false}
                initialState={{
                    density: 'compact',
                    pagination: {
                        pageIndex: 0,
                        pageSize: 10
                    }
                }}
                muiTopToolbarProps={{ sx: { display: 'none' } }}
                muiTableHeadCellProps={{
                    sx: {
                        border: '1px solid rgba(81, 81, 81, .5)',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                    },
                }}
                muiTableBodyCellProps={{
                    sx: {
                        border: '1px solid rgba(81, 81, 81, .5)',
                    },
                }}
                columns={columns}
                data={tableData.tableData}
                localization={MRT_Localization_PT_BR}
            />
        </ContainerTabela>
    );
};

export default Tabela;