import React, { useEffect, useState } from "react";
import Style from "./filtrarPor.module.css";
import { AiFillAlert } from "react-icons/ai";
import { TbRoad } from "react-icons/tb";
import { BsFillSignStopFill } from "react-icons/bs";
import { BsFillTreeFill } from "react-icons/bs";
import { GiDoubleStreetLights } from "react-icons/gi";
import { TbRecycleOff } from "react-icons/tb";

function FiltrarPor({ mostrar = false }) {
	return (
		<div>
			<div
				className={Style.filtrar}
				style={mostrar ? { display: "none" } : { display: "block" }}
			>
				<h1>Filtrar Por: </h1>
				<ul>
					<li className={Style.Cseguridad}>
						<AiFillAlert className={`icon ${Style.seguridad}`} />
						Seguridad
					</li>
					<li className={Style.Mvial}>
						<TbRoad className={`icon ${Style.Malla}`} /> Malla Vial{" "}
					</li>
					<li className={Style.Svial}>
						<BsFillSignStopFill className={`icon ${Style.Senalizacion}`} />{" "}
						Señalizacion Vial
					</li>
					<li className={Style.Epublicos}>
						<BsFillTreeFill className={`icon ${Style.Espacios}`} />
						Espacios Publicos{" "}
					</li>
					<li className={Style.Apublicos}>
						{" "}
						<GiDoubleStreetLights className={`icon ${Style.Alumbrado}`} />
						Alumbrado Publico
					</li>
					<li className={Style.Cambiental}>
						<TbRecycleOff className={`icon ${Style.Ambiental}`} />
						Contaminacion Ambiental
					</li>
				</ul>
			</div>
		</div>
	);
}

const TYPES_REQUEST = {
	seguridad: {
		id: 1,
		name: "Seguridad"
	},
	mallaVial: {
		id: 2,
		name: "Malla vial"
	},
	senalizacion: {
		id: 3,
		name: "Señalizacion Vial"
	},
	espacioPublico: {
		id: 4,
		name: "Espacio Publico"
	},
	alumbradoPublico: {
		id: 5,
		name: "Alumbrado Publico"
	},
	contaminacion: {
		id: 6,
		name: "Contaminacion Ambiental"
	}
};

export function FiltrarPorA({ publicaciones, setPublicaciones, ultimas }) {
	const [seguridad, setSeguridad] = useState(false);
	const [malla, setMalla] = useState(false);
	const [senalizacionVial, setSenalizacionVial] = useState(false);
	const [espaciosPublicos, setEspaciosPublicos] = useState(false);
	const [alumbradoPublicos, setAlumbradoPublicos] = useState(false);
	const [contaminacionAmbiental, setContaminacionAmbiental] = useState(false);
	const [lastLength, setLastLength] = useState(0);
	// const [persistirPublicaciones, setPersistirPublicaciones] = useState(null);
	const [typeRequestName, setTypeRequestName] = useState(null);
	const [accion, setAccion] = useState(0);
  const [lastId, setLastId] = useState(0)

	const limpiarFiltros = () => {
		setSeguridad(false);
		setMalla(false);
		setSenalizacionVial(false);
		setEspaciosPublicos(false);
		setAlumbradoPublicos(false);
		setContaminacionAmbiental(false);
		setTypeRequestName(null);
		setAccion(accion + 1);
		setPublicaciones(null)
	};

	const limpiarFiltrosTipo = (exepcion) => {
		if (exepcion === 1) setSeguridad(false);
		if (exepcion === 2) setMalla(false);
		if (exepcion === 3) setSenalizacionVial(false);
		if (exepcion === 4) setEspaciosPublicos(false);
		if (exepcion === 5) setAlumbradoPublicos(false);
		if (exepcion === 6) setContaminacionAmbiental(false);
	};

	const arrayTipos = (exepcion) => {
		const arrayTiposVerificar = [];
		if (exepcion !== 1) arrayTiposVerificar.push(seguridad);
		if (exepcion !== 2) arrayTiposVerificar.push(malla);
		if (exepcion !== 3) arrayTiposVerificar.push(senalizacionVial);
		if (exepcion !== 4) arrayTiposVerificar.push(espaciosPublicos);
		if (exepcion !== 5) arrayTiposVerificar.push(alumbradoPublicos);
		if (exepcion !== 6) arrayTiposVerificar.push(contaminacionAmbiental);
		return arrayTiposVerificar;
	};

	const filtroPor = (id, name) => {
		const teniaOtroFiltro = arrayTipos(lastId).some((item) => item === true);
		// console.log('malla: ', {teniaOtroFiltro: !teniaOtroFiltro, lengthd: lastLength === publicaciones.length})
		if (!teniaOtroFiltro && lastLength === publicaciones.length) return;

		// Aqui se deben limpiar los demás filtros, colocarlos en false para que solo quede el filtro seleccionado
		limpiarFiltrosTipo(lastId);

		const nuevasPublicaciones = publicaciones.filter(
			(publicacion) => publicacion.types_request.id === id
		);
		console.log({ nuevasPublicaciones });
		setLastLength(nuevasPublicaciones.length);
		setPublicaciones(nuevasPublicaciones);
		setTypeRequestName(name);
    setLastId(id)
	};

	const ejecutarAccion = (setEjecutar) => {
		setEjecutar(true);
		setAccion(accion + 1);
	};

	const filtrarPorSeguridad = () => {
		const { id, name } = TYPES_REQUEST.seguridad;
		filtroPor(id, name);
	};

	const filtrarPorMalla = () => {
		const { id, name } = TYPES_REQUEST.mallaVial;
		filtroPor(id, name);
	};

	const filtrarSenalizacionVial = () => {
		const { id, name } = TYPES_REQUEST.senalizacion;
		filtroPor(id, name);
	};

	const filtrarEspaciosPublicos = () => {
		const { id, name } = TYPES_REQUEST.espacioPublico;
		filtroPor(id, name);
	};

	const filtrarAlumbrado = () => {
		const { id, name } = TYPES_REQUEST.alumbradoPublico;
		filtroPor(id, name);
	};

	const filtrarContaminacion = () => {
		const { id, name } = TYPES_REQUEST.contaminacion;
		filtroPor(id, name);
	};

	useEffect(() => {
		if (seguridad) filtrarPorSeguridad();

		if (malla) filtrarPorMalla();

		if (senalizacionVial) filtrarSenalizacionVial();

		if (espaciosPublicos) filtrarEspaciosPublicos();

    if (alumbradoPublicos) filtrarAlumbrado();

    if (contaminacionAmbiental) filtrarContaminacion();

		// if (
		// 	!persistirPublicaciones ||
		// 	persistirPublicaciones.length < publicaciones.length
		// ) {
		// 	setPersistirPublicaciones(publicaciones);
		// }

		const tieneFiltros = arrayTipos(0).some((item) => item === true);
		// console.log({tieneFiltros})
		if (tieneFiltros) return;

		// if (!persistirPublicaciones) return;
		// setPublicaciones(persistirPublicaciones);
	}, [publicaciones, accion]);

	return (
		<div>
			<div className={Style.filtrarA}>
				<h1>Filtrar Por: </h1>
				<ul>
					<li
						className={Style.Cseguridad}
						onClick={() => ejecutarAccion(setSeguridad)}
					>
						<AiFillAlert className={`icon ${Style.seguridad}`} />
						Seguridad
					</li>
					<li className={Style.Mvial} onClick={() => ejecutarAccion(setMalla)}>
						<TbRoad className={`icon ${Style.Malla}`} /> Malla Vial{" "}
					</li>
					<li
						className={Style.Svial}
						onClick={() => ejecutarAccion(setSenalizacionVial)}
					>
						<BsFillSignStopFill className={`icon ${Style.Senalizacion}`} />{" "}
						Señalizacion Vial
					</li>
					<li
						className={Style.Epublicos}
						onClick={() => ejecutarAccion(setEspaciosPublicos)}
					>
						<BsFillTreeFill className={`icon ${Style.Espacios}`} />
						Espacios Publicos{" "}
					</li>
					<li className={Style.Apublicos} onClick={() => ejecutarAccion(setAlumbradoPublicos)}>
						{" "}
						<GiDoubleStreetLights className={`icon ${Style.Alumbrado}`} />
						Alumbrado Publico
					</li>
					<li className={Style.Cambiental} onClick={() => ejecutarAccion(setContaminacionAmbiental)}>
						<TbRecycleOff className={`icon ${Style.Ambiental}`} />
						Contaminacion Ambiental
					</li>
				</ul>
			</div>
			{typeRequestName && (
				<p className={Style.requestName}>
					{typeRequestName}{" "}
					<span
						className={Style.limpiarFiltros}
						onClick={() => limpiarFiltros()}
					>
						x
					</span>
				</p>
			)}
		</div>
	);
}

export default FiltrarPor;
