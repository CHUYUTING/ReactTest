import { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Select } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './App.css'

const factories = [
  { name: 'BR1', employees: ['John', 'Alice', 'Bob', 'Jessie', 'Karen'] },
  { name: 'BR2', employees: ['Jessie', 'Karen', 'John'] },
  { name: 'BR3', employees: ['Miles', 'Eric', 'Henry', 'Bob'] },
  { name: 'BR4', employees: [] },
]

const employeeType = [
  { id: 1, name: 'FullTime', work_begin: '09:00:00', work_end: '17:00:00' },
  { id: 2, name: 'MidTime', work_begin: '12:00:00', work_end: '21:00:00' },
  { id: 3, name: 'HalfTime', work_begin: '20:00:00', work_end: '00:00:00' },
]

const employees = [
  { id: 1, name: 'Alice', type: 2 },
  { id: 2, name: 'Bob', type: 3 },
  { id: 3, name: 'John', type: 2 },
  { id: 4, name: 'Karen', type: 1 },
  { id: 5, name: 'Miles', type: 3 },
  { id: 6, name: 'Henry', type: 1 },
]

const tasks = [
  { id: 1, title: 'task01', duration: 60 ,assign:'Alice' }, 
  { id: 2, title: 'task02', duration: 120 ,assign:'John' },
  { id: 3, title: 'task03', duration: 180 ,assign:'Miles' },
  { id: 4, title: 'task04', duration: 360 ,assign:'Henry' },
  { id: 5, title: 'task05', duration: 30 ,assign:'Bob' },
  { id: 6, title: 'task06', duration: 220 ,assign:'' },
  { id: 7, title: 'task07', duration: 640 ,assign:'Karen' },
  { id: 8, title: 'task08', duration: 250 ,assign:'' },
  { id: 9, title: 'task09', duration: 119 ,assign:'Karen' },
  { id: 10, title: 'task10', duration: 560 ,assign:'Bob' },
  { id: 11, title: 'task11', duration: 340 ,assign:'Miles' },
  { id: 12, title: 'task12', duration: 45 ,assign:'' },
  { id: 13, title: 'task13', duration: 86 ,assign:'Alice' },
  { id: 14, title: 'task14', duration: 480 ,assign:'Henry' },
  { id: 15, title: 'task15', duration: 900 ,assign:'John' },
]

for (let index = 0; index < factories.length; index++) {
  factories[index].employees.sort();
}

for (let j = 0; j < employees.length; j++) {
    switch (employees[j].type) {
        case 1:
        employees[j].work_time = employeeType[0].name;
        employees[j].work_begin = employeeType[0].work_begin;
        employees[j].work_end = employeeType[0].work_end;
        console.log('1');
        break;
        case 2:
        employees[j].work_time = employeeType[1].name;
        employees[j].work_begin = employeeType[1].work_begin;
        employees[j].work_end = employeeType[1].work_end;
        console.log('2');
        break;
        case 3:
        employees[j].work_time = employeeType[2].name;
        employees[j].work_begin = employeeType[2].work_begin;
        employees[j].work_end = employeeType[2].work_end;
        console.log('3');
        break;
    }
    console.log(employees[j]);
}

const columns = [
    { field: 'name', headerName: '姓名', width: 130 },
    { field: 'work_time', headerName: '班別', width: 130 },
    { field: 'work_begin', headerName: '開始時間', width: 130 },
    { field: 'work_end', headerName: '結束時間', width: 130 },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    // },
  ];
const columns2 = [
    { field: 'title', headerName: 'Task', width: 130 },
    { field: 'duration', headerName: 'Duration', width: 130 },
    { field: 'assign', headerName: 'Assign', width: 130 },
  ];

const onRowSelect = (event) => {
    console.log("on row click", event);
    console.log(event.row.name);

    for (let i = 0; i < document.querySelectorAll(".MuiDataGrid-main")[1].querySelectorAll('.MuiDataGrid-row').length; i++) {
        document.querySelectorAll(".MuiDataGrid-main")[1].querySelectorAll('.MuiDataGrid-row')[i].classList.remove("Mui-selected");
        if(document.querySelectorAll(".MuiDataGrid-main")[1].querySelectorAll('.MuiDataGrid-row')[i].getHTML().indexOf(event.row.name) != -1){
            document.querySelectorAll(".MuiDataGrid-main")[1].querySelectorAll('.MuiDataGrid-row')[i].classList.add("Mui-selected");
        }
    }
};

function App() {
  // const [value, setValue] = useState("");
  // const [who, setWho] = useState("");
  // let a=[]
  // function handleChange(e) {
  //   for (let i = 0; i < employeeType.length; i++) {
  //     if(employeeType[i].work_begin<e.target.value && employeeType[i].work_end>e.target.value){
  //       a.push(employeeType[i].name);
  //     }else if(employeeType[i].id == 3 && employeeType[i].work_begin<e.target.value && employeeType[i].work_end<e.target.value){
  //       a.push(employeeType[i].name);
  //     }
  //   }
  //   setValue(e.target.value);
  //   setWho(a.join(','));
  // }
  return <div className="App">
            <p>1.Order employees list (in factories) by alphabetical order</p>
            {factories.map(employees => (  
              <li key={employees.name}>  
                {employees.employees.join(',')}  
              </li>  
            ))} 
            <p>2.Make a function that take as parameters dayTime and return number of employee working</p>
            {/* <input type="time" value={value} onChange={handleChange} /> */}
            <br />
            {/* <div>此時段上班人數: {who}</div> */}
            <table>
              <tbody>
              {employees.map(item => (  
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.work_time}</td>
                  <td>{item.work_begin}</td>
                  <td>{item.work_end}</td>
                </tr>
              ))} 
              </tbody>
            </table>
            

            <p>3.Use Material UI to build a page with a table Employee</p>

            <div style={{ height: 450, width: '650px' }}>
                <DataGrid
                    rows={employees}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[5, 10]}
                    autoHeight
                    onRowClick={onRowSelect}
                    
                />
            </div>

            <p>4.Add pagination to the top table</p>
            <div style={{ height: 450, width: '650px' }}>
                <DataGrid
                    rows={tasks}
                    columns={columns2}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                    }}
                    pageSizeOptions={[10, 15]}
                    autoHeight
                    disableMultipleRowSelection={false}
                    
                />

                
            </div>
           
        </div>
}

export default App
