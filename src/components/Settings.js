import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
import Navbar from "./Navbar";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function Settings() {
    const [data, setData] = useState();
    const user = localStorage.getItem('user');
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/contact/?user=${ user }`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
    }, [user]);
/* DOWNLOAD DATA */
    function downloadAsJSON () {
        const jsonData = JSON.stringify(data, null, 1);
        const blob = new Blob([jsonData], { type: "application/json" });
        saveAs(blob, "contacts.json");
    }
    function downloadAsPDF() {
        const doc = new jsPDF();
        const columns = [
            {   header: 'Contact group',    dataKey: 'contact_group'    },
            {   header: 'First Name',       dataKey: 'first_name'       },
            {   header: 'Last Name',        dataKey: 'last_name'        },
            {   header: 'Email',            dataKey: 'email'            },
            {   header: 'Work Phone',       dataKey: 'work_phone'       },
            {   header: 'Personal Phone',   dataKey: 'personal_phone'   },
            {   header: 'Address',          dataKey: 'address'          },
            {   header: 'Birthday',         dataKey: 'birthday'         },
        ];
        const rows = data.map((contact) => {
            return {
                contact_group:    contact.contact_group,
                first_name:       contact.first_name,
                last_name:        contact.last_name,
                email:            contact.email,
                work_phone:       contact.work_phone,
                personal_phone:   contact.personal_phone,
                address:          contact.address,
                birthday:         contact.birthday,
            };
        });

        doc.autoTable({
            startY: 50,
            columns,
            body: rows,
            margin: { top: 40 },
        });
        doc.setFontSize(50);
        doc.text('Contact List', 55, 25);

        doc.save('contacts.pdf');
    }
/* DOWNLOAD DATA */
    return (
        <>
            <Navbar/>
            <Link to="/about">
                <button className={ ["btn", "btn-outline-dark"].join(" ") } style={{ position: "absolute", bottom: 20, left: 1835, width: 65 }}>
                    About
                </button>
            </Link>
            <h2 style={{ fontSize: 60, position: "absolute", top: 75, left: 25 }}>
                DOWNLOADS
            </h2>

            <div className='line1' style={{ opacity: 1, animation: "none", position: "absolute", top: 150 }}/>

            <p style={{ fontSize: 30, position: "absolute", top: 160, left: 25 }}>
                Download all contacts to:
            </p>
            <button className={ ["downloads", "btn", "btn-outline-dark"].join(" ") } onClick={ downloadAsJSON } style={{ width: 120, left: 545, top: 170 }}>
                Download JSON
            </button>
            <button className={ ["downloads", "btn", "btn-outline-dark"].join(" ") } onClick={ downloadAsPDF }  style={{ width: 120, left: 405, top: 170 }}>
                Download PDF
            </button>
        </>
    );
}

export default Settings;