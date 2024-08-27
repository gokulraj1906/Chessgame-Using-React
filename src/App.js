
import './App.css';
import { FaChessPawn } from "react-icons/fa";
import { FaRegChessPawn } from "react-icons/fa6";
import { FaChessRook } from "react-icons/fa";
import { FaRegChessRook } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa";
import { FaChessBishop } from "react-icons/fa6";
import { GiChessQueen } from "react-icons/gi";


function App() {
  return (
    <div className="App">
     <table>
      <tr>
        <td id="d11"><FaChessRook  size={60}/></td>
        <td id="d12"><FaChessKnight size={60} /></td>
        <td id="d13"><FaChessBishop size={60} /></td>
        <td id="d14"><FaChessKing size={60}/></td>
        <td id="d15"><GiChessQueen size={60}/></td>
        <td id="d16"><FaChessBishop size={60}/></td>
        <td id="d17"><FaChessKnight size={60} /></td>
        <td id="d18"><FaChessRook size={60}/></td>
      </tr>
      <tr>
        <td id="d21"><FaChessPawn size={60}/></td>
        <td id="d22"><FaChessPawn size={60}/></td>
        <td id="d23"><FaChessPawn size={60}/></td>
        <td id="d24"><FaChessPawn size={60}/></td>
        <td id="d25"><FaChessPawn size={60}/></td>
        <td id="d26"><FaChessPawn size={60}/></td>
        <td id="d27"><FaChessPawn size={60}/></td>
        <td id="d28"><FaChessPawn size={60}/></td>
      </tr>
      <tr>
        <td id="d31"></td>
        <td id="d32"></td>
        <td id="d33"></td>
        <td id="d34"></td>
        <td id="d35"></td>
        <td id="d36"></td>
        <td id="d37"></td>
        <td id="d38"></td>
      </tr>
      <tr>
        <td id="d41"></td>
        <td id="d42"></td>
        <td id="d43"></td>
        <td id="d44"></td>
        <td id="d45"></td>
        <td id="d46"></td>
        <td id="d47"></td>
        <td id="d48"></td>
      </tr>
      <tr>
         <td id="d51"></td>
        <td id="d52"></td>
        <td id="d53"></td>
        <td id="d54"></td>
        <td id="d55"></td>
        <td id="d56"></td>
        <td id="d57"></td>
        <td id="d58"></td>
      </tr>
      <tr>
        <td id="d61"></td>
        <td id="d62"></td>
        <td id="d63"></td>
        <td id="d64"></td>
        <td id="d65"></td>
        <td id="d66"></td>
        <td id="d67"></td>
        <td id="d68"></td>
      </tr>
      <tr>
        <td id="d71"><FaChessPawn size={60} color='white'/></td>
        <td id="d72"><FaChessPawn size={60} color='white'/></td>
        <td id="d73"><FaChessPawn size={60} color='white'/></td>
        <td id="d74"><FaChessPawn size={60} color='white'/></td>
        <td id="d75"><FaChessPawn size={60} color='white'/></td>
        <td id="d76"><FaChessPawn size={60} color='white'/></td>
        <td id="d77"><FaChessPawn size={60} color='white'/></td>
        <td id="d78"><FaChessPawn size={60} color='white'/></td>
      </tr>
      <tr>
        <td id="d81"><FaChessRook  size={60} color='white'/></td>
        <td id="d82"><FaChessKnight size={60} color='white'/></td>
        <td id="d83"><FaChessBishop size={60} color='white' /></td>
        <td id="d84"><FaChessKing size={60} color='white'/></td>
        <td id="d85"><GiChessQueen size={60} color='white'/></td>
        <td id="d86"><FaChessBishop size={60} color='white'/></td>
        <td id="d87"><FaChessKnight size={60}color='white' /></td>
        <td id="d88"><FaChessRook size={60} color='white'/></td>
      </tr>
     
      
      
     </table>
    </div>
  );
}

export default App;
