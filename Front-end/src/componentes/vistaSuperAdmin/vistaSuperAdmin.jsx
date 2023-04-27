import React, { useState, useEffect } from "react";
import style from "./vistaSuperAdmin.module.css";
import { BiSearchAlt } from "react-icons/bi";
//import {filtroUser} from "../baseDeDatos"
import { handle } from "react";
import { GiReturnArrow } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineUserDelete } from 'react-icons/ai';
import {MdRestore} from 'react-icons/md';
import axios from 'axios'


function VistaSuperAdmin() {
  const [data, setData] = useState([]);
  const [rol,setRol]=useState("")

  

  const [filtro, setFiltro] = useState("");
  const [select, setSelect] = useState("");

  const [estado, setEstado] = useState([]);
  function goBack() {
    if (window.history.length <= 1) {
      alert("No hay vistas anteriores disponibles");
    } else {
      window.history.back();
    }
  }

  const eliminar =async (id) => {
   
   await axios.delete(`https://midenuncia-database-production.up.railway.app/deleteuser/${id.target.value}`).then(usr=>{
  
        setEstado(usr)
       
   
        
        
   }).catch(err=>console.log(err))
    
  }

  const restore =async (id) => {
   
    await axios.put(`https://midenuncia-database-production.up.railway.app/restoreuser/${id.target.value}`).then(usr=>{
        setEstado(usr)
    }).catch(err=>console.log(err))
   
       
   }

   const handleChangeSelect = (event) => {
    setSelect(event.target.value);
    // console.log(event.target.value)
   
   

    // fetch(
    //   `https://midenuncia-database-production.up.railway.app/info?filtro=${event.target.value}`
    // )
    //   .then((response) => response.json())
    //   .then((info) => {
    //     setData(info);
    //     //console.log(info)
    //   });
  };



 

  const handleChange = (event) => {
    setFiltro(event.target.value);
    // console.log(event.target.value)

    fetch(
      `https://midenuncia-database-production.up.railway.app/info?filtro=${event.target.value}`
    )
      .then((response) => response.json())
      .then((info) => {
        setData(info);
        //console.log(info)
      });
  };

  useEffect(() => {
    fetch("https://midenuncia-database-production.up.railway.app/info")
      .then((response) => response.json())
      .then((data) => setData(data));
      
  }, [estado]);

  return (
    <div className={style.contenedor1}>
      <div className={style.head}>
        <div className={style.nav}>
          <img
            src="https://res.cloudinary.com/dwrupo75d/image/upload/v1681503206/logo_t6vkfb.png"
            alt="logo"
            className={style.logo}
          />
           <h1>@SuperAdmin</h1>
         
        </div>

        <div className={style.user}>
            
            <p>Perfil</p>
            <BiUserCircle className={style.usuario} />
   
            
          </div>

        
      </div>

      <div className={style.funcionesHead}>

      <GiReturnArrow onClick={goBack} className={style.volver} />
       
       <div className={style.conteInput}>
         <BiSearchAlt className={style.iconBuscar} />
         <input
           className={style.input}
           type="text"
           placeholder="nickname, usuario, barrio   "
           value={filtro}
           onChange={handleChange}
         />
       </div>
         
      
           {/* <div className={style.filtros}>
           <div className={style.filtros__select}><p className={style.p}>Filtrar por estado :</p>
            <select className={style.filtros__select_info}>
              <option value="1" className={style.option}>activos </option>
              <option value="0" className={style.option}>inactivos</option>
            </select></div>
            <div  className={style.filtros__select}>
            <p className={style.p}>Filtrar por Rol :</p>
            <select className={style.filtros__select_info} value={select} onChange={handleChangeSelect}>
              <option value="5"  className={style.option}>Superadmin </option>
              <option value="2" className={style.option}>admin</option>
              <option value="3" className={style.option}>visitante</option>
            </select>
            </div>
           </div>
           */}
      

        
         
        
      </div>
      

      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th className={style.th}>Name</th>
            <th className={style.th}>Nickname</th>
            <th className={style.th}>Direccion</th>
            <th className={style.th}>Correo</th>
            <th className={style.th}>Rol</th>
            <th className={style.th}>Estado </th>
          

            <th colSpan={4}>Funcionalidades</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {data?.map((user) => (
            <tr key={user.id} className={style.tr}>
              <td className={style.td}> {user.name}</td>
              <td className={style.td}>{user.nickname}</td>
              <td className={style.td}>
                {user.address ? user.address : "dato vacio "}
              </td>
              <td className={style.td}>{user.email}</td>
              <td className={style.td}>{user.role.name} </td>
              <td className={`${style.td} ${style.tdborder}`}>{user.deletedAt ?<span>Inactivo</span>:<span>Activo</span>}</td>

              <td className={style.td}><p className={style.p_table}>convertir usuario en:</p><select className={style.filtros__select_tabla}>
              <option  className={style.option_tabla} value={user.role.id} selected>{user.role.name}</option>
              <option value="1" className={style.option_tabla}>Superadmin </option>
              <option value="2" className={style.option_tabla}>admin</option>
              <option value="3" className={style.option_tabla}>visitante</option>
            </select> </td>
            <td className={style.td}>{user.deletedAt ?  <button className={`${style.button} ${style.buttonEliminar1}`}> <AiOutlineUserDelete/>Eliminado</button>:<button className={`${style.button} ${style.buttonEliminar}`} value={user.id} onClick={eliminar}> <AiOutlineUserDelete/>Eliminar</button>}</td>
             <td className={style.td}>{user.deletedAt ?<button className={`${style.button} ${style.buttonRestablecer}`} value={user.id} onClick={restore}><MdRestore />restaurar</button>:<button className={`${style.button} ${style.buttonRestablecer1}`} ><MdRestore />restaurar</button>}</td>
            
             
            </tr>
          ))}
        </tbody>
      </table>

     
    </div>
  );
}

export default VistaSuperAdmin;
