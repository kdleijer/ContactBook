import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import Navbar from "./Navbar";
import jsPDF from 'jspdf';
import 'jspdf-autotable';


function Button({ className, onClickHandler, text, style }) {
    const handleClick = () => {
        onClickHandler();
    };
    return (
        <button onClick={handleClick} className={`btn btn-outline-dark ${className}`} style={style}>
            {text}
        </button>
    );
}
function DownloadData (data, type) {
    if (type === 'JSON') {
        DownloadAsJSON(data);
    } else if (type === 'PDF') {
        DownloadAsPDF(data);
    }
}
function DownloadAsJSON (data) {
    const jsonData = JSON.stringify(data, null, 1);
    const blob = new Blob([jsonData], {type: "application/json"});
    saveAs(blob, "contacts.json");
}
function DownloadAsPDF(data) {
    const doc = new jsPDF();
    const columns = [
        {  header: 'Contact group',    dataKey: 'contact_group'   },
        {  header: 'First Name',       dataKey: 'first_name'      },
        {  header: 'Last Name',        dataKey: 'last_name'       },
        {  header: 'Email',            dataKey: 'email'           },
        {  header: 'Work Phone',       dataKey: 'work_phone'      },
        {  header: 'Personal Phone',   dataKey: 'personal_phone'  },
        {  header: 'Address',          dataKey: 'address'         },
        {  header: 'Birthday',         dataKey: 'birthday'        },
    ];
    const rows = data.map((contact) => {
        return {
            contact_group:      contact.contact_group,
            first_name:         contact.first_name,
            last_name:          contact.last_name,
            email:              contact.email,
            work_phone:         contact.work_phone,
            personal_phone:     contact.personal_phone,
            address:            contact.address,
            birthday:           contact.birthday,
        };
    });
    doc.autoTable({startY: 50, columns, body: rows, margin: {top: 40}});
    doc.setFontSize(50).text('Contact List', 55, 25).save('contacts.pdf');
}
function Settings() {
    const user = localStorage.getItem('user');
    const [data, setData] = useState(null);
    function handleClick() {
        window.history.replaceState(null, '', '/about');
        window.location.reload()
    }
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_PATH}/contact/?user=${user}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, [user]);
    return (
        <>
            <Navbar/>
            <Button onClickHandler={handleClick} text="About" className="btn btn-outline-dark about-button" style={{ width: 65 }}/>
            <h2 className="downloads-header">DOWNLOADS</h2>
            <div className='line1'  style={{ top: 150 }}/>
            <p className="download-to-p">Download all contacts to:</p>
            <Button onClickHandler={ () => DownloadData(data, 'JSON') } text="Download JSON" className="downloads" style={{ width: 120, left: 540 }} />
            <Button onClickHandler={ () => DownloadData(data, 'PDF')  } text="Download PDF"  className="downloads" style={{ width: 120, left: 400 }} />
        </>
    );
}

export default Settings;