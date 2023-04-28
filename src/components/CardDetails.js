import { Table } from "react-bootstrap";

const CardDetails = () =>{
  return(
    <>
        <div className="container mt-2">
           <h2 className="text-center">Items Added</h2>
        </div>
        <div className="details">
           <Table>
            <tr>
                <td>
                    <p><strong>Remove :</strong><span><i className="fas fa-trash" style={{color:"red",fontSize:20, cursore:"pointer"}}></i></span></p>
                </td>
            </tr>
           </Table>
        </div>
    </>
  );
};

export default CardDetails;