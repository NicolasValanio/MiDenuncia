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





///ENVIAR ESTADO
const [selectEstado,setSelectEstado]=useState("")
const [selectEstado1,setSelectEstado1]=useState("")

const handleChangeSelectEstado=(event)=>{
  setSelectEstado(event.target.value)
 
  fetch(`https://midenuncia-database-production.up.railway.app/info?estado=${event.target.value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if(data.message){
          
          setSelectEstado1(data.message)
        }else{
          setData(data)
          setSelectEstado1("")
        }
       
       
      });
}



   ///ENVIAR CONSULTA D EROL

   const handleChangeSelectRol = (event) => {
   // setSelect(event.target.value);
    //console.log(event.target.value)
    setSelect(event.target.value)
  
   
      fetch(
        `https://midenuncia-database-production.up.railway.app/info?rol=${event.target.value}`
      )
      .then((response) => response.json())
      .then((data) => {
       
        if(data.message){
          fetch(
            `https://midenuncia-database-production.up.railway.app/info`
          )
          .then((response) => response.json())
          .then((data) => {
          
            setData(data)
            setSelectEstado1("")
          })

        }else{
          setData(data)
          setSelectEstado1("")

        }
       
      });

    
    }
 
  ///termina aqui


  //AQUI SOLICITO LOS ROLES
 useEffect(() => {
    fetch("https://midenuncia-database-production.up.railway.app/inforol")
      .then((response) => response.json())
      .then((data) => {
       
        setRol(data)
        setSelectEstado1("")
      });
      
  }, []);


 

  const handleChange = (event) => {
    setFiltro(event.target.value);
    // console.log(event.target.value)
    

    fetch(
      `https://midenuncia-database-production.up.railway.app/info?filtro=${event.target.value}`
    )
      .then((response) => response.json())
      .then((info) => {
        setSelectEstado1("")
        setData(info);
        //console.log(info)
      });
  };

  useEffect(() => {
    fetch("https://midenuncia-database-production.up.railway.app/info")
      .then((response) => response.json())
      .then((data) => {
        setData(data)
    
      });
      
      
  }, [estado]);


  //CAMBIO DE ROLES
  const [formData, setFormData] = useState({
    userId: '',
    selectOption: ''
  });


  const handleChangeRol = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  
    // Aquí puedes hacer el envío de datos al backend usando formData.userId y formData.selectOption
  };

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
            
            Perfil
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
         
      
           <div className={style.filtros}>

            <div  className={style.filtros__select}>
            <p className={style.p}>Filtrar por Rol :</p>
            <select className={style.filtros__select_info} value={select} onChange={handleChangeSelectRol}>
            <option value="0"   className={style.option} selected> Todos</option>
           
           
          
              {rol ? rol.map((rol)=>{
                
                
                  return <option value={rol.id}  className={style.option} key={rol.id}  selected>{rol.name} </option>

              }): ""}
              
            
             
            </select>
            </div>


            <div className={style.filtros__select}><p className={style.p}>Filtrar por estado :</p>
            <select className={style.filtros__select_info} value={selectEstado} onChange={handleChangeSelectEstado}>
            <option value="" className={style.option}>Estado...</option>
              <option value="1" className={style.option}>activos </option>
              <option value="0" className={style.option}>inactivos</option>
            </select></div>
           </div>
          
      

        
         
        
      </div>
      

      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th className={style.th}>Name</th>
            <th className={style.th}>Nickname</th>
            <th className={style.th}>Barrio</th>
            <th className={style.th}>Correo</th>
            <th className={style.th}>Rol</th>
            <th className={style.th}>Estado </th>
          

            <th colSpan={2}>Funcionalidades</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {
          !selectEstado1  ? <tbody className={style.tbody}>
          {data  ? data?.map((user) => (
            <tr key={user.id} className={style.tr}>
              <td className={style.td}> {user.name}</td>
              <td className={style.td}>{user.nickname}</td>
              <td className={style.td}>
                {user.staff_neighborhood ? user.staff_neighborhood:" "}
              </td>
              <td className={style.td}>{user.email}</td>
              <td className={style.td}>{user.role ? user.role.name:""} </td>
              <td className={`${style.td} ${style.tdborder}`}>{user.deletedAt ?<span>Inactivo</span>:<span>Activo</span>}</td>

             
            <td className={`${style.td} ${style.tdButton}`}>{user.deletedAt ?  <button className={`${style.button} ${style.buttonEliminar1}`}> <AiOutlineUserDelete/>Eliminado</button>:<button className={`${style.button} ${style.buttonEliminar}`} value={user.id} onClick={eliminar}> <AiOutlineUserDelete/>Eliminar</button>}</td>
             <td className={`${style.td} ${style.tdButton}`}>{user.deletedAt ?<button className={`${style.button} ${style.buttonRestablecer}`} value={user.id} onClick={restore}><MdRestore />restaurar</button>:<button className={`${style.button} ${style.buttonRestablecer1}`} ><MdRestore />restaurar</button>}</td>
            
             
            </tr>
          )):""  }
        </tbody>: <tbody><tr>
          <td colSpan={10}><h2 className={style.h2found}>{selectEstado1}</h2></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr></tbody>  
        }
       
      </table>

     
    </div>
  );
}

export default VistaSuperAdmin;
